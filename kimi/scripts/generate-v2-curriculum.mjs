import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sourcePath = "/Users/anusha/Desktop/24-week-learning-plan.md";
const outputPath = path.join(projectRoot, "app", "src", "data", "v2Curriculum.ts");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripInlineMarkdown(value) {
  return value
    .replace(/\\([*_`[\]()#+.!-])/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_~`]+/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanDisplayTitle(value) {
  return stripInlineMarkdown(value)
    .replace(/^[🏆🧠📚🔄⚙️📅🏗️]+\s*/u, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseHeadingTree(markdown) {
  const root = {
    level: 0,
    title: "root",
    rawTitle: "root",
    contentLines: [],
    children: [],
  };
  const stack = [root];

  for (const rawLine of markdown.split(/\r?\n/)) {
    const headingMatch = rawLine.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const rawTitle = headingMatch[2].trim();
      const node = {
        level,
        rawTitle,
        title: cleanDisplayTitle(rawTitle),
        contentLines: [],
        children: [],
      };

      while (stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      stack[stack.length - 1].children.push(node);
      stack.push(node);
      continue;
    }

    stack[stack.length - 1].contentLines.push(rawLine);
  }

  return root;
}

function renderInline(markdown) {
  let html = escapeHtml(markdown);
  html = html.replace(/\\([\\`*_{}\[\]()#+\-.!|>])/g, "$1");
  html = html.replace(
    /`([^`]+)`/g,
    (_, code) => `<code>${escapeHtml(code)}</code>`,
  );
  html = html.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_, label, href) =>
      `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`,
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return html;
}

function renderTable(lines) {
  const rows = lines.map((line) =>
    line
      .trim()
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((cell) => renderInline(cell.trim())),
  );

  if (rows.length < 2) {
    return "";
  }

  const header = rows[0];
  const body = rows.slice(2);

  return [
    '<div class="table-wrap">',
    "<table>",
    "<thead><tr>",
    header.map((cell) => `<th>${cell}</th>`).join(""),
    "</tr></thead>",
    "<tbody>",
    body
      .map(
        (row) =>
          `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`,
      )
      .join(""),
    "</tbody>",
    "</table>",
    "</div>",
  ].join("");
}

function renderMarkdownLines(lines) {
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      html.push("<hr>");
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const block = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        block.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      html.push(`<pre><code>${escapeHtml(block.join("\n"))}</code></pre>`);
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote>${renderMarkdownLines(quoteLines)}</blockquote>`);
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.*)$/);
    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (unorderedMatch || orderedMatch) {
      const ordered = Boolean(orderedMatch);
      const tag = ordered ? "ol" : "ul";
      const items = [];

      while (index < lines.length) {
        const current = lines[index].trim();
        const matcher = ordered
          ? current.match(/^\d+\.\s+(.*)$/)
          : current.match(/^[-*]\s+(.*)$/);
        if (!matcher) {
          break;
        }
        items.push(`<li>${renderInline(matcher[1])}</li>`);
        index += 1;
      }

      html.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (
        !current ||
        /^---+$/.test(current) ||
        current.startsWith("```") ||
        current.startsWith("|") ||
        current.startsWith(">") ||
        /^[-*]\s+/.test(current) ||
        /^\d+\.\s+/.test(current)
      ) {
        break;
      }
      paragraph.push(current);
      index += 1;
    }
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
  }

  return html.join("");
}

function renderNodeContent(node, headingLevel = 4) {
  const fragments = [];

  if (node.contentLines.some((line) => line.trim())) {
    fragments.push(renderMarkdownLines(node.contentLines));
  }

  for (const child of node.children) {
    const tag = `h${Math.min(6, headingLevel)}`;
    fragments.push(
      `<section class="source-section section-level-${Math.min(6, headingLevel)}">` +
        `<${tag}>${escapeHtml(child.title)}</${tag}>` +
        renderNodeContent(child, headingLevel + 1) +
        "</section>",
    );
  }

  return fragments.join("");
}

function nodeToPlainText(node) {
  return stripInlineMarkdown(
    [
      node.title,
      ...node.contentLines,
      ...node.children.map((child) => nodeToPlainText(child)),
    ].join(" "),
  );
}

function phaseIdFromTitle(title) {
  const match = title.match(/PHASE\s+(\d+)/i);
  return match ? `phase-${match[1]}` : slugify(title);
}

function parseUnitMetadata(title) {
  const match = title.match(/^Unit\s+([0-9]+[a-z]?)\s*[—-]\s*(.+?)(?:\s+(⭐+))?$/u);
  if (!match) {
    return null;
  }

  return {
    unitCode: match[1],
    unitTitle: match[2].trim(),
    difficulty: match[3] || "",
  };
}

function getItemKind(title) {
  if (/^Unit\s+/i.test(title)) {
    return "unit";
  }
  if (/CAPSTONE PROJECT/i.test(title)) {
    return "capstone";
  }
  if (/CHECKLIST/i.test(title)) {
    return "checklist";
  }
  return "section";
}

function createSection(node, prefix) {
  return {
    id: slugify(`${prefix}-${node.title}`),
    title: node.title,
    html: renderNodeContent(node, 4),
    plainText: nodeToPlainText(node),
  };
}

function createItem(node, phase) {
  const kind = getItemKind(node.title);
  const unitMeta = parseUnitMetadata(node.title);
  const shortTitle =
    unitMeta?.unitTitle ||
    node.title.replace(/\s+⭐+$/u, "").trim();

  return {
    id: slugify(`${phase.id}-${node.title}`),
    kind,
    label:
      kind === "unit"
        ? `Unit ${unitMeta.unitCode}`
        : kind === "capstone"
          ? "Phase Capstone"
          : kind === "checklist"
            ? "Checklist"
            : "Section",
    unitCode: unitMeta?.unitCode || "",
    title: shortTitle,
    fullTitle: node.title,
    difficulty: unitMeta?.difficulty || "",
    phaseId: phase.id,
    phaseTitle: phase.title,
    introHtml: renderMarkdownLines(node.contentLines),
    sectionTitles: node.children.map((child) => child.title),
    sections: node.children.map((child) =>
      createSection(child, `${phase.id}-${node.title}`),
    ),
    searchText: nodeToPlainText(node),
  };
}

const markdown = fs.readFileSync(sourcePath, "utf8");
const tree = parseHeadingTree(markdown);

const introNode = tree.children.find((node) =>
  /Unit-Based Edition/i.test(node.title),
);

if (!introNode) {
  throw new Error("Could not find the V2 curriculum intro node.");
}

const phaseNodes = tree.children.filter((node) => /^PHASE\s+\d+/i.test(node.title));
const appendixNode = tree.children.find((node) => /^APPENDIX$/i.test(node.title));

const phases = [];
const items = [];

for (const phaseNode of phaseNodes) {
  const phase = {
    id: phaseIdFromTitle(phaseNode.title),
    title: phaseNode.title,
    introHtml: renderMarkdownLines(phaseNode.contentLines),
    itemIds: [],
  };

  for (const child of phaseNode.children) {
    const item = createItem(child, phase);
    items.push(item);
    phase.itemIds.push(item.id);
  }

  phases.push(phase);
}

const overviewSections = introNode.children.map((node) =>
  createSection(node, "overview"),
);

const appendixSections = appendixNode
  ? appendixNode.children.map((node) => createSection(node, "appendix"))
  : [];

const data = {
  generatedAt: new Date().toISOString(),
  meta: {
    title: introNode.title,
    heroHtml: renderMarkdownLines(introNode.contentLines),
    stats: [
      { label: "Phases", value: String(phases.length) },
      {
        label: "Units",
        value: String(items.filter((item) => item.kind === "unit").length),
      },
      {
        label: "Phase Extras",
        value: String(items.filter((item) => item.kind !== "unit").length),
      },
      { label: "Appendix Sections", value: String(appendixSections.length) },
    ],
  },
  overviewSections,
  appendixSections,
  phases,
  items,
};

const output = `export interface V2Section {
  id: string;
  title: string;
  html: string;
  plainText: string;
}

export interface V2Item {
  id: string;
  kind: "unit" | "capstone" | "checklist" | "section";
  label: string;
  unitCode: string;
  title: string;
  fullTitle: string;
  difficulty: string;
  phaseId: string;
  phaseTitle: string;
  introHtml: string;
  sectionTitles: string[];
  sections: V2Section[];
  searchText: string;
}

export interface V2Phase {
  id: string;
  title: string;
  introHtml: string;
  itemIds: string[];
}

export interface V2CurriculumData {
  generatedAt: string;
  meta: {
    title: string;
    heroHtml: string;
    stats: { label: string; value: string }[];
  };
  overviewSections: V2Section[];
  appendixSections: V2Section[];
  phases: V2Phase[];
  items: V2Item[];
}

export const v2Curriculum: V2CurriculumData = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(outputPath, output);

console.log(`Wrote ${path.relative(projectRoot, outputPath)}`);
