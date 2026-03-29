import { useState, type ElementType, type ReactNode } from 'react';
import { phases, capstoneProjects, books, type Week } from './data/learningPlan';
import { weekSectionSupplements, type SupplementalContentBlock, type SupplementalResource } from './data/weekSectionSupplements';
import { v2Curriculum, type V2Item, type V2Phase, type V2Section } from './data/v2Curriculum';
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Code,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  Layout,
  Menu,
  Rocket,
  Shield,
  Target,
  Terminal,
  Activity,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';

type AppView = 'v1-overview' | 'v1-week' | 'v2-overview' | 'v2-outside-phases' | 'v2-item';

const phaseIcons: Record<number, ElementType> = {
  1: Layout,
  2: Cpu,
  3: Terminal,
  4: Database,
  5: Activity,
  6: Shield,
  7: Award,
};

const difficultyColors: Record<number, string> = {
  1: 'bg-green-100 text-green-800 border-green-300',
  2: 'bg-green-100 text-green-800 border-green-300',
  3: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  4: 'bg-orange-100 text-orange-800 border-orange-300',
  5: 'bg-red-100 text-red-800 border-red-300',
};

const v2ItemMap = new Map(v2Curriculum.items.map((item) => [item.id, item]));
const firstV2ItemId = v2Curriculum.items[0]?.id ?? '';

function normalizeExpandedHtml(html: string) {
  return html
    .replaceAll('&amp;quot;', '&quot;')
    .replaceAll('&amp;#39;', '&#39;')
    .replaceAll('&amp;lt;', '&lt;')
    .replaceAll('&amp;gt;', '&gt;');
}

function cleanSupplementText(value: string) {
  return value
    .replace(/\s+([,.:;!?])/g, '$1')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\[\s+/g, '[')
    .replace(/\s+\]/g, ']')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function stripHtmlToText(value: string) {
  return cleanSupplementText(
    normalizeExpandedHtml(value).replace(/<[^>]+>/g, ' '),
  );
}

function mergeUniqueStrings(primary: string[], secondary: string[]) {
  const seen = new Set<string>();
  const merged: string[] = [];

  for (const item of [...primary, ...secondary]) {
    const cleaned = cleanSupplementText(item);
    const key = cleaned.toLowerCase();

    if (!cleaned || seen.has(key)) {
      continue;
    }

    seen.add(key);
    merged.push(cleaned);
  }

  return merged;
}

function mergeUniqueResources(primary: SupplementalResource[], secondary: SupplementalResource[]) {
  const seen = new Set<string>();
  const merged: SupplementalResource[] = [];

  for (const resource of [...primary, ...secondary]) {
    const normalized = {
      ...resource,
      title: cleanSupplementText(resource.title),
      note: resource.note ? cleanSupplementText(resource.note) : undefined,
    };
    const key = `${normalized.url ?? ''}|${normalized.title.toLowerCase()}`;

    if (!normalized.title || seen.has(key)) {
      continue;
    }

    seen.add(key);
    merged.push(normalized);
  }

  return merged;
}

function getPhaseNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  }

  const match = String(value).match(/(\d+)/);
  return match ? Number(match[1]) : 1;
}

function getContentBlockIcon(title: SupplementalContentBlock['title']) {
  if (title.startsWith('Python')) {
    return Code;
  }
  if (title.startsWith('Go')) {
    return Terminal;
  }
  if (title.includes('LeetCode')) {
    return Target;
  }
  if (title.includes('System Design')) {
    return Layers;
  }
  if (title.includes('Review')) {
    return CheckCircle;
  }
  if (title.includes('Architecture') || title.includes('Components') || title.includes('Capstone')) {
    return Award;
  }
  return BookOpen;
}

function getV2ItemIcon(item: V2Item) {
  if (item.kind === 'unit') {
    return Code;
  }
  if (item.kind === 'capstone') {
    return Award;
  }
  if (item.kind === 'checklist') {
    return CheckCircle;
  }
  return FileText;
}

function getV2ItemButtonLabel(item: V2Item) {
  if (item.kind === 'unit') {
    return item.label;
  }
  if (item.kind === 'capstone') {
    return 'Capstone';
  }
  if (item.kind === 'checklist') {
    return 'Checklist';
  }
  return 'Phase Note';
}

function getV2ItemBadgeVariant(item: V2Item) {
  if (item.kind === 'capstone') {
    return 'bg-amber-100 text-amber-800 border-amber-300';
  }
  if (item.kind === 'checklist') {
    return 'bg-green-100 text-green-800 border-green-300';
  }
  if (item.kind === 'section') {
    return 'bg-slate-100 text-slate-700 border-slate-300';
  }
  return 'bg-blue-100 text-blue-800 border-blue-300';
}

function RichHtml({ html, className = '' }: { html: string; className?: string }) {
  return (
    <div
      className={`expanded-rich-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: normalizeExpandedHtml(html) }}
    />
  );
}

function SidebarShell({
  title,
  subtitle,
  isOpen,
  onClose,
  children,
}: {
  title: string;
  subtitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-72 border-r bg-card
          transform transition-transform duration-200 ease-in-out
          lg:static
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex h-full flex-col">
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h1 className="font-bold text-lg">{title}</h1>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2">{children}</div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}

function V1Sidebar({
  selectedWeek,
  onSelectWeek,
  isOpen,
  onClose,
}: {
  selectedWeek: number;
  onSelectWeek: (weekId: number) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <SidebarShell
      title="LLM Learning Plan"
      subtitle="V1 • 24-Week Curriculum"
      isOpen={isOpen}
      onClose={onClose}
    >
      {phases.map((phase) => {
        const PhaseIcon = phaseIcons[phase.id] || Layout;
        const isActive = phases.find((entry) => entry.weeks.some((week) => week.id === selectedWeek))?.id === phase.id;

        return (
          <div key={phase.id} className="mb-2">
            <div
              className={`
                flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
                ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}
              `}
            >
              <PhaseIcon className="h-4 w-4" />
              <span className="truncate">Phase {phase.id}: {phase.name}</span>
            </div>

            <div className="ml-4 mt-1 space-y-1">
              {phase.weeks.map((week) => (
                <button
                  key={week.id}
                  onClick={() => {
                    onSelectWeek(week.id);
                    onClose();
                  }}
                  className={`
                    w-full rounded-lg px-3 py-2 text-left text-sm transition-colors
                    ${selectedWeek === week.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'}
                  `}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate">W{week.id}: {week.title}</span>
                    {week.isCapstone && <Award className="h-3 w-3" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </SidebarShell>
  );
}

function V2Sidebar({
  activeView,
  selectedItemId,
  onSelectOverview,
  onSelectOutsidePhases,
  onSelectItem,
  isOpen,
  onClose,
}: {
  activeView: AppView;
  selectedItemId: string;
  onSelectOverview: () => void;
  onSelectOutsidePhases: () => void;
  onSelectItem: (itemId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  const selectedItem = selectedItemId ? v2ItemMap.get(selectedItemId) ?? null : null;

  return (
    <SidebarShell
      title="LLM Learning Plan"
      subtitle="V2 • Unit-Based Edition"
      isOpen={isOpen}
      onClose={onClose}
    >
      <button
        onClick={() => {
          onSelectOverview();
          onClose();
        }}
        className={`
          mb-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors
          ${activeView === 'v2-overview'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-muted'}
        `}
      >
        <Rocket className="h-4 w-4" />
        <span>V2 Overview</span>
      </button>

      <button
        onClick={() => {
          onSelectOutsidePhases();
          onClose();
        }}
        className={`
          mb-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors
          ${activeView === 'v2-outside-phases'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-muted'}
        `}
      >
        <BookOpen className="h-4 w-4" />
        <span>Outside Phases</span>
      </button>

      {v2Curriculum.phases.map((phase) => {
        const PhaseIcon = phaseIcons[getPhaseNumber(phase.id)] || Layout;
        const phaseItems = phase.itemIds
          .map((itemId) => v2ItemMap.get(itemId))
          .filter((item): item is V2Item => Boolean(item));
        const isActive = selectedItem?.phaseId === phase.id;

        return (
          <div key={phase.id} className="mb-3">
            <div
              className={`
                flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
                ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}
              `}
            >
              <PhaseIcon className="h-4 w-4" />
              <span className="truncate">{phase.title.replace('PHASE', 'Phase')}</span>
            </div>

            <div className="ml-4 mt-1 space-y-1">
              {phaseItems.map((item) => {
                const ItemIcon = getV2ItemIcon(item);

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectItem(item.id);
                      onClose();
                    }}
                    className={`
                      w-full rounded-lg px-3 py-2 text-left text-sm transition-colors
                      ${selectedItemId === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'}
                    `}
                  >
                    <div className="flex items-start gap-2">
                      <ItemIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-wide opacity-75">
                          {getV2ItemButtonLabel(item)}
                        </div>
                        <div className="truncate">{item.title}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </SidebarShell>
  );
}

function V1WeekCard({ week }: { week: Week }) {
  const supplement = weekSectionSupplements[week.id];
  const mergedTopics = mergeUniqueStrings(supplement?.topics ?? [], week.topics);
  const mergedResources = mergeUniqueResources(week.resources, supplement?.resources ?? []);
  const mergedDeliverables = mergeUniqueStrings(supplement?.deliverables ?? [], week.deliverables);
  const miniExercises = mergeUniqueStrings(supplement?.miniExercises ?? [], []);
  const projectBlocks = supplement?.projectBlocks ?? [];
  const leetcodeContext = supplement?.leetcodeContext ? cleanSupplementText(supplement.leetcodeContext) : '';
  const deliverableBlocks = supplement?.deliverableBlocks ?? [];
  const showBaseSystemDesign = supplement?.systemDesignHtml
    ? !stripHtmlToText(supplement.systemDesignHtml).toLowerCase().includes(cleanSupplementText(week.systemDesign).toLowerCase())
    : true;
  const [openSections, setOpenSections] = useState<string[]>(
    ['topics', 'projects', ...(miniExercises.length ? ['exercises'] : [])],
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((entry) => entry !== section)
        : [...prev, section],
    );
  };

  const PhaseIcon = phaseIcons[week.phase] || Layout;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <PhaseIcon className="h-6 w-6 text-primary" />
            <span className="text-sm text-muted-foreground">Phase {week.phase}: {week.phaseName}</span>
          </div>
          <h1 className="text-3xl font-bold">Week {week.id}: {week.title}</h1>
          <p className="mt-2 text-muted-foreground">{week.overview}</p>
        </div>
        <Badge
          variant="outline"
          className={`${difficultyColors[week.difficulty]} px-3 py-1 text-sm font-medium`}
        >
          {week.difficultyLabel}
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Code className="h-5 w-5 text-blue-500" />
              Python Focus ({week.pythonFocus})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{week.pythonProject}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Terminal className="h-5 w-5 text-cyan-500" />
              Go Option ({week.goOption})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{week.goProject}</p>
          </CardContent>
        </Card>
      </div>

      <Collapsible open={openSections.includes('topics')} onOpenChange={() => toggleSection('topics')}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
          {openSections.includes('topics') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          <h2 className="text-xl font-semibold">Topics Covered</h2>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2">
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {mergedTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {miniExercises.length > 0 && (
        <Collapsible open={openSections.includes('exercises')} onOpenChange={() => toggleSection('exercises')}>
          <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
            {openSections.includes('exercises') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            <h2 className="text-xl font-semibold">Mini Exercises</h2>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {miniExercises.map((exercise, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{exercise}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      )}

      <Collapsible open={openSections.includes('projects')} onOpenChange={() => toggleSection('projects')}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
          {openSections.includes('projects') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          <h2 className="text-xl font-semibold">Projects</h2>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 space-y-4">
            {projectBlocks.map((block) => {
              const BlockIcon = getContentBlockIcon(block.title);

              return (
                <Card key={block.title}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BlockIcon className="h-5 w-5 text-primary" />
                      <span>{block.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RichHtml html={block.html} />
                  </CardContent>
                </Card>
              );
            })}

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-primary" />
                  Additional Project Ideas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {week.miniProjects.map((project, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {(week.leetcode.length > 0 || leetcodeContext) && (
        <Collapsible open={openSections.includes('leetcode')} onOpenChange={() => toggleSection('leetcode')}>
          <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
            {openSections.includes('leetcode') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            <h2 className="text-xl font-semibold">LeetCode Questions</h2>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="pt-6">
                {leetcodeContext && (
                  <p className="mb-4 rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
                    <strong className="text-foreground">Why this week:</strong> {leetcodeContext}
                  </p>
                )}

                <ul className="space-y-3">
                  {week.leetcode.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Code className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                      <div>
                        <span className="font-medium">{item.problem}</span>
                        {item.note && (
                          <span className="ml-2 text-sm text-muted-foreground">— {item.note}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      )}

      <Collapsible open={openSections.includes('system')} onOpenChange={() => toggleSection('system')}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
          {openSections.includes('system') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          <h2 className="text-xl font-semibold">System Design</h2>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {showBaseSystemDesign && <p>{week.systemDesign}</p>}
                {supplement?.systemDesignHtml && <RichHtml html={supplement.systemDesignHtml} />}
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.includes('resources')} onOpenChange={() => toggleSection('resources')}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
          {openSections.includes('resources') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          <h2 className="text-xl font-semibold">Resources</h2>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {mergedResources.map((resource, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-500" />
                    <div className="min-w-0">
                      <Badge variant="secondary" className="mr-2 text-xs">{resource.type}</Badge>
                      <div className="space-y-1">
                        {resource.url ? (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium hover:underline"
                          >
                            {resource.title}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="font-medium">{resource.title}</span>
                        )}

                        {resource.note && (
                          <p className="mt-1 text-sm text-muted-foreground">{resource.note}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.includes('deliverables')} onOpenChange={() => toggleSection('deliverables')}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
          {openSections.includes('deliverables') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          <h2 className="text-xl font-semibold">Deliverables</h2>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <ul className="space-y-3">
                  {mergedDeliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>

                {deliverableBlocks.map((block) => {
                  const BlockIcon = getContentBlockIcon(block.title);

                  return (
                    <div key={block.title} className="rounded-lg border border-green-200 bg-background/90 p-4">
                      <div className="mb-3 flex items-center gap-2 font-medium">
                        <BlockIcon className="h-5 w-5 text-green-700" />
                        <span>{block.title}</span>
                      </div>
                      <RichHtml html={block.html} />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function V1OverviewTab({ onCheckV2 }: { onCheckV2: () => void }) {
  return (
    <div className="space-y-8">
      <div className="py-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Badge variant="outline" className="px-3 py-1">V1</Badge>
          <Badge variant="secondary" className="px-3 py-1">24-Week Track</Badge>
        </div>
        <h1 className="mb-4 text-4xl font-bold">LLM Engineering Master Plan</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          A comprehensive 24-week curriculum to become a production-level AI/ML infrastructure engineer.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button onClick={onCheckV2}>Check V2</Button>
          <Badge variant="outline" className="px-4 py-2">
            <Code className="mr-2 h-4 w-4" />
            75% Python
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Terminal className="mr-2 h-4 w-4" />
            25% Go
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Layers className="mr-2 h-4 w-4" />
            System Design
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Target className="mr-2 h-4 w-4" />
            LeetCode
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase) => {
          const PhaseIcon = phaseIcons[phase.id] || Layout;

          return (
            <Card key={phase.id} className="transition-shadow hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-2">
                  <PhaseIcon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Phase {phase.id}: {phase.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {phase.weeks.length} weeks • Weeks {phase.weeks[0].id}-{phase.weeks[phase.weeks.length - 1].id}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div>
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Award className="h-6 w-6 text-primary" />
          Monthly Capstone Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {capstoneProjects.map((project) => (
            <Card key={project.month} className="border-primary/20">
              <CardHeader className="pb-3">
                <Badge className="mb-2 w-fit">Month {project.month}</Badge>
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                <p className="text-sm font-medium">Deliverable: {project.deliverable || project.deliverables?.[0]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          Core Book List
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {books.map((book, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-500" />
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                    <p className="text-xs text-muted-foreground">{book.when} — {book.topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Code className="h-5 w-5 text-orange-500" />
              LeetCode Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Weeks 1-6:</strong> 3 easy/week (arrays, strings, hashmaps)</li>
              <li><strong>Weeks 7-12:</strong> 3 medium/week (trees, graphs)</li>
              <li><strong>Weeks 13-18:</strong> 2-3 medium/week (DP, sliding window)</li>
              <li><strong>Weeks 19-24:</strong> 2 medium + 1 hard/week</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="h-5 w-5 text-blue-500" />
              System Design Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Weeks 1-6:</strong> Read 1 chapter/week from SDI Vol 1</li>
              <li><strong>Weeks 7-14:</strong> Read DDIA chapters aligned with theme</li>
              <li><strong>Weeks 15-24:</strong> Weekly 30-45 min whiteboard exercise</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function V2SectionCard({
  section,
  eyebrow,
}: {
  section: V2Section;
  eyebrow?: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        {eyebrow && <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{eyebrow}</p>}
        <CardTitle className="text-xl">{section.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <RichHtml html={section.html} />
      </CardContent>
    </Card>
  );
}

function V2OverviewTab({
  onOpenItem,
  onOpenOutsidePhases,
}: {
  onOpenItem: (itemId: string) => void;
  onOpenOutsidePhases: () => void;
}) {
  const firstUnit = v2Curriculum.items.find((item) => item.kind === 'unit') ?? v2Curriculum.items[0];

  return (
    <div className="space-y-8">
      <div className="py-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Badge variant="outline" className="px-3 py-1">V2</Badge>
          <Badge variant="secondary" className="px-3 py-1">Unit-Based Edition</Badge>
        </div>

        <h1 className="mb-4 text-4xl font-bold">{v2Curriculum.meta.title}</h1>
        <div className="mx-auto mt-4 max-w-4xl text-left">
          <RichHtml html={v2Curriculum.meta.heroHtml} />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {v2Curriculum.meta.stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {firstUnit && (
            <Button onClick={() => onOpenItem(firstUnit.id)}>Start V2 Curriculum</Button>
          )}
          <Button variant="outline" onClick={onOpenOutsidePhases}>
            View Outside-Phase Overview
          </Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Layers className="h-6 w-6 text-primary" />
          Phase Map
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {v2Curriculum.phases.map((phase) => {
            const phaseItems = phase.itemIds
              .map((itemId) => v2ItemMap.get(itemId))
              .filter((item): item is V2Item => Boolean(item));
            const firstPhaseUnit = phaseItems.find((item) => item.kind === 'unit') ?? phaseItems[0];
            const PhaseIcon = phaseIcons[getPhaseNumber(phase.id)] || Layout;

            return (
              <Card key={phase.id} className="border-primary/20">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-center gap-2">
                    <PhaseIcon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </div>
                  {stripHtmlToText(phase.introHtml) ? (
                    <RichHtml html={phase.introHtml} className="text-sm text-muted-foreground" />
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {phaseItems.filter((item) => item.kind === 'unit').length} units in this phase.
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{phaseItems.filter((item) => item.kind === 'unit').length} units</span>
                    <span>•</span>
                    <span>{phaseItems.filter((item) => item.kind !== 'unit').length} extras</span>
                  </div>
                  {firstPhaseUnit && (
                    <Button variant="outline" onClick={() => onOpenItem(firstPhaseUnit.id)}>
                      Open {firstPhaseUnit.label}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

    </div>
  );
}

function V2OutsidePhasesTab() {
  return (
    <div className="space-y-8">
      <div className="py-4">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">V2</Badge>
          <Badge variant="secondary" className="px-3 py-1">Outside-Phase Overview</Badge>
        </div>

        <h1 className="text-3xl font-bold">Everything Outside The Phases</h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          This page collects the setup guidance, pacing rules, daily structure, strategies, reading schedules,
          blog ideas, and reference material that are not tied to any single unit card.
        </p>
      </div>

      <div>
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Rocket className="h-6 w-6 text-primary" />
          General Curriculum Guidance
        </h2>
        <div className="space-y-4">
          {v2Curriculum.overviewSections.map((section) => (
            <V2SectionCard key={section.id} section={section} eyebrow="Overview" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          Appendix & References
        </h2>
        <div className="space-y-4">
          {v2Curriculum.appendixSections.map((section) => (
            <V2SectionCard key={section.id} section={section} eyebrow="Appendix" />
          ))}
        </div>
      </div>
    </div>
  );
}

function V2ItemPage({ item, phase }: { item: V2Item; phase: V2Phase | null }) {
  const [openSections, setOpenSections] = useState<string[]>(() => {
    const defaults = item.sections[0] ? [item.sections[0].id] : [];
    if (item.introHtml && stripHtmlToText(item.introHtml)) {
      defaults.unshift('overview');
    }
    return defaults;
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((entry) => entry !== sectionId)
        : [...prev, sectionId],
    );
  };

  const ItemIcon = getV2ItemIcon(item);
  const hasPhaseIntro = phase ? stripHtmlToText(phase.introHtml) !== '' : false;
  const hasItemIntro = stripHtmlToText(item.introHtml) !== '';

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <ItemIcon className="h-6 w-6 text-primary" />
            <span className="text-sm text-muted-foreground">{item.phaseTitle}</span>
            <Badge variant="outline" className={getV2ItemBadgeVariant(item)}>
              {getV2ItemButtonLabel(item)}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold">{item.title}</h1>
          {item.unitCode && (
            <p className="mt-2 text-sm text-muted-foreground">
              {item.label} • {item.phaseTitle}
            </p>
          )}
        </div>

        {item.difficulty && (
          <Badge variant="outline" className="px-3 py-1 text-base font-medium">
            {item.difficulty}
          </Badge>
        )}
      </div>

      {hasPhaseIntro && phase && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Phase Context</CardTitle>
          </CardHeader>
          <CardContent>
            <RichHtml html={phase.introHtml} />
          </CardContent>
        </Card>
      )}

      {hasItemIntro && (
        <Collapsible open={openSections.includes('overview')} onOpenChange={() => toggleSection('overview')}>
          <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
            {openSections.includes('overview') ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            <h2 className="text-xl font-semibold">Overview</h2>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="pt-6">
                <RichHtml html={item.introHtml} />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      )}

      {item.sections.map((section) => (
        <Collapsible
          key={section.id}
          open={openSections.includes(section.id)}
          onOpenChange={() => toggleSection(section.id)}
        >
          <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted">
            {openSections.includes(section.id) ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            <h2 className="text-xl font-semibold">{section.title}</h2>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="pt-6">
                <RichHtml html={section.html} />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

function App() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedV2ItemId, setSelectedV2ItemId] = useState<string>(firstV2ItemId);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState<AppView>('v1-overview');

  const selectedWeekData = phases.flatMap((phase) => phase.weeks).find((week) => week.id === selectedWeek) ?? null;
  const selectedV2Item = selectedV2ItemId ? v2ItemMap.get(selectedV2ItemId) ?? null : null;
  const selectedV2Phase = selectedV2Item
    ? v2Curriculum.phases.find((phase) => phase.id === selectedV2Item.phaseId) ?? null
    : null;
  const isV2 = view.startsWith('v2');

  const openV1Overview = () => setView('v1-overview');
  const openV1Week = (weekId?: number) => {
    if (typeof weekId === 'number') {
      setSelectedWeek(weekId);
    }
    setView('v1-week');
  };
  const openV2Overview = () => setView('v2-overview');
  const openV2OutsidePhases = () => setView('v2-outside-phases');
  const openV2Item = (itemId: string) => {
    setSelectedV2ItemId(itemId);
    setView('v2-item');
  };

  return (
    <div className="flex min-h-screen bg-background">
      {isV2 ? (
        <V2Sidebar
          activeView={view}
          selectedItemId={view === 'v2-item' ? selectedV2ItemId : ''}
          onSelectOverview={openV2Overview}
          onSelectOutsidePhases={openV2OutsidePhases}
          onSelectItem={openV2Item}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      ) : (
        <V1Sidebar
          selectedWeek={selectedWeek}
          onSelectWeek={(weekId) => {
            openV1Week(weekId);
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-card px-4 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex flex-wrap gap-2">
              {isV2 ? (
                <>
                  <Button
                    variant={view === 'v2-overview' ? 'default' : 'ghost'}
                    onClick={openV2Overview}
                  >
                    V2 Overview
                  </Button>
                  <Button
                    variant={view === 'v2-outside-phases' ? 'default' : 'ghost'}
                    onClick={openV2OutsidePhases}
                  >
                    Outside Phases
                  </Button>
                  {selectedV2Item && (
                    <Button
                      variant={view === 'v2-item' ? 'default' : 'ghost'}
                      onClick={() => setView('v2-item')}
                    >
                      {selectedV2Item.label}
                    </Button>
                  )}
                  <Button variant="ghost" onClick={openV1Overview}>
                    Back to V1
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant={view === 'v1-overview' ? 'default' : 'ghost'}
                    onClick={openV1Overview}
                  >
                    Overview
                  </Button>
                  <Button
                    variant={view === 'v1-week' ? 'default' : 'ghost'}
                    onClick={() => openV1Week()}
                  >
                    Week {selectedWeek}
                  </Button>
                  <Button variant="ghost" onClick={openV2Overview}>
                    Check V2
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="hidden text-sm text-muted-foreground sm:block">
            {isV2 ? 'Unit-based curriculum with full-document detail' : '24-Week LLM Engineering Curriculum'}
          </div>
        </header>

        <main className={`flex-1 w-full mx-auto p-4 md:p-8 ${isV2 ? 'max-w-6xl' : 'max-w-5xl'}`}>
          {view === 'v1-overview' && <V1OverviewTab onCheckV2={openV2Overview} />}
          {view === 'v1-week' && selectedWeekData && <V1WeekCard key={selectedWeekData.id} week={selectedWeekData} />}
          {view === 'v2-overview' && (
            <V2OverviewTab onOpenItem={openV2Item} onOpenOutsidePhases={openV2OutsidePhases} />
          )}
          {view === 'v2-outside-phases' && <V2OutsidePhasesTab />}
          {view === 'v2-item' && selectedV2Item && (
            <V2ItemPage key={selectedV2Item.id} item={selectedV2Item} phase={selectedV2Phase} />
          )}
        </main>

        <footer className="border-t bg-card px-4 py-4 text-center text-sm text-muted-foreground">
          {isV2 ? (
            <p>V2 keeps the full unit-based curriculum intact: overview, appendix, units, phase capstones, and final checklist.</p>
          ) : (
            <p>24 weeks. 140+ projects. One transformative journey.</p>
          )}
        </footer>
      </div>
    </div>
  );
}

export default App;
