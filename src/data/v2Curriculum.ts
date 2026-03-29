export interface V2Section {
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

export const v2Curriculum: V2CurriculumData = {
  "generatedAt": "2026-03-29T01:10:58.169Z",
  "meta": {
    "title": "LLM Engineering Master Plan — Unit-Based Edition",
    "heroHtml": "<blockquote><p><strong>Split:</strong> ~85% Python / ~15% Go (Go starts in Phase 4, not before) <strong>Goal:</strong> Get employed as an MLE/AI backend engineer as quickly as possible <strong>Capacity:</strong> ~12-14 hrs/day (unemployed, full-time self-study + 2 hrs/week classes) <strong>Structure:</strong> Units, not weeks. Some units take 3 days, others 2 weeks. Go at your own pace. <strong>Philosophy:</strong> Fewer projects, built properly, with README + tests. Quality over quantity.</p></blockquote><hr>",
    "stats": [
      {
        "label": "Phases",
        "value": "7"
      },
      {
        "label": "Units",
        "value": "31"
      },
      {
        "label": "Phase Extras",
        "value": "7"
      },
      {
        "label": "Appendix Sections",
        "value": "6"
      }
    ]
  },
  "overviewSections": [
    {
      "id": "overview-how-to-use-this-document",
      "title": "How To Use This Document",
      "html": "<ul><li><strong>Units ≠ calendar weeks.</strong> A unit is complete when you&#39;ve genuinely absorbed the material and shipped the deliverable. Don&#39;t rush.</li><li><strong>Units 1-2 are intentionally slow.</strong> Take 10-14 days each. Build the habits (Git, environment, daily structure) that carry you through the rest.</li><li>Each unit has a <strong>difficulty rating</strong> (⭐ to ⭐⭐⭐⭐⭐)</li><li><strong>Deliverables</strong> are concrete — working code in a GitHub repo with a README</li><li><strong>Resources</strong> prioritize blogs &gt; books &gt; videos</li><li><strong>Go is not introduced until Phase 4 (Unit 15).</strong> Do not start Go earlier. You need Python muscle memory first.</li><li><strong>Job-readiness checkpoint after Phase 4.</strong> Start applying to junior MLE/AI backend roles then — don&#39;t wait for perfection.</li><li>Every project = a real GitHub repo with a README. This is your portfolio.</li></ul><hr>",
      "plainText": "How To Use This Document - Units ≠ calendar weeks. A unit is complete when you've genuinely absorbed the material and shipped the deliverable. Don't rush. - Units 1-2 are intentionally slow. Take 10-14 days each. Build the habits (Git, environment, daily structure) that carry you through the rest. - Each unit has a difficulty rating (⭐ to ⭐⭐⭐⭐⭐) - Deliverables are concrete — working code in a GitHub repo with a README - Resources prioritize blogs > books > videos - Go is not introduced until Phase 4 (Unit 15). Do not start Go earlier. You need Python muscle memory first. - Job-readiness checkpoint after Phase 4. Start applying to junior MLE/AI backend roles then — don't wait for perfection. - Every project = a real GitHub repo with a README. This is your portfolio. ---"
    },
    {
      "id": "overview-setup-requirements-before-unit-1",
      "title": "Setup Requirements (Before Unit 1)",
      "html": "<p>Complete these before starting. Budget 1-2 days.</p><ul><li>[ ] Python 3.11+ installed via <code>pyenv</code></li><li>[ ] <code>uv</code> installed for fast package management</li><li>[ ] VS Code or Cursor configured with Python extensions</li><li>[ ] GitHub account with SSH keys configured</li><li>[ ] Git basics: <code>init</code>, <code>add</code>, <code>commit</code>, <code>push</code>, <code>branch</code>, <code>merge</code> — practice on a test repo</li><li>[ ] <code>.gitignore</code> template for Python projects saved</li><li>[ ] Virtual environment workflow: <code>python -m venv .venv</code> or <code>uv venv</code></li><li>[ ] <code>.env</code> file pattern: install <code>python-dotenv</code>, understand <code>os.getenv()</code></li><li>[ ] Docker Desktop installed (needed from Phase 3 onward)</li><li>[ ] OpenAI API key obtained (free tier is fine to start)</li><li>[ ] Create a <code>leetcode/</code> repo and a <code>learning-projects/</code> GitHub organization or folder</li></ul><hr>",
      "plainText": "Setup Requirements (Before Unit 1) Complete these before starting. Budget 1-2 days. - [ ] Python 3.11+ installed via pyenv - [ ] uv installed for fast package management - [ ] VS Code or Cursor configured with Python extensions - [ ] GitHub account with SSH keys configured - [ ] Git basics: init, add, commit, push, branch, merge — practice on a test repo - [ ] .gitignore template for Python projects saved - [ ] Virtual environment workflow: python -m venv .venv or uv venv - [ ] .env file pattern: install python-dotenv, understand os.getenv() - [ ] Docker Desktop installed (needed from Phase 3 onward) - [ ] OpenAI API key obtained (free tier is fine to start) - [ ] Create a leetcode/ repo and a learning-projects/ GitHub organization or folder ---"
    },
    {
      "id": "overview-daily-structure-12-14-hours",
      "title": "Daily Structure (12-14 hours)",
      "html": "<pre><code>┌──────────────────────────────────────────────────┐\n│  MORNING BLOCK (4-5 hrs) — Deep Project Work     │\n│  • Main project coding (the hardest work first)  │\n│  • No tutorials here — build, debug, ship        │\n├──────────────────────────────────────────────────┤\n│  MIDDAY BLOCK (3-4 hrs) — Learning + Reading     │\n│  • Read resources / watch videos for the unit    │\n│  • Mini-exercises and experiments                │\n│  • Systems Design reading (30-45 min)            │\n├──────────────────────────────────────────────────┤\n│  AFTERNOON BLOCK (2-3 hrs) — Practice + Review   │\n│  • LeetCode (1 problem, 30-45 min)              │\n│  • Refactor morning code, write tests            │\n│  • Blog post writing (20-30 min/day)             │\n├──────────────────────────────────────────────────┤\n│  EVENING (1 hr) — Reflection + Planning          │\n│  • Review what you learned today                 │\n│  • Update progress.md                            │\n│  • Plan tomorrow&#39;s session                       │\n│  • 20 min community engagement (Discord/Slack)   │\n├──────────────────────────────────────────────────┤\n│  REST DAY: Take one full day off per week.       │\n│  Burnout kills consistency. Protect your rest.   │\n└──────────────────────────────────────────────────┘</code></pre><hr>",
      "plainText": "Daily Structure (12-14 hours) ┌──────────────────────────────────────────────────┐ │ MORNING BLOCK (4-5 hrs) — Deep Project Work │ │ • Main project coding (the hardest work first) │ │ • No tutorials here — build, debug, ship │ ├──────────────────────────────────────────────────┤ │ MIDDAY BLOCK (3-4 hrs) — Learning + Reading │ │ • Read resources / watch videos for the unit │ │ • Mini-exercises and experiments │ │ • Systems Design reading (30-45 min) │ ├──────────────────────────────────────────────────┤ │ AFTERNOON BLOCK (2-3 hrs) — Practice + Review │ │ • LeetCode (1 problem, 30-45 min) │ │ • Refactor morning code, write tests │ │ • Blog post writing (20-30 min/day) │ ├──────────────────────────────────────────────────┤ │ EVENING (1 hr) — Reflection + Planning │ │ • Review what you learned today │ │ • Update progress.md │ │ • Plan tomorrow's session │ │ • 20 min community engagement (Discord/Slack) │ ├──────────────────────────────────────────────────┤ │ REST DAY: Take one full day off per week. │ │ Burnout kills consistency. Protect your rest. │ └──────────────────────────────────────────────────┘ ---"
    },
    {
      "id": "overview-core-book-list-reference-throughout",
      "title": "Core Book List (Reference Throughout)",
      "html": "<div class=\"table-wrap\"><table><thead><tr><th>Book</th><th>When to Use</th></tr></thead><tbody><tr><td><em>Fluent Python</em> (Luciano Ramalho, 2nd ed)</td><td>Units 1-6 — Python internals, decorators, async</td></tr><tr><td><em>Designing Data-Intensive Applications</em> (Martin Kleppmann)</td><td>Units 11+ — systems design bible</td></tr><tr><td><em>System Design Interview Vol 1 &amp; 2</em> (Alex Xu)</td><td>Ongoing — weekly systems design reading</td></tr><tr><td><em>The Go Programming Language</em> (Donovan &amp; Kernighan)</td><td>Phase 4+ — when Go is introduced</td></tr><tr><td><em>Hands-On Large Language Models</em> (Jay Alammar &amp; Gregory Pichotta)</td><td>Units 5-10 — LLM foundations</td></tr><tr><td><em>High Performance Python</em> (Gorelick &amp; Ozsvald)</td><td>Units 11-14 — profiling, optimization</td></tr></tbody></table></div><hr>",
      "plainText": "Core Book List (Reference Throughout) | Book | When to Use | |------|-------------| | Fluent Python (Luciano Ramalho, 2nd ed) | Units 1-6 — Python internals, decorators, async | | Designing Data-Intensive Applications (Martin Kleppmann) | Units 11+ — systems design bible | | System Design Interview Vol 1 & 2 (Alex Xu) | Ongoing — weekly systems design reading | | The Go Programming Language (Donovan & Kernighan) | Phase 4+ — when Go is introduced | | Hands-On Large Language Models (Jay Alammar & Gregory Pichotta) | Units 5-10 — LLM foundations | | High Performance Python (Gorelick & Ozsvald) | Units 11-14 — profiling, optimization | ---"
    },
    {
      "id": "overview-leetcode-systems-design-strategy",
      "title": "LeetCode & Systems Design Strategy",
      "html": "<section class=\"source-section section-level-4\"><h4>LeetCode</h4><ul><li><strong>Units 1-6:</strong> 2-3 easy problems/unit (arrays, strings, hashmaps). Don&#39;t make it demoralizing.</li><li><strong>Units 7-12:</strong> 2-3 medium problems/unit (trees, graphs, BFS/DFS)</li><li><strong>Units 13-18:</strong> 2-3 medium problems/unit (DP, sliding window, binary search)</li><li><strong>Units 19-24:</strong> 2 medium + 1 hard/unit (advanced patterns)</li><li><strong>Platform:</strong> <a href=\"https://neetcode.io/practice\" target=\"_blank\" rel=\"noreferrer\">NeetCode 150</a> for structured progression</li><li><strong>Rule:</strong> 30-45 min max per problem. If stuck, read the solution, understand it, re-implement from memory.</li></ul></section><section class=\"source-section section-level-4\"><h4>Systems Design</h4><ul><li><strong>Units 1-6:</strong> Read 1 chapter/unit from <em>System Design Interview Vol 1</em></li><li><strong>Units 7-14:</strong> Read <em>DDIA</em> chapters aligned with the unit&#39;s theme</li><li><strong>Units 15-24:</strong> Design a system weekly (30-45 min whiteboard exercise)</li></ul></section><section class=\"source-section section-level-4\"><h4>Interview Prep Checkpoints</h4><p>After each phase, write answers to 3 behavioral questions about what you built:</p><ul><li>&quot;Tell me about a technical challenge you faced and how you solved it.&quot;</li><li>&quot;Describe a system you designed and the trade-offs you made.&quot;</li><li>&quot;What would you do differently if you rebuilt this?&quot;</li></ul></section><section class=\"source-section section-level-4\"><h4>Networking (Weekly Habit)</h4><ul><li>Spend 20 min/week engaging in one community: HuggingFace Discord, MLOps Community Slack, or AI Twitter/X</li><li>Comment on someone&#39;s project, ask a question, share something you built</li></ul><hr></section>",
      "plainText": "LeetCode & Systems Design Strategy LeetCode - Units 1-6: 2-3 easy problems/unit (arrays, strings, hashmaps). Don't make it demoralizing. - Units 7-12: 2-3 medium problems/unit (trees, graphs, BFS/DFS) - Units 13-18: 2-3 medium problems/unit (DP, sliding window, binary search) - Units 19-24: 2 medium + 1 hard/unit (advanced patterns) - Platform: NeetCode 150 for structured progression - Rule: 30-45 min max per problem. If stuck, read the solution, understand it, re-implement from memory. Systems Design - Units 1-6: Read 1 chapter/unit from System Design Interview Vol 1 - Units 7-14: Read DDIA chapters aligned with the unit's theme - Units 15-24: Design a system weekly (30-45 min whiteboard exercise) Interview Prep Checkpoints After each phase, write answers to 3 behavioral questions about what you built: - \"Tell me about a technical challenge you faced and how you solved it.\" - \"Describe a system you designed and the trade-offs you made.\" - \"What would you do differently if you rebuilt this?\" Networking (Weekly Habit) - Spend 20 min/week engaging in one community: HuggingFace Discord, MLOps Community Slack, or AI Twitter/X - Comment on someone's project, ask a question, share something you built ---"
    }
  ],
  "appendixSections": [
    {
      "id": "appendix-a-complete-leetcode-schedule-65-problems",
      "title": "A. Complete LeetCode Schedule (65 Problems)",
      "html": "<section class=\"source-section section-level-4\"><h4>Units 1-7: Foundations (18 problems)</h4><div class=\"table-wrap\"><table><thead><tr><th>Pattern</th><th>Problems</th><th>Difficulty</th></tr></thead><tbody><tr><td>Arrays &amp; Hashing</td><td>Two Sum, Valid Anagram, Contains Duplicate, Group Anagrams</td><td>Easy-Med</td></tr><tr><td>Stack</td><td>Valid Parentheses, Min Stack, Generate Parentheses</td><td>Easy-Med</td></tr><tr><td>Linked List</td><td>Merge Two Sorted Lists</td><td>Easy</td></tr><tr><td>Sliding Window</td><td>Longest Substring Without Repeating Characters</td><td>Medium</td></tr><tr><td>Heap</td><td>Kth Largest Element in Stream, Top K Frequent Elements</td><td>Med</td></tr><tr><td>Design</td><td>LRU Cache</td><td>Med</td></tr><tr><td>Trie</td><td>Implement Trie</td><td>Med</td></tr><tr><td>DP Intro</td><td>Coin Change, Task Scheduler</td><td>Medium</td></tr><tr><td>String</td><td>Encode and Decode Strings</td><td>Medium</td></tr></tbody></table></div></section><section class=\"source-section section-level-4\"><h4>Units 8-11: HuggingFace &amp; APIs (18 problems)</h4><div class=\"table-wrap\"><table><thead><tr><th>Pattern</th><th>Problems</th><th>Difficulty</th></tr></thead><tbody><tr><td>Trees</td><td>Binary Tree Level Order, Validate BST</td><td>Med</td></tr><tr><td>Graphs</td><td>Number of Islands, Clone Graph</td><td>Med</td></tr><tr><td>Binary Search</td><td>Search in Rotated Sorted Array</td><td>Med</td></tr><tr><td>Matrix</td><td>Spiral Matrix, Set Matrix Zeroes, Rotate Image</td><td>Med</td></tr><tr><td>Distance</td><td>K Closest Points to Origin, Kth Largest Element in Array</td><td>Med</td></tr><tr><td>Design</td><td>Design Twitter, Time Based Key-Value Store</td><td>Med</td></tr><tr><td>Backtracking</td><td>Word Search</td><td>Med</td></tr><tr><td>Hashmap</td><td>Longest Consecutive Sequence</td><td>Med</td></tr></tbody></table></div></section><section class=\"source-section section-level-4\"><h4>Units 12-19: Inference &amp; Backend (18 problems)</h4><div class=\"table-wrap\"><table><thead><tr><th>Pattern</th><th>Problems</th><th>Difficulty</th></tr></thead><tbody><tr><td>Design</td><td>Design Circular Queue, Design HashMap, Design Hit Counter</td><td>Med</td></tr><tr><td>Cache</td><td>LFU Cache</td><td>Med-Hard</td></tr><tr><td>Trie</td><td>Design Add and Search Words</td><td>Med</td></tr><tr><td>Graph</td><td>Network Delay Time, Clone Graph</td><td>Med</td></tr><tr><td>Sliding Window</td><td>Minimum Window Substring, Sliding Window Maximum</td><td>Med-Hard</td></tr><tr><td>DP</td><td>Maximum Subarray, House Robber, Unique Paths, Word Break</td><td>Med</td></tr><tr><td>Search</td><td>Search Suggestions System</td><td>Med</td></tr><tr><td>Scheduling</td><td>Task Scheduler</td><td>Med</td></tr><tr><td>Median</td><td>Find Median from Data Stream</td><td>Hard</td></tr></tbody></table></div></section><section class=\"source-section section-level-4\"><h4>Units 20-25: Advanced (12 problems)</h4><div class=\"table-wrap\"><table><thead><tr><th>Pattern</th><th>Problems</th><th>Difficulty</th></tr></thead><tbody><tr><td>String</td><td>Edit Distance, Regular Expression Matching</td><td>Med-Hard</td></tr><tr><td>Optimization</td><td>Trapping Rain Water</td><td>Hard</td></tr><tr><td>Validation</td><td>Valid Sudoku</td><td>Med</td></tr><tr><td>Graph</td><td>Word Ladder</td><td>Hard</td></tr><tr><td>Intervals</td><td>Merge Intervals</td><td>Med</td></tr><tr><td>DP</td><td>Longest Increasing Subsequence</td><td>Med</td></tr><tr><td>Go Practice</td><td>Two Sum, Valid Parentheses, Reverse Linked List (in Go)</td><td>Easy</td></tr></tbody></table></div><hr></section>",
      "plainText": "A. Complete LeetCode Schedule (65 Problems) Units 1-7: Foundations (18 problems) | Pattern | Problems | Difficulty | |---------|----------|------------| | Arrays & Hashing | Two Sum, Valid Anagram, Contains Duplicate, Group Anagrams | Easy-Med | | Stack | Valid Parentheses, Min Stack, Generate Parentheses | Easy-Med | | Linked List | Merge Two Sorted Lists | Easy | | Sliding Window | Longest Substring Without Repeating Characters | Medium | | Heap | Kth Largest Element in Stream, Top K Frequent Elements | Med | | Design | LRU Cache | Med | | Trie | Implement Trie | Med | | DP Intro | Coin Change, Task Scheduler | Medium | | String | Encode and Decode Strings | Medium | Units 8-11: HuggingFace & APIs (18 problems) | Pattern | Problems | Difficulty | |---------|----------|------------| | Trees | Binary Tree Level Order, Validate BST | Med | | Graphs | Number of Islands, Clone Graph | Med | | Binary Search | Search in Rotated Sorted Array | Med | | Matrix | Spiral Matrix, Set Matrix Zeroes, Rotate Image | Med | | Distance | K Closest Points to Origin, Kth Largest Element in Array | Med | | Design | Design Twitter, Time Based Key-Value Store | Med | | Backtracking | Word Search | Med | | Hashmap | Longest Consecutive Sequence | Med | Units 12-19: Inference & Backend (18 problems) | Pattern | Problems | Difficulty | |---------|----------|------------| | Design | Design Circular Queue, Design HashMap, Design Hit Counter | Med | | Cache | LFU Cache | Med-Hard | | Trie | Design Add and Search Words | Med | | Graph | Network Delay Time, Clone Graph | Med | | Sliding Window | Minimum Window Substring, Sliding Window Maximum | Med-Hard | | DP | Maximum Subarray, House Robber, Unique Paths, Word Break | Med | | Search | Search Suggestions System | Med | | Scheduling | Task Scheduler | Med | | Median | Find Median from Data Stream | Hard | Units 20-25: Advanced (12 problems) | Pattern | Problems | Difficulty | |---------|----------|------------| | String | Edit Distance, Regular Expression Matching | Med-Hard | | Optimization | Trapping Rain Water | Hard | | Validation | Valid Sudoku | Med | | Graph | Word Ladder | Hard | | Intervals | Merge Intervals | Med | | DP | Longest Increasing Subsequence | Med | | Go Practice | Two Sum, Valid Parentheses, Reverse Linked List (in Go) | Easy | ---"
    },
    {
      "id": "appendix-b-systems-design-reading-schedule",
      "title": "B. Systems Design Reading Schedule",
      "html": "<div class=\"table-wrap\"><table><thead><tr><th>Unit</th><th>Resource</th><th>Topic</th></tr></thead><tbody><tr><td>1</td><td>SDI Vol 1 Ch. 1</td><td>Scale from Zero to Millions</td></tr><tr><td>2</td><td>SDI Vol 1 Ch. 2</td><td>Back-of-the-envelope Estimation</td></tr><tr><td>3</td><td>SDI Vol 1 Ch. 3</td><td>A Framework for System Design</td></tr><tr><td>4a</td><td>SDI Vol 1 Ch. 4</td><td>Design a Rate Limiter</td></tr><tr><td>5</td><td>SDI Vol 1 Ch. 5</td><td>Design Consistent Hashing</td></tr><tr><td>6</td><td>SDI Vol 1 Ch. 6</td><td>Design a Key-Value Store</td></tr><tr><td>8</td><td>DDIA Ch. 1</td><td>Reliable, Scalable, Maintainable</td></tr><tr><td>9b</td><td>DDIA Ch. 3</td><td>Storage and Retrieval</td></tr><tr><td>10</td><td>DDIA Ch. 4</td><td>Encoding and Evolution</td></tr><tr><td>11</td><td>SDI Vol 1 Ch. 12</td><td>Design a Chat System</td></tr><tr><td>12</td><td>DDIA Ch. 5</td><td>Replication</td></tr><tr><td>13</td><td>DDIA Ch. 6</td><td>Partitioning</td></tr><tr><td>14</td><td>DDIA Ch. 7</td><td>Transactions</td></tr><tr><td>15</td><td>DDIA Ch. 8</td><td>Trouble with Distributed Systems</td></tr><tr><td>17</td><td>DDIA Ch. 10</td><td>Batch Processing</td></tr><tr><td>18</td><td>DDIA Ch. 11</td><td>Stream Processing</td></tr><tr><td>19</td><td>DDIA Ch. 4, 8</td><td>Encoding + Distributed Systems</td></tr><tr><td>20</td><td>SDI Vol 2</td><td>Metrics Monitoring System</td></tr><tr><td>21</td><td>Google SRE Book</td><td>Monitoring Distributed Systems</td></tr><tr><td>22</td><td>SDI Vol 2</td><td>Data Pipeline Design</td></tr><tr><td>24-25</td><td>All</td><td>Consolidation and review</td></tr></tbody></table></div><hr>",
      "plainText": "B. Systems Design Reading Schedule | Unit | Resource | Topic | |------|----------|-------| | 1 | SDI Vol 1 Ch. 1 | Scale from Zero to Millions | | 2 | SDI Vol 1 Ch. 2 | Back-of-the-envelope Estimation | | 3 | SDI Vol 1 Ch. 3 | A Framework for System Design | | 4a | SDI Vol 1 Ch. 4 | Design a Rate Limiter | | 5 | SDI Vol 1 Ch. 5 | Design Consistent Hashing | | 6 | SDI Vol 1 Ch. 6 | Design a Key-Value Store | | 8 | DDIA Ch. 1 | Reliable, Scalable, Maintainable | | 9b | DDIA Ch. 3 | Storage and Retrieval | | 10 | DDIA Ch. 4 | Encoding and Evolution | | 11 | SDI Vol 1 Ch. 12 | Design a Chat System | | 12 | DDIA Ch. 5 | Replication | | 13 | DDIA Ch. 6 | Partitioning | | 14 | DDIA Ch. 7 | Transactions | | 15 | DDIA Ch. 8 | Trouble with Distributed Systems | | 17 | DDIA Ch. 10 | Batch Processing | | 18 | DDIA Ch. 11 | Stream Processing | | 19 | DDIA Ch. 4, 8 | Encoding + Distributed Systems | | 20 | SDI Vol 2 | Metrics Monitoring System | | 21 | Google SRE Book | Monitoring Distributed Systems | | 22 | SDI Vol 2 | Data Pipeline Design | | 24-25 | All | Consolidation and review | ---"
    },
    {
      "id": "appendix-c-blog-post-ideas-25-posts",
      "title": "C. Blog Post Ideas (25 Posts)",
      "html": "<ol><li>&quot;Python asyncio — What Actually Happens Under the Hood&quot;</li><li>&quot;Pydantic v2 — The Best Thing in Python You&#39;re Not Using Enough&quot;</li><li>&quot;Python Decorators — From Confusion to Mastery&quot;</li><li>&quot;Building Production APIs with FastAPI — Beyond the Tutorial&quot;</li><li>&quot;Streaming LLM Responses with FastAPI and SSE&quot;</li><li>&quot;What Happens Before the LLM Sees Your Text — Tokenization Explained&quot;</li><li>&quot;Sampling in LLMs — Temperature is Not What You Think&quot; + Phase 1 Retrospective</li><li>&quot;HuggingFace Transformers — A Practical Guide to the Hub&quot;</li><li>&quot;Building Semantic Search from Scratch with Python&quot;</li><li>&quot;pgvector — Why Your Next Vector DB Should Just Be Postgres&quot;</li><li>&quot;LoRA Demystified — Fine-tuning LLMs on a Laptop&quot;</li><li>&quot;Building an AI Agent with Tool Calling — A Practical Guide&quot;</li><li>&quot;vLLM — Why It&#39;s 10x Faster Than Naive Inference&quot;</li><li>&quot;INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization&quot;</li><li>&quot;Caching LLM Responses — From Naive to Semantic&quot;</li><li>&quot;Building an LLM Inference Gateway in Python&quot;</li><li>&quot;First Impressions of Go — Coming from Python&quot;</li><li>&quot;Go + Postgres — Building a Vector Search API&quot;</li><li>&quot;Chunking Strategies for RAG — What Actually Works&quot;</li><li>&quot;Building RAG Right — Lessons from Evaluating 50+ Queries&quot;</li><li>&quot;Task Queues for ML — When Sync Isn&#39;t Enough&quot;</li><li>&quot;gRPC for ML Services — Go Backend, Python Gateway&quot;</li><li>&quot;Observability for ML Systems — What to Measure and Why&quot;</li><li>&quot;Tracing LLM Requests End-to-End with OpenTelemetry&quot;</li><li>&quot;How to Actually Evaluate Your LLM Application&quot;</li><li>&quot;LLM Security — Defense in Depth for AI Applications&quot;</li><li>&quot;From Data to Deployed Model — A Production Fine-tuning Pipeline&quot;</li><li>&quot;Building a Mini LLM Platform — What I Learned&quot; (Final Capstone)</li></ol><hr>",
      "plainText": "C. Blog Post Ideas (25 Posts) 1. \"Python asyncio — What Actually Happens Under the Hood\" 2. \"Pydantic v2 — The Best Thing in Python You're Not Using Enough\" 3. \"Python Decorators — From Confusion to Mastery\" 4. \"Building Production APIs with FastAPI — Beyond the Tutorial\" 5. \"Streaming LLM Responses with FastAPI and SSE\" 6. \"What Happens Before the LLM Sees Your Text — Tokenization Explained\" 7. \"Sampling in LLMs — Temperature is Not What You Think\" + Phase 1 Retrospective 8. \"HuggingFace Transformers — A Practical Guide to the Hub\" 9. \"Building Semantic Search from Scratch with Python\" 10. \"pgvector — Why Your Next Vector DB Should Just Be Postgres\" 11. \"LoRA Demystified — Fine-tuning LLMs on a Laptop\" 12. \"Building an AI Agent with Tool Calling — A Practical Guide\" 13. \"vLLM — Why It's 10x Faster Than Naive Inference\" 14. \"INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization\" 15. \"Caching LLM Responses — From Naive to Semantic\" 16. \"Building an LLM Inference Gateway in Python\" 17. \"First Impressions of Go — Coming from Python\" 18. \"Go + Postgres — Building a Vector Search API\" 19. \"Chunking Strategies for RAG — What Actually Works\" 20. \"Building RAG Right — Lessons from Evaluating 50+ Queries\" 21. \"Task Queues for ML — When Sync Isn't Enough\" 22. \"gRPC for ML Services — Go Backend, Python Gateway\" 23. \"Observability for ML Systems — What to Measure and Why\" 24. \"Tracing LLM Requests End-to-End with OpenTelemetry\" 25. \"How to Actually Evaluate Your LLM Application\" 26. \"LLM Security — Defense in Depth for AI Applications\" 27. \"From Data to Deployed Model — A Production Fine-tuning Pipeline\" 28. \"Building a Mini LLM Platform — What I Learned\" (Final Capstone) ---"
    },
    {
      "id": "appendix-d-difficulty-progression-chart",
      "title": "D. Difficulty Progression Chart",
      "html": "<pre><code>Unit:  1  2  3  4a 4b 5  6  7  8  9a 9b 10 11 12 13 14 15 16a 16b 17a 17b 18 19a 19b 20 21a 21b 22 23 24 25\n       ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐  ⭐  ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐ ⭐ ⭐\n       ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐  ⭐  ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐ ⭐ ⭐\n             ⭐ ⭐ ⭐ ⭐ ⭐    ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐  ⭐  ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐ ⭐ ⭐\n                       ⭐ ⭐         ⭐ ⭐    ⭐ ⭐ ⭐ ⭐       ⭐  ⭐     ⭐  ⭐  ⭐ ⭐  ⭐  ⭐ ⭐ ⭐ ⭐\n                                                                                              ⭐ ⭐</code></pre><div class=\"table-wrap\"><table><thead><tr><th>Rating</th><th>Meaning</th><th>Units</th></tr></thead><tbody><tr><td>⭐⭐</td><td>Comfortable</td><td>1, 2, 7</td></tr><tr><td>⭐⭐⭐</td><td>Challenging</td><td>3, 4a, 4b, 5, 8, 9a, 9b, 11, 16a, 16b, 18, 20</td></tr><tr><td>⭐⭐⭐⭐</td><td>Demanding</td><td>6, 10, 12, 13, 14, 15, 17a, 17b, 19a, 19b, 21a, 21b, 22, 23</td></tr><tr><td>⭐⭐⭐⭐⭐</td><td>Intense</td><td>24, 25</td></tr></tbody></table></div><hr>",
      "plainText": "D. Difficulty Progression Chart Unit: 1 2 3 4a 4b 5 6 7 8 9a 9b 10 11 12 13 14 15 16a 16b 17a 17b 18 19a 19b 20 21a 21b 22 23 24 25 ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ | Rating | Meaning | Units | |--------|---------|-------| | ⭐⭐ | Comfortable | 1, 2, 7 | | ⭐⭐⭐ | Challenging | 3, 4a, 4b, 5, 8, 9a, 9b, 11, 16a, 16b, 18, 20 | | ⭐⭐⭐⭐ | Demanding | 6, 10, 12, 13, 14, 15, 17a, 17b, 19a, 19b, 21a, 21b, 22, 23 | | ⭐⭐⭐⭐⭐ | Intense | 24, 25 | ---"
    },
    {
      "id": "appendix-e-key-rules",
      "title": "E. Key Rules",
      "html": "<ol><li><strong>Units ≠ weeks.</strong> A unit is done when you&#39;ve genuinely learned the material and shipped the deliverable. Some take 3 days, others 3 weeks.</li><li><strong>Units 1-2 are intentionally slow.</strong> Take 10-14 days each. Build habits.</li><li><strong>One major project per unit</strong> — working code by the end</li><li><strong>Two new concepts max per day</strong> — don&#39;t stack 5 tutorials</li><li><strong>Blog post every unit</strong> — even a 500-word post counts</li><li><strong>Ship over perfect</strong> — a working demo beats perfect code</li><li><strong>LeetCode daily</strong> — 1 problem/day, 30-45 min max</li><li><strong>Systems design regularly</strong> — 1 chapter or 1 design per unit</li><li><strong>No Go until Phase 4</strong> — Python is priority for Phases 1-3</li><li><strong>Every project is a GitHub repo with a README</strong> — this is your portfolio</li><li><strong>Start applying after Phase 4</strong> — don&#39;t wait for perfection</li><li><strong>Rest day every week</strong> — burnout kills consistency</li><li><strong>20 min/week community engagement</strong> — HuggingFace Discord, MLOps Slack, etc.</li><li><strong>Track progress</strong> — update a progress.md every few days</li></ol><hr>",
      "plainText": "E. Key Rules 1. Units ≠ weeks. A unit is done when you've genuinely learned the material and shipped the deliverable. Some take 3 days, others 3 weeks. 2. Units 1-2 are intentionally slow. Take 10-14 days each. Build habits. 3. One major project per unit — working code by the end 4. Two new concepts max per day — don't stack 5 tutorials 5. Blog post every unit — even a 500-word post counts 6. Ship over perfect — a working demo beats perfect code 7. LeetCode daily — 1 problem/day, 30-45 min max 8. Systems design regularly — 1 chapter or 1 design per unit 9. No Go until Phase 4 — Python is priority for Phases 1-3 10. Every project is a GitHub repo with a README — this is your portfolio 11. Start applying after Phase 4 — don't wait for perfection 12. Rest day every week — burnout kills consistency 13. 20 min/week community engagement — HuggingFace Discord, MLOps Slack, etc. 14. Track progress — update a progress.md every few days ---"
    },
    {
      "id": "appendix-f-recommended-tools-setup",
      "title": "F. Recommended Tools & Setup",
      "html": "<div class=\"table-wrap\"><table><thead><tr><th>Tool</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>uv</strong></td><td>Python package management (fast pip replacement)</td></tr><tr><td><strong>pyenv</strong></td><td>Python version management</td></tr><tr><td><strong>Docker + Docker Compose</strong></td><td>Service orchestration (from Phase 3)</td></tr><tr><td><strong>Postgres (via Docker)</strong></td><td>Database</td></tr><tr><td><strong>Redis (via Docker)</strong></td><td>Cache + message broker</td></tr><tr><td><strong>VS Code / Cursor</strong></td><td>Editor</td></tr><tr><td><strong>GitHub</strong></td><td>Code hosting + CI — every project is a repo</td></tr><tr><td><strong>W&amp;B</strong></td><td>Experiment tracking (from Unit 10)</td></tr><tr><td><strong>Grafana + Prometheus</strong></td><td>Monitoring (from Unit 20)</td></tr><tr><td><strong>Jaeger</strong></td><td>Distributed tracing (Unit 21a)</td></tr><tr><td><strong>Streamlit</strong></td><td>Quick dashboards and demos</td></tr><tr><td><strong>httpx</strong></td><td>Async HTTP client</td></tr><tr><td><strong>pytest + pytest-asyncio</strong></td><td>Testing</td></tr><tr><td><strong>grpcurl</strong></td><td>gRPC testing (Unit 19a+)</td></tr></tbody></table></div><hr><p><em>Last updated: March 2026</em> <em>Structure: ~25 units (not calendar weeks) — go at your own pace</em> <em>Capacity: ~12-14 hrs/day, 6 days/week = ~70-80 hrs/week</em> <em>LeetCode problems: ~65 (NeetCode 150 subset)</em> <em>Blog posts: ~28</em> <em>Major projects: 6 phase capstones + unit projects</em> <em>Go introduction: Phase 4 (not before)</em> <em>Job applications: Start after Phase 4</em></p>",
      "plainText": "F. Recommended Tools & Setup | Tool | Purpose | |------|---------| | uv | Python package management (fast pip replacement) | | pyenv | Python version management | | Docker + Docker Compose | Service orchestration (from Phase 3) | | Postgres (via Docker) | Database | | Redis (via Docker) | Cache + message broker | | VS Code / Cursor | Editor | | GitHub | Code hosting + CI — every project is a repo | | W&B | Experiment tracking (from Unit 10) | | Grafana + Prometheus | Monitoring (from Unit 20) | | Jaeger | Distributed tracing (Unit 21a) | | Streamlit | Quick dashboards and demos | | httpx | Async HTTP client | | pytest + pytest-asyncio | Testing | | grpcurl | gRPC testing (Unit 19a+) | --- Last updated: March 2026 Structure: 25 units (not calendar weeks) — go at your own pace Capacity: 12-14 hrs/day, 6 days/week = 70-80 hrs/week LeetCode problems: 65 (NeetCode 150 subset) Blog posts: 28 Major projects: 6 phase capstones + unit projects Go introduction: Phase 4 (not before) Job applications: Start after Phase 4"
    }
  ],
  "phases": [
    {
      "id": "phase-1",
      "title": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<blockquote><p><strong>Pacing:</strong> Units 1 and 2 should each take 10-14 days. Go slowly. Build habits. The rest of the plan depends on these foundations being solid.</p></blockquote><hr>",
      "itemIds": [
        "phase-1-unit-1-async-python",
        "phase-1-unit-2-pydantic-v2-data-validation",
        "phase-1-unit-3-decorators-advanced-python",
        "phase-1-unit-4a-fastapi-basics",
        "phase-1-unit-4b-fastapi-streaming-sse",
        "phase-1-unit-5-tokenization-llm-fundamentals",
        "phase-1-unit-6-llm-sampling-internals",
        "phase-1-unit-7-review-consolidation",
        "phase-1-phase-1-capstone-project-end-of-unit-7"
      ]
    },
    {
      "id": "phase-2",
      "title": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<hr>",
      "itemIds": [
        "phase-2-unit-8-huggingface-transformers",
        "phase-2-unit-9a-embeddings",
        "phase-2-unit-9b-vector-search-basic-rag",
        "phase-2-unit-10-peft-lora",
        "phase-2-unit-11-openai-api-advanced-patterns",
        "phase-2-phase-2-capstone-project-end-of-unit-11",
        "phase-2-docker-introduction-before-phase-3"
      ]
    },
    {
      "id": "phase-3",
      "title": "PHASE 3: INFERENCE SYSTEMS (Units 12-15)",
      "introHtml": "<hr>",
      "itemIds": [
        "phase-3-unit-12-vllm-model-serving",
        "phase-3-unit-13-quantization",
        "phase-3-unit-14-inference-performance-caching",
        "phase-3-unit-15-inference-gateway",
        "phase-3-phase-3-capstone-project-end-of-unit-15"
      ]
    },
    {
      "id": "phase-4",
      "title": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<blockquote><p><strong>Go is introduced in this phase.</strong> Units 16a-16b are Go fundamentals. Take your time here — you&#39;re learning a new language.</p></blockquote><hr>",
      "itemIds": [
        "phase-4-unit-16a-go-fundamentals",
        "phase-4-unit-16b-go-with-postgres-pgvector",
        "phase-4-unit-17a-rag-chunking-strategies",
        "phase-4-unit-17b-rag-hybrid-retrieval-re-ranking",
        "phase-4-unit-18-async-processing-job-queues",
        "phase-4-unit-19a-grpc-fundamentals",
        "phase-4-unit-19b-grpc-streaming-gateway",
        "phase-4-phase-4-capstone-project-end-of-unit-19b"
      ]
    },
    {
      "id": "phase-5",
      "title": "PHASE 5: OBSERVABILITY (Units 20-21)",
      "introHtml": "<hr>",
      "itemIds": [
        "phase-5-unit-20-metrics-logging-prometheus",
        "phase-5-unit-21a-opentelemetry-tracing",
        "phase-5-unit-21b-alerting-pii-redaction",
        "phase-5-phase-5-capstone-project-end-of-unit-21b"
      ]
    },
    {
      "id": "phase-6",
      "title": "PHASE 6: EVALUATION & GUARDRAILS (Units 22-23)",
      "introHtml": "<hr>",
      "itemIds": [
        "phase-6-unit-22-llm-evaluation-pipelines",
        "phase-6-unit-23-guardrails-security-structured-outputs"
      ]
    },
    {
      "id": "phase-7",
      "title": "PHASE 7: FINE-TUNING & CAPSTONE (Units 24-25)",
      "introHtml": "<hr>",
      "itemIds": [
        "phase-7-unit-24-production-fine-tuning-pipeline",
        "phase-7-unit-25-capstone-assembly-polish",
        "phase-7-final-capstone-checklist"
      ]
    }
  ],
  "items": [
    {
      "id": "phase-1-unit-1-async-python",
      "kind": "unit",
      "label": "Unit 1",
      "unitCode": "1",
      "title": "Async Python",
      "fullTitle": "Unit 1 — Async Python ⭐⭐",
      "difficulty": "⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> Non-blocking I/O in Python; environment setup; Git habits</p><p><strong>⏱️ Pacing:</strong> Take 10-14 days. This is your first unit — build the daily routine here.</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 easy)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-1-async-python-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li><code>asyncio</code> event loop: <code>async def</code>, <code>await</code>, <code>asyncio.gather</code>, <code>asyncio.create_task</code></li><li><code>httpx</code> async HTTP client vs <code>requests</code></li><li><code>asyncio.Semaphore</code> for concurrency limiting</li><li>Error handling in async contexts (<code>try/except</code> in coroutines)</li><li>Virtual environments, <code>.env</code> files, <code>.gitignore</code></li></ul><p><strong>Project: Async Multi-URL Fetcher</strong> Build a CLI tool that:</p><ol><li>Reads a list of URLs from a file</li><li>Fetches all pages concurrently with <code>httpx.AsyncClient</code></li><li>Extracts page titles using <code>BeautifulSoup</code></li><li>Limits concurrency to N simultaneous requests via <code>Semaphore</code></li><li>Outputs results as JSON with timing stats per URL</li><li>Includes a sync version for comparison — seeing the speedup is motivating</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Write a coroutine that simulates slow I/O with <code>asyncio.sleep</code> — run 10 concurrently vs sequentially and time them</li><li>Implement retry logic with exponential backoff in an async function</li><li>Build an async file reader that processes lines from multiple files simultaneously</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://realpython.com/async-io-python/\" target=\"_blank\" rel=\"noreferrer\">Real Python — Async IO in Python</a> — best single article on asyncio</li><li>📝 <a href=\"https://www.python-httpx.org/async/\" target=\"_blank\" rel=\"noreferrer\">Encode httpx docs</a> — async client usage</li><li>📝 <a href=\"https://www.roguelynn.com/words/asyncio-we-did-it-wrong/\" target=\"_blank\" rel=\"noreferrer\">Lynn Root — asyncio: We Did It Wrong</a> — common mistakes</li><li>📖 <em>Fluent Python</em> Ch. 21 (Asynchronous Programming)</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=Qb9s3UiMSTA\" target=\"_blank\" rel=\"noreferrer\">mCoding — Asyncio Complete Tutorial</a> (15 min)</li></ul>",
          "plainText": "Python (100%) Topics: - asyncio event loop: async def, await, asyncio.gather, asyncio.createtask - httpx async HTTP client vs requests - asyncio.Semaphore for concurrency limiting - Error handling in async contexts (try/except in coroutines) - Virtual environments, .env files, .gitignore Project: Async Multi-URL Fetcher Build a CLI tool that: 1. Reads a list of URLs from a file 2. Fetches all pages concurrently with httpx.AsyncClient 3. Extracts page titles using BeautifulSoup 4. Limits concurrency to N simultaneous requests via Semaphore 5. Outputs results as JSON with timing stats per URL 6. Includes a sync version for comparison — seeing the speedup is motivating Mini-exercises: - Write a coroutine that simulates slow I/O with asyncio.sleep — run 10 concurrently vs sequentially and time them - Implement retry logic with exponential backoff in an async function - Build an async file reader that processes lines from multiple files simultaneously Resources: - 📝 Real Python — Async IO in Python — best single article on asyncio - 📝 Encode httpx docs — async client usage - 📝 Lynn Root — asyncio: We Did It Wrong — common mistakes - 📖 Fluent Python Ch. 21 (Asynchronous Programming) - 🎥 mCoding — Asyncio Complete Tutorial (15 min)"
        },
        {
          "id": "phase-1-unit-1-async-python-leetcode-3-easy",
          "title": "LeetCode (3 easy)",
          "html": "<ul><li>Two Sum (#1) — HashMap pattern, solvable in 20 min</li><li>Valid Anagram (#242) — frequency counting</li><li>Contains Duplicate (#217) — set usage</li><li><strong>Why now:</strong> Warm-up problems. The goal is to establish the LeetCode habit, not struggle.</li></ul>",
          "plainText": "LeetCode (3 easy) - Two Sum (#1) — HashMap pattern, solvable in 20 min - Valid Anagram (#242) — frequency counting - Contains Duplicate (#217) — set usage - Why now: Warm-up problems. The goal is to establish the LeetCode habit, not struggle."
        },
        {
          "id": "phase-1-unit-1-async-python-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 Read <em>System Design Interview Vol 1</em> Ch. 1 — Scale from Zero to Millions</li><li>Think about: How would you design a web crawler?</li></ul>",
          "plainText": "Systems Design - 📖 Read System Design Interview Vol 1 Ch. 1 — Scale from Zero to Millions - Think about: How would you design a web crawler?"
        },
        {
          "id": "phase-1-unit-1-async-python-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Working async URL fetcher pushed to GitHub with proper README</li><li>[ ] Benchmark: async vs sync timing comparison (include in README)</li><li>[ ] Blog post: &quot;Python asyncio — What Actually Happens Under the Hood&quot;</li><li>[ ] 3 LeetCode solutions committed to <code>leetcode/</code> repo</li><li>[ ] <code>.gitignore</code>, <code>.env</code> setup, virtual environment all working</li></ul><hr>",
          "plainText": "Deliverables - [ ] Working async URL fetcher pushed to GitHub with proper README - [ ] Benchmark: async vs sync timing comparison (include in README) - [ ] Blog post: \"Python asyncio — What Actually Happens Under the Hood\" - [ ] 3 LeetCode solutions committed to leetcode/ repo - [ ] .gitignore, .env setup, virtual environment all working ---"
        }
      ],
      "searchText": "Unit 1 — Async Python ⭐⭐ Theme: Non-blocking I/O in Python; environment setup; Git habits ⏱️ Pacing: Take 10-14 days. This is your first unit — build the daily routine here. Python (100%) Topics: - asyncio event loop: async def, await, asyncio.gather, asyncio.createtask - httpx async HTTP client vs requests - asyncio.Semaphore for concurrency limiting - Error handling in async contexts (try/except in coroutines) - Virtual environments, .env files, .gitignore Project: Async Multi-URL Fetcher Build a CLI tool that: 1. Reads a list of URLs from a file 2. Fetches all pages concurrently with httpx.AsyncClient 3. Extracts page titles using BeautifulSoup 4. Limits concurrency to N simultaneous requests via Semaphore 5. Outputs results as JSON with timing stats per URL 6. Includes a sync version for comparison — seeing the speedup is motivating Mini-exercises: - Write a coroutine that simulates slow I/O with asyncio.sleep — run 10 concurrently vs sequentially and time them - Implement retry logic with exponential backoff in an async function - Build an async file reader that processes lines from multiple files simultaneously Resources: - 📝 Real Python — Async IO in Python — best single article on asyncio - 📝 Encode httpx docs — async client usage - 📝 Lynn Root — asyncio: We Did It Wrong — common mistakes - 📖 Fluent Python Ch. 21 (Asynchronous Programming) - 🎥 mCoding — Asyncio Complete Tutorial (15 min) LeetCode (3 easy) - Two Sum (#1) — HashMap pattern, solvable in 20 min - Valid Anagram (#242) — frequency counting - Contains Duplicate (#217) — set usage - Why now: Warm-up problems. The goal is to establish the LeetCode habit, not struggle. Systems Design - 📖 Read System Design Interview Vol 1 Ch. 1 — Scale from Zero to Millions - Think about: How would you design a web crawler? Deliverables - [ ] Working async URL fetcher pushed to GitHub with proper README - [ ] Benchmark: async vs sync timing comparison (include in README) - [ ] Blog post: \"Python asyncio — What Actually Happens Under the Hood\" - [ ] 3 LeetCode solutions committed to leetcode/ repo - [ ] .gitignore, .env setup, virtual environment all working ---"
    },
    {
      "id": "phase-1-unit-2-pydantic-v2-data-validation",
      "kind": "unit",
      "label": "Unit 2",
      "unitCode": "2",
      "title": "Pydantic v2 & Data Validation",
      "fullTitle": "Unit 2 — Pydantic v2 & Data Validation ⭐⭐",
      "difficulty": "⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> Production-grade data handling; type safety; LLM-specific schemas</p><p><strong>⏱️ Pacing:</strong> Take 10-14 days. Pydantic is foundational to everything in FastAPI and LLM work.</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 easy/medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-2-pydantic-v2-data-validation-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Pydantic v2: <code>BaseModel</code>, <code>Field</code>, validators (<code>@field_validator</code>, <code>@model_validator</code>)</li><li><code>model_dump()</code>, <code>model_validate()</code>, JSON schema generation</li><li>Discriminated unions, generic models</li><li>Settings management with <code>pydantic-settings</code></li><li>Custom types and serializers</li></ul><p><strong>Project: LLM Config Loader &amp; Request/Response Schema</strong> Build a Pydantic-based system that:</p><ol><li>Reads LLM app config from <code>.env</code> + YAML (model name, temperature, max tokens, API key)</li><li>Validates all config values (e.g., reject temperature &gt; 2.0, require API key format)</li><li>Defines complete LLM request/response schemas (messages, tool calls, usage stats)</li><li>Reports validation errors with clear messages</li><li>Outputs clean, typed data as JSON</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Model a complex nested API response (e.g., OpenAI chat completion response) with Pydantic</li><li>Write a custom validator that catches LLM-specific edge cases (temperature &gt; 2.0, empty messages list)</li><li>Build a discriminated union for different event types (user_signup, purchase, page_view)</li><li>Create a generic <code>PaginatedResponse[T]</code> model</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://docs.pydantic.dev/latest/\" target=\"_blank\" rel=\"noreferrer\">Pydantic v2 docs</a> — official, excellent</li><li>📝 <a href=\"https://docs.pydantic.dev/latest/blog/pydantic-v2-plan/\" target=\"_blank\" rel=\"noreferrer\">Samuel Colvin — Pydantic v2 Plan</a> — design decisions</li><li>📝 <a href=\"https://www.arjancodes.com/blog/python-pydantic-v2/\" target=\"_blank\" rel=\"noreferrer\">ArjanCodes — Pydantic v2 blog post</a> — practical examples</li><li>📖 <em>Fluent Python</em> Ch. 5 (Data Class Builders)</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=502XOB0u8OY\" target=\"_blank\" rel=\"noreferrer\">ArjanCodes — Pydantic V2 Tutorial</a> (25 min)</li></ul>",
          "plainText": "Python (100%) Topics: - Pydantic v2: BaseModel, Field, validators (@fieldvalidator, @modelvalidator) - modeldump(), modelvalidate(), JSON schema generation - Discriminated unions, generic models - Settings management with pydantic-settings - Custom types and serializers Project: LLM Config Loader & Request/Response Schema Build a Pydantic-based system that: 1. Reads LLM app config from .env + YAML (model name, temperature, max tokens, API key) 2. Validates all config values (e.g., reject temperature > 2.0, require API key format) 3. Defines complete LLM request/response schemas (messages, tool calls, usage stats) 4. Reports validation errors with clear messages 5. Outputs clean, typed data as JSON Mini-exercises: - Model a complex nested API response (e.g., OpenAI chat completion response) with Pydantic - Write a custom validator that catches LLM-specific edge cases (temperature > 2.0, empty messages list) - Build a discriminated union for different event types (usersignup, purchase, pageview) - Create a generic PaginatedResponse[T] model Resources: - 📝 Pydantic v2 docs — official, excellent - 📝 Samuel Colvin — Pydantic v2 Plan — design decisions - 📝 ArjanCodes — Pydantic v2 blog post — practical examples - 📖 Fluent Python Ch. 5 (Data Class Builders) - 🎥 ArjanCodes — Pydantic V2 Tutorial (25 min)"
        },
        {
          "id": "phase-1-unit-2-pydantic-v2-data-validation-leetcode-3-easy-medium",
          "title": "LeetCode (3 easy/medium)",
          "html": "<ul><li>Group Anagrams (#49) — hashmap + sorting</li><li>Valid Parentheses (#20) — stack basics</li><li>Merge Two Sorted Lists (#21) — linked list intro</li><li><strong>Why now:</strong> Data structure manipulation mirrors data validation logic</li></ul>",
          "plainText": "LeetCode (3 easy/medium) - Group Anagrams (#49) — hashmap + sorting - Valid Parentheses (#20) — stack basics - Merge Two Sorted Lists (#21) — linked list intro - Why now: Data structure manipulation mirrors data validation logic"
        },
        {
          "id": "phase-1-unit-2-pydantic-v2-data-validation-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 2 — Back-of-the-envelope Estimation</li><li>Practice: Estimate storage for 1M users sending 10 messages/day</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 1 Ch. 2 — Back-of-the-envelope Estimation - Practice: Estimate storage for 1M users sending 10 messages/day"
        },
        {
          "id": "phase-1-unit-2-pydantic-v2-data-validation-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Fully validated LLM request/response schema using Pydantic, pushed to GitHub</li><li>[ ] Pydantic settings config with <code>.env</code> file support</li><li>[ ] Blog post: &quot;Pydantic v2 — The Best Thing in Python You&#39;re Not Using Enough&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Fully validated LLM request/response schema using Pydantic, pushed to GitHub - [ ] Pydantic settings config with .env file support - [ ] Blog post: \"Pydantic v2 — The Best Thing in Python You're Not Using Enough\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 2 — Pydantic v2 & Data Validation ⭐⭐ Theme: Production-grade data handling; type safety; LLM-specific schemas ⏱️ Pacing: Take 10-14 days. Pydantic is foundational to everything in FastAPI and LLM work. Python (100%) Topics: - Pydantic v2: BaseModel, Field, validators (@fieldvalidator, @modelvalidator) - modeldump(), modelvalidate(), JSON schema generation - Discriminated unions, generic models - Settings management with pydantic-settings - Custom types and serializers Project: LLM Config Loader & Request/Response Schema Build a Pydantic-based system that: 1. Reads LLM app config from .env + YAML (model name, temperature, max tokens, API key) 2. Validates all config values (e.g., reject temperature > 2.0, require API key format) 3. Defines complete LLM request/response schemas (messages, tool calls, usage stats) 4. Reports validation errors with clear messages 5. Outputs clean, typed data as JSON Mini-exercises: - Model a complex nested API response (e.g., OpenAI chat completion response) with Pydantic - Write a custom validator that catches LLM-specific edge cases (temperature > 2.0, empty messages list) - Build a discriminated union for different event types (usersignup, purchase, pageview) - Create a generic PaginatedResponse[T] model Resources: - 📝 Pydantic v2 docs — official, excellent - 📝 Samuel Colvin — Pydantic v2 Plan — design decisions - 📝 ArjanCodes — Pydantic v2 blog post — practical examples - 📖 Fluent Python Ch. 5 (Data Class Builders) - 🎥 ArjanCodes — Pydantic V2 Tutorial (25 min) LeetCode (3 easy/medium) - Group Anagrams (#49) — hashmap + sorting - Valid Parentheses (#20) — stack basics - Merge Two Sorted Lists (#21) — linked list intro - Why now: Data structure manipulation mirrors data validation logic Systems Design - 📖 System Design Interview Vol 1 Ch. 2 — Back-of-the-envelope Estimation - Practice: Estimate storage for 1M users sending 10 messages/day Deliverables - [ ] Fully validated LLM request/response schema using Pydantic, pushed to GitHub - [ ] Pydantic settings config with .env file support - [ ] Blog post: \"Pydantic v2 — The Best Thing in Python You're Not Using Enough\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-1-unit-3-decorators-advanced-python",
      "kind": "unit",
      "label": "Unit 3",
      "unitCode": "3",
      "title": "Decorators & Advanced Python",
      "fullTitle": "Unit 3 — Decorators & Advanced Python ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> The three decorators you&#39;ll use constantly: <code>@retry</code>, <code>@timer</code>, <code>@cache</code></p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 easy/medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-3-decorators-advanced-python-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Decorators: function decorators, class decorators, <code>functools.wraps</code></li><li>Decorator factories (decorators with arguments)</li><li>Generators and <code>yield</code>, <code>yield from</code>, generator expressions</li><li>Context managers (<code>__enter__/__exit__</code>, <code>@contextmanager</code>)</li></ul><p><strong>Project: Decorator Library Module</strong> Build <code>utils/decorators.py</code> containing:</p><ol><li><code>@retry(max_attempts=3, backoff=2)</code> — with exponential backoff</li><li><code>@timer</code> — logs execution time</li><li><code>@cache(ttl=60)</code> — time-based cache decorator</li><li>Wire <code>@timer</code> into your Unit 2 Pydantic project — add timing to validation calls</li><li>Wire <code>@retry</code> into your Unit 1 async fetcher — retry failed HTTP requests</li></ol><p>This module lives in your GitHub and gets reused in every future project.</p><p><strong>Mini-exercises:</strong></p><ul><li><code>@validate_types</code> — decorator that checks function argument types at runtime</li><li>Generator that reads a 1GB+ file in chunks without loading it all into memory</li><li>Context manager for database transactions (commit on success, rollback on error)</li><li>Streaming response generator (yields chunks of text)</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://realpython.com/primer-on-python-decorators/\" target=\"_blank\" rel=\"noreferrer\">Real Python — Primer on Python Decorators</a> — definitive guide</li><li>📝 <a href=\"https://realpython.com/introduction-to-python-generators/\" target=\"_blank\" rel=\"noreferrer\">Real Python — Introduction to Python Generators</a></li><li>📝 <a href=\"https://treyhunner.com/2019/12/python-decorators/\" target=\"_blank\" rel=\"noreferrer\">Trey Hunner — Decorators</a> — excellent mental model</li><li>📖 <em>Fluent Python</em> Ch. 9 (Decorators and Closures), Ch. 17 (Iterators, Generators)</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=QH5fw9kxDQA\" target=\"_blank\" rel=\"noreferrer\">mCoding — Decorators in 12 Minutes</a></li></ul>",
          "plainText": "Python (100%) Topics: - Decorators: function decorators, class decorators, functools.wraps - Decorator factories (decorators with arguments) - Generators and yield, yield from, generator expressions - Context managers (enter/exit, @contextmanager) Project: Decorator Library Module Build utils/decorators.py containing: 1. @retry(maxattempts=3, backoff=2) — with exponential backoff 2. @timer — logs execution time 3. @cache(ttl=60) — time-based cache decorator 4. Wire @timer into your Unit 2 Pydantic project — add timing to validation calls 5. Wire @retry into your Unit 1 async fetcher — retry failed HTTP requests This module lives in your GitHub and gets reused in every future project. Mini-exercises: - @validatetypes — decorator that checks function argument types at runtime - Generator that reads a 1GB+ file in chunks without loading it all into memory - Context manager for database transactions (commit on success, rollback on error) - Streaming response generator (yields chunks of text) Resources: - 📝 Real Python — Primer on Python Decorators — definitive guide - 📝 Real Python — Introduction to Python Generators - 📝 Trey Hunner — Decorators — excellent mental model - 📖 Fluent Python Ch. 9 (Decorators and Closures), Ch. 17 (Iterators, Generators) - 🎥 mCoding — Decorators in 12 Minutes"
        },
        {
          "id": "phase-1-unit-3-decorators-advanced-python-leetcode-3-easy-medium",
          "title": "LeetCode (3 easy/medium)",
          "html": "<ul><li>Implement Stack using Queues (#225) — design pattern</li><li>Min Stack (#155) — stack with O(1) min</li><li>Generate Parentheses (#22) — recursion + backtracking intro</li><li><strong>Why now:</strong> Recursion and stack patterns connect to decorator chaining</li></ul>",
          "plainText": "LeetCode (3 easy/medium) - Implement Stack using Queues (#225) — design pattern - Min Stack (#155) — stack with O(1) min - Generate Parentheses (#22) — recursion + backtracking intro - Why now: Recursion and stack patterns connect to decorator chaining"
        },
        {
          "id": "phase-1-unit-3-decorators-advanced-python-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 3 — A Framework for System Design</li><li>Practice: Design a URL shortener</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 1 Ch. 3 — A Framework for System Design - Practice: Design a URL shortener"
        },
        {
          "id": "phase-1-unit-3-decorators-advanced-python-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] <code>utils/decorators.py</code> module with <code>@retry</code>, <code>@timer</code>, <code>@cache</code> — pushed to GitHub</li><li>[ ] Decorators wired into Unit 1 and Unit 2 projects</li><li>[ ] Streaming file processor using generators (handle 500MB+ file)</li><li>[ ] Blog post: &quot;Python Decorators — From Confusion to Mastery&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] utils/decorators.py module with @retry, @timer, @cache — pushed to GitHub - [ ] Decorators wired into Unit 1 and Unit 2 projects - [ ] Streaming file processor using generators (handle 500MB+ file) - [ ] Blog post: \"Python Decorators — From Confusion to Mastery\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 3 — Decorators & Advanced Python ⭐⭐⭐ Theme: The three decorators you'll use constantly: @retry, @timer, @cache Python (100%) Topics: - Decorators: function decorators, class decorators, functools.wraps - Decorator factories (decorators with arguments) - Generators and yield, yield from, generator expressions - Context managers (enter/exit, @contextmanager) Project: Decorator Library Module Build utils/decorators.py containing: 1. @retry(maxattempts=3, backoff=2) — with exponential backoff 2. @timer — logs execution time 3. @cache(ttl=60) — time-based cache decorator 4. Wire @timer into your Unit 2 Pydantic project — add timing to validation calls 5. Wire @retry into your Unit 1 async fetcher — retry failed HTTP requests This module lives in your GitHub and gets reused in every future project. Mini-exercises: - @validatetypes — decorator that checks function argument types at runtime - Generator that reads a 1GB+ file in chunks without loading it all into memory - Context manager for database transactions (commit on success, rollback on error) - Streaming response generator (yields chunks of text) Resources: - 📝 Real Python — Primer on Python Decorators — definitive guide - 📝 Real Python — Introduction to Python Generators - 📝 Trey Hunner — Decorators — excellent mental model - 📖 Fluent Python Ch. 9 (Decorators and Closures), Ch. 17 (Iterators, Generators) - 🎥 mCoding — Decorators in 12 Minutes LeetCode (3 easy/medium) - Implement Stack using Queues (#225) — design pattern - Min Stack (#155) — stack with O(1) min - Generate Parentheses (#22) — recursion + backtracking intro - Why now: Recursion and stack patterns connect to decorator chaining Systems Design - 📖 System Design Interview Vol 1 Ch. 3 — A Framework for System Design - Practice: Design a URL shortener Deliverables - [ ] utils/decorators.py module with @retry, @timer, @cache — pushed to GitHub - [ ] Decorators wired into Unit 1 and Unit 2 projects - [ ] Streaming file processor using generators (handle 500MB+ file) - [ ] Blog post: \"Python Decorators — From Confusion to Mastery\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-1-unit-4a-fastapi-basics",
      "kind": "unit",
      "label": "Unit 4a",
      "unitCode": "4a",
      "title": "FastAPI Basics",
      "fullTitle": "Unit 4a — FastAPI Basics ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> Routing, Pydantic integration, dependency injection, error handling</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-4a-fastapi-basics-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>FastAPI: path/query params, request bodies, response models</li><li>Dependency injection system (<code>Depends()</code>)</li><li>Exception handlers and custom error responses</li><li>Authentication: OAuth2, JWT tokens</li><li>OpenAPI auto-documentation</li><li><code>pytest</code> async tests using <code>httpx.AsyncClient</code></li></ul><p><strong>Project: Notes API with Auth</strong> Build a FastAPI service that:</p><ol><li>CRUD API for &quot;notes&quot; with SQLite + async SQLAlchemy</li><li>Pydantic models for all request/response schemas (reuse Unit 2 patterns)</li><li>JWT authentication from scratch</li><li>Dependency injection for auth and database sessions</li><li>Custom exception handlers with structured error responses</li><li>Full OpenAPI docs with examples</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Implement a file upload endpoint with validation</li><li>Write <code>pytest</code> async tests achieving &gt;80% coverage</li><li>Add your <code>@timer</code> decorator (Unit 3) as middleware for request timing</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://fastapi.tiangolo.com/tutorial/\" target=\"_blank\" rel=\"noreferrer\">FastAPI Official Tutorial</a> — gold standard docs</li><li>📝 <a href=\"https://testdriven.io/blog/fastapi-crud/\" target=\"_blank\" rel=\"noreferrer\">TestDriven.io — Developing APIs with FastAPI</a> — practical CRUD guide</li><li>📝 <a href=\"https://realpython.com/fastapi-python-web-apis/\" target=\"_blank\" rel=\"noreferrer\">Real Python — FastAPI introduction</a></li><li>📖 <em>Fluent Python</em> Ch. 21 — revisit async in context of web servers</li></ul>",
          "plainText": "Python (100%) Topics: - FastAPI: path/query params, request bodies, response models - Dependency injection system (Depends()) - Exception handlers and custom error responses - Authentication: OAuth2, JWT tokens - OpenAPI auto-documentation - pytest async tests using httpx.AsyncClient Project: Notes API with Auth Build a FastAPI service that: 1. CRUD API for \"notes\" with SQLite + async SQLAlchemy 2. Pydantic models for all request/response schemas (reuse Unit 2 patterns) 3. JWT authentication from scratch 4. Dependency injection for auth and database sessions 5. Custom exception handlers with structured error responses 6. Full OpenAPI docs with examples Mini-exercises: - Implement a file upload endpoint with validation - Write pytest async tests achieving >80% coverage - Add your @timer decorator (Unit 3) as middleware for request timing Resources: - 📝 FastAPI Official Tutorial — gold standard docs - 📝 TestDriven.io — Developing APIs with FastAPI — practical CRUD guide - 📝 Real Python — FastAPI introduction - 📖 Fluent Python Ch. 21 — revisit async in context of web servers"
        },
        {
          "id": "phase-1-unit-4a-fastapi-basics-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>LRU Cache (#146) — directly relevant to API caching</li><li>Top K Frequent Elements (#347) — heap/bucket sort</li><li>Product of Array Except Self (#238) — array tricks</li><li><strong>Why now:</strong> LRU Cache is literally an API design pattern</li></ul>",
          "plainText": "LeetCode (3 medium) - LRU Cache (#146) — directly relevant to API caching - Top K Frequent Elements (#347) — heap/bucket sort - Product of Array Except Self (#238) — array tricks - Why now: LRU Cache is literally an API design pattern"
        },
        {
          "id": "phase-1-unit-4a-fastapi-basics-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 4 — Design a Rate Limiter</li><li><strong>Connect:</strong> Implement the rate limiter you just read about as FastAPI middleware</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 1 Ch. 4 — Design a Rate Limiter - Connect: Implement the rate limiter you just read about as FastAPI middleware"
        },
        {
          "id": "phase-1-unit-4a-fastapi-basics-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Working Notes API with auth, error handling, and full OpenAPI docs</li><li>[ ] Async test suite with &gt;80% coverage</li><li>[ ] Rate limiter middleware (token bucket or sliding window)</li><li>[ ] Blog post: &quot;Building Production APIs with FastAPI — Beyond the Tutorial&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Working Notes API with auth, error handling, and full OpenAPI docs - [ ] Async test suite with >80% coverage - [ ] Rate limiter middleware (token bucket or sliding window) - [ ] Blog post: \"Building Production APIs with FastAPI — Beyond the Tutorial\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 4a — FastAPI Basics ⭐⭐⭐ Theme: Routing, Pydantic integration, dependency injection, error handling Python (100%) Topics: - FastAPI: path/query params, request bodies, response models - Dependency injection system (Depends()) - Exception handlers and custom error responses - Authentication: OAuth2, JWT tokens - OpenAPI auto-documentation - pytest async tests using httpx.AsyncClient Project: Notes API with Auth Build a FastAPI service that: 1. CRUD API for \"notes\" with SQLite + async SQLAlchemy 2. Pydantic models for all request/response schemas (reuse Unit 2 patterns) 3. JWT authentication from scratch 4. Dependency injection for auth and database sessions 5. Custom exception handlers with structured error responses 6. Full OpenAPI docs with examples Mini-exercises: - Implement a file upload endpoint with validation - Write pytest async tests achieving >80% coverage - Add your @timer decorator (Unit 3) as middleware for request timing Resources: - 📝 FastAPI Official Tutorial — gold standard docs - 📝 TestDriven.io — Developing APIs with FastAPI — practical CRUD guide - 📝 Real Python — FastAPI introduction - 📖 Fluent Python Ch. 21 — revisit async in context of web servers LeetCode (3 medium) - LRU Cache (#146) — directly relevant to API caching - Top K Frequent Elements (#347) — heap/bucket sort - Product of Array Except Self (#238) — array tricks - Why now: LRU Cache is literally an API design pattern Systems Design - 📖 System Design Interview Vol 1 Ch. 4 — Design a Rate Limiter - Connect: Implement the rate limiter you just read about as FastAPI middleware Deliverables - [ ] Working Notes API with auth, error handling, and full OpenAPI docs - [ ] Async test suite with >80% coverage - [ ] Rate limiter middleware (token bucket or sliding window) - [ ] Blog post: \"Building Production APIs with FastAPI — Beyond the Tutorial\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-1-unit-4b-fastapi-streaming-sse",
      "kind": "unit",
      "label": "Unit 4b",
      "unitCode": "4b",
      "title": "FastAPI Streaming & SSE",
      "fullTitle": "Unit 4b — FastAPI Streaming & SSE ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> StreamingResponse, Server-Sent Events, async generators, OpenAI integration</p>",
      "sectionTitles": [
        "Python (100%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-4b-fastapi-streaming-sse-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li><code>StreamingResponse</code> and async generators</li><li>Server-Sent Events (SSE) protocol</li><li>OpenAI API streaming (<code>stream=True</code>)</li><li>Background tasks in FastAPI</li><li>CORS middleware</li><li>WebSocket basics</li></ul><p><strong>Project: Streaming Chat Endpoint</strong> Build a FastAPI service that:</p><ol><li>Accepts chat messages via POST</li><li>Hits OpenAI API with streaming enabled</li><li>Streams tokens back to the client via SSE</li><li>Background tasks for logging conversations</li><li>CORS middleware for browser access</li><li>Token counting per request</li></ol><p>This is the first thing that feels like real LLM backend work.</p><p><strong>Mini-exercises:</strong></p><ul><li>Build a WebSocket echo server with connection management</li><li>Compare streaming vs non-streaming latency for different response lengths</li><li>Implement automatic conversation summarization when context fills up</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://devblog.christoph-scheine.at/posts/server-sent-events-with-fastapi/\" target=\"_blank\" rel=\"noreferrer\">Christoph Scheinine — SSE with FastAPI</a> — streaming patterns</li><li>above not working, use - (https://medium.com/@inandelibas/real-time-notifications-in-python-using-sse-with-fastapi-1c8c54746eb7)</li><li>📝 <a href=\"https://platform.openai.com/docs/guides/chat-completions\" target=\"_blank\" rel=\"noreferrer\">OpenAI API Docs — Streaming</a></li><li>🎥 <a href=\"https://www.youtube.com/watch?v=0sOvCWFmrtA\" target=\"_blank\" rel=\"noreferrer\">Patrick Loeber — FastAPI Full Course</a> (1hr)</li></ul>",
          "plainText": "Python (100%) Topics: - StreamingResponse and async generators - Server-Sent Events (SSE) protocol - OpenAI API streaming (stream=True) - Background tasks in FastAPI - CORS middleware - WebSocket basics Project: Streaming Chat Endpoint Build a FastAPI service that: 1. Accepts chat messages via POST 2. Hits OpenAI API with streaming enabled 3. Streams tokens back to the client via SSE 4. Background tasks for logging conversations 5. CORS middleware for browser access 6. Token counting per request This is the first thing that feels like real LLM backend work. Mini-exercises: - Build a WebSocket echo server with connection management - Compare streaming vs non-streaming latency for different response lengths - Implement automatic conversation summarization when context fills up Resources: - 📝 Christoph Scheinine — SSE with FastAPI — streaming patterns - above not working, use - (https://medium.com/@inandelibas/real-time-notifications-in-python-using-sse-with-fastapi-1c8c54746eb7) - 📝 OpenAI API Docs — Streaming - 🎥 Patrick Loeber — FastAPI Full Course (1hr)"
        },
        {
          "id": "phase-1-unit-4b-fastapi-streaming-sse-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Streaming chat endpoint that hits OpenAI and streams tokens back via SSE</li><li>[ ] Token counting and cost tracking per request</li><li>[ ] Blog post: &quot;Streaming LLM Responses with FastAPI and SSE&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Streaming chat endpoint that hits OpenAI and streams tokens back via SSE - [ ] Token counting and cost tracking per request - [ ] Blog post: \"Streaming LLM Responses with FastAPI and SSE\" ---"
        }
      ],
      "searchText": "Unit 4b — FastAPI Streaming & SSE ⭐⭐⭐ Theme: StreamingResponse, Server-Sent Events, async generators, OpenAI integration Python (100%) Topics: - StreamingResponse and async generators - Server-Sent Events (SSE) protocol - OpenAI API streaming (stream=True) - Background tasks in FastAPI - CORS middleware - WebSocket basics Project: Streaming Chat Endpoint Build a FastAPI service that: 1. Accepts chat messages via POST 2. Hits OpenAI API with streaming enabled 3. Streams tokens back to the client via SSE 4. Background tasks for logging conversations 5. CORS middleware for browser access 6. Token counting per request This is the first thing that feels like real LLM backend work. Mini-exercises: - Build a WebSocket echo server with connection management - Compare streaming vs non-streaming latency for different response lengths - Implement automatic conversation summarization when context fills up Resources: - 📝 Christoph Scheinine — SSE with FastAPI — streaming patterns - above not working, use - (https://medium.com/@inandelibas/real-time-notifications-in-python-using-sse-with-fastapi-1c8c54746eb7) - 📝 OpenAI API Docs — Streaming - 🎥 Patrick Loeber — FastAPI Full Course (1hr) Deliverables - [ ] Streaming chat endpoint that hits OpenAI and streams tokens back via SSE - [ ] Token counting and cost tracking per request - [ ] Blog post: \"Streaming LLM Responses with FastAPI and SSE\" ---"
    },
    {
      "id": "phase-1-unit-5-tokenization-llm-fundamentals",
      "kind": "unit",
      "label": "Unit 5",
      "unitCode": "5",
      "title": "Tokenization & LLM Fundamentals",
      "fullTitle": "Unit 5 — Tokenization & LLM Fundamentals ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> Understanding LLMs from the ground up — no more black boxes</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-5-tokenization-llm-fundamentals-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Transformer architecture (conceptual — attention, self-attention, multi-head attention)</li><li>Tokenization: BPE, WordPiece, SentencePiece</li><li><code>tiktoken</code> library for OpenAI token counting</li><li>Token economics: cost estimation per model</li><li>Prompt engineering basics: system prompts, few-shot, chain-of-thought</li></ul><p><strong>Reading (do this week, not as a weekend dump):</strong></p><ul><li>Read the &quot;Attention Is All You Need&quot; paper (first 5 pages + conclusions). Write a 1-page summary in your own words.</li><li>Watch <a href=\"https://www.youtube.com/watch?v=kCc8FmEb1nY\" target=\"_blank\" rel=\"noreferrer\">Karpathy&amp;#39;s &amp;quot;Let&amp;#39;s build GPT&amp;quot;</a> in 30-min segments across the unit. Don&#39;t binge it.</li></ul><p><strong>Project: Token Cost Estimator</strong> Build a CLI/web tool that:</p><ol><li>Takes text input and shows tokenization across different models (GPT-4, Claude, Llama)</li><li>Visualizes token boundaries with color coding</li><li>Estimates API cost for different providers</li><li>Compares tokenizer efficiency across languages (English vs Chinese vs code)</li><li>Includes a prompt template library with token count estimates</li></ol><p>This tool becomes reusable in every future project.</p><p><strong>Mini-exercises:</strong></p><ul><li>Implement a simple character-level tokenizer from scratch</li><li>Implement basic BPE algorithm (just the merge step, ~50 lines)</li><li>Build a &quot;token budget&quot; calculator for conversation context windows</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://www.youtube.com/watch?v=zduSFxRajkE\" target=\"_blank\" rel=\"noreferrer\">Andrej Karpathy — Let&amp;#39;s build the GPT Tokenizer</a> — essential watch</li><li>📝 <a href=\"https://jalammar.github.io/illustrated-transformer/\" target=\"_blank\" rel=\"noreferrer\">Jay Alammar — The Illustrated Transformer</a> — THE visual guide</li><li>📝 <a href=\"https://jalammar.github.io/illustrated-gpt2/\" target=\"_blank\" rel=\"noreferrer\">Jay Alammar — The Illustrated GPT-2</a></li><li>📝 <a href=\"https://lilianweng.github.io/posts/2018-06-24-attention/\" target=\"_blank\" rel=\"noreferrer\">Lilian Weng — Attention? Attention!</a></li><li>📝 <a href=\"https://platform.openai.com/tokenizer\" target=\"_blank\" rel=\"noreferrer\">OpenAI Tokenizer</a> — interactive tool</li><li>📝 <a href=\"https://huyenchip.com/2023/04/11/llm-engineering.html\" target=\"_blank\" rel=\"noreferrer\">Chip Huyen — Building LLM applications for production</a></li><li>📖 <em>Hands-On Large Language Models</em> Ch. 1-3</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=wjZofJX0v4M\" target=\"_blank\" rel=\"noreferrer\">3Blue1Brown — But what is a GPT?</a> — visual intuition</li></ul>",
          "plainText": "Python (100%) Topics: - Transformer architecture (conceptual — attention, self-attention, multi-head attention) - Tokenization: BPE, WordPiece, SentencePiece - tiktoken library for OpenAI token counting - Token economics: cost estimation per model - Prompt engineering basics: system prompts, few-shot, chain-of-thought Reading (do this week, not as a weekend dump): - Read the \"Attention Is All You Need\" paper (first 5 pages + conclusions). Write a 1-page summary in your own words. - Watch Karpathy's \"Let's build GPT\" in 30-min segments across the unit. Don't binge it. Project: Token Cost Estimator Build a CLI/web tool that: 1. Takes text input and shows tokenization across different models (GPT-4, Claude, Llama) 2. Visualizes token boundaries with color coding 3. Estimates API cost for different providers 4. Compares tokenizer efficiency across languages (English vs Chinese vs code) 5. Includes a prompt template library with token count estimates This tool becomes reusable in every future project. Mini-exercises: - Implement a simple character-level tokenizer from scratch - Implement basic BPE algorithm (just the merge step, 50 lines) - Build a \"token budget\" calculator for conversation context windows Resources: - 📝 Andrej Karpathy — Let's build the GPT Tokenizer — essential watch - 📝 Jay Alammar — The Illustrated Transformer — THE visual guide - 📝 Jay Alammar — The Illustrated GPT-2 - 📝 Lilian Weng — Attention? Attention! - 📝 OpenAI Tokenizer — interactive tool - 📝 Chip Huyen — Building LLM applications for production - 📖 Hands-On Large Language Models Ch. 1-3 - 🎥 3Blue1Brown — But what is a GPT? — visual intuition"
        },
        {
          "id": "phase-1-unit-5-tokenization-llm-fundamentals-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Implement Trie (#208) — prefix structures are relevant to tokenization</li><li>Longest Substring Without Repeating Characters (#3) — sliding window, like token windows</li><li>Encode and Decode Strings (#271) — serialization</li><li><strong>Why now:</strong> Trie/string/window problems mirror tokenization concepts</li></ul>",
          "plainText": "LeetCode (3 medium) - Implement Trie (#208) — prefix structures are relevant to tokenization - Longest Substring Without Repeating Characters (#3) — sliding window, like token windows - Encode and Decode Strings (#271) — serialization - Why now: Trie/string/window problems mirror tokenization concepts"
        },
        {
          "id": "phase-1-unit-5-tokenization-llm-fundamentals-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 5 — Design Consistent Hashing</li><li>Think about: How would you distribute LLM inference across multiple GPUs?</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 1 Ch. 5 — Design Consistent Hashing - Think about: How would you distribute LLM inference across multiple GPUs?"
        },
        {
          "id": "phase-1-unit-5-tokenization-llm-fundamentals-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Token cost estimator tool with multi-model comparison — pushed to GitHub</li><li>[ ] BPE algorithm implementation from scratch (~50-100 lines)</li><li>[ ] 1-page summary of &quot;Attention Is All You Need&quot; in your own words</li><li>[ ] Blog post: &quot;What Happens Before the LLM Sees Your Text — Tokenization Explained&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Token cost estimator tool with multi-model comparison — pushed to GitHub - [ ] BPE algorithm implementation from scratch (50-100 lines) - [ ] 1-page summary of \"Attention Is All You Need\" in your own words - [ ] Blog post: \"What Happens Before the LLM Sees Your Text — Tokenization Explained\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 5 — Tokenization & LLM Fundamentals ⭐⭐⭐ Theme: Understanding LLMs from the ground up — no more black boxes Python (100%) Topics: - Transformer architecture (conceptual — attention, self-attention, multi-head attention) - Tokenization: BPE, WordPiece, SentencePiece - tiktoken library for OpenAI token counting - Token economics: cost estimation per model - Prompt engineering basics: system prompts, few-shot, chain-of-thought Reading (do this week, not as a weekend dump): - Read the \"Attention Is All You Need\" paper (first 5 pages + conclusions). Write a 1-page summary in your own words. - Watch Karpathy's \"Let's build GPT\" in 30-min segments across the unit. Don't binge it. Project: Token Cost Estimator Build a CLI/web tool that: 1. Takes text input and shows tokenization across different models (GPT-4, Claude, Llama) 2. Visualizes token boundaries with color coding 3. Estimates API cost for different providers 4. Compares tokenizer efficiency across languages (English vs Chinese vs code) 5. Includes a prompt template library with token count estimates This tool becomes reusable in every future project. Mini-exercises: - Implement a simple character-level tokenizer from scratch - Implement basic BPE algorithm (just the merge step, 50 lines) - Build a \"token budget\" calculator for conversation context windows Resources: - 📝 Andrej Karpathy — Let's build the GPT Tokenizer — essential watch - 📝 Jay Alammar — The Illustrated Transformer — THE visual guide - 📝 Jay Alammar — The Illustrated GPT-2 - 📝 Lilian Weng — Attention? Attention! - 📝 OpenAI Tokenizer — interactive tool - 📝 Chip Huyen — Building LLM applications for production - 📖 Hands-On Large Language Models Ch. 1-3 - 🎥 3Blue1Brown — But what is a GPT? — visual intuition LeetCode (3 medium) - Implement Trie (#208) — prefix structures are relevant to tokenization - Longest Substring Without Repeating Characters (#3) — sliding window, like token windows - Encode and Decode Strings (#271) — serialization - Why now: Trie/string/window problems mirror tokenization concepts Systems Design - 📖 System Design Interview Vol 1 Ch. 5 — Design Consistent Hashing - Think about: How would you distribute LLM inference across multiple GPUs? Deliverables - [ ] Token cost estimator tool with multi-model comparison — pushed to GitHub - [ ] BPE algorithm implementation from scratch (50-100 lines) - [ ] 1-page summary of \"Attention Is All You Need\" in your own words - [ ] Blog post: \"What Happens Before the LLM Sees Your Text — Tokenization Explained\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-1-unit-6-llm-sampling-internals",
      "kind": "unit",
      "label": "Unit 6",
      "unitCode": "6",
      "title": "LLM Sampling & Internals",
      "fullTitle": "Unit 6 — LLM Sampling & Internals ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> Sampling algorithms; understanding how LLMs generate text</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-1-unit-6-llm-sampling-internals-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Sampling: temperature, top-k, top-p (nucleus sampling)</li><li>Logits, softmax, probability distributions</li><li>Beam search vs greedy vs sampling</li><li>KV Cache concept (conceptual)</li></ul><p><strong>Project: Sampling Parameter Explorer</strong> Build an interactive tool that:</p><ol><li>Loads a small model (GPT-2 or DistilGPT-2 via HuggingFace)</li><li>Lets user adjust temperature, top-k, top-p in real-time</li><li>Shows the probability distribution over next tokens</li><li>Visualizes how sampling parameters affect output diversity</li><li>Side-by-side generation comparison with different settings</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Implement greedy decoding from scratch (10 lines with HuggingFace model)</li><li>Implement top-k sampling from scratch</li><li>Implement nucleus (top-p) sampling from scratch</li><li>Compare output quality: greedy vs temperature=0.7 vs temperature=1.2</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/\" target=\"_blank\" rel=\"noreferrer\">Lilian Weng — Controllable Neural Text Generation</a> — sampling deep dive</li><li>📝 <a href=\"https://huggingface.co/blog/how-to-generate\" target=\"_blank\" rel=\"noreferrer\">HuggingFace — How to Generate Text</a> — excellent practical guide</li><li>📖 <em>Hands-On Large Language Models</em> Ch. 4-5</li></ul>",
          "plainText": "Python (100%) Topics: - Sampling: temperature, top-k, top-p (nucleus sampling) - Logits, softmax, probability distributions - Beam search vs greedy vs sampling - KV Cache concept (conceptual) Project: Sampling Parameter Explorer Build an interactive tool that: 1. Loads a small model (GPT-2 or DistilGPT-2 via HuggingFace) 2. Lets user adjust temperature, top-k, top-p in real-time 3. Shows the probability distribution over next tokens 4. Visualizes how sampling parameters affect output diversity 5. Side-by-side generation comparison with different settings Mini-exercises: - Implement greedy decoding from scratch (10 lines with HuggingFace model) - Implement top-k sampling from scratch - Implement nucleus (top-p) sampling from scratch - Compare output quality: greedy vs temperature=0.7 vs temperature=1.2 Resources: - 📝 Lilian Weng — Controllable Neural Text Generation — sampling deep dive - 📝 HuggingFace — How to Generate Text — excellent practical guide - 📖 Hands-On Large Language Models Ch. 4-5"
        },
        {
          "id": "phase-1-unit-6-llm-sampling-internals-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Kth Largest Element in Stream (#703) — heap, like top-k sampling</li><li>Task Scheduler (#621) — greedy algorithms</li><li>Coin Change (#322) — intro to dynamic programming</li><li><strong>Why now:</strong> Top-k and greedy patterns directly mirror sampling algorithms</li></ul>",
          "plainText": "LeetCode (3 medium) - Kth Largest Element in Stream (#703) — heap, like top-k sampling - Task Scheduler (#621) — greedy algorithms - Coin Change (#322) — intro to dynamic programming - Why now: Top-k and greedy patterns directly mirror sampling algorithms"
        },
        {
          "id": "phase-1-unit-6-llm-sampling-internals-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 6 — Design a Key-Value Store</li><li><strong>Connect:</strong> KV stores ↔ KV cache in transformers (conceptual bridge)</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 1 Ch. 6 — Design a Key-Value Store - Connect: KV stores ↔ KV cache in transformers (conceptual bridge)"
        },
        {
          "id": "phase-1-unit-6-llm-sampling-internals-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Sampling playground with interactive controls showing probability distributions</li><li>[ ] All three sampling implementations from scratch (greedy, top-k, top-p)</li><li>[ ] Blog post: &quot;Sampling in LLMs — Temperature is Not What You Think&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Sampling playground with interactive controls showing probability distributions - [ ] All three sampling implementations from scratch (greedy, top-k, top-p) - [ ] Blog post: \"Sampling in LLMs — Temperature is Not What You Think\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 6 — LLM Sampling & Internals ⭐⭐⭐⭐ Theme: Sampling algorithms; understanding how LLMs generate text Python (100%) Topics: - Sampling: temperature, top-k, top-p (nucleus sampling) - Logits, softmax, probability distributions - Beam search vs greedy vs sampling - KV Cache concept (conceptual) Project: Sampling Parameter Explorer Build an interactive tool that: 1. Loads a small model (GPT-2 or DistilGPT-2 via HuggingFace) 2. Lets user adjust temperature, top-k, top-p in real-time 3. Shows the probability distribution over next tokens 4. Visualizes how sampling parameters affect output diversity 5. Side-by-side generation comparison with different settings Mini-exercises: - Implement greedy decoding from scratch (10 lines with HuggingFace model) - Implement top-k sampling from scratch - Implement nucleus (top-p) sampling from scratch - Compare output quality: greedy vs temperature=0.7 vs temperature=1.2 Resources: - 📝 Lilian Weng — Controllable Neural Text Generation — sampling deep dive - 📝 HuggingFace — How to Generate Text — excellent practical guide - 📖 Hands-On Large Language Models Ch. 4-5 LeetCode (3 medium) - Kth Largest Element in Stream (#703) — heap, like top-k sampling - Task Scheduler (#621) — greedy algorithms - Coin Change (#322) — intro to dynamic programming - Why now: Top-k and greedy patterns directly mirror sampling algorithms Systems Design - 📖 System Design Interview Vol 1 Ch. 6 — Design a Key-Value Store - Connect: KV stores ↔ KV cache in transformers (conceptual bridge) Deliverables - [ ] Sampling playground with interactive controls showing probability distributions - [ ] All three sampling implementations from scratch (greedy, top-k, top-p) - [ ] Blog post: \"Sampling in LLMs — Temperature is Not What You Think\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-1-unit-7-review-consolidation",
      "kind": "unit",
      "label": "Unit 7",
      "unitCode": "7",
      "title": "Review & Consolidation",
      "fullTitle": "Unit 7 — Review & Consolidation ⭐⭐",
      "difficulty": "⭐⭐",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "<p><strong>Theme:</strong> Refactor, test, document everything from Units 1-6</p><p><strong>⏱️ Take 3-5 days for this.</strong> Don&#39;t skip it.</p><ul><li>Refactor all projects from Units 1-6</li><li>Write tests for any untested code</li><li>Ensure every project has a proper README with setup instructions</li><li>Create an architecture diagram connecting all your projects</li><li>Write a &quot;Phase 1 Retrospective&quot; blog post</li><li><strong>Interview prep:</strong> Write answers to 3 behavioral questions about what you built</li></ul><hr>",
      "sectionTitles": [],
      "sections": [],
      "searchText": "Unit 7 — Review & Consolidation ⭐⭐ Theme: Refactor, test, document everything from Units 1-6 ⏱️ Take 3-5 days for this. Don't skip it. - Refactor all projects from Units 1-6 - Write tests for any untested code - Ensure every project has a proper README with setup instructions - Create an architecture diagram connecting all your projects - Write a \"Phase 1 Retrospective\" blog post - Interview prep: Write answers to 3 behavioral questions about what you built ---"
    },
    {
      "id": "phase-1-phase-1-capstone-project-end-of-unit-7",
      "kind": "capstone",
      "label": "Phase Capstone",
      "unitCode": "",
      "title": "PHASE 1 CAPSTONE PROJECT (End of Unit 7)",
      "fullTitle": "PHASE 1 CAPSTONE PROJECT (End of Unit 7)",
      "difficulty": "",
      "phaseId": "phase-1",
      "phaseTitle": "PHASE 1: FOUNDATIONS (Units 1-8)",
      "introHtml": "",
      "sectionTitles": [
        "Async LLM Job Processor"
      ],
      "sections": [
        {
          "id": "phase-1-phase-1-capstone-project-end-of-unit-7-async-llm-job-processor",
          "title": "Async LLM Job Processor",
          "html": "<p>Combine Units 1-6 skills into one system:</p><ul><li><strong>Async processing</strong> (Unit 1) for concurrent job handling</li><li><strong>Pydantic models</strong> (Unit 2) for job request/response schemas</li><li><strong>Decorators</strong> (Unit 3) for retry logic and timing</li><li><strong>FastAPI endpoint</strong> (Unit 4a/4b) to accept and stream results</li><li><strong>Token counting</strong> (Unit 5) for cost tracking</li><li><strong>Sampling config</strong> (Unit 6) for generation parameters</li></ul><p><strong>Architecture:</strong></p><ul><li>FastAPI endpoint accepts a prompt → enqueues to <code>asyncio.Queue</code></li><li>Worker coroutines process jobs against OpenAI API</li><li>Results returned via SSE streaming</li><li>Add Redis as the queue backend (one-line change, teaches a production pattern)</li></ul><p><strong>Deliverable:</strong> Working async job processor with Redis queue, SSE streaming, and cost tracking. Push to GitHub as your first portfolio piece.</p><hr>",
          "plainText": "Async LLM Job Processor Combine Units 1-6 skills into one system: - Async processing (Unit 1) for concurrent job handling - Pydantic models (Unit 2) for job request/response schemas - Decorators (Unit 3) for retry logic and timing - FastAPI endpoint (Unit 4a/4b) to accept and stream results - Token counting (Unit 5) for cost tracking - Sampling config (Unit 6) for generation parameters Architecture: - FastAPI endpoint accepts a prompt → enqueues to asyncio.Queue - Worker coroutines process jobs against OpenAI API - Results returned via SSE streaming - Add Redis as the queue backend (one-line change, teaches a production pattern) Deliverable: Working async job processor with Redis queue, SSE streaming, and cost tracking. Push to GitHub as your first portfolio piece. ---"
        }
      ],
      "searchText": "PHASE 1 CAPSTONE PROJECT (End of Unit 7) Async LLM Job Processor Combine Units 1-6 skills into one system: - Async processing (Unit 1) for concurrent job handling - Pydantic models (Unit 2) for job request/response schemas - Decorators (Unit 3) for retry logic and timing - FastAPI endpoint (Unit 4a/4b) to accept and stream results - Token counting (Unit 5) for cost tracking - Sampling config (Unit 6) for generation parameters Architecture: - FastAPI endpoint accepts a prompt → enqueues to asyncio.Queue - Worker coroutines process jobs against OpenAI API - Results returned via SSE streaming - Add Redis as the queue backend (one-line change, teaches a production pattern) Deliverable: Working async job processor with Redis queue, SSE streaming, and cost tracking. Push to GitHub as your first portfolio piece. ---"
    },
    {
      "id": "phase-2-unit-8-huggingface-transformers",
      "kind": "unit",
      "label": "Unit 8",
      "unitCode": "8",
      "title": "HuggingFace Transformers",
      "fullTitle": "Unit 8 — HuggingFace Transformers ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<p><strong>Theme:</strong> The HuggingFace ecosystem; inference (NOT fine-tuning yet)</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-2-unit-8-huggingface-transformers-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>HuggingFace <code>transformers</code> library: <code>pipeline()</code>, <code>AutoModel</code>, <code>AutoTokenizer</code></li><li>Task types: text classification, NER, summarization, question answering</li><li>Model Hub: finding, loading, comparing models</li><li><code>datasets</code> library for loading and preprocessing data</li><li>Batched inference for throughput</li></ul><p><strong>Project: Model Comparison CLI</strong> Build a CLI that:</p><ol><li>Accepts text input and a task flag (<code>--classify</code>, <code>--summarize</code>, <code>--ner</code>, <code>--qa</code>)</li><li>Runs the same 20 prompts through 3 different models per task</li><li>Measures speed and output quality for each model</li><li>Outputs structured comparison results with confidence scores</li><li>Caches downloaded models locally</li></ol><p>Fine-tuning is saved for Phase 7 where it has full context.</p><p><strong>Mini-exercises:</strong></p><ul><li>Compare inference speed: <code>distilbert</code> vs <code>bert-base</code> vs <code>bert-large</code></li><li>Implement batched inference for 1000 texts — measure throughput</li><li>Use <code>datasets.map()</code> with multiprocessing for data preprocessing</li><li>Build a model card template</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://huggingface.co/learn/nlp-course/\" target=\"_blank\" rel=\"noreferrer\">HuggingFace Course — NLP</a> — official, free, excellent (Ch 1-3)</li><li>📝 <a href=\"https://jalammar.github.io/a-visual-guide-to-using-bert-for-the-first-time/\" target=\"_blank\" rel=\"noreferrer\">Jay Alammar — A Visual Guide to Using BERT</a></li><li>📝 <a href=\"https://huggingface.co/docs/transformers/main_classes/pipelines\" target=\"_blank\" rel=\"noreferrer\">HuggingFace Docs — Pipelines</a></li><li>📖 <em>Hands-On Large Language Models</em> Ch. 6-7</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=QEaBAZQCtwE\" target=\"_blank\" rel=\"noreferrer\">HuggingFace — Getting Started with Transformers</a> (30 min)</li></ul>",
          "plainText": "Python (100%) Topics: - HuggingFace transformers library: pipeline(), AutoModel, AutoTokenizer - Task types: text classification, NER, summarization, question answering - Model Hub: finding, loading, comparing models - datasets library for loading and preprocessing data - Batched inference for throughput Project: Model Comparison CLI Build a CLI that: 1. Accepts text input and a task flag (--classify, --summarize, --ner, --qa) 2. Runs the same 20 prompts through 3 different models per task 3. Measures speed and output quality for each model 4. Outputs structured comparison results with confidence scores 5. Caches downloaded models locally Fine-tuning is saved for Phase 7 where it has full context. Mini-exercises: - Compare inference speed: distilbert vs bert-base vs bert-large - Implement batched inference for 1000 texts — measure throughput - Use datasets.map() with multiprocessing for data preprocessing - Build a model card template Resources: - 📝 HuggingFace Course — NLP — official, free, excellent (Ch 1-3) - 📝 Jay Alammar — A Visual Guide to Using BERT - 📝 HuggingFace Docs — Pipelines - 📖 Hands-On Large Language Models Ch. 6-7 - 🎥 HuggingFace — Getting Started with Transformers (30 min)"
        },
        {
          "id": "phase-2-unit-8-huggingface-transformers-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Word Search (#79) — backtracking</li><li>Binary Tree Level Order Traversal (#102) — BFS</li><li>Number of Islands (#200) — graph traversal</li><li><strong>Why now:</strong> Tree/graph patterns mirror model architecture inspection</li></ul>",
          "plainText": "LeetCode (3 medium) - Word Search (#79) — backtracking - Binary Tree Level Order Traversal (#102) — BFS - Number of Islands (#200) — graph traversal - Why now: Tree/graph patterns mirror model architecture inspection"
        },
        {
          "id": "phase-2-unit-8-huggingface-transformers-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 1 — Reliable, Scalable, and Maintainable Applications</li><li>Design exercise: How would you build a model serving platform?</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 1 — Reliable, Scalable, and Maintainable Applications - Design exercise: How would you build a model serving platform?"
        },
        {
          "id": "phase-2-unit-8-huggingface-transformers-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Multi-task NLP CLI working with 3+ HuggingFace pipelines</li><li>[ ] Model comparison results table across 20 test prompts</li><li>[ ] Blog post: &quot;HuggingFace Transformers — A Practical Guide to the Hub&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Multi-task NLP CLI working with 3+ HuggingFace pipelines - [ ] Model comparison results table across 20 test prompts - [ ] Blog post: \"HuggingFace Transformers — A Practical Guide to the Hub\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 8 — HuggingFace Transformers ⭐⭐⭐ Theme: The HuggingFace ecosystem; inference (NOT fine-tuning yet) Python (100%) Topics: - HuggingFace transformers library: pipeline(), AutoModel, AutoTokenizer - Task types: text classification, NER, summarization, question answering - Model Hub: finding, loading, comparing models - datasets library for loading and preprocessing data - Batched inference for throughput Project: Model Comparison CLI Build a CLI that: 1. Accepts text input and a task flag (--classify, --summarize, --ner, --qa) 2. Runs the same 20 prompts through 3 different models per task 3. Measures speed and output quality for each model 4. Outputs structured comparison results with confidence scores 5. Caches downloaded models locally Fine-tuning is saved for Phase 7 where it has full context. Mini-exercises: - Compare inference speed: distilbert vs bert-base vs bert-large - Implement batched inference for 1000 texts — measure throughput - Use datasets.map() with multiprocessing for data preprocessing - Build a model card template Resources: - 📝 HuggingFace Course — NLP — official, free, excellent (Ch 1-3) - 📝 Jay Alammar — A Visual Guide to Using BERT - 📝 HuggingFace Docs — Pipelines - 📖 Hands-On Large Language Models Ch. 6-7 - 🎥 HuggingFace — Getting Started with Transformers (30 min) LeetCode (3 medium) - Word Search (#79) — backtracking - Binary Tree Level Order Traversal (#102) — BFS - Number of Islands (#200) — graph traversal - Why now: Tree/graph patterns mirror model architecture inspection Systems Design - 📖 DDIA Ch. 1 — Reliable, Scalable, and Maintainable Applications - Design exercise: How would you build a model serving platform? Deliverables - [ ] Multi-task NLP CLI working with 3+ HuggingFace pipelines - [ ] Model comparison results table across 20 test prompts - [ ] Blog post: \"HuggingFace Transformers — A Practical Guide to the Hub\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-2-unit-9a-embeddings",
      "kind": "unit",
      "label": "Unit 9a",
      "unitCode": "9a",
      "title": "Embeddings",
      "fullTitle": "Unit 9a — Embeddings ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<p><strong>Theme:</strong> What embeddings are; cosine similarity; OpenAI embeddings API</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-2-unit-9a-embeddings-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Text embeddings: what they are, why they matter</li><li><code>sentence-transformers</code> library</li><li>Cosine similarity, dot product</li><li>OpenAI embeddings API, batch embedding</li><li>Embedding model selection: trade-offs (speed vs quality vs dimensions)</li></ul><p><strong>Project: Semantic Search on a Small Dataset</strong> Build a search system that:</p><ol><li>Loads a corpus of 100 items (movie descriptions, StackOverflow questions, etc.)</li><li>Generates embeddings using <code>sentence-transformers</code></li><li>Stores in a simple in-memory index (numpy dot products)</li><li>Accepts natural language queries</li><li>Returns top-k results with similarity scores</li><li>Includes a simple CLI frontend</li></ol><p>Concrete dataset, visible results. Something you can demo.</p><p><strong>Mini-exercises:</strong></p><ul><li>Compare embeddings from 3 different models on the same 10 sentences</li><li>Build a duplicate document detector using embedding similarity</li><li>Measure embedding generation time for 1000 texts</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://www.pinecone.io/learn/vector-embeddings/\" target=\"_blank\" rel=\"noreferrer\">Pinecone — What are Vector Embeddings?</a> — best intro</li><li>📝 <a href=\"https://simonwillison.net/2023/Oct/23/embeddings/\" target=\"_blank\" rel=\"noreferrer\">Simon Willison — Embeddings: What they are and why they matter</a></li><li>📝 <a href=\"https://www.sbert.net/\" target=\"_blank\" rel=\"noreferrer\">Sentence-Transformers docs</a> — official library</li><li>📝 <a href=\"https://vickiboykis.com/what_are_embeddings/\" target=\"_blank\" rel=\"noreferrer\">Vicki Boykis — What are embeddings?</a> — free e-book</li></ul>",
          "plainText": "Python (100%) Topics: - Text embeddings: what they are, why they matter - sentence-transformers library - Cosine similarity, dot product - OpenAI embeddings API, batch embedding - Embedding model selection: trade-offs (speed vs quality vs dimensions) Project: Semantic Search on a Small Dataset Build a search system that: 1. Loads a corpus of 100 items (movie descriptions, StackOverflow questions, etc.) 2. Generates embeddings using sentence-transformers 3. Stores in a simple in-memory index (numpy dot products) 4. Accepts natural language queries 5. Returns top-k results with similarity scores 6. Includes a simple CLI frontend Concrete dataset, visible results. Something you can demo. Mini-exercises: - Compare embeddings from 3 different models on the same 10 sentences - Build a duplicate document detector using embedding similarity - Measure embedding generation time for 1000 texts Resources: - 📝 Pinecone — What are Vector Embeddings? — best intro - 📝 Simon Willison — Embeddings: What they are and why they matter - 📝 Sentence-Transformers docs — official library - 📝 Vicki Boykis — What are embeddings? — free e-book"
        },
        {
          "id": "phase-2-unit-9a-embeddings-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>K Closest Points to Origin (#973) — distance calculation, like similarity</li><li>Top K Frequent Elements (#347) — relevant to retrieval</li><li>Kth Largest Element in an Array (#215) — relevant to top-k retrieval</li></ul>",
          "plainText": "LeetCode (3 medium) - K Closest Points to Origin (#973) — distance calculation, like similarity - Top K Frequent Elements (#347) — relevant to retrieval - Kth Largest Element in an Array (#215) — relevant to top-k retrieval"
        },
        {
          "id": "phase-2-unit-9a-embeddings-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Semantic search engine on 100+ items</li><li>[ ] Embedding comparison across 3 models</li><li>[ ] Blog post: &quot;Building Semantic Search from Scratch with Python&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Semantic search engine on 100+ items - [ ] Embedding comparison across 3 models - [ ] Blog post: \"Building Semantic Search from Scratch with Python\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 9a — Embeddings ⭐⭐⭐ Theme: What embeddings are; cosine similarity; OpenAI embeddings API Python (100%) Topics: - Text embeddings: what they are, why they matter - sentence-transformers library - Cosine similarity, dot product - OpenAI embeddings API, batch embedding - Embedding model selection: trade-offs (speed vs quality vs dimensions) Project: Semantic Search on a Small Dataset Build a search system that: 1. Loads a corpus of 100 items (movie descriptions, StackOverflow questions, etc.) 2. Generates embeddings using sentence-transformers 3. Stores in a simple in-memory index (numpy dot products) 4. Accepts natural language queries 5. Returns top-k results with similarity scores 6. Includes a simple CLI frontend Concrete dataset, visible results. Something you can demo. Mini-exercises: - Compare embeddings from 3 different models on the same 10 sentences - Build a duplicate document detector using embedding similarity - Measure embedding generation time for 1000 texts Resources: - 📝 Pinecone — What are Vector Embeddings? — best intro - 📝 Simon Willison — Embeddings: What they are and why they matter - 📝 Sentence-Transformers docs — official library - 📝 Vicki Boykis — What are embeddings? — free e-book LeetCode (3 medium) - K Closest Points to Origin (#973) — distance calculation, like similarity - Top K Frequent Elements (#347) — relevant to retrieval - Kth Largest Element in an Array (#215) — relevant to top-k retrieval Deliverables - [ ] Semantic search engine on 100+ items - [ ] Embedding comparison across 3 models - [ ] Blog post: \"Building Semantic Search from Scratch with Python\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-2-unit-9b-vector-search-basic-rag",
      "kind": "unit",
      "label": "Unit 9b",
      "unitCode": "9b",
      "title": "Vector Search & Basic RAG",
      "fullTitle": "Unit 9b — Vector Search & Basic RAG ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<p><strong>Theme:</strong> Vector databases; pgvector; your first RAG prototype</p>",
      "sectionTitles": [
        "Python (100%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-2-unit-9b-vector-search-basic-rag-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>FAISS (local) for fast vector similarity search</li><li>pgvector extension for Postgres (set up with Docker)</li><li>Similarity search: nearest-neighbor queries</li><li>Basic RAG: retrieve context → inject into prompt → generate</li><li>Chunking basics (fixed-size for now)</li></ul><p><strong>Project: pgvector RAG Prototype</strong> Build your first RAG system:</p><ol><li>Set up Postgres + pgvector with Docker</li><li>Ingest 100 document chunks with embeddings into pgvector</li><li>Accept a question, retrieve top-5 similar chunks</li><li>Inject chunks as context into an OpenAI prompt</li><li>Return the generated answer with source references</li><li>Compare: pgvector retrieval vs FAISS retrieval speed</li></ol><p>Don&#39;t touch Pinecone or Weaviate yet — they abstract away the learning.</p><p><strong>Mini-exercises:</strong></p><ul><li>Compare pgvector query speed at 100, 1K, 10K vectors</li><li>Build a simple code search tool (embed function docstrings, search in natural language)</li><li>Benchmark FAISS vs pgvector for the same dataset</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://supabase.com/docs/guides/ai\" target=\"_blank\" rel=\"noreferrer\">Supabase — pgvector guide</a> — practical setup</li><li>📝 <a href=\"https://jkatz05.com/post/postgres/pgvector-overview-0.5.0/\" target=\"_blank\" rel=\"noreferrer\">Jonathan Katz — pgvector 0.5.0</a> — HNSW indexing</li><li>📝 <a href=\"https://www.pinecone.io/learn/series/faiss/\" target=\"_blank\" rel=\"noreferrer\">James Briggs — FAISS: The Missing Manual</a></li><li>📖 <em>DDIA</em> Ch. 3 — Storage and Retrieval</li></ul>",
          "plainText": "Python (100%) Topics: - FAISS (local) for fast vector similarity search - pgvector extension for Postgres (set up with Docker) - Similarity search: nearest-neighbor queries - Basic RAG: retrieve context → inject into prompt → generate - Chunking basics (fixed-size for now) Project: pgvector RAG Prototype Build your first RAG system: 1. Set up Postgres + pgvector with Docker 2. Ingest 100 document chunks with embeddings into pgvector 3. Accept a question, retrieve top-5 similar chunks 4. Inject chunks as context into an OpenAI prompt 5. Return the generated answer with source references 6. Compare: pgvector retrieval vs FAISS retrieval speed Don't touch Pinecone or Weaviate yet — they abstract away the learning. Mini-exercises: - Compare pgvector query speed at 100, 1K, 10K vectors - Build a simple code search tool (embed function docstrings, search in natural language) - Benchmark FAISS vs pgvector for the same dataset Resources: - 📝 Supabase — pgvector guide — practical setup - 📝 Jonathan Katz — pgvector 0.5.0 — HNSW indexing - 📝 James Briggs — FAISS: The Missing Manual - 📖 DDIA Ch. 3 — Storage and Retrieval"
        },
        {
          "id": "phase-2-unit-9b-vector-search-basic-rag-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Working RAG prototype with pgvector</li><li>[ ] pgvector vs FAISS benchmark</li><li>[ ] Blog post: &quot;pgvector — Why Your Next Vector DB Should Just Be Postgres&quot;</li><li>[ ] Source-cited RAG answers</li></ul><hr>",
          "plainText": "Deliverables - [ ] Working RAG prototype with pgvector - [ ] pgvector vs FAISS benchmark - [ ] Blog post: \"pgvector — Why Your Next Vector DB Should Just Be Postgres\" - [ ] Source-cited RAG answers ---"
        }
      ],
      "searchText": "Unit 9b — Vector Search & Basic RAG ⭐⭐⭐ Theme: Vector databases; pgvector; your first RAG prototype Python (100%) Topics: - FAISS (local) for fast vector similarity search - pgvector extension for Postgres (set up with Docker) - Similarity search: nearest-neighbor queries - Basic RAG: retrieve context → inject into prompt → generate - Chunking basics (fixed-size for now) Project: pgvector RAG Prototype Build your first RAG system: 1. Set up Postgres + pgvector with Docker 2. Ingest 100 document chunks with embeddings into pgvector 3. Accept a question, retrieve top-5 similar chunks 4. Inject chunks as context into an OpenAI prompt 5. Return the generated answer with source references 6. Compare: pgvector retrieval vs FAISS retrieval speed Don't touch Pinecone or Weaviate yet — they abstract away the learning. Mini-exercises: - Compare pgvector query speed at 100, 1K, 10K vectors - Build a simple code search tool (embed function docstrings, search in natural language) - Benchmark FAISS vs pgvector for the same dataset Resources: - 📝 Supabase — pgvector guide — practical setup - 📝 Jonathan Katz — pgvector 0.5.0 — HNSW indexing - 📝 James Briggs — FAISS: The Missing Manual - 📖 DDIA Ch. 3 — Storage and Retrieval Deliverables - [ ] Working RAG prototype with pgvector - [ ] pgvector vs FAISS benchmark - [ ] Blog post: \"pgvector — Why Your Next Vector DB Should Just Be Postgres\" - [ ] Source-cited RAG answers ---"
    },
    {
      "id": "phase-2-unit-10-peft-lora",
      "kind": "unit",
      "label": "Unit 10",
      "unitCode": "10",
      "title": "PEFT & LoRA",
      "fullTitle": "Unit 10 — PEFT & LoRA ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<p><strong>Theme:</strong> Parameter-efficient fine-tuning; making fine-tuning accessible</p><blockquote><p>⚠️ <strong>GPU Required.</strong> Use Google Colab Pro ($10/month), Vast.ai, or RunPod. This unit is blocked without GPU access. Budget $10-20.</p><p><strong>You will not finish a 7B fine-tune in one unit. The goal is to get training started, understand the config, and know how to monitor it.</strong></p></blockquote>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-2-unit-10-peft-lora-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Why full fine-tuning is expensive (parameter count, VRAM)</li><li>LoRA: Low-Rank Adaptation — theory and practice (read the LoRA paper abstract + introduction)</li><li>QLoRA: quantized LoRA for consumer GPUs</li><li>PEFT library: <code>LoraConfig</code>, <code>get_peft_model</code>, adapter merging</li><li><code>bitsandbytes</code> for quantization (4-bit, 8-bit)</li><li>W&amp;B (Weights &amp; Biases) for experiment tracking — <strong>introduce it here, it becomes a habit</strong></li></ul><p><strong>Project: LoRA Fine-tune a Small Model First</strong> Start small, then scale:</p><ol><li>Fine-tune DistilBERT or GPT-2 on a tiny dataset first — get the training loop working, see the loss go down</li><li>Save the adapter, verify outputs change</li><li>Then try a 7B model (Mistral, Phi-2) if GPU allows</li><li>Configure LoRA adapters (experiment with rank: 4, 8, 16)</li><li>Log everything to W&amp;B</li><li>Compare base model vs fine-tuned on test prompts</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Calculate: How many parameters does LoRA add for rank=8 vs rank=32?</li><li>Compare training time: full fine-tune vs LoRA (on GPT-2)</li><li>Try different quantization levels (4-bit vs 8-bit), compare output quality</li><li>Merge LoRA adapters back into base model and verify outputs match</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://huggingface.co/docs/peft/\" target=\"_blank\" rel=\"noreferrer\">HuggingFace PEFT docs</a> — official</li><li>📝 <a href=\"https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms\" target=\"_blank\" rel=\"noreferrer\">Sebastian Raschka — Practical Tips for Fine-tuning LLMs</a> — excellent</li><li>📝 <a href=\"https://lightning.ai/pages/community/lora-insights/\" target=\"_blank\" rel=\"noreferrer\">Lightning AI — LoRA from Scratch</a></li><li>📝 <a href=\"https://huggingface.co/blog/4bit-transformers-bitsandbytes\" target=\"_blank\" rel=\"noreferrer\">Tim Dettmers — QLoRA blog</a> — watch his explanation</li><li>📖 LoRA paper: <a href=\"https://arxiv.org/abs/2106.09685\" target=\"_blank\" rel=\"noreferrer\">arXiv:2106.09685</a> — read first 5 pages</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=PXWYUTMt-AU\" target=\"_blank\" rel=\"noreferrer\">Umar Jamil — LoRA Explained</a> (30 min)</li></ul>",
          "plainText": "Python (100%) Topics: - Why full fine-tuning is expensive (parameter count, VRAM) - LoRA: Low-Rank Adaptation — theory and practice (read the LoRA paper abstract + introduction) - QLoRA: quantized LoRA for consumer GPUs - PEFT library: LoraConfig, getpeftmodel, adapter merging - bitsandbytes for quantization (4-bit, 8-bit) - W&B (Weights & Biases) for experiment tracking — introduce it here, it becomes a habit Project: LoRA Fine-tune a Small Model First Start small, then scale: 1. Fine-tune DistilBERT or GPT-2 on a tiny dataset first — get the training loop working, see the loss go down 2. Save the adapter, verify outputs change 3. Then try a 7B model (Mistral, Phi-2) if GPU allows 4. Configure LoRA adapters (experiment with rank: 4, 8, 16) 5. Log everything to W&B 6. Compare base model vs fine-tuned on test prompts Mini-exercises: - Calculate: How many parameters does LoRA add for rank=8 vs rank=32? - Compare training time: full fine-tune vs LoRA (on GPT-2) - Try different quantization levels (4-bit vs 8-bit), compare output quality - Merge LoRA adapters back into base model and verify outputs match Resources: - 📝 HuggingFace PEFT docs — official - 📝 Sebastian Raschka — Practical Tips for Fine-tuning LLMs — excellent - 📝 Lightning AI — LoRA from Scratch - 📝 Tim Dettmers — QLoRA blog — watch his explanation - 📖 LoRA paper: arXiv:2106.09685 — read first 5 pages - 🎥 Umar Jamil — LoRA Explained (30 min)"
        },
        {
          "id": "phase-2-unit-10-peft-lora-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Spiral Matrix (#54) — matrix traversal</li><li>Set Matrix Zeroes (#73) — in-place operations</li><li>Rotate Image (#48) — matrix manipulation</li><li><strong>Why now:</strong> Matrix operations are the literal foundation of LoRA. Keep these doable — this unit is cognitively heavy from fine-tuning.</li></ul>",
          "plainText": "LeetCode (3 medium) - Spiral Matrix (#54) — matrix traversal - Set Matrix Zeroes (#73) — in-place operations - Rotate Image (#48) — matrix manipulation - Why now: Matrix operations are the literal foundation of LoRA. Keep these doable — this unit is cognitively heavy from fine-tuning."
        },
        {
          "id": "phase-2-unit-10-peft-lora-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 4 — Encoding and Evolution</li><li>Design exercise: How would you design a fine-tuning-as-a-service platform?</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 4 — Encoding and Evolution - Design exercise: How would you design a fine-tuning-as-a-service platform?"
        },
        {
          "id": "phase-2-unit-10-peft-lora-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] LoRA fine-tuned model with before/after comparison</li><li>[ ] Parameter count analysis (full vs LoRA)</li><li>[ ] W&amp;B dashboard showing training metrics</li><li>[ ] Blog post: &quot;LoRA Demystified — Fine-tuning LLMs on a Laptop&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] LoRA fine-tuned model with before/after comparison - [ ] Parameter count analysis (full vs LoRA) - [ ] W&B dashboard showing training metrics - [ ] Blog post: \"LoRA Demystified — Fine-tuning LLMs on a Laptop\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 10 — PEFT & LoRA ⭐⭐⭐⭐ Theme: Parameter-efficient fine-tuning; making fine-tuning accessible > ⚠️ GPU Required. Use Google Colab Pro ($10/month), Vast.ai, or RunPod. This unit is blocked without GPU access. Budget $10-20. > > You will not finish a 7B fine-tune in one unit. The goal is to get training started, understand the config, and know how to monitor it. Python (100%) Topics: - Why full fine-tuning is expensive (parameter count, VRAM) - LoRA: Low-Rank Adaptation — theory and practice (read the LoRA paper abstract + introduction) - QLoRA: quantized LoRA for consumer GPUs - PEFT library: LoraConfig, getpeftmodel, adapter merging - bitsandbytes for quantization (4-bit, 8-bit) - W&B (Weights & Biases) for experiment tracking — introduce it here, it becomes a habit Project: LoRA Fine-tune a Small Model First Start small, then scale: 1. Fine-tune DistilBERT or GPT-2 on a tiny dataset first — get the training loop working, see the loss go down 2. Save the adapter, verify outputs change 3. Then try a 7B model (Mistral, Phi-2) if GPU allows 4. Configure LoRA adapters (experiment with rank: 4, 8, 16) 5. Log everything to W&B 6. Compare base model vs fine-tuned on test prompts Mini-exercises: - Calculate: How many parameters does LoRA add for rank=8 vs rank=32? - Compare training time: full fine-tune vs LoRA (on GPT-2) - Try different quantization levels (4-bit vs 8-bit), compare output quality - Merge LoRA adapters back into base model and verify outputs match Resources: - 📝 HuggingFace PEFT docs — official - 📝 Sebastian Raschka — Practical Tips for Fine-tuning LLMs — excellent - 📝 Lightning AI — LoRA from Scratch - 📝 Tim Dettmers — QLoRA blog — watch his explanation - 📖 LoRA paper: arXiv:2106.09685 — read first 5 pages - 🎥 Umar Jamil — LoRA Explained (30 min) LeetCode (3 medium) - Spiral Matrix (#54) — matrix traversal - Set Matrix Zeroes (#73) — in-place operations - Rotate Image (#48) — matrix manipulation - Why now: Matrix operations are the literal foundation of LoRA. Keep these doable — this unit is cognitively heavy from fine-tuning. Systems Design - 📖 DDIA Ch. 4 — Encoding and Evolution - Design exercise: How would you design a fine-tuning-as-a-service platform? Deliverables - [ ] LoRA fine-tuned model with before/after comparison - [ ] Parameter count analysis (full vs LoRA) - [ ] W&B dashboard showing training metrics - [ ] Blog post: \"LoRA Demystified — Fine-tuning LLMs on a Laptop\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-2-unit-11-openai-api-advanced-patterns",
      "kind": "unit",
      "label": "Unit 11",
      "unitCode": "11",
      "title": "OpenAI API: Advanced Patterns",
      "fullTitle": "Unit 11 — OpenAI API: Advanced Patterns ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<p><strong>Theme:</strong> Streaming, function/tool calling, structured outputs — the three things interviewers ask about</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-2-unit-11-openai-api-advanced-patterns-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>OpenAI Python SDK: <code>chat.completions.create()</code></li><li>Streaming responses: <code>stream=True</code>, async streaming</li><li>Function/tool calling: defining tools, handling tool calls, multi-step chains</li><li>Structured outputs with <code>response_format</code></li><li>Conversation management: message history, token budgets</li><li>Cost tracking per API call</li></ul><p><strong>Project: Tool-Calling Agent</strong> Build a terminal chat application that:</p><ol><li>Has 3+ callable tools (weather API, calculator, web search)</li><li>Handles multi-step tool call chains (LLM calls tool → processes result → calls another tool)</li><li>Streams responses token-by-token</li><li>Logs every API call&#39;s token usage and running cost total</li><li>Maintains conversation history with automatic context window management</li><li>Save/load conversation history</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Build a retry wrapper with exponential backoff for rate limit errors</li><li>Implement parallel tool calls (multiple tools called simultaneously)</li><li>Build a simple &quot;router&quot; that picks GPT-3.5 vs GPT-4 based on query complexity</li><li>Implement automatic conversation summarization when context window fills up</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://platform.openai.com/docs/guides/chat-completions\" target=\"_blank\" rel=\"noreferrer\">OpenAI API Docs — Chat Completions</a></li><li>📝 <a href=\"https://platform.openai.com/docs/guides/function-calling\" target=\"_blank\" rel=\"noreferrer\">OpenAI API Docs — Function Calling</a></li><li>📝 <a href=\"https://simonwillison.net/2024/Oct/25/tool-calling/\" target=\"_blank\" rel=\"noreferrer\">Simon Willison — Understanding Tool Calling</a> — excellent mental model</li><li>📝 <a href=\"https://hamel.dev/blog/posts/structured/\" target=\"_blank\" rel=\"noreferrer\">Hamel&amp;#39;s Blog — Structured Outputs</a></li><li>🎥 <a href=\"https://www.youtube.com/playlist?list=PLOXw6I10VTv_FhQqFiyGAlYErmI_ByLvE\" target=\"_blank\" rel=\"noreferrer\">OpenAI DevDay Talks</a></li></ul>",
          "plainText": "Python (100%) Topics: - OpenAI Python SDK: chat.completions.create() - Streaming responses: stream=True, async streaming - Function/tool calling: defining tools, handling tool calls, multi-step chains - Structured outputs with responseformat - Conversation management: message history, token budgets - Cost tracking per API call Project: Tool-Calling Agent Build a terminal chat application that: 1. Has 3+ callable tools (weather API, calculator, web search) 2. Handles multi-step tool call chains (LLM calls tool → processes result → calls another tool) 3. Streams responses token-by-token 4. Logs every API call's token usage and running cost total 5. Maintains conversation history with automatic context window management 6. Save/load conversation history Mini-exercises: - Build a retry wrapper with exponential backoff for rate limit errors - Implement parallel tool calls (multiple tools called simultaneously) - Build a simple \"router\" that picks GPT-3.5 vs GPT-4 based on query complexity - Implement automatic conversation summarization when context window fills up Resources: - 📝 OpenAI API Docs — Chat Completions - 📝 OpenAI API Docs — Function Calling - 📝 Simon Willison — Understanding Tool Calling — excellent mental model - 📝 Hamel's Blog — Structured Outputs - 🎥 OpenAI DevDay Talks"
        },
        {
          "id": "phase-2-unit-11-openai-api-advanced-patterns-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Design Twitter (#355) — OOP design</li><li>Time Based Key-Value Store (#981) — temporal data, like conversation history</li><li>Longest Consecutive Sequence (#128) — hashmap optimization</li><li><strong>Why now:</strong> Data structure design mirrors API design patterns</li></ul>",
          "plainText": "LeetCode (3 medium) - Design Twitter (#355) — OOP design - Time Based Key-Value Store (#981) — temporal data, like conversation history - Longest Consecutive Sequence (#128) — hashmap optimization - Why now: Data structure design mirrors API design patterns"
        },
        {
          "id": "phase-2-unit-11-openai-api-advanced-patterns-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 12 — Design a Chat System</li><li><strong>Connect:</strong> Your tool-calling agent IS a chat system — what would it take to make it multi-user?</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 1 Ch. 12 — Design a Chat System - Connect: Your tool-calling agent IS a chat system — what would it take to make it multi-user?"
        },
        {
          "id": "phase-2-unit-11-openai-api-advanced-patterns-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Tool-calling agent with 3+ working tools — pushed to GitHub with a demo GIF in the README</li><li>[ ] Token usage tracker showing cost per conversation</li><li>[ ] Blog post: &quot;Building an AI Agent with Tool Calling — A Practical Guide&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Tool-calling agent with 3+ working tools — pushed to GitHub with a demo GIF in the README - [ ] Token usage tracker showing cost per conversation - [ ] Blog post: \"Building an AI Agent with Tool Calling — A Practical Guide\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 11 — OpenAI API: Advanced Patterns ⭐⭐⭐ Theme: Streaming, function/tool calling, structured outputs — the three things interviewers ask about Python (100%) Topics: - OpenAI Python SDK: chat.completions.create() - Streaming responses: stream=True, async streaming - Function/tool calling: defining tools, handling tool calls, multi-step chains - Structured outputs with responseformat - Conversation management: message history, token budgets - Cost tracking per API call Project: Tool-Calling Agent Build a terminal chat application that: 1. Has 3+ callable tools (weather API, calculator, web search) 2. Handles multi-step tool call chains (LLM calls tool → processes result → calls another tool) 3. Streams responses token-by-token 4. Logs every API call's token usage and running cost total 5. Maintains conversation history with automatic context window management 6. Save/load conversation history Mini-exercises: - Build a retry wrapper with exponential backoff for rate limit errors - Implement parallel tool calls (multiple tools called simultaneously) - Build a simple \"router\" that picks GPT-3.5 vs GPT-4 based on query complexity - Implement automatic conversation summarization when context window fills up Resources: - 📝 OpenAI API Docs — Chat Completions - 📝 OpenAI API Docs — Function Calling - 📝 Simon Willison — Understanding Tool Calling — excellent mental model - 📝 Hamel's Blog — Structured Outputs - 🎥 OpenAI DevDay Talks LeetCode (3 medium) - Design Twitter (#355) — OOP design - Time Based Key-Value Store (#981) — temporal data, like conversation history - Longest Consecutive Sequence (#128) — hashmap optimization - Why now: Data structure design mirrors API design patterns Systems Design - 📖 System Design Interview Vol 1 Ch. 12 — Design a Chat System - Connect: Your tool-calling agent IS a chat system — what would it take to make it multi-user? Deliverables - [ ] Tool-calling agent with 3+ working tools — pushed to GitHub with a demo GIF in the README - [ ] Token usage tracker showing cost per conversation - [ ] Blog post: \"Building an AI Agent with Tool Calling — A Practical Guide\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-2-phase-2-capstone-project-end-of-unit-11",
      "kind": "capstone",
      "label": "Phase Capstone",
      "unitCode": "",
      "title": "PHASE 2 CAPSTONE PROJECT (End of Unit 11)",
      "fullTitle": "PHASE 2 CAPSTONE PROJECT (End of Unit 11)",
      "difficulty": "",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "",
      "sectionTitles": [
        "Intelligent Document Assistant"
      ],
      "sections": [
        {
          "id": "phase-2-phase-2-capstone-project-end-of-unit-11-intelligent-document-assistant",
          "title": "Intelligent Document Assistant",
          "html": "<p>Combine Units 8-11:</p><ul><li><strong>HuggingFace models</strong> (Unit 8) for local classification/NER</li><li><strong>Semantic search + pgvector</strong> (Unit 9a/9b) for document retrieval</li><li><strong>OpenAI tool calling</strong> (Unit 11) for complex multi-step queries</li><li><strong>FastAPI</strong> (Unit 4) to serve everything behind an API</li></ul><p><strong>Evaluation step (critical):</strong> After building it, run 20 test questions and manually grade the answers. Document what fails. Track: &quot;what % of answers correctly cite the source chunk?&quot; This evaluation habit is more valuable than the code itself.</p><p><strong>Deliverable:</strong> Document assistant with RAG search, tool calling, and a quality evaluation report. Push to GitHub as portfolio piece #2.</p><hr>",
          "plainText": "Intelligent Document Assistant Combine Units 8-11: - HuggingFace models (Unit 8) for local classification/NER - Semantic search + pgvector (Unit 9a/9b) for document retrieval - OpenAI tool calling (Unit 11) for complex multi-step queries - FastAPI (Unit 4) to serve everything behind an API Evaluation step (critical): After building it, run 20 test questions and manually grade the answers. Document what fails. Track: \"what % of answers correctly cite the source chunk?\" This evaluation habit is more valuable than the code itself. Deliverable: Document assistant with RAG search, tool calling, and a quality evaluation report. Push to GitHub as portfolio piece #2. ---"
        }
      ],
      "searchText": "PHASE 2 CAPSTONE PROJECT (End of Unit 11) Intelligent Document Assistant Combine Units 8-11: - HuggingFace models (Unit 8) for local classification/NER - Semantic search + pgvector (Unit 9a/9b) for document retrieval - OpenAI tool calling (Unit 11) for complex multi-step queries - FastAPI (Unit 4) to serve everything behind an API Evaluation step (critical): After building it, run 20 test questions and manually grade the answers. Document what fails. Track: \"what % of answers correctly cite the source chunk?\" This evaluation habit is more valuable than the code itself. Deliverable: Document assistant with RAG search, tool calling, and a quality evaluation report. Push to GitHub as portfolio piece #2. ---"
    },
    {
      "id": "phase-2-docker-introduction-before-phase-3",
      "kind": "section",
      "label": "Section",
      "unitCode": "",
      "title": "🐳 Docker Introduction (Before Phase 3)",
      "fullTitle": "🐳 Docker Introduction (Before Phase 3)",
      "difficulty": "",
      "phaseId": "phase-2",
      "phaseTitle": "PHASE 2: HUGGINGFACE & APIs (Units 8-11)",
      "introHtml": "<p><strong>Take 2-3 days for this.</strong> Every project in Phase 3+ involves running services.</p><ul><li>[ ] Docker basics: images, containers, Dockerfile, <code>docker build</code>, <code>docker run</code></li><li>[ ] Docker Compose: multi-service orchestration, <code>docker-compose.yml</code></li><li>[ ] Dockerize one of your existing projects (the Phase 1 capstone is a good choice)</li><li>[ ] Run Postgres + Redis via Docker Compose</li><li>[ ] Understand volumes, ports, networks, environment variables in Docker</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://docker-curriculum.com/\" target=\"_blank\" rel=\"noreferrer\">Docker Curriculum</a> — practical introduction</li><li>📝 <a href=\"https://docs.docker.com/compose/\" target=\"_blank\" rel=\"noreferrer\">Docker Compose Docs</a> — official</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=3c-iBn73dDE\" target=\"_blank\" rel=\"noreferrer\">TechWorld with Nana — Docker Tutorial</a> (3hr, watch in segments)</li></ul><hr>",
      "sectionTitles": [],
      "sections": [],
      "searchText": "🐳 Docker Introduction (Before Phase 3) Take 2-3 days for this. Every project in Phase 3+ involves running services. - [ ] Docker basics: images, containers, Dockerfile, docker build, docker run - [ ] Docker Compose: multi-service orchestration, docker-compose.yml - [ ] Dockerize one of your existing projects (the Phase 1 capstone is a good choice) - [ ] Run Postgres + Redis via Docker Compose - [ ] Understand volumes, ports, networks, environment variables in Docker Resources: - 📝 Docker Curriculum — practical introduction - 📝 Docker Compose Docs — official - 🎥 TechWorld with Nana — Docker Tutorial (3hr, watch in segments) ---"
    },
    {
      "id": "phase-3-unit-12-vllm-model-serving",
      "kind": "unit",
      "label": "Unit 12",
      "unitCode": "12",
      "title": "vLLM & Model Serving",
      "fullTitle": "Unit 12 — vLLM & Model Serving ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-3",
      "phaseTitle": "PHASE 3: INFERENCE SYSTEMS (Units 12-15)",
      "introHtml": "<p><strong>Theme:</strong> High-performance LLM inference; serving infrastructure</p><blockquote><p>⚠️ <strong>GPU Required.</strong> You need a GPU for this unit. Use RunPod or Vast.ai. Budget $5-10 for a few hours of A100/H100 time. Say this upfront — don&#39;t discover it on Day 3.</p></blockquote>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-3-unit-12-vllm-model-serving-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>vLLM installation, architecture, and concepts</li><li>Read the PagedAttention blog post (or paper summary) before writing any code</li><li>Continuous batching vs static batching</li><li>OpenAI-compatible API server</li><li>Throughput vs latency trade-offs</li><li>GPU memory management basics (VRAM allocation)</li></ul><p><strong>Structure:</strong></p><ul><li>Day 1-2: Read vLLM architecture docs and PagedAttention blog</li><li>Day 3-4: Get vLLM running, serve one model, hit it with curl</li><li>Day 5-7: Write your own benchmark script, measure TTFT and throughput</li></ul><p><strong>Project: vLLM Benchmarking Suite</strong> Build a benchmarking tool that:</p><ol><li>Deploys a model via vLLM (Mistral-7B, Phi-2, or similar)</li><li>Sends concurrent requests at different rates (1, 10, 50 RPS)</li><li>Measures: TTFT, tokens/sec, total latency, throughput</li><li>Plots latency distribution (p50, p90, p99)</li><li>Compares vLLM vs HuggingFace <code>.generate()</code> directly — run the same 10 prompts through both. The difference should be motivating.</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Deploy vLLM with <code>--quantization awq</code> and compare speed vs quality</li><li>Measure TTFT for different prompt lengths (100, 500, 1000, 4000 tokens)</li><li>Test streaming output vs non-streaming from the vLLM server</li><li>Monitor GPU memory usage during inference using <code>nvidia-smi</code></li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://docs.vllm.ai/\" target=\"_blank\" rel=\"noreferrer\">vLLM Docs</a> — official documentation</li><li>📝 <a href=\"https://blog.vllm.ai/2023/06/20/vllm.html\" target=\"_blank\" rel=\"noreferrer\">vLLM Blog — PagedAttention</a> — foundational</li><li>📝 <a href=\"https://www.anyscale.com/blog/continuous-batching-llm-inference\" target=\"_blank\" rel=\"noreferrer\">Anyscale — Continuous Batching</a></li><li>📝 <a href=\"https://lilianweng.github.io/posts/2023-01-10-inference-optimization/\" target=\"_blank\" rel=\"noreferrer\">Lilian Weng — Large Transformer Model Inference Optimization</a></li><li>📖 <em>High Performance Python</em> Ch. 1-3</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=80bIUggRJf4\" target=\"_blank\" rel=\"noreferrer\">vLLM talk at Ray Summit</a> (30 min)</li></ul>",
          "plainText": "Python (100%) Topics: - vLLM installation, architecture, and concepts - Read the PagedAttention blog post (or paper summary) before writing any code - Continuous batching vs static batching - OpenAI-compatible API server - Throughput vs latency trade-offs - GPU memory management basics (VRAM allocation) Structure: - Day 1-2: Read vLLM architecture docs and PagedAttention blog - Day 3-4: Get vLLM running, serve one model, hit it with curl - Day 5-7: Write your own benchmark script, measure TTFT and throughput Project: vLLM Benchmarking Suite Build a benchmarking tool that: 1. Deploys a model via vLLM (Mistral-7B, Phi-2, or similar) 2. Sends concurrent requests at different rates (1, 10, 50 RPS) 3. Measures: TTFT, tokens/sec, total latency, throughput 4. Plots latency distribution (p50, p90, p99) 5. Compares vLLM vs HuggingFace .generate() directly — run the same 10 prompts through both. The difference should be motivating. Mini-exercises: - Deploy vLLM with --quantization awq and compare speed vs quality - Measure TTFT for different prompt lengths (100, 500, 1000, 4000 tokens) - Test streaming output vs non-streaming from the vLLM server - Monitor GPU memory usage during inference using nvidia-smi Resources: - 📝 vLLM Docs — official documentation - 📝 vLLM Blog — PagedAttention — foundational - 📝 Anyscale — Continuous Batching - 📝 Lilian Weng — Large Transformer Model Inference Optimization - 📖 High Performance Python Ch. 1-3 - 🎥 vLLM talk at Ray Summit (30 min)"
        },
        {
          "id": "phase-3-unit-12-vllm-model-serving-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Design Circular Queue (#622) — like request batching</li><li>Sliding Window Maximum (#239) — like batching windows</li><li>Find Median from Data Stream (#295) — like p50/p99 calculation</li><li><strong>Why now:</strong> Queue and window patterns mirror inference batching. Label these as &quot;interview prep&quot; — they&#39;re relevant to interviews, not directly to vLLM code.</li></ul>",
          "plainText": "LeetCode (3 medium) - Design Circular Queue (#622) — like request batching - Sliding Window Maximum (#239) — like batching windows - Find Median from Data Stream (#295) — like p50/p99 calculation - Why now: Queue and window patterns mirror inference batching. Label these as \"interview prep\" — they're relevant to interviews, not directly to vLLM code."
        },
        {
          "id": "phase-3-unit-12-vllm-model-serving-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 5 — Replication</li><li>Design exercise: How would you design an LLM inference platform for 10K concurrent users?</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 5 — Replication - Design exercise: How would you design an LLM inference platform for 10K concurrent users?"
        },
        {
          "id": "phase-3-unit-12-vllm-model-serving-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Benchmarking suite with plots (latency distribution, throughput curves)</li><li>[ ] vLLM vs HuggingFace <code>.generate()</code> comparison with numbers</li><li>[ ] Blog post: &quot;vLLM — Why It&#39;s 10x Faster Than Naive Inference&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Benchmarking suite with plots (latency distribution, throughput curves) - [ ] vLLM vs HuggingFace .generate() comparison with numbers - [ ] Blog post: \"vLLM — Why It's 10x Faster Than Naive Inference\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 12 — vLLM & Model Serving ⭐⭐⭐⭐ Theme: High-performance LLM inference; serving infrastructure > ⚠️ GPU Required. You need a GPU for this unit. Use RunPod or Vast.ai. Budget $5-10 for a few hours of A100/H100 time. Say this upfront — don't discover it on Day 3. Python (100%) Topics: - vLLM installation, architecture, and concepts - Read the PagedAttention blog post (or paper summary) before writing any code - Continuous batching vs static batching - OpenAI-compatible API server - Throughput vs latency trade-offs - GPU memory management basics (VRAM allocation) Structure: - Day 1-2: Read vLLM architecture docs and PagedAttention blog - Day 3-4: Get vLLM running, serve one model, hit it with curl - Day 5-7: Write your own benchmark script, measure TTFT and throughput Project: vLLM Benchmarking Suite Build a benchmarking tool that: 1. Deploys a model via vLLM (Mistral-7B, Phi-2, or similar) 2. Sends concurrent requests at different rates (1, 10, 50 RPS) 3. Measures: TTFT, tokens/sec, total latency, throughput 4. Plots latency distribution (p50, p90, p99) 5. Compares vLLM vs HuggingFace .generate() directly — run the same 10 prompts through both. The difference should be motivating. Mini-exercises: - Deploy vLLM with --quantization awq and compare speed vs quality - Measure TTFT for different prompt lengths (100, 500, 1000, 4000 tokens) - Test streaming output vs non-streaming from the vLLM server - Monitor GPU memory usage during inference using nvidia-smi Resources: - 📝 vLLM Docs — official documentation - 📝 vLLM Blog — PagedAttention — foundational - 📝 Anyscale — Continuous Batching - 📝 Lilian Weng — Large Transformer Model Inference Optimization - 📖 High Performance Python Ch. 1-3 - 🎥 vLLM talk at Ray Summit (30 min) LeetCode (3 medium) - Design Circular Queue (#622) — like request batching - Sliding Window Maximum (#239) — like batching windows - Find Median from Data Stream (#295) — like p50/p99 calculation - Why now: Queue and window patterns mirror inference batching. Label these as \"interview prep\" — they're relevant to interviews, not directly to vLLM code. Systems Design - 📖 DDIA Ch. 5 — Replication - Design exercise: How would you design an LLM inference platform for 10K concurrent users? Deliverables - [ ] Benchmarking suite with plots (latency distribution, throughput curves) - [ ] vLLM vs HuggingFace .generate() comparison with numbers - [ ] Blog post: \"vLLM — Why It's 10x Faster Than Naive Inference\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-3-unit-13-quantization",
      "kind": "unit",
      "label": "Unit 13",
      "unitCode": "13",
      "title": "Quantization",
      "fullTitle": "Unit 13 — Quantization ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-3",
      "phaseTitle": "PHASE 3: INFERENCE SYSTEMS (Units 12-15)",
      "introHtml": "<p><strong>Theme:</strong> Making models smaller and faster; practical quantization</p><blockquote><p>Narrowed focus: quantization only this unit. Batching is covered in the next unit as part of performance optimization.</p></blockquote>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-3-unit-13-quantization-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Quantization methods: INT8, INT4, GPTQ, AWQ, GGUF</li><li><code>bitsandbytes</code>, <code>auto-gptq</code>, <code>llama-cpp-python</code></li><li>Post-training quantization (PTQ) — this is what you&#39;ll use for serving</li><li>Quantization quality vs speed vs memory trade-offs</li></ul><p><strong>Removed:</strong> Quantization-aware training (QAT) — it&#39;s a different field and you won&#39;t need it for serving.</p><p><strong>Project: Quantization Comparison Lab</strong> Load the same model in FP16, INT8, INT4 using bitsandbytes:</p><ol><li>Measure VRAM usage for each</li><li>Measure inference speed for each</li><li>Run the same 10 prompts through all variants</li><li>Document output quality differences (are the answers worse?)</li><li>Create comparison charts (speed vs quality vs memory)</li></ol><p>Concrete, completable, and produces a clear deliverable.</p><p><strong>Mini-exercises:</strong></p><ul><li>Run <code>llama-cpp-python</code> for GGUF format and compare with vLLM for single-user latency</li><li>Profile memory usage during inference with <code>memory_profiler</code></li><li>Implement a simple token throughput counter (tokens/sec display during streaming)</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://huggingface.co/docs/transformers/main/en/quantization/overview\" target=\"_blank\" rel=\"noreferrer\">HuggingFace — Quantization Overview</a></li><li>📝 <a href=\"https://timdettmers.com/2022/08/15/memory-in-deep-learning/\" target=\"_blank\" rel=\"noreferrer\">Tim Dettmers — The case for 4-bit precision</a></li><li>📝 <a href=\"https://hanlab.mit.edu/projects/awq\" target=\"_blank\" rel=\"noreferrer\">MIT Han Lab — AWQ Paper Blog</a></li><li>📖 <em>High Performance Python</em> Ch. 6-7</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=rCFvPEQTxKI\" target=\"_blank\" rel=\"noreferrer\">Efficient ML Course MIT</a> — Song Han lecture (1hr)</li></ul>",
          "plainText": "Python (100%) Topics: - Quantization methods: INT8, INT4, GPTQ, AWQ, GGUF - bitsandbytes, auto-gptq, llama-cpp-python - Post-training quantization (PTQ) — this is what you'll use for serving - Quantization quality vs speed vs memory trade-offs Removed: Quantization-aware training (QAT) — it's a different field and you won't need it for serving. Project: Quantization Comparison Lab Load the same model in FP16, INT8, INT4 using bitsandbytes: 1. Measure VRAM usage for each 2. Measure inference speed for each 3. Run the same 10 prompts through all variants 4. Document output quality differences (are the answers worse?) 5. Create comparison charts (speed vs quality vs memory) Concrete, completable, and produces a clear deliverable. Mini-exercises: - Run llama-cpp-python for GGUF format and compare with vLLM for single-user latency - Profile memory usage during inference with memoryprofiler - Implement a simple token throughput counter (tokens/sec display during streaming) Resources: - 📝 HuggingFace — Quantization Overview - 📝 Tim Dettmers — The case for 4-bit precision - 📝 MIT Han Lab — AWQ Paper Blog - 📖 High Performance Python Ch. 6-7 - 🎥 Efficient ML Course MIT — Song Han lecture (1hr)"
        },
        {
          "id": "phase-3-unit-13-quantization-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Maximum Subarray (#53) — Kadane&#39;s algorithm, optimization</li><li>House Robber (#198) — DP, optimal substructure</li><li>Unique Paths (#62) — DP, combinatorial optimization</li><li><strong>Why now:</strong> Optimization problems mirror quantization trade-off analysis</li></ul>",
          "plainText": "LeetCode (3 medium) - Maximum Subarray (#53) — Kadane's algorithm, optimization - House Robber (#198) — DP, optimal substructure - Unique Paths (#62) — DP, combinatorial optimization - Why now: Optimization problems mirror quantization trade-off analysis"
        },
        {
          "id": "phase-3-unit-13-quantization-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 6 — Partitioning</li><li>Design exercise: How would you shard a 70B model across multiple GPUs?</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 6 — Partitioning - Design exercise: How would you shard a 70B model across multiple GPUs?"
        },
        {
          "id": "phase-3-unit-13-quantization-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Quantization benchmark with comparison charts (FP16 vs INT8 vs INT4)</li><li>[ ] Clear numbers: VRAM saved, speed gained, quality lost</li><li>[ ] Blog post: &quot;INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Quantization benchmark with comparison charts (FP16 vs INT8 vs INT4) - [ ] Clear numbers: VRAM saved, speed gained, quality lost - [ ] Blog post: \"INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 13 — Quantization ⭐⭐⭐⭐ Theme: Making models smaller and faster; practical quantization > Narrowed focus: quantization only this unit. Batching is covered in the next unit as part of performance optimization. Python (100%) Topics: - Quantization methods: INT8, INT4, GPTQ, AWQ, GGUF - bitsandbytes, auto-gptq, llama-cpp-python - Post-training quantization (PTQ) — this is what you'll use for serving - Quantization quality vs speed vs memory trade-offs Removed: Quantization-aware training (QAT) — it's a different field and you won't need it for serving. Project: Quantization Comparison Lab Load the same model in FP16, INT8, INT4 using bitsandbytes: 1. Measure VRAM usage for each 2. Measure inference speed for each 3. Run the same 10 prompts through all variants 4. Document output quality differences (are the answers worse?) 5. Create comparison charts (speed vs quality vs memory) Concrete, completable, and produces a clear deliverable. Mini-exercises: - Run llama-cpp-python for GGUF format and compare with vLLM for single-user latency - Profile memory usage during inference with memoryprofiler - Implement a simple token throughput counter (tokens/sec display during streaming) Resources: - 📝 HuggingFace — Quantization Overview - 📝 Tim Dettmers — The case for 4-bit precision - 📝 MIT Han Lab — AWQ Paper Blog - 📖 High Performance Python Ch. 6-7 - 🎥 Efficient ML Course MIT — Song Han lecture (1hr) LeetCode (3 medium) - Maximum Subarray (#53) — Kadane's algorithm, optimization - House Robber (#198) — DP, optimal substructure - Unique Paths (#62) — DP, combinatorial optimization - Why now: Optimization problems mirror quantization trade-off analysis Systems Design - 📖 DDIA Ch. 6 — Partitioning - Design exercise: How would you shard a 70B model across multiple GPUs? Deliverables - [ ] Quantization benchmark with comparison charts (FP16 vs INT8 vs INT4) - [ ] Clear numbers: VRAM saved, speed gained, quality lost - [ ] Blog post: \"INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-3-unit-14-inference-performance-caching",
      "kind": "unit",
      "label": "Unit 14",
      "unitCode": "14",
      "title": "Inference Performance & Caching",
      "fullTitle": "Unit 14 — Inference Performance & Caching ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-3",
      "phaseTitle": "PHASE 3: INFERENCE SYSTEMS (Units 12-15)",
      "introHtml": "<p><strong>Theme:</strong> Latency optimization; prompt caching; the numbers that matter</p><p><strong>Removed:</strong> Speculative decoding — it&#39;s advanced and not what you&#39;ll be doing in an entry-level role.</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-3-unit-14-inference-performance-caching-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>TTFT (Time to First Token) vs TBT (Time Between Tokens) vs Total Latency</li><li>Prompt caching: prefix caching, semantic caching</li><li>KV-cache optimization and memory management</li><li>Redis for response caching</li><li>Inference profiling and bottleneck identification</li></ul><p><strong>Project: Latency Profiler</strong> The centerpiece project:</p><ol><li>Measure TTFT and TBT for 50 prompts of varying lengths</li><li>Plot the distributions (p50, p90, p99)</li><li>Implement prompt caching — measure the latency difference on repeated prefixes</li><li>One clear before/after number — this is more valuable than a vague &quot;optimization recommender&quot;</li><li>Store metrics in Redis or SQLite</li><li>Simple dashboard (Streamlit or terminal-based)</li></ol><p><strong>Project: Semantic Cache Layer</strong></p><ol><li>Before sending to LLM, check Redis for semantically similar past queries</li><li>Use embeddings (Unit 9a) to compute query similarity</li><li>If similarity &gt; threshold, return cached response</li><li>Track cache hit rate and latency savings</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Build a prefix cache: if prompt starts with the same system prompt, reuse response</li><li>Measure how prompt length affects TTFT (create a scatter plot)</li><li>Implement request coalescing: if same prompt arrives within 100ms, share the response</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices\" target=\"_blank\" rel=\"noreferrer\">Databricks — LLM Inference Performance Engineering</a></li><li>📝 <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching\" target=\"_blank\" rel=\"noreferrer\">Anthropic — Prompt Caching</a></li><li>📝 <a href=\"https://github.com/zilliztech/GPTCache\" target=\"_blank\" rel=\"noreferrer\">GPTCache</a> — reference implementation</li><li>📝 <a href=\"https://gist.github.com/jboner/2841832\" target=\"_blank\" rel=\"noreferrer\">Brendan Gregg — Latency Numbers Every Programmer Should Know</a> — mandatory mental model</li><li>📖 <em>DDIA</em> Ch. 7 — Transactions</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=ccemOqDrc2I\" target=\"_blank\" rel=\"noreferrer\">Hussein Nasser — Caching Strategies</a> (20 min)</li></ul>",
          "plainText": "Python (100%) Topics: - TTFT (Time to First Token) vs TBT (Time Between Tokens) vs Total Latency - Prompt caching: prefix caching, semantic caching - KV-cache optimization and memory management - Redis for response caching - Inference profiling and bottleneck identification Project: Latency Profiler The centerpiece project: 1. Measure TTFT and TBT for 50 prompts of varying lengths 2. Plot the distributions (p50, p90, p99) 3. Implement prompt caching — measure the latency difference on repeated prefixes 4. One clear before/after number — this is more valuable than a vague \"optimization recommender\" 5. Store metrics in Redis or SQLite 6. Simple dashboard (Streamlit or terminal-based) Project: Semantic Cache Layer 1. Before sending to LLM, check Redis for semantically similar past queries 2. Use embeddings (Unit 9a) to compute query similarity 3. If similarity > threshold, return cached response 4. Track cache hit rate and latency savings Mini-exercises: - Build a prefix cache: if prompt starts with the same system prompt, reuse response - Measure how prompt length affects TTFT (create a scatter plot) - Implement request coalescing: if same prompt arrives within 100ms, share the response Resources: - 📝 Databricks — LLM Inference Performance Engineering - 📝 Anthropic — Prompt Caching - 📝 GPTCache — reference implementation - 📝 Brendan Gregg — Latency Numbers Every Programmer Should Know — mandatory mental model - 📖 DDIA Ch. 7 — Transactions - 🎥 Hussein Nasser — Caching Strategies (20 min)"
        },
        {
          "id": "phase-3-unit-14-inference-performance-caching-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>LFU Cache (#460) — advanced cache design, directly relevant</li><li>Longest Consecutive Sequence (#128) — hashmap optimization</li><li>Minimum Window Substring (#76) — sliding window optimization</li><li><strong>Why now:</strong> Cache design and optimization are this unit&#39;s literal focus</li></ul>",
          "plainText": "LeetCode (3 medium) - LFU Cache (#460) — advanced cache design, directly relevant - Longest Consecutive Sequence (#128) — hashmap optimization - Minimum Window Substring (#76) — sliding window optimization - Why now: Cache design and optimization are this unit's literal focus"
        },
        {
          "id": "phase-3-unit-14-inference-performance-caching-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 7 — Transactions</li><li>Design exercise: Design a caching layer for an LLM inference system with cache invalidation</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 7 — Transactions - Design exercise: Design a caching layer for an LLM inference system with cache invalidation"
        },
        {
          "id": "phase-3-unit-14-inference-performance-caching-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Latency profiler with p50/p90/p99 distributions</li><li>[ ] Prompt caching with measurable before/after improvement</li><li>[ ] Semantic cache with cache hit rate tracking</li><li>[ ] Blog post: &quot;Caching LLM Responses — From Naive to Semantic&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Latency profiler with p50/p90/p99 distributions - [ ] Prompt caching with measurable before/after improvement - [ ] Semantic cache with cache hit rate tracking - [ ] Blog post: \"Caching LLM Responses — From Naive to Semantic\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 14 — Inference Performance & Caching ⭐⭐⭐⭐ Theme: Latency optimization; prompt caching; the numbers that matter Removed: Speculative decoding — it's advanced and not what you'll be doing in an entry-level role. Python (100%) Topics: - TTFT (Time to First Token) vs TBT (Time Between Tokens) vs Total Latency - Prompt caching: prefix caching, semantic caching - KV-cache optimization and memory management - Redis for response caching - Inference profiling and bottleneck identification Project: Latency Profiler The centerpiece project: 1. Measure TTFT and TBT for 50 prompts of varying lengths 2. Plot the distributions (p50, p90, p99) 3. Implement prompt caching — measure the latency difference on repeated prefixes 4. One clear before/after number — this is more valuable than a vague \"optimization recommender\" 5. Store metrics in Redis or SQLite 6. Simple dashboard (Streamlit or terminal-based) Project: Semantic Cache Layer 1. Before sending to LLM, check Redis for semantically similar past queries 2. Use embeddings (Unit 9a) to compute query similarity 3. If similarity > threshold, return cached response 4. Track cache hit rate and latency savings Mini-exercises: - Build a prefix cache: if prompt starts with the same system prompt, reuse response - Measure how prompt length affects TTFT (create a scatter plot) - Implement request coalescing: if same prompt arrives within 100ms, share the response Resources: - 📝 Databricks — LLM Inference Performance Engineering - 📝 Anthropic — Prompt Caching - 📝 GPTCache — reference implementation - 📝 Brendan Gregg — Latency Numbers Every Programmer Should Know — mandatory mental model - 📖 DDIA Ch. 7 — Transactions - 🎥 Hussein Nasser — Caching Strategies (20 min) LeetCode (3 medium) - LFU Cache (#460) — advanced cache design, directly relevant - Longest Consecutive Sequence (#128) — hashmap optimization - Minimum Window Substring (#76) — sliding window optimization - Why now: Cache design and optimization are this unit's literal focus Systems Design - 📖 DDIA Ch. 7 — Transactions - Design exercise: Design a caching layer for an LLM inference system with cache invalidation Deliverables - [ ] Latency profiler with p50/p90/p99 distributions - [ ] Prompt caching with measurable before/after improvement - [ ] Semantic cache with cache hit rate tracking - [ ] Blog post: \"Caching LLM Responses — From Naive to Semantic\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-3-unit-15-inference-gateway",
      "kind": "unit",
      "label": "Unit 15",
      "unitCode": "15",
      "title": "Inference Gateway",
      "fullTitle": "Unit 15 — Inference Gateway ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-3",
      "phaseTitle": "PHASE 3: INFERENCE SYSTEMS (Units 12-15)",
      "introHtml": "<p><strong>Theme:</strong> Building the infrastructure layer in Python (Go comes next phase)</p><blockquote><p><strong>No Go in this unit.</strong> The inference gateway is built in Python. Go is introduced properly in Phase 4 with its own foundational units.</p></blockquote>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-3-unit-15-inference-gateway-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Reverse proxy patterns for model serving</li><li>Load balancing strategies: round-robin, least-connections, weighted</li><li>Health checks and circuit breakers</li><li>Rate limiting with Redis</li><li>Request queuing and backpressure</li><li><code>/metrics</code> endpoint for observability</li></ul><p><strong>Project: Python Inference Gateway</strong> Build a FastAPI reverse proxy to vLLM:</p><ol><li>Distributes requests across vLLM instances (round-robin)</li><li>Health checks that ping backends every 5 seconds</li><li>Rate limiting with Redis (per API key)</li><li>Circuit breaker: remove unhealthy backends, retry after 30s</li><li>Request logging with timing metrics</li><li><code>/metrics</code> endpoint that exposes request count, p99 latency, and token throughput as JSON</li></ol><p><strong>Project: GPU Memory Calculator</strong> Build a tool that:</p><ol><li>Given model name + quantization level, estimates VRAM requirement</li><li>Formula: params × bytes_per_param × overhead_multiplier</li><li>Recommends: which GPU(s) can run this model</li><li>Factors in: KV cache memory at different sequence lengths + batch sizes</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Build an async HTTP load tester (<code>asyncio</code> + <code>httpx</code>) that hits your gateway</li><li>Implement a circuit breaker pattern with state machine (closed → open → half-open)</li><li>Calculate: VRAM needed to serve Llama-2-70B at batch_size=8, seq_len=4096</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://www.cloudflare.com/learning/cdn-glossary/reverse-proxy/\" target=\"_blank\" rel=\"noreferrer\">Cloudflare — What is a reverse proxy?</a></li><li>📝 <a href=\"https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker\" target=\"_blank\" rel=\"noreferrer\">Microsoft — Circuit Breaker Pattern</a></li><li>📝 <a href=\"https://blog.eleuther.ai/transformer-math/\" target=\"_blank\" rel=\"noreferrer\">Subbarao Kambhampati — LLM Inference Cost Estimation</a> — the GPU math</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=ozhe__GdWC8\" target=\"_blank\" rel=\"noreferrer\">Hussein Nasser — Proxy vs Reverse Proxy</a> (15 min)</li></ul>",
          "plainText": "Python (100%) Topics: - Reverse proxy patterns for model serving - Load balancing strategies: round-robin, least-connections, weighted - Health checks and circuit breakers - Rate limiting with Redis - Request queuing and backpressure - /metrics endpoint for observability Project: Python Inference Gateway Build a FastAPI reverse proxy to vLLM: 1. Distributes requests across vLLM instances (round-robin) 2. Health checks that ping backends every 5 seconds 3. Rate limiting with Redis (per API key) 4. Circuit breaker: remove unhealthy backends, retry after 30s 5. Request logging with timing metrics 6. /metrics endpoint that exposes request count, p99 latency, and token throughput as JSON Project: GPU Memory Calculator Build a tool that: 1. Given model name + quantization level, estimates VRAM requirement 2. Formula: params × bytesperparam × overheadmultiplier 3. Recommends: which GPU(s) can run this model 4. Factors in: KV cache memory at different sequence lengths + batch sizes Mini-exercises: - Build an async HTTP load tester (asyncio + httpx) that hits your gateway - Implement a circuit breaker pattern with state machine (closed → open → half-open) - Calculate: VRAM needed to serve Llama-2-70B at batchsize=8, seqlen=4096 Resources: - 📝 Cloudflare — What is a reverse proxy? - 📝 Microsoft — Circuit Breaker Pattern - 📝 Subbarao Kambhampati — LLM Inference Cost Estimation — the GPU math - 🎥 Hussein Nasser — Proxy vs Reverse Proxy (15 min)"
        },
        {
          "id": "phase-3-unit-15-inference-gateway-leetcode-3-medium",
          "title": "LeetCode (3 medium)",
          "html": "<ul><li>Design HashMap (#706) — fundamental data structure design</li><li>Implement Trie (#208) — prefix matching, like URL routing</li><li>Design Hit Counter (#362) — counting events</li><li><strong>Why now:</strong> Data structure design mirrors load balancer internals</li></ul>",
          "plainText": "LeetCode (3 medium) - Design HashMap (#706) — fundamental data structure design - Implement Trie (#208) — prefix matching, like URL routing - Design Hit Counter (#362) — counting events - Why now: Data structure design mirrors load balancer internals"
        },
        {
          "id": "phase-3-unit-15-inference-gateway-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 8 — The Trouble with Distributed Systems</li><li>Design exercise: Design a model-serving gateway for 50K RPM</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 8 — The Trouble with Distributed Systems - Design exercise: Design a model-serving gateway for 50K RPM"
        },
        {
          "id": "phase-3-unit-15-inference-gateway-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Working Python inference gateway with rate limiting and health checks</li><li>[ ] GPU memory calculator with CLI interface</li><li>[ ] Load test results comparing single vs load-balanced performance</li><li>[ ] Blog post: &quot;Building an LLM Inference Gateway in Python&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Working Python inference gateway with rate limiting and health checks - [ ] GPU memory calculator with CLI interface - [ ] Load test results comparing single vs load-balanced performance - [ ] Blog post: \"Building an LLM Inference Gateway in Python\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 15 — Inference Gateway ⭐⭐⭐⭐ Theme: Building the infrastructure layer in Python (Go comes next phase) > No Go in this unit. The inference gateway is built in Python. Go is introduced properly in Phase 4 with its own foundational units. Python (100%) Topics: - Reverse proxy patterns for model serving - Load balancing strategies: round-robin, least-connections, weighted - Health checks and circuit breakers - Rate limiting with Redis - Request queuing and backpressure - /metrics endpoint for observability Project: Python Inference Gateway Build a FastAPI reverse proxy to vLLM: 1. Distributes requests across vLLM instances (round-robin) 2. Health checks that ping backends every 5 seconds 3. Rate limiting with Redis (per API key) 4. Circuit breaker: remove unhealthy backends, retry after 30s 5. Request logging with timing metrics 6. /metrics endpoint that exposes request count, p99 latency, and token throughput as JSON Project: GPU Memory Calculator Build a tool that: 1. Given model name + quantization level, estimates VRAM requirement 2. Formula: params × bytesperparam × overheadmultiplier 3. Recommends: which GPU(s) can run this model 4. Factors in: KV cache memory at different sequence lengths + batch sizes Mini-exercises: - Build an async HTTP load tester (asyncio + httpx) that hits your gateway - Implement a circuit breaker pattern with state machine (closed → open → half-open) - Calculate: VRAM needed to serve Llama-2-70B at batchsize=8, seqlen=4096 Resources: - 📝 Cloudflare — What is a reverse proxy? - 📝 Microsoft — Circuit Breaker Pattern - 📝 Subbarao Kambhampati — LLM Inference Cost Estimation — the GPU math - 🎥 Hussein Nasser — Proxy vs Reverse Proxy (15 min) LeetCode (3 medium) - Design HashMap (#706) — fundamental data structure design - Implement Trie (#208) — prefix matching, like URL routing - Design Hit Counter (#362) — counting events - Why now: Data structure design mirrors load balancer internals Systems Design - 📖 DDIA Ch. 8 — The Trouble with Distributed Systems - Design exercise: Design a model-serving gateway for 50K RPM Deliverables - [ ] Working Python inference gateway with rate limiting and health checks - [ ] GPU memory calculator with CLI interface - [ ] Load test results comparing single vs load-balanced performance - [ ] Blog post: \"Building an LLM Inference Gateway in Python\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-3-phase-3-capstone-project-end-of-unit-15",
      "kind": "capstone",
      "label": "Phase Capstone",
      "unitCode": "",
      "title": "PHASE 3 CAPSTONE PROJECT (End of Unit 15)",
      "fullTitle": "PHASE 3 CAPSTONE PROJECT (End of Unit 15)",
      "difficulty": "",
      "phaseId": "phase-3",
      "phaseTitle": "PHASE 3: INFERENCE SYSTEMS (Units 12-15)",
      "introHtml": "",
      "sectionTitles": [
        "Mini LLM Serving Platform"
      ],
      "sections": [
        {
          "id": "phase-3-phase-3-capstone-project-end-of-unit-15-mini-llm-serving-platform",
          "title": "Mini LLM Serving Platform",
          "html": "<p>Combine Units 12-15:</p><ul><li><strong>vLLM backends</strong> (Unit 12) serving models</li><li><strong>Quantized models</strong> (Unit 13) for cost-effective serving</li><li><strong>Semantic cache</strong> (Unit 14) for response caching</li><li><strong>Python gateway</strong> (Unit 15) distributing traffic across backends</li><li><strong>Monitoring</strong> (Unit 14) showing latency, throughput, cache hits</li></ul><p><strong>Scoped deliverable:</strong> Working vLLM server + FastAPI gateway + Redis rate limiting + metrics endpoint. No auto-scaling, no Kubernetes. That&#39;s already a strong portfolio piece.</p><p><strong>Deliverable:</strong> End-to-end inference platform with automated benchmarks proving it&#39;s faster than single-model serving. Push to GitHub as portfolio piece #3.</p><hr>",
          "plainText": "Mini LLM Serving Platform Combine Units 12-15: - vLLM backends (Unit 12) serving models - Quantized models (Unit 13) for cost-effective serving - Semantic cache (Unit 14) for response caching - Python gateway (Unit 15) distributing traffic across backends - Monitoring (Unit 14) showing latency, throughput, cache hits Scoped deliverable: Working vLLM server + FastAPI gateway + Redis rate limiting + metrics endpoint. No auto-scaling, no Kubernetes. That's already a strong portfolio piece. Deliverable: End-to-end inference platform with automated benchmarks proving it's faster than single-model serving. Push to GitHub as portfolio piece #3. ---"
        }
      ],
      "searchText": "PHASE 3 CAPSTONE PROJECT (End of Unit 15) Mini LLM Serving Platform Combine Units 12-15: - vLLM backends (Unit 12) serving models - Quantized models (Unit 13) for cost-effective serving - Semantic cache (Unit 14) for response caching - Python gateway (Unit 15) distributing traffic across backends - Monitoring (Unit 14) showing latency, throughput, cache hits Scoped deliverable: Working vLLM server + FastAPI gateway + Redis rate limiting + metrics endpoint. No auto-scaling, no Kubernetes. That's already a strong portfolio piece. Deliverable: End-to-end inference platform with automated benchmarks proving it's faster than single-model serving. Push to GitHub as portfolio piece #3. ---"
    },
    {
      "id": "phase-4-unit-16a-go-fundamentals",
      "kind": "unit",
      "label": "Unit 16a",
      "unitCode": "16a",
      "title": "Go Fundamentals",
      "fullTitle": "Unit 16a — Go Fundamentals ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> Learning Go from scratch — variables, types, functions, error handling</p><p><strong>⏱️ Take your time.</strong> This is a new language. Don&#39;t rush.</p>",
      "sectionTitles": [
        "Go (100%)",
        "LeetCode (3 easy — do these in Go!)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-16a-go-fundamentals-go-100",
          "title": "Go (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Variables, types, constants</li><li>Functions, multiple return values</li><li>Structs, methods, interfaces</li><li>Error handling (<code>error</code> type, <code>fmt.Errorf</code>, wrapping errors)</li><li>Pointers (basics — Go is not C)</li><li>Slices and maps</li><li>Basic HTTP with <code>net/http</code></li><li>JSON handling with <code>encoding/json</code></li></ul><p><strong>Project: Go CLI Tool</strong> Build a Go CLI tool that:</p><ol><li>Calls an external API (OpenAI, weather API, etc.)</li><li>Parses the JSON response into Go structs</li><li>Formats and displays the output</li><li>Handles errors properly (network errors, API errors, JSON parse errors)</li><li>Uses command-line flags for configuration</li></ol><p>Simple, concrete, achievable. This is the right Go Week 1 project.</p><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://gobyexample.com/\" target=\"_blank\" rel=\"noreferrer\">Go by Example</a> — learn by working through examples</li><li>📝 <a href=\"https://go.dev/doc/effective_go\" target=\"_blank\" rel=\"noreferrer\">Effective Go</a> — official style guide</li><li>📖 <em>The Go Programming Language</em> Ch. 1-5</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=yyUHQIec83I\" target=\"_blank\" rel=\"noreferrer\">Golang Tutorial for Beginners</a> — TechWorld with Nana (3hr)</li></ul>",
          "plainText": "Go (100%) Topics: - Variables, types, constants - Functions, multiple return values - Structs, methods, interfaces - Error handling (error type, fmt.Errorf, wrapping errors) - Pointers (basics — Go is not C) - Slices and maps - Basic HTTP with net/http - JSON handling with encoding/json Project: Go CLI Tool Build a Go CLI tool that: 1. Calls an external API (OpenAI, weather API, etc.) 2. Parses the JSON response into Go structs 3. Formats and displays the output 4. Handles errors properly (network errors, API errors, JSON parse errors) 5. Uses command-line flags for configuration Simple, concrete, achievable. This is the right Go Week 1 project. Resources: - 📝 Go by Example — learn by working through examples - 📝 Effective Go — official style guide - 📖 The Go Programming Language Ch. 1-5 - 🎥 Golang Tutorial for Beginners — TechWorld with Nana (3hr)"
        },
        {
          "id": "phase-4-unit-16a-go-fundamentals-leetcode-3-easy-do-these-in-go",
          "title": "LeetCode (3 easy — do these in Go!)",
          "html": "<ul><li>Two Sum in Go — learn Go syntax through a familiar problem</li><li>Valid Parentheses in Go — practice Go&#39;s string handling</li><li>Reverse Linked List in Go — practice Go&#39;s pointer semantics</li></ul>",
          "plainText": "LeetCode (3 easy — do these in Go!) - Two Sum in Go — learn Go syntax through a familiar problem - Valid Parentheses in Go — practice Go's string handling - Reverse Linked List in Go — practice Go's pointer semantics"
        },
        {
          "id": "phase-4-unit-16a-go-fundamentals-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Go CLI tool that calls an API and processes JSON — pushed to GitHub</li><li>[ ] 3 LeetCode solutions written in Go</li><li>[ ] Blog post: &quot;First Impressions of Go — Coming from Python&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Go CLI tool that calls an API and processes JSON — pushed to GitHub - [ ] 3 LeetCode solutions written in Go - [ ] Blog post: \"First Impressions of Go — Coming from Python\" ---"
        }
      ],
      "searchText": "Unit 16a — Go Fundamentals ⭐⭐⭐ Theme: Learning Go from scratch — variables, types, functions, error handling ⏱️ Take your time. This is a new language. Don't rush. Go (100%) Topics: - Variables, types, constants - Functions, multiple return values - Structs, methods, interfaces - Error handling (error type, fmt.Errorf, wrapping errors) - Pointers (basics — Go is not C) - Slices and maps - Basic HTTP with net/http - JSON handling with encoding/json Project: Go CLI Tool Build a Go CLI tool that: 1. Calls an external API (OpenAI, weather API, etc.) 2. Parses the JSON response into Go structs 3. Formats and displays the output 4. Handles errors properly (network errors, API errors, JSON parse errors) 5. Uses command-line flags for configuration Simple, concrete, achievable. This is the right Go Week 1 project. Resources: - 📝 Go by Example — learn by working through examples - 📝 Effective Go — official style guide - 📖 The Go Programming Language Ch. 1-5 - 🎥 Golang Tutorial for Beginners — TechWorld with Nana (3hr) LeetCode (3 easy — do these in Go!) - Two Sum in Go — learn Go syntax through a familiar problem - Valid Parentheses in Go — practice Go's string handling - Reverse Linked List in Go — practice Go's pointer semantics Deliverables - [ ] Go CLI tool that calls an API and processes JSON — pushed to GitHub - [ ] 3 LeetCode solutions written in Go - [ ] Blog post: \"First Impressions of Go — Coming from Python\" ---"
    },
    {
      "id": "phase-4-unit-16b-go-with-postgres-pgvector",
      "kind": "unit",
      "label": "Unit 16b",
      "unitCode": "16b",
      "title": "Go with Postgres & pgvector",
      "fullTitle": "Unit 16b — Go with Postgres & pgvector ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> Go database access; building a real service</p>",
      "sectionTitles": [
        "Go (70%) + Python (30%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-16b-go-with-postgres-pgvector-go-70-python-30",
          "title": "Go (70%) + Python (30%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Go Postgres client with <code>pgx</code> library</li><li>Connection pooling with <code>pgxpool</code></li><li>Go structs as database models</li><li>pgvector queries from Go</li><li>Go HTTP REST API patterns</li></ul><p><strong>Project: pgvector CRUD API in Go</strong> Build a Go REST API:</p><ol><li>CRUD operations for documents with embeddings</li><li>pgvector similarity search endpoint</li><li>Connection pooling with <code>pgxpool</code></li><li>Proper error handling and JSON responses</li><li>Compare with your Python pgvector code from Unit 9b</li></ol><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://github.com/jackc/pgx\" target=\"_blank\" rel=\"noreferrer\">jackc/pgx docs</a> — best Go Postgres driver</li><li>📝 <a href=\"https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/\" target=\"_blank\" rel=\"noreferrer\">Mat Ryer — How I write HTTP services in Go</a></li><li>📖 <em>The Go Programming Language</em> Ch. 7 (Interfaces)</li></ul>",
          "plainText": "Go (70%) + Python (30%) Topics: - Go Postgres client with pgx library - Connection pooling with pgxpool - Go structs as database models - pgvector queries from Go - Go HTTP REST API patterns Project: pgvector CRUD API in Go Build a Go REST API: 1. CRUD operations for documents with embeddings 2. pgvector similarity search endpoint 3. Connection pooling with pgxpool 4. Proper error handling and JSON responses 5. Compare with your Python pgvector code from Unit 9b Resources: - 📝 jackc/pgx docs — best Go Postgres driver - 📝 Mat Ryer — How I write HTTP services in Go - 📖 The Go Programming Language Ch. 7 (Interfaces)"
        },
        {
          "id": "phase-4-unit-16b-go-with-postgres-pgvector-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Go REST API with pgvector search</li><li>[ ] Connection pooling working properly</li><li>[ ] Blog post: &quot;Go + Postgres — Building a Vector Search API&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Go REST API with pgvector search - [ ] Connection pooling working properly - [ ] Blog post: \"Go + Postgres — Building a Vector Search API\" ---"
        }
      ],
      "searchText": "Unit 16b — Go with Postgres & pgvector ⭐⭐⭐ Theme: Go database access; building a real service Go (70%) + Python (30%) Topics: - Go Postgres client with pgx library - Connection pooling with pgxpool - Go structs as database models - pgvector queries from Go - Go HTTP REST API patterns Project: pgvector CRUD API in Go Build a Go REST API: 1. CRUD operations for documents with embeddings 2. pgvector similarity search endpoint 3. Connection pooling with pgxpool 4. Proper error handling and JSON responses 5. Compare with your Python pgvector code from Unit 9b Resources: - 📝 jackc/pgx docs — best Go Postgres driver - 📝 Mat Ryer — How I write HTTP services in Go - 📖 The Go Programming Language Ch. 7 (Interfaces) Deliverables - [ ] Go REST API with pgvector search - [ ] Connection pooling working properly - [ ] Blog post: \"Go + Postgres — Building a Vector Search API\" ---"
    },
    {
      "id": "phase-4-unit-17a-rag-chunking-strategies",
      "kind": "unit",
      "label": "Unit 17a",
      "unitCode": "17a",
      "title": "RAG: Chunking Strategies",
      "fullTitle": "Unit 17a — RAG: Chunking Strategies ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> How you chunk documents determines RAG quality</p>",
      "sectionTitles": [
        "Python (100%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-17a-rag-chunking-strategies-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Chunking strategies: fixed-size, recursive character, semantic chunking</li><li>Chunk size vs retrieval quality trade-offs</li><li>Overlap strategies</li><li>Document parsing: PDF, Markdown, HTML → clean text</li></ul><p><strong>Project: Chunking Strategy Comparison</strong> Implement all three chunking strategies and compare on your Phase 2 document assistant:</p><ol><li>Fixed-size (256, 512, 1024 tokens)</li><li>Recursive character splitting (LangChain-style)</li><li>Semantic chunking (split on topic boundaries)</li><li>Run the same 20 test queries against each strategy</li><li>Measure retrieval quality: does the correct chunk appear in top-5?</li></ol><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://huyenchip.com/2024/07/25/genai-platform.html\" target=\"_blank\" rel=\"noreferrer\">Chip Huyen — Building a RAG System</a></li><li>📝 <a href=\"https://www.pinecone.io/learn/retrieval-augmented-generation/\" target=\"_blank\" rel=\"noreferrer\">Pinecone — RAG Guide</a></li><li>📝 <a href=\"https://docs.llamaindex.ai/en/stable/\" target=\"_blank\" rel=\"noreferrer\">LlamaIndex Docs</a></li></ul>",
          "plainText": "Python (100%) Topics: - Chunking strategies: fixed-size, recursive character, semantic chunking - Chunk size vs retrieval quality trade-offs - Overlap strategies - Document parsing: PDF, Markdown, HTML → clean text Project: Chunking Strategy Comparison Implement all three chunking strategies and compare on your Phase 2 document assistant: 1. Fixed-size (256, 512, 1024 tokens) 2. Recursive character splitting (LangChain-style) 3. Semantic chunking (split on topic boundaries) 4. Run the same 20 test queries against each strategy 5. Measure retrieval quality: does the correct chunk appear in top-5? Resources: - 📝 Chip Huyen — Building a RAG System - 📝 Pinecone — RAG Guide - 📝 LlamaIndex Docs"
        },
        {
          "id": "phase-4-unit-17a-rag-chunking-strategies-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Three chunking implementations with comparison results</li><li>[ ] Retrieval quality measurements across strategies</li><li>[ ] Blog post: &quot;Chunking Strategies for RAG — What Actually Works&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Three chunking implementations with comparison results - [ ] Retrieval quality measurements across strategies - [ ] Blog post: \"Chunking Strategies for RAG — What Actually Works\" ---"
        }
      ],
      "searchText": "Unit 17a — RAG: Chunking Strategies ⭐⭐⭐⭐ Theme: How you chunk documents determines RAG quality Python (100%) Topics: - Chunking strategies: fixed-size, recursive character, semantic chunking - Chunk size vs retrieval quality trade-offs - Overlap strategies - Document parsing: PDF, Markdown, HTML → clean text Project: Chunking Strategy Comparison Implement all three chunking strategies and compare on your Phase 2 document assistant: 1. Fixed-size (256, 512, 1024 tokens) 2. Recursive character splitting (LangChain-style) 3. Semantic chunking (split on topic boundaries) 4. Run the same 20 test queries against each strategy 5. Measure retrieval quality: does the correct chunk appear in top-5? Resources: - 📝 Chip Huyen — Building a RAG System - 📝 Pinecone — RAG Guide - 📝 LlamaIndex Docs Deliverables - [ ] Three chunking implementations with comparison results - [ ] Retrieval quality measurements across strategies - [ ] Blog post: \"Chunking Strategies for RAG — What Actually Works\" ---"
    },
    {
      "id": "phase-4-unit-17b-rag-hybrid-retrieval-re-ranking",
      "kind": "unit",
      "label": "Unit 17b",
      "unitCode": "17b",
      "title": "RAG: Hybrid Retrieval & Re-ranking",
      "fullTitle": "Unit 17b — RAG: Hybrid Retrieval & Re-ranking ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> BM25 + vector search; cross-encoder re-ranking</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (2-3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-17b-rag-hybrid-retrieval-re-ranking-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>BM25 (sparse retrieval) — implement a simple scorer from scratch (~30 lines)</li><li>Hybrid search: combine BM25 + vector similarity</li><li>Why hybrid beats either alone</li><li>Re-ranking with cross-encoder models</li><li>When re-ranking is worth the latency cost</li><li>Citation: each RAG answer includes source references</li></ul><p><strong>Project: Production RAG Pipeline</strong> Build a complete RAG system (incremental improvement to Phase 2 capstone):</p><ol><li>Hybrid search (BM25 + pgvector)</li><li>Cross-encoder re-ranking of top-20 results</li><li>Context injection with source citations</li><li>Streaming response via FastAPI</li><li>Evaluation: 50 test questions with known answers, score with LLM-as-Judge</li></ol><p><strong>Try fixed-size vs semantic chunking and measure which produces better answers.</strong> One paragraph in your blog post about this finding is a strong portfolio signal.</p><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://hamel.dev/blog/posts/rag/\" target=\"_blank\" rel=\"noreferrer\">Hamel Husain — RAG is More Than Just Vector Search</a></li><li>📝 <a href=\"https://docs.ragas.io/\" target=\"_blank\" rel=\"noreferrer\">Ragas — RAG Evaluation Framework</a></li><li>🎥 <a href=\"https://www.youtube.com/watch?v=tcqEUSNCn8I\" target=\"_blank\" rel=\"noreferrer\">Sam Witteveen — RAG Deep Dive</a> (45 min)</li></ul>",
          "plainText": "Python (100%) Topics: - BM25 (sparse retrieval) — implement a simple scorer from scratch (30 lines) - Hybrid search: combine BM25 + vector similarity - Why hybrid beats either alone - Re-ranking with cross-encoder models - When re-ranking is worth the latency cost - Citation: each RAG answer includes source references Project: Production RAG Pipeline Build a complete RAG system (incremental improvement to Phase 2 capstone): 1. Hybrid search (BM25 + pgvector) 2. Cross-encoder re-ranking of top-20 results 3. Context injection with source citations 4. Streaming response via FastAPI 5. Evaluation: 50 test questions with known answers, score with LLM-as-Judge Try fixed-size vs semantic chunking and measure which produces better answers. One paragraph in your blog post about this finding is a strong portfolio signal. Resources: - 📝 Hamel Husain — RAG is More Than Just Vector Search - 📝 Ragas — RAG Evaluation Framework - 🎥 Sam Witteveen — RAG Deep Dive (45 min)"
        },
        {
          "id": "phase-4-unit-17b-rag-hybrid-retrieval-re-ranking-leetcode-2-3-medium",
          "title": "LeetCode (2-3 medium)",
          "html": "<ul><li>Word Break (#139) — string matching</li><li>Search Suggestions System (#1268) — trie/search</li><li><strong>Why now:</strong> Search and matching patterns mirror retrieval algorithms</li></ul>",
          "plainText": "LeetCode (2-3 medium) - Word Break (#139) — string matching - Search Suggestions System (#1268) — trie/search - Why now: Search and matching patterns mirror retrieval algorithms"
        },
        {
          "id": "phase-4-unit-17b-rag-hybrid-retrieval-re-ranking-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 10 — Batch Processing</li><li>Design exercise: Design a RAG system for a company with 1M internal documents</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 10 — Batch Processing - Design exercise: Design a RAG system for a company with 1M internal documents"
        },
        {
          "id": "phase-4-unit-17b-rag-hybrid-retrieval-re-ranking-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Production RAG pipeline with hybrid search + re-ranking + streaming</li><li>[ ] RAG evaluation report comparing chunking/embedding strategies</li><li>[ ] Blog post: &quot;Building RAG Right — Lessons from Evaluating 50+ Queries&quot;</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Production RAG pipeline with hybrid search + re-ranking + streaming - [ ] RAG evaluation report comparing chunking/embedding strategies - [ ] Blog post: \"Building RAG Right — Lessons from Evaluating 50+ Queries\" - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 17b — RAG: Hybrid Retrieval & Re-ranking ⭐⭐⭐⭐ Theme: BM25 + vector search; cross-encoder re-ranking Python (100%) Topics: - BM25 (sparse retrieval) — implement a simple scorer from scratch (30 lines) - Hybrid search: combine BM25 + vector similarity - Why hybrid beats either alone - Re-ranking with cross-encoder models - When re-ranking is worth the latency cost - Citation: each RAG answer includes source references Project: Production RAG Pipeline Build a complete RAG system (incremental improvement to Phase 2 capstone): 1. Hybrid search (BM25 + pgvector) 2. Cross-encoder re-ranking of top-20 results 3. Context injection with source citations 4. Streaming response via FastAPI 5. Evaluation: 50 test questions with known answers, score with LLM-as-Judge Try fixed-size vs semantic chunking and measure which produces better answers. One paragraph in your blog post about this finding is a strong portfolio signal. Resources: - 📝 Hamel Husain — RAG is More Than Just Vector Search - 📝 Ragas — RAG Evaluation Framework - 🎥 Sam Witteveen — RAG Deep Dive (45 min) LeetCode (2-3 medium) - Word Break (#139) — string matching - Search Suggestions System (#1268) — trie/search - Why now: Search and matching patterns mirror retrieval algorithms Systems Design - 📖 DDIA Ch. 10 — Batch Processing - Design exercise: Design a RAG system for a company with 1M internal documents Deliverables - [ ] Production RAG pipeline with hybrid search + re-ranking + streaming - [ ] RAG evaluation report comparing chunking/embedding strategies - [ ] Blog post: \"Building RAG Right — Lessons from Evaluating 50+ Queries\" - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-4-unit-18-async-processing-job-queues",
      "kind": "unit",
      "label": "Unit 18",
      "unitCode": "18",
      "title": "Async Processing & Job Queues",
      "fullTitle": "Unit 18 — Async Processing & Job Queues ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> Background processing; the pattern used in every production LLM API</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (2-3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-18-async-processing-job-queues-python-100",
          "title": "Python (100%)",
          "html": "<blockquote><p><strong>Start with RQ (Redis Queue), not Celery.</strong> Same concepts, 10% of the setup complexity. Learn the pattern first, optimize the tooling later.</p></blockquote><p><strong>Topics:</strong></p><ul><li>Task queues: RQ (Redis Queue) — simple and teaches the core concepts</li><li>Job states: pending, running, completed, failed, retrying</li><li>Async patterns: fire-and-forget, request-reply, fan-out/fan-in</li><li>Redis as message broker and result backend</li><li>Idempotency and exactly-once processing</li><li>Dead letter queues — what happens to jobs that fail after 3 retries? This is the question interviewers ask.</li></ul><p><strong>Project: Async LLM Inference Job Queue</strong> Build the exact pattern used in production LLM APIs:</p><ol><li>FastAPI endpoint accepts LLM generation request → returns job ID</li><li>Enqueues to RQ with the job ID</li><li>Worker processes the request against OpenAI/vLLM</li><li>Client polls for status via <code>/jobs/{id}/status</code></li><li>Retry logic with exponential backoff on failures</li><li>Dead letter queue for permanently failed jobs</li><li>Job priority levels</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Implement a simple in-memory task queue with <code>asyncio.Queue</code></li><li>Build fan-out: one request spawns 5 sub-tasks, collect all results</li><li>Load test: how many jobs/sec can your system handle?</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://python-rq.org/\" target=\"_blank\" rel=\"noreferrer\">Python RQ docs</a> — simple task queue</li><li>📝 <a href=\"https://martinfowler.com/articles/201701-event-driven.html\" target=\"_blank\" rel=\"noreferrer\">Martin Fowler — Event-Driven Architecture</a></li><li>📖 <em>DDIA</em> Ch. 11 — Stream Processing</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=GVvgJGAz2kg\" target=\"_blank\" rel=\"noreferrer\">ArjanCodes — Background Tasks</a> (20 min)</li></ul>",
          "plainText": "Python (100%) > Start with RQ (Redis Queue), not Celery. Same concepts, 10% of the setup complexity. Learn the pattern first, optimize the tooling later. Topics: - Task queues: RQ (Redis Queue) — simple and teaches the core concepts - Job states: pending, running, completed, failed, retrying - Async patterns: fire-and-forget, request-reply, fan-out/fan-in - Redis as message broker and result backend - Idempotency and exactly-once processing - Dead letter queues — what happens to jobs that fail after 3 retries? This is the question interviewers ask. Project: Async LLM Inference Job Queue Build the exact pattern used in production LLM APIs: 1. FastAPI endpoint accepts LLM generation request → returns job ID 2. Enqueues to RQ with the job ID 3. Worker processes the request against OpenAI/vLLM 4. Client polls for status via /jobs/{id}/status 5. Retry logic with exponential backoff on failures 6. Dead letter queue for permanently failed jobs 7. Job priority levels Mini-exercises: - Implement a simple in-memory task queue with asyncio.Queue - Build fan-out: one request spawns 5 sub-tasks, collect all results - Load test: how many jobs/sec can your system handle? Resources: - 📝 Python RQ docs — simple task queue - 📝 Martin Fowler — Event-Driven Architecture - 📖 DDIA Ch. 11 — Stream Processing - 🎥 ArjanCodes — Background Tasks (20 min)"
        },
        {
          "id": "phase-4-unit-18-async-processing-job-queues-leetcode-2-3-medium",
          "title": "LeetCode (2-3 medium)",
          "html": "<ul><li>Task Scheduler (#621) — scheduling with cooldowns</li><li>Design Add and Search Words (#211) — Trie design</li><li><strong>Why now:</strong> Scheduling and queue patterns directly mirror job queue design</li></ul>",
          "plainText": "LeetCode (2-3 medium) - Task Scheduler (#621) — scheduling with cooldowns - Design Add and Search Words (#211) — Trie design - Why now: Scheduling and queue patterns directly mirror job queue design"
        },
        {
          "id": "phase-4-unit-18-async-processing-job-queues-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 11 — Stream Processing</li><li>Design exercise: Design a background job processing system handling 1M jobs/day</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 11 — Stream Processing - Design exercise: Design a background job processing system handling 1M jobs/day"
        },
        {
          "id": "phase-4-unit-18-async-processing-job-queues-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Async LLM job queue with FastAPI + RQ</li><li>[ ] Dead letter queue handling for failed jobs</li><li>[ ] Blog post: &quot;Task Queues for ML — When Sync Isn&#39;t Enough&quot;</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Async LLM job queue with FastAPI + RQ - [ ] Dead letter queue handling for failed jobs - [ ] Blog post: \"Task Queues for ML — When Sync Isn't Enough\" - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 18 — Async Processing & Job Queues ⭐⭐⭐ Theme: Background processing; the pattern used in every production LLM API Python (100%) > Start with RQ (Redis Queue), not Celery. Same concepts, 10% of the setup complexity. Learn the pattern first, optimize the tooling later. Topics: - Task queues: RQ (Redis Queue) — simple and teaches the core concepts - Job states: pending, running, completed, failed, retrying - Async patterns: fire-and-forget, request-reply, fan-out/fan-in - Redis as message broker and result backend - Idempotency and exactly-once processing - Dead letter queues — what happens to jobs that fail after 3 retries? This is the question interviewers ask. Project: Async LLM Inference Job Queue Build the exact pattern used in production LLM APIs: 1. FastAPI endpoint accepts LLM generation request → returns job ID 2. Enqueues to RQ with the job ID 3. Worker processes the request against OpenAI/vLLM 4. Client polls for status via /jobs/{id}/status 5. Retry logic with exponential backoff on failures 6. Dead letter queue for permanently failed jobs 7. Job priority levels Mini-exercises: - Implement a simple in-memory task queue with asyncio.Queue - Build fan-out: one request spawns 5 sub-tasks, collect all results - Load test: how many jobs/sec can your system handle? Resources: - 📝 Python RQ docs — simple task queue - 📝 Martin Fowler — Event-Driven Architecture - 📖 DDIA Ch. 11 — Stream Processing - 🎥 ArjanCodes — Background Tasks (20 min) LeetCode (2-3 medium) - Task Scheduler (#621) — scheduling with cooldowns - Design Add and Search Words (#211) — Trie design - Why now: Scheduling and queue patterns directly mirror job queue design Systems Design - 📖 DDIA Ch. 11 — Stream Processing - Design exercise: Design a background job processing system handling 1M jobs/day Deliverables - [ ] Async LLM job queue with FastAPI + RQ - [ ] Dead letter queue handling for failed jobs - [ ] Blog post: \"Task Queues for ML — When Sync Isn't Enough\" - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-4-unit-19a-grpc-fundamentals",
      "kind": "unit",
      "label": "Unit 19a",
      "unitCode": "19a",
      "title": "gRPC Fundamentals",
      "fullTitle": "Unit 19a — gRPC Fundamentals ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> Protocol Buffers, simple unary RPC, getting the round-trip working</p>",
      "sectionTitles": [
        "Python (40%) + Go (60%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-19a-grpc-fundamentals-python-40-go-60",
          "title": "Python (40%) + Go (60%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>gRPC: Protocol Buffers, service definitions, code generation</li><li>Unary RPC (simple request-response)</li><li>gRPC vs REST: when to use each</li><li>Go gRPC server + Python gRPC client</li></ul><p><strong>Project: Simple gRPC Inference Service</strong> Build one simple service:</p><ol><li>Define <code>.proto</code> for inference (prompt in → response out)</li><li>Implement Go gRPC server</li><li>Implement Python gRPC client</li><li>Get the round-trip working — send a prompt, get a response</li><li>Test with <code>grpcurl</code></li></ol><p>Get this working before touching streaming or interceptors.</p><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://grpc.io/docs/\" target=\"_blank\" rel=\"noreferrer\">gRPC Official Docs</a> — language guides</li><li>📝 <a href=\"https://realpython.com/python-microservices-grpc/\" target=\"_blank\" rel=\"noreferrer\">Real Python — gRPC in Python</a></li><li>📖 <em>DDIA</em> Ch. 4 — Encoding and Evolution (protobuf context)</li></ul>",
          "plainText": "Python (40%) + Go (60%) Topics: - gRPC: Protocol Buffers, service definitions, code generation - Unary RPC (simple request-response) - gRPC vs REST: when to use each - Go gRPC server + Python gRPC client Project: Simple gRPC Inference Service Build one simple service: 1. Define .proto for inference (prompt in → response out) 2. Implement Go gRPC server 3. Implement Python gRPC client 4. Get the round-trip working — send a prompt, get a response 5. Test with grpcurl Get this working before touching streaming or interceptors. Resources: - 📝 gRPC Official Docs — language guides - 📝 Real Python — gRPC in Python - 📖 DDIA Ch. 4 — Encoding and Evolution (protobuf context)"
        },
        {
          "id": "phase-4-unit-19a-grpc-fundamentals-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Working gRPC server in Go that responds to requests</li><li>[ ] Python client that calls the Go server</li><li>[ ] Tested with <code>grpcurl</code></li><li>[ ] Blog post: &quot;gRPC — Getting Started with Go and Python&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Working gRPC server in Go that responds to requests - [ ] Python client that calls the Go server - [ ] Tested with grpcurl - [ ] Blog post: \"gRPC — Getting Started with Go and Python\" ---"
        }
      ],
      "searchText": "Unit 19a — gRPC Fundamentals ⭐⭐⭐⭐ Theme: Protocol Buffers, simple unary RPC, getting the round-trip working Python (40%) + Go (60%) Topics: - gRPC: Protocol Buffers, service definitions, code generation - Unary RPC (simple request-response) - gRPC vs REST: when to use each - Go gRPC server + Python gRPC client Project: Simple gRPC Inference Service Build one simple service: 1. Define .proto for inference (prompt in → response out) 2. Implement Go gRPC server 3. Implement Python gRPC client 4. Get the round-trip working — send a prompt, get a response 5. Test with grpcurl Get this working before touching streaming or interceptors. Resources: - 📝 gRPC Official Docs — language guides - 📝 Real Python — gRPC in Python - 📖 DDIA Ch. 4 — Encoding and Evolution (protobuf context) Deliverables - [ ] Working gRPC server in Go that responds to requests - [ ] Python client that calls the Go server - [ ] Tested with grpcurl - [ ] Blog post: \"gRPC — Getting Started with Go and Python\" ---"
    },
    {
      "id": "phase-4-unit-19b-grpc-streaming-gateway",
      "kind": "unit",
      "label": "Unit 19b",
      "unitCode": "19b",
      "title": "gRPC Streaming & Gateway",
      "fullTitle": "Unit 19b — gRPC Streaming & Gateway ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "<p><strong>Theme:</strong> Server-side streaming; FastAPI gateway that proxies to gRPC</p>",
      "sectionTitles": [
        "Python (50%) + Go (50%)",
        "LeetCode (2-3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-4-unit-19b-grpc-streaming-gateway-python-50-go-50",
          "title": "Python (50%) + Go (50%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Streaming gRPC: server streaming (tokens stream back)</li><li>gRPC interceptors for logging, auth, and metrics</li><li>FastAPI HTTP gateway that proxies to gRPC backend</li><li>SSE (HTTP) ↔ gRPC streaming translation</li><li>Docker Compose for multi-service local development</li></ul><p><strong>Project: Streaming gRPC Service + FastAPI Gateway</strong></p><ol><li>Add server-side streaming to your Unit 19a service (tokens stream back)</li><li>Add gRPC interceptors for logging and metrics</li><li>Build FastAPI gateway that translates REST → gRPC</li><li>Streaming: SSE on the HTTP side ↔ gRPC streaming on the backend</li><li>Docker Compose for the full stack</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Compare: gRPC vs REST latency for 1000 requests</li><li>Implement gRPC deadline propagation (timeout handling)</li><li>Write a bidirectional streaming chat over gRPC</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices\" target=\"_blank\" rel=\"noreferrer\">Microsoft — Microservices Architecture</a></li><li>📝 <a href=\"https://lets-go-further.alexedwards.net/\" target=\"_blank\" rel=\"noreferrer\">Alex Edwards — Let&amp;#39;s Go Further</a></li><li>🎥 <a href=\"https://www.youtube.com/watch?v=Yw4rkaTc0f8\" target=\"_blank\" rel=\"noreferrer\">Hussein Nasser — gRPC Full Course</a> (40 min)</li></ul><p><strong>Dropped:</strong> &quot;Service discovery&quot; — it requires Consul or K8s and is not relevant to an entry-level role.</p>",
          "plainText": "Python (50%) + Go (50%) Topics: - Streaming gRPC: server streaming (tokens stream back) - gRPC interceptors for logging, auth, and metrics - FastAPI HTTP gateway that proxies to gRPC backend - SSE (HTTP) ↔ gRPC streaming translation - Docker Compose for multi-service local development Project: Streaming gRPC Service + FastAPI Gateway 1. Add server-side streaming to your Unit 19a service (tokens stream back) 2. Add gRPC interceptors for logging and metrics 3. Build FastAPI gateway that translates REST → gRPC 4. Streaming: SSE on the HTTP side ↔ gRPC streaming on the backend 5. Docker Compose for the full stack Mini-exercises: - Compare: gRPC vs REST latency for 1000 requests - Implement gRPC deadline propagation (timeout handling) - Write a bidirectional streaming chat over gRPC Resources: - 📝 Microsoft — Microservices Architecture - 📝 Alex Edwards — Let's Go Further - 🎥 Hussein Nasser — gRPC Full Course (40 min) Dropped: \"Service discovery\" — it requires Consul or K8s and is not relevant to an entry-level role."
        },
        {
          "id": "phase-4-unit-19b-grpc-streaming-gateway-leetcode-2-3-medium",
          "title": "LeetCode (2-3 medium)",
          "html": "<ul><li>Clone Graph (#133) — like service dependency graphs</li><li>Network Delay Time (#743) — Dijkstra, like request routing</li><li><strong>Why now:</strong> Graph algorithms model service communication patterns</li></ul>",
          "plainText": "LeetCode (2-3 medium) - Clone Graph (#133) — like service dependency graphs - Network Delay Time (#743) — Dijkstra, like request routing - Why now: Graph algorithms model service communication patterns"
        },
        {
          "id": "phase-4-unit-19b-grpc-streaming-gateway-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>DDIA</em> Ch. 4, 8 — Encoding + Distributed Systems</li><li>Design exercise: Design a microservice architecture for an LLM platform</li></ul>",
          "plainText": "Systems Design - 📖 DDIA Ch. 4, 8 — Encoding + Distributed Systems - Design exercise: Design a microservice architecture for an LLM platform"
        },
        {
          "id": "phase-4-unit-19b-grpc-streaming-gateway-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Go gRPC streaming service with interceptors</li><li>[ ] Python FastAPI gateway translating REST ↔ gRPC</li><li>[ ] Docker Compose for full multi-service stack</li><li>[ ] Blog post: &quot;gRPC for ML Services — Go Backend, Python Gateway&quot;</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Go gRPC streaming service with interceptors - [ ] Python FastAPI gateway translating REST ↔ gRPC - [ ] Docker Compose for full multi-service stack - [ ] Blog post: \"gRPC for ML Services — Go Backend, Python Gateway\" - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 19b — gRPC Streaming & Gateway ⭐⭐⭐⭐ Theme: Server-side streaming; FastAPI gateway that proxies to gRPC Python (50%) + Go (50%) Topics: - Streaming gRPC: server streaming (tokens stream back) - gRPC interceptors for logging, auth, and metrics - FastAPI HTTP gateway that proxies to gRPC backend - SSE (HTTP) ↔ gRPC streaming translation - Docker Compose for multi-service local development Project: Streaming gRPC Service + FastAPI Gateway 1. Add server-side streaming to your Unit 19a service (tokens stream back) 2. Add gRPC interceptors for logging and metrics 3. Build FastAPI gateway that translates REST → gRPC 4. Streaming: SSE on the HTTP side ↔ gRPC streaming on the backend 5. Docker Compose for the full stack Mini-exercises: - Compare: gRPC vs REST latency for 1000 requests - Implement gRPC deadline propagation (timeout handling) - Write a bidirectional streaming chat over gRPC Resources: - 📝 Microsoft — Microservices Architecture - 📝 Alex Edwards — Let's Go Further - 🎥 Hussein Nasser — gRPC Full Course (40 min) Dropped: \"Service discovery\" — it requires Consul or K8s and is not relevant to an entry-level role. LeetCode (2-3 medium) - Clone Graph (#133) — like service dependency graphs - Network Delay Time (#743) — Dijkstra, like request routing - Why now: Graph algorithms model service communication patterns Systems Design - 📖 DDIA Ch. 4, 8 — Encoding + Distributed Systems - Design exercise: Design a microservice architecture for an LLM platform Deliverables - [ ] Go gRPC streaming service with interceptors - [ ] Python FastAPI gateway translating REST ↔ gRPC - [ ] Docker Compose for full multi-service stack - [ ] Blog post: \"gRPC for ML Services — Go Backend, Python Gateway\" - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-4-phase-4-capstone-project-end-of-unit-19b",
      "kind": "capstone",
      "label": "Phase Capstone",
      "unitCode": "",
      "title": "PHASE 4 CAPSTONE PROJECT (End of Unit 19b)",
      "fullTitle": "PHASE 4 CAPSTONE PROJECT (End of Unit 19b)",
      "difficulty": "",
      "phaseId": "phase-4",
      "phaseTitle": "PHASE 4: BACKEND SYSTEMS (Units 16-21)",
      "introHtml": "",
      "sectionTitles": [
        "Enterprise RAG Platform"
      ],
      "sections": [
        {
          "id": "phase-4-phase-4-capstone-project-end-of-unit-19b-enterprise-rag-platform",
          "title": "Enterprise RAG Platform",
          "html": "<p>Combine Units 16-19:</p><ul><li><strong>Postgres + pgvector</strong> (Unit 16b) for document and embedding storage</li><li><strong>RAG pipeline</strong> (Unit 17a/17b) for intelligent document Q&amp;A</li><li><strong>Job queue</strong> (Unit 18) for async document ingestion</li><li><strong>gRPC</strong> (Unit 19a/19b) as a stretch goal for service communication</li></ul><p><strong>Scoped architecture:</strong> Python ingestion service + Python embedding service + Python retrieval service + FastAPI gateway. These four services communicating via REST.</p><p><strong>Stretch goal:</strong> If you&#39;ve completed everything else, migrate one service pair to gRPC.</p><p><strong>Observability targets:</strong> Prometheus scraping all 4 services, one Grafana dashboard showing request rates and latency per service, one alert rule.</p><p><strong>This project IS your portfolio centerpiece — invest 2-3 weeks in it and make it genuinely good, not just checking boxes.</strong></p><p><strong>Deliverable:</strong> Multi-service document processing platform with async ingestion, RAG search, and monitoring. Push to GitHub as portfolio piece #4.</p><hr><blockquote><p>### 🎯 JOB-READINESS CHECKPOINT</p><p><strong>You now have enough to apply to junior MLE/AI backend roles.</strong> Don&#39;t wait until the plan is done.</p><ul><li>[ ] <strong>Start applying to 5-10 jobs per week</strong> starting now</li><li>[ ] Portfolio: 4 GitHub projects with READMEs (Phase 1-4 capstones)</li><li>[ ] Blog: 15+ technical posts demonstrating depth</li><li>[ ] Practice: explain each project to a non-technical person and a technical person</li><li>[ ] Resume: update with specific technologies and projects</li><li>[ ] Continue learning (Phases 5-7) while applying — don&#39;t pause either activity</li></ul></blockquote><hr>",
          "plainText": "Enterprise RAG Platform Combine Units 16-19: - Postgres + pgvector (Unit 16b) for document and embedding storage - RAG pipeline (Unit 17a/17b) for intelligent document Q&A - Job queue (Unit 18) for async document ingestion - gRPC (Unit 19a/19b) as a stretch goal for service communication Scoped architecture: Python ingestion service + Python embedding service + Python retrieval service + FastAPI gateway. These four services communicating via REST. Stretch goal: If you've completed everything else, migrate one service pair to gRPC. Observability targets: Prometheus scraping all 4 services, one Grafana dashboard showing request rates and latency per service, one alert rule. This project IS your portfolio centerpiece — invest 2-3 weeks in it and make it genuinely good, not just checking boxes. Deliverable: Multi-service document processing platform with async ingestion, RAG search, and monitoring. Push to GitHub as portfolio piece #4. --- > ### 🎯 JOB-READINESS CHECKPOINT > > You now have enough to apply to junior MLE/AI backend roles. Don't wait until the plan is done. > > - [ ] Start applying to 5-10 jobs per week starting now > - [ ] Portfolio: 4 GitHub projects with READMEs (Phase 1-4 capstones) > - [ ] Blog: 15+ technical posts demonstrating depth > - [ ] Practice: explain each project to a non-technical person and a technical person > - [ ] Resume: update with specific technologies and projects > - [ ] Continue learning (Phases 5-7) while applying — don't pause either activity ---"
        }
      ],
      "searchText": "PHASE 4 CAPSTONE PROJECT (End of Unit 19b) Enterprise RAG Platform Combine Units 16-19: - Postgres + pgvector (Unit 16b) for document and embedding storage - RAG pipeline (Unit 17a/17b) for intelligent document Q&A - Job queue (Unit 18) for async document ingestion - gRPC (Unit 19a/19b) as a stretch goal for service communication Scoped architecture: Python ingestion service + Python embedding service + Python retrieval service + FastAPI gateway. These four services communicating via REST. Stretch goal: If you've completed everything else, migrate one service pair to gRPC. Observability targets: Prometheus scraping all 4 services, one Grafana dashboard showing request rates and latency per service, one alert rule. This project IS your portfolio centerpiece — invest 2-3 weeks in it and make it genuinely good, not just checking boxes. Deliverable: Multi-service document processing platform with async ingestion, RAG search, and monitoring. Push to GitHub as portfolio piece #4. --- > ### 🎯 JOB-READINESS CHECKPOINT > > You now have enough to apply to junior MLE/AI backend roles. Don't wait until the plan is done. > > - [ ] Start applying to 5-10 jobs per week starting now > - [ ] Portfolio: 4 GitHub projects with READMEs (Phase 1-4 capstones) > - [ ] Blog: 15+ technical posts demonstrating depth > - [ ] Practice: explain each project to a non-technical person and a technical person > - [ ] Resume: update with specific technologies and projects > - [ ] Continue learning (Phases 5-7) while applying — don't pause either activity ---"
    },
    {
      "id": "phase-5-unit-20-metrics-logging-prometheus",
      "kind": "unit",
      "label": "Unit 20",
      "unitCode": "20",
      "title": "Metrics, Logging & Prometheus",
      "fullTitle": "Unit 20 — Metrics, Logging & Prometheus ⭐⭐⭐",
      "difficulty": "⭐⭐⭐",
      "phaseId": "phase-5",
      "phaseTitle": "PHASE 5: OBSERVABILITY (Units 20-21)",
      "introHtml": "<p><strong>Theme:</strong> Making systems observable; production monitoring</p>",
      "sectionTitles": [
        "Python (50%) + Go (50%)",
        "LeetCode (2-3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-5-unit-20-metrics-logging-prometheus-python-50-go-50",
          "title": "Python (50%) + Go (50%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Prometheus: metric types (counter, gauge, histogram, summary)</li><li>Structured logging: <code>structlog</code> (Python), <code>zerolog</code> (Go)</li><li>Log levels, correlation IDs, request tracing</li><li>Grafana basics: dashboards, panels, queries</li><li>Metric cardinality and performance</li></ul><p><strong>Project: Instrumented Go API</strong></p><ol><li>Go REST API with Prometheus client (<code>client_golang</code>)</li><li>Metrics: request count, latency histogram, error rate, active connections</li><li>Custom metrics: inference tokens/sec, queue depth</li><li><code>/metrics</code> endpoint scraped by Prometheus</li><li>Grafana dashboard with 4+ panels</li></ol><p><strong>Project: LLM Cost Tracker with Slack Alerts</strong></p><ol><li>FastAPI middleware that logs token usage per request</li><li>Calculates cost per model based on token counts</li><li>Stores metrics in Prometheus</li><li>Slack webhook alert when cumulative token cost exceeds threshold (10 lines of code, immediately useful)</li><li>Daily cost aggregation reports</li></ol><p><strong>Instrument your Phase 4 RAG platform with these metrics.</strong> Metrics without a real system to measure are abstract.</p><p><strong>Mini-exercises:</strong></p><ul><li>Implement request ID propagation: generate UUID, pass through all log lines</li><li>Build a structured logger wrapper with automatic context (user_id, model, latency)</li><li>Set up Prometheus alerting rules for high error rate (&gt; 5%)</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://prometheus.io/docs/\" target=\"_blank\" rel=\"noreferrer\">Prometheus Official Docs</a></li><li>📝 <a href=\"https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html\" target=\"_blank\" rel=\"noreferrer\">Peter Bourgon — Metrics, Tracing, and Logging</a></li><li>📝 <a href=\"https://www.structlog.org/\" target=\"_blank\" rel=\"noreferrer\">structlog Python docs</a></li><li>📝 <a href=\"https://grafana.com/docs/grafana/latest/getting-started/\" target=\"_blank\" rel=\"noreferrer\">Grafana Getting Started</a></li><li>📖 <em>DDIA</em> Ch. 1 — revisit with monitoring lens</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=h4Sl21AKiDg\" target=\"_blank\" rel=\"noreferrer\">TechWorld with Nana — Prometheus</a> (25 min)</li></ul>",
          "plainText": "Python (50%) + Go (50%) Topics: - Prometheus: metric types (counter, gauge, histogram, summary) - Structured logging: structlog (Python), zerolog (Go) - Log levels, correlation IDs, request tracing - Grafana basics: dashboards, panels, queries - Metric cardinality and performance Project: Instrumented Go API 1. Go REST API with Prometheus client (clientgolang) 2. Metrics: request count, latency histogram, error rate, active connections 3. Custom metrics: inference tokens/sec, queue depth 4. /metrics endpoint scraped by Prometheus 5. Grafana dashboard with 4+ panels Project: LLM Cost Tracker with Slack Alerts 1. FastAPI middleware that logs token usage per request 2. Calculates cost per model based on token counts 3. Stores metrics in Prometheus 4. Slack webhook alert when cumulative token cost exceeds threshold (10 lines of code, immediately useful) 5. Daily cost aggregation reports Instrument your Phase 4 RAG platform with these metrics. Metrics without a real system to measure are abstract. Mini-exercises: - Implement request ID propagation: generate UUID, pass through all log lines - Build a structured logger wrapper with automatic context (userid, model, latency) - Set up Prometheus alerting rules for high error rate (> 5%) Resources: - 📝 Prometheus Official Docs - 📝 Peter Bourgon — Metrics, Tracing, and Logging - 📝 structlog Python docs - 📝 Grafana Getting Started - 📖 DDIA Ch. 1 — revisit with monitoring lens - 🎥 TechWorld with Nana — Prometheus (25 min)"
        },
        {
          "id": "phase-5-unit-20-metrics-logging-prometheus-leetcode-2-3-medium",
          "title": "LeetCode (2-3 medium)",
          "html": "<ul><li>Design Hit Counter (#362) — counting events, directly relevant</li><li>Time Based Key-Value Store (#981) — temporal data</li><li><strong>Why now:</strong> Counter and time-series patterns are the foundation of metrics</li></ul>",
          "plainText": "LeetCode (2-3 medium) - Design Hit Counter (#362) — counting events, directly relevant - Time Based Key-Value Store (#981) — temporal data - Why now: Counter and time-series patterns are the foundation of metrics"
        },
        {
          "id": "phase-5-unit-20-metrics-logging-prometheus-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 2</em> — Metrics Monitoring and Alerting System</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 2 — Metrics Monitoring and Alerting System"
        },
        {
          "id": "phase-5-unit-20-metrics-logging-prometheus-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Instrumented Go API with Prometheus metrics</li><li>[ ] LLM cost tracker with Slack webhook alerting</li><li>[ ] Grafana dashboard (screenshot in blog)</li><li>[ ] Blog post: &quot;Observability for ML Systems — What to Measure and Why&quot;</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Instrumented Go API with Prometheus metrics - [ ] LLM cost tracker with Slack webhook alerting - [ ] Grafana dashboard (screenshot in blog) - [ ] Blog post: \"Observability for ML Systems — What to Measure and Why\" - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 20 — Metrics, Logging & Prometheus ⭐⭐⭐ Theme: Making systems observable; production monitoring Python (50%) + Go (50%) Topics: - Prometheus: metric types (counter, gauge, histogram, summary) - Structured logging: structlog (Python), zerolog (Go) - Log levels, correlation IDs, request tracing - Grafana basics: dashboards, panels, queries - Metric cardinality and performance Project: Instrumented Go API 1. Go REST API with Prometheus client (clientgolang) 2. Metrics: request count, latency histogram, error rate, active connections 3. Custom metrics: inference tokens/sec, queue depth 4. /metrics endpoint scraped by Prometheus 5. Grafana dashboard with 4+ panels Project: LLM Cost Tracker with Slack Alerts 1. FastAPI middleware that logs token usage per request 2. Calculates cost per model based on token counts 3. Stores metrics in Prometheus 4. Slack webhook alert when cumulative token cost exceeds threshold (10 lines of code, immediately useful) 5. Daily cost aggregation reports Instrument your Phase 4 RAG platform with these metrics. Metrics without a real system to measure are abstract. Mini-exercises: - Implement request ID propagation: generate UUID, pass through all log lines - Build a structured logger wrapper with automatic context (userid, model, latency) - Set up Prometheus alerting rules for high error rate (> 5%) Resources: - 📝 Prometheus Official Docs - 📝 Peter Bourgon — Metrics, Tracing, and Logging - 📝 structlog Python docs - 📝 Grafana Getting Started - 📖 DDIA Ch. 1 — revisit with monitoring lens - 🎥 TechWorld with Nana — Prometheus (25 min) LeetCode (2-3 medium) - Design Hit Counter (#362) — counting events, directly relevant - Time Based Key-Value Store (#981) — temporal data - Why now: Counter and time-series patterns are the foundation of metrics Systems Design - 📖 System Design Interview Vol 2 — Metrics Monitoring and Alerting System Deliverables - [ ] Instrumented Go API with Prometheus metrics - [ ] LLM cost tracker with Slack webhook alerting - [ ] Grafana dashboard (screenshot in blog) - [ ] Blog post: \"Observability for ML Systems — What to Measure and Why\" - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-5-unit-21a-opentelemetry-tracing",
      "kind": "unit",
      "label": "Unit 21a",
      "unitCode": "21a",
      "title": "OpenTelemetry Tracing",
      "fullTitle": "Unit 21a — OpenTelemetry Tracing ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-5",
      "phaseTitle": "PHASE 5: OBSERVABILITY (Units 20-21)",
      "introHtml": "<p><strong>Theme:</strong> Distributed tracing — see the full request path</p>",
      "sectionTitles": [
        "Python (50%) + Go (50%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-5-unit-21a-opentelemetry-tracing-python-50-go-50",
          "title": "Python (50%) + Go (50%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>OpenTelemetry: traces, spans, context propagation</li><li>Jaeger for trace visualization</li><li>Trace propagation across services (Python → Go → Python)</li><li>Custom spans for embedding generation, LLM inference, DB queries</li></ul><p><strong>Project: Trace Your RAG Platform</strong></p><ol><li>Instrument your Phase 4 microservices with OpenTelemetry</li><li>Trace a request: Gateway → Retrieval Service → Database → LLM</li><li>Visualize in Jaeger: see the full request waterfall</li><li>Add custom spans for each step</li><li>Identify bottlenecks from trace data</li></ol><p><strong>Weekend deliverable:</strong> Screenshot of a full request trace across all services in Jaeger. This is a strong portfolio artifact.</p><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://opentelemetry.io/docs/\" target=\"_blank\" rel=\"noreferrer\">OpenTelemetry Docs</a></li><li>📝 <a href=\"https://lightstep.com/distributed-tracing\" target=\"_blank\" rel=\"noreferrer\">Lightstep — Distributed Tracing Guide</a></li><li>📝 <a href=\"https://sre.google/sre-book/monitoring-distributed-systems/\" target=\"_blank\" rel=\"noreferrer\">Google SRE Book — Monitoring Distributed Systems</a></li><li>🎥 <a href=\"https://www.youtube.com/watch?v=r8UvWSX3KA8\" target=\"_blank\" rel=\"noreferrer\">OTEL in 5 minutes</a></li></ul>",
          "plainText": "Python (50%) + Go (50%) Topics: - OpenTelemetry: traces, spans, context propagation - Jaeger for trace visualization - Trace propagation across services (Python → Go → Python) - Custom spans for embedding generation, LLM inference, DB queries Project: Trace Your RAG Platform 1. Instrument your Phase 4 microservices with OpenTelemetry 2. Trace a request: Gateway → Retrieval Service → Database → LLM 3. Visualize in Jaeger: see the full request waterfall 4. Add custom spans for each step 5. Identify bottlenecks from trace data Weekend deliverable: Screenshot of a full request trace across all services in Jaeger. This is a strong portfolio artifact. Resources: - 📝 OpenTelemetry Docs - 📝 Lightstep — Distributed Tracing Guide - 📝 Google SRE Book — Monitoring Distributed Systems - 🎥 OTEL in 5 minutes"
        },
        {
          "id": "phase-5-unit-21a-opentelemetry-tracing-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Distributed tracing across 3+ services with Jaeger</li><li>[ ] Jaeger trace screenshot in blog</li><li>[ ] Blog post: &quot;Tracing LLM Requests End-to-End with OpenTelemetry&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Distributed tracing across 3+ services with Jaeger - [ ] Jaeger trace screenshot in blog - [ ] Blog post: \"Tracing LLM Requests End-to-End with OpenTelemetry\" ---"
        }
      ],
      "searchText": "Unit 21a — OpenTelemetry Tracing ⭐⭐⭐⭐ Theme: Distributed tracing — see the full request path Python (50%) + Go (50%) Topics: - OpenTelemetry: traces, spans, context propagation - Jaeger for trace visualization - Trace propagation across services (Python → Go → Python) - Custom spans for embedding generation, LLM inference, DB queries Project: Trace Your RAG Platform 1. Instrument your Phase 4 microservices with OpenTelemetry 2. Trace a request: Gateway → Retrieval Service → Database → LLM 3. Visualize in Jaeger: see the full request waterfall 4. Add custom spans for each step 5. Identify bottlenecks from trace data Weekend deliverable: Screenshot of a full request trace across all services in Jaeger. This is a strong portfolio artifact. Resources: - 📝 OpenTelemetry Docs - 📝 Lightstep — Distributed Tracing Guide - 📝 Google SRE Book — Monitoring Distributed Systems - 🎥 OTEL in 5 minutes Deliverables - [ ] Distributed tracing across 3+ services with Jaeger - [ ] Jaeger trace screenshot in blog - [ ] Blog post: \"Tracing LLM Requests End-to-End with OpenTelemetry\" ---"
    },
    {
      "id": "phase-5-unit-21b-alerting-pii-redaction",
      "kind": "unit",
      "label": "Unit 21b",
      "unitCode": "21b",
      "title": "Alerting & PII Redaction",
      "fullTitle": "Unit 21b — Alerting & PII Redaction ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-5",
      "phaseTitle": "PHASE 5: OBSERVABILITY (Units 20-21)",
      "introHtml": "<p><strong>Theme:</strong> Production alerting; PII safety in LLM responses</p>",
      "sectionTitles": [
        "Python (80%) + Go (20%)",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-5-unit-21b-alerting-pii-redaction-python-80-go-20",
          "title": "Python (80%) + Go (20%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Prometheus alerting rules</li><li>SLO/SLI/SLA principles</li><li>PII detection: start with regex patterns (emails, phones, SSNs) before reaching for presidio</li><li>PII redaction in LLM logging pipeline</li></ul><p><strong>Project: PII Redactor + Alert System</strong></p><ol><li>Middleware that scans LLM responses for PII (regex first, then optionally presidio)</li><li>Redacts PII before returning to user</li><li>Logs PII detection events with severity</li><li>Prometheus alerts when PII detection rate spikes</li><li>Wire into your existing LLM request logger — not standalone</li></ol><p><strong>Mini-exercises:</strong></p><ul><li>Build a simple alert manager: check metrics, send Slack webhook if threshold exceeded</li><li>Create SLO definitions for your inference service (p99 latency &lt; 500ms, availability &gt; 99.9%)</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://microsoft.github.io/presidio/\" target=\"_blank\" rel=\"noreferrer\">Presidio — Microsoft PII Detection</a></li><li>📝 <a href=\"https://www.oreilly.com/library/view/observability-engineering/9781492076438/\" target=\"_blank\" rel=\"noreferrer\">Charity Majors — Observability Engineering</a></li><li>📖 Google SRE Book — Monitoring chapter (free online)</li></ul>",
          "plainText": "Python (80%) + Go (20%) Topics: - Prometheus alerting rules - SLO/SLI/SLA principles - PII detection: start with regex patterns (emails, phones, SSNs) before reaching for presidio - PII redaction in LLM logging pipeline Project: PII Redactor + Alert System 1. Middleware that scans LLM responses for PII (regex first, then optionally presidio) 2. Redacts PII before returning to user 3. Logs PII detection events with severity 4. Prometheus alerts when PII detection rate spikes 5. Wire into your existing LLM request logger — not standalone Mini-exercises: - Build a simple alert manager: check metrics, send Slack webhook if threshold exceeded - Create SLO definitions for your inference service (p99 latency < 500ms, availability > 99.9%) Resources: - 📝 Presidio — Microsoft PII Detection - 📝 Charity Majors — Observability Engineering - 📖 Google SRE Book — Monitoring chapter (free online)"
        },
        {
          "id": "phase-5-unit-21b-alerting-pii-redaction-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] PII redactor middleware with alerting</li><li>[ ] SLO document for your inference service</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] PII redactor middleware with alerting - [ ] SLO document for your inference service - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 21b — Alerting & PII Redaction ⭐⭐⭐⭐ Theme: Production alerting; PII safety in LLM responses Python (80%) + Go (20%) Topics: - Prometheus alerting rules - SLO/SLI/SLA principles - PII detection: start with regex patterns (emails, phones, SSNs) before reaching for presidio - PII redaction in LLM logging pipeline Project: PII Redactor + Alert System 1. Middleware that scans LLM responses for PII (regex first, then optionally presidio) 2. Redacts PII before returning to user 3. Logs PII detection events with severity 4. Prometheus alerts when PII detection rate spikes 5. Wire into your existing LLM request logger — not standalone Mini-exercises: - Build a simple alert manager: check metrics, send Slack webhook if threshold exceeded - Create SLO definitions for your inference service (p99 latency < 500ms, availability > 99.9%) Resources: - 📝 Presidio — Microsoft PII Detection - 📝 Charity Majors — Observability Engineering - 📖 Google SRE Book — Monitoring chapter (free online) Deliverables - [ ] PII redactor middleware with alerting - [ ] SLO document for your inference service - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-5-phase-5-capstone-project-end-of-unit-21b",
      "kind": "capstone",
      "label": "Phase Capstone",
      "unitCode": "",
      "title": "PHASE 5 CAPSTONE PROJECT (End of Unit 21b)",
      "fullTitle": "PHASE 5 CAPSTONE PROJECT (End of Unit 21b)",
      "difficulty": "",
      "phaseId": "phase-5",
      "phaseTitle": "PHASE 5: OBSERVABILITY (Units 20-21)",
      "introHtml": "",
      "sectionTitles": [
        "Observable & Secure LLM Service"
      ],
      "sections": [
        {
          "id": "phase-5-phase-5-capstone-project-end-of-unit-21b-observable-secure-llm-service",
          "title": "Observable & Secure LLM Service",
          "html": "<p>Combine Units 20-21:</p><ul><li><strong>Prometheus metrics</strong> (Unit 20) tracking all inference calls</li><li><strong>Distributed tracing</strong> (Unit 21a) across the full request path</li><li><strong>PII redaction</strong> (Unit 21b) protecting user data</li><li><strong>Grafana dashboard</strong> showing quality, latency, cost, and safety metrics</li></ul><p><strong>Deliverable:</strong> A fully observable, monitored LLM service with a dashboard that answers: &quot;Is my LLM service healthy, safe, and performing well?&quot;</p><hr>",
          "plainText": "Observable & Secure LLM Service Combine Units 20-21: - Prometheus metrics (Unit 20) tracking all inference calls - Distributed tracing (Unit 21a) across the full request path - PII redaction (Unit 21b) protecting user data - Grafana dashboard showing quality, latency, cost, and safety metrics Deliverable: A fully observable, monitored LLM service with a dashboard that answers: \"Is my LLM service healthy, safe, and performing well?\" ---"
        }
      ],
      "searchText": "PHASE 5 CAPSTONE PROJECT (End of Unit 21b) Observable & Secure LLM Service Combine Units 20-21: - Prometheus metrics (Unit 20) tracking all inference calls - Distributed tracing (Unit 21a) across the full request path - PII redaction (Unit 21b) protecting user data - Grafana dashboard showing quality, latency, cost, and safety metrics Deliverable: A fully observable, monitored LLM service with a dashboard that answers: \"Is my LLM service healthy, safe, and performing well?\" ---"
    },
    {
      "id": "phase-6-unit-22-llm-evaluation-pipelines",
      "kind": "unit",
      "label": "Unit 22",
      "unitCode": "22",
      "title": "LLM Evaluation Pipelines",
      "fullTitle": "Unit 22 — LLM Evaluation Pipelines ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-6",
      "phaseTitle": "PHASE 6: EVALUATION & GUARDRAILS (Units 22-23)",
      "introHtml": "<p><strong>Theme:</strong> How to measure LLM quality; automated evaluation</p><p><strong>Removed:</strong> Human evaluation frameworks (impractical solo) and A/B testing (requires traffic splitting infrastructure — deserves its own unit if needed later).</p>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (2-3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-6-unit-22-llm-evaluation-pipelines-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Evaluation metrics: BLEU, ROUGE, BERTScore, perplexity</li><li>LLM-as-Judge: using a strong model to evaluate a weaker model</li><li>Regression testing for LLM applications</li><li><code>ragas</code>, <code>deepeval</code>, <code>promptfoo</code> evaluation tools</li></ul><p><strong>Project: LLM Evaluation Framework</strong> Build an eval system against your existing RAG system:</p><ol><li>50 test questions with expected answers</li><li>Multiple evaluation strategies: exact match, fuzzy match, LLM-as-Judge</li><li>Score with GPT-4-as-Judge on helpfulness and accuracy</li><li>Store results in Postgres, visualize score distribution</li><li>CI-ready: can run as a CLI command in a pipeline</li></ol><p><strong>Version your eval results.</strong> When you change the RAG system, rerun evals. The delta is the actual signal.</p><p><strong>Mini-exercises:</strong></p><ul><li>Implement BLEU score from scratch (~20 lines)</li><li>Build an LLM-as-Judge prompt that rates responses on 5 criteria</li><li>Compare: GPT-4-as-Judge vs Claude-as-Judge (do they agree?)</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://eugeneyan.com/writing/llm-evaluations/\" target=\"_blank\" rel=\"noreferrer\">Eugene Yan — LLM Evaluation</a> — comprehensive</li><li>📝 <a href=\"https://hamel.dev/blog/posts/evals/\" target=\"_blank\" rel=\"noreferrer\">Hamel Husain — Your AI Product Needs Evals</a> — practical, opinionated</li><li>📝 <a href=\"https://docs.ragas.io/\" target=\"_blank\" rel=\"noreferrer\">Ragas Docs</a> — RAG evaluation framework</li><li>📝 <a href=\"https://www.promptfoo.dev/\" target=\"_blank\" rel=\"noreferrer\">promptfoo</a> — prompt testing CLI tool</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=0uJVjJg_HWs\" target=\"_blank\" rel=\"noreferrer\">Weights &amp;amp; Biases — LLM Evaluation</a> (30 min)</li></ul>",
          "plainText": "Python (100%) Topics: - Evaluation metrics: BLEU, ROUGE, BERTScore, perplexity - LLM-as-Judge: using a strong model to evaluate a weaker model - Regression testing for LLM applications - ragas, deepeval, promptfoo evaluation tools Project: LLM Evaluation Framework Build an eval system against your existing RAG system: 1. 50 test questions with expected answers 2. Multiple evaluation strategies: exact match, fuzzy match, LLM-as-Judge 3. Score with GPT-4-as-Judge on helpfulness and accuracy 4. Store results in Postgres, visualize score distribution 5. CI-ready: can run as a CLI command in a pipeline Version your eval results. When you change the RAG system, rerun evals. The delta is the actual signal. Mini-exercises: - Implement BLEU score from scratch (20 lines) - Build an LLM-as-Judge prompt that rates responses on 5 criteria - Compare: GPT-4-as-Judge vs Claude-as-Judge (do they agree?) Resources: - 📝 Eugene Yan — LLM Evaluation — comprehensive - 📝 Hamel Husain — Your AI Product Needs Evals — practical, opinionated - 📝 Ragas Docs — RAG evaluation framework - 📝 promptfoo — prompt testing CLI tool - 🎥 Weights & Biases — LLM Evaluation (30 min)"
        },
        {
          "id": "phase-6-unit-22-llm-evaluation-pipelines-leetcode-2-3-medium",
          "title": "LeetCode (2-3 medium)",
          "html": "<ul><li>Edit Distance (#72) — string similarity, like fuzzy matching</li><li>Regular Expression Matching (#10) — pattern matching</li><li><strong>Why now:</strong> String similarity metrics mirror evaluation concepts</li></ul>",
          "plainText": "LeetCode (2-3 medium) - Edit Distance (#72) — string similarity, like fuzzy matching - Regular Expression Matching (#10) — pattern matching - Why now: String similarity metrics mirror evaluation concepts"
        },
        {
          "id": "phase-6-unit-22-llm-evaluation-pipelines-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>📖 <em>System Design Interview Vol 2</em> — Data Pipeline Design</li><li>Design exercise: Design a continuous evaluation pipeline for an LLM product</li></ul>",
          "plainText": "Systems Design - 📖 System Design Interview Vol 2 — Data Pipeline Design - Design exercise: Design a continuous evaluation pipeline for an LLM product"
        },
        {
          "id": "phase-6-unit-22-llm-evaluation-pipelines-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Evaluation framework with 50+ test cases run against your RAG system</li><li>[ ] Versioned eval results showing quality over time</li><li>[ ] Blog post: &quot;How to Actually Evaluate Your LLM Application&quot;</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Evaluation framework with 50+ test cases run against your RAG system - [ ] Versioned eval results showing quality over time - [ ] Blog post: \"How to Actually Evaluate Your LLM Application\" - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 22 — LLM Evaluation Pipelines ⭐⭐⭐⭐ Theme: How to measure LLM quality; automated evaluation Removed: Human evaluation frameworks (impractical solo) and A/B testing (requires traffic splitting infrastructure — deserves its own unit if needed later). Python (100%) Topics: - Evaluation metrics: BLEU, ROUGE, BERTScore, perplexity - LLM-as-Judge: using a strong model to evaluate a weaker model - Regression testing for LLM applications - ragas, deepeval, promptfoo evaluation tools Project: LLM Evaluation Framework Build an eval system against your existing RAG system: 1. 50 test questions with expected answers 2. Multiple evaluation strategies: exact match, fuzzy match, LLM-as-Judge 3. Score with GPT-4-as-Judge on helpfulness and accuracy 4. Store results in Postgres, visualize score distribution 5. CI-ready: can run as a CLI command in a pipeline Version your eval results. When you change the RAG system, rerun evals. The delta is the actual signal. Mini-exercises: - Implement BLEU score from scratch (20 lines) - Build an LLM-as-Judge prompt that rates responses on 5 criteria - Compare: GPT-4-as-Judge vs Claude-as-Judge (do they agree?) Resources: - 📝 Eugene Yan — LLM Evaluation — comprehensive - 📝 Hamel Husain — Your AI Product Needs Evals — practical, opinionated - 📝 Ragas Docs — RAG evaluation framework - 📝 promptfoo — prompt testing CLI tool - 🎥 Weights & Biases — LLM Evaluation (30 min) LeetCode (2-3 medium) - Edit Distance (#72) — string similarity, like fuzzy matching - Regular Expression Matching (#10) — pattern matching - Why now: String similarity metrics mirror evaluation concepts Systems Design - 📖 System Design Interview Vol 2 — Data Pipeline Design - Design exercise: Design a continuous evaluation pipeline for an LLM product Deliverables - [ ] Evaluation framework with 50+ test cases run against your RAG system - [ ] Versioned eval results showing quality over time - [ ] Blog post: \"How to Actually Evaluate Your LLM Application\" - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-6-unit-23-guardrails-security-structured-outputs",
      "kind": "unit",
      "label": "Unit 23",
      "unitCode": "23",
      "title": "Guardrails, Security & Structured Outputs",
      "fullTitle": "Unit 23 — Guardrails, Security & Structured Outputs ⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐",
      "phaseId": "phase-6",
      "phaseTitle": "PHASE 6: EVALUATION & GUARDRAILS (Units 22-23)",
      "introHtml": "<p><strong>Theme:</strong> LLM safety; input/output validation; structured generation</p>",
      "sectionTitles": [
        "Python (85%)",
        "LeetCode (2-3 medium)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-6-unit-23-guardrails-security-structured-outputs-python-85",
          "title": "Python (85%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Prompt injection attacks and defenses</li><li>Input validation: length limits, content filtering, topic restriction</li><li>Output validation: JSON schema enforcement, hallucination detection</li><li><code>instructor</code> library for structured LLM outputs</li><li>Content moderation: toxicity detection</li></ul><p><strong>Reordered approach:</strong> Build defenses first, THEN test them. The test-and-fix loop is the actual learning.</p><p><strong>Project: LLM Guardrails System</strong> Build in this order:</p><ol><li>Input guards: prompt injection detection (regex + LLM classifier)</li><li>Topic restriction: block off-topic queries</li><li>Output guards: schema validation, PII redaction (reuse Unit 21b), toxicity check</li><li>Test with 10+ adversarial inputs — document what breaks</li><li>Fix what broke, test again</li><li>Integrate into your FastAPI gateway from Phase 4 — every request flows through input validation before hitting the model</li></ol><p><strong>Project: Structured Output Generator</strong> Build one concrete example:</p><ol><li>An LLM that extracts job requirements from a job posting</li><li>Returns a validated Pydantic model (skills, years of experience, location, etc.)</li><li>Uses <code>instructor</code> for structured extraction</li><li>Retry logic when output doesn&#39;t match schema</li><li>Compare: <code>instructor</code> vs <code>response_format</code> vs manual parsing</li></ol><p>Practical and portfolio-relevant — you&#39;re literally parsing job postings while job hunting.</p><p><strong>Mini-exercises:</strong></p><ul><li>Build 5 different prompt injection attacks and test against your guards</li><li>Implement a &quot;canary token&quot; detector (detects if the LLM leaks system prompt)</li><li>Build a JSON repair function that fixes common LLM JSON errors</li><li>Create a hallucination detector using entailment</li></ul><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://simonwillison.net/2022/Sep/12/prompt-injection/\" target=\"_blank\" rel=\"noreferrer\">Simon Willison — Prompt Injection</a> — foundational</li><li>📝 <a href=\"https://owasp.org/www-project-top-10-for-large-language-model-applications/\" target=\"_blank\" rel=\"noreferrer\">OWASP — LLM Top 10</a></li><li>📝 <a href=\"https://python.useinstructor.com/\" target=\"_blank\" rel=\"noreferrer\">Instructor docs</a> — structured outputs</li><li>📝 <a href=\"https://docs.guardrailsai.com/\" target=\"_blank\" rel=\"noreferrer\">Guardrails AI docs</a></li><li>📝 <a href=\"https://docs.nvidia.com/nemo/guardrails/\" target=\"_blank\" rel=\"noreferrer\">NeMo Guardrails</a> — NVIDIA&#39;s framework</li><li>🎥 <a href=\"https://www.youtube.com/watch?v=Sv5OLj2nVAQ\" target=\"_blank\" rel=\"noreferrer\">Computerphile — Prompt Injection</a> (15min)</li></ul>",
          "plainText": "Python (85%) Topics: - Prompt injection attacks and defenses - Input validation: length limits, content filtering, topic restriction - Output validation: JSON schema enforcement, hallucination detection - instructor library for structured LLM outputs - Content moderation: toxicity detection Reordered approach: Build defenses first, THEN test them. The test-and-fix loop is the actual learning. Project: LLM Guardrails System Build in this order: 1. Input guards: prompt injection detection (regex + LLM classifier) 2. Topic restriction: block off-topic queries 3. Output guards: schema validation, PII redaction (reuse Unit 21b), toxicity check 4. Test with 10+ adversarial inputs — document what breaks 5. Fix what broke, test again 6. Integrate into your FastAPI gateway from Phase 4 — every request flows through input validation before hitting the model Project: Structured Output Generator Build one concrete example: 1. An LLM that extracts job requirements from a job posting 2. Returns a validated Pydantic model (skills, years of experience, location, etc.) 3. Uses instructor for structured extraction 4. Retry logic when output doesn't match schema 5. Compare: instructor vs responseformat vs manual parsing Practical and portfolio-relevant — you're literally parsing job postings while job hunting. Mini-exercises: - Build 5 different prompt injection attacks and test against your guards - Implement a \"canary token\" detector (detects if the LLM leaks system prompt) - Build a JSON repair function that fixes common LLM JSON errors - Create a hallucination detector using entailment Resources: - 📝 Simon Willison — Prompt Injection — foundational - 📝 OWASP — LLM Top 10 - 📝 Instructor docs — structured outputs - 📝 Guardrails AI docs - 📝 NeMo Guardrails — NVIDIA's framework - 🎥 Computerphile — Prompt Injection (15min)"
        },
        {
          "id": "phase-6-unit-23-guardrails-security-structured-outputs-leetcode-2-3-medium",
          "title": "LeetCode (2-3 medium)",
          "html": "<ul><li>Valid Sudoku (#36) — constraint validation</li><li>Word Ladder (#127) — graph BFS, like defense layers</li><li><strong>Why now:</strong> Validation and constraint patterns mirror guardrail design</li></ul>",
          "plainText": "LeetCode (2-3 medium) - Valid Sudoku (#36) — constraint validation - Word Ladder (#127) — graph BFS, like defense layers - Why now: Validation and constraint patterns mirror guardrail design"
        },
        {
          "id": "phase-6-unit-23-guardrails-security-structured-outputs-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>Design exercise: Design a content moderation system for an AI chat application</li></ul>",
          "plainText": "Systems Design - Design exercise: Design a content moderation system for an AI chat application"
        },
        {
          "id": "phase-6-unit-23-guardrails-security-structured-outputs-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Guardrails system integrated into your existing gateway</li><li>[ ] Structured output pipeline for job posting extraction using <code>instructor</code></li><li>[ ] Prompt injection test suite with 10+ attack vectors</li><li>[ ] Blog post: &quot;LLM Security — Defense in Depth for AI Applications&quot;</li><li>[ ] 2-3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Guardrails system integrated into your existing gateway - [ ] Structured output pipeline for job posting extraction using instructor - [ ] Prompt injection test suite with 10+ attack vectors - [ ] Blog post: \"LLM Security — Defense in Depth for AI Applications\" - [ ] 2-3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 23 — Guardrails, Security & Structured Outputs ⭐⭐⭐⭐ Theme: LLM safety; input/output validation; structured generation Python (85%) Topics: - Prompt injection attacks and defenses - Input validation: length limits, content filtering, topic restriction - Output validation: JSON schema enforcement, hallucination detection - instructor library for structured LLM outputs - Content moderation: toxicity detection Reordered approach: Build defenses first, THEN test them. The test-and-fix loop is the actual learning. Project: LLM Guardrails System Build in this order: 1. Input guards: prompt injection detection (regex + LLM classifier) 2. Topic restriction: block off-topic queries 3. Output guards: schema validation, PII redaction (reuse Unit 21b), toxicity check 4. Test with 10+ adversarial inputs — document what breaks 5. Fix what broke, test again 6. Integrate into your FastAPI gateway from Phase 4 — every request flows through input validation before hitting the model Project: Structured Output Generator Build one concrete example: 1. An LLM that extracts job requirements from a job posting 2. Returns a validated Pydantic model (skills, years of experience, location, etc.) 3. Uses instructor for structured extraction 4. Retry logic when output doesn't match schema 5. Compare: instructor vs responseformat vs manual parsing Practical and portfolio-relevant — you're literally parsing job postings while job hunting. Mini-exercises: - Build 5 different prompt injection attacks and test against your guards - Implement a \"canary token\" detector (detects if the LLM leaks system prompt) - Build a JSON repair function that fixes common LLM JSON errors - Create a hallucination detector using entailment Resources: - 📝 Simon Willison — Prompt Injection — foundational - 📝 OWASP — LLM Top 10 - 📝 Instructor docs — structured outputs - 📝 Guardrails AI docs - 📝 NeMo Guardrails — NVIDIA's framework - 🎥 Computerphile — Prompt Injection (15min) LeetCode (2-3 medium) - Valid Sudoku (#36) — constraint validation - Word Ladder (#127) — graph BFS, like defense layers - Why now: Validation and constraint patterns mirror guardrail design Systems Design - Design exercise: Design a content moderation system for an AI chat application Deliverables - [ ] Guardrails system integrated into your existing gateway - [ ] Structured output pipeline for job posting extraction using instructor - [ ] Prompt injection test suite with 10+ attack vectors - [ ] Blog post: \"LLM Security — Defense in Depth for AI Applications\" - [ ] 2-3 LeetCode solutions ---"
    },
    {
      "id": "phase-7-unit-24-production-fine-tuning-pipeline",
      "kind": "unit",
      "label": "Unit 24",
      "unitCode": "24",
      "title": "Production Fine-tuning Pipeline",
      "fullTitle": "Unit 24 — Production Fine-tuning Pipeline ⭐⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐⭐",
      "phaseId": "phase-7",
      "phaseTitle": "PHASE 7: FINE-TUNING & CAPSTONE (Units 24-25)",
      "introHtml": "<p><strong>Theme:</strong> End-to-end fine-tuning for production; data quality matters most</p><blockquote><p>W&amp;B was introduced in Unit 10. By now it should be a habit, not a new concept.</p></blockquote>",
      "sectionTitles": [
        "Python (100%)",
        "LeetCode (2 medium + 1 hard)",
        "Systems Design",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-7-unit-24-production-fine-tuning-pipeline-python-100",
          "title": "Python (100%)",
          "html": "<p><strong>Topics:</strong></p><ul><li>Data quality: cleaning, deduplication, formatting for instruction tuning</li><li>QLoRA: 4-bit quantized LoRA (revisit with production lens)</li><li>Training monitoring: loss curves, gradient norms, learning rates</li><li>Evaluation during training: perplexity, task-specific metrics</li><li>Model merging: merging LoRA adapters</li><li>Systematic hyperparameter comparison</li></ul><p><strong>Project: Full QLoRA Fine-tuning Pipeline</strong> Build a production-ready pipeline:</p><ol><li>Data pipeline: collect, clean, deduplicate, format training data</li><li>Data validation: schema checks, quality filters</li><li>QLoRA training with <code>trl.SFTTrainer</code> and W&amp;B logging</li><li><strong>Narrow hyperparameter tuning:</strong> Run 3 experiments varying only <code>r</code> (LoRA rank: 4, 8, 16). Compare validation loss. That&#39;s it. Systematic but scoped.</li><li>Automated evaluation: run eval suite before and after training</li><li>Model export: merge adapters, convert to GGUF for serving</li><li>Push to HuggingFace Hub with a model card documenting dataset, training config, and eval results</li></ol><p>Fine-tuning Systems Concepts to nail LoRA / QLoRA — the standard fine-tuning approach, understand the math conceptually Training data pipelines — collecting, cleaning, formatting data for fine-tuning RLHF basics — what it is conceptually, you don&#39;t need to implement it Serving fine-tuned models — LoRA adapters, merging weights, hosting on vLLM Resources HuggingFace PEFT docs — LoRA fine-tuning guide &quot;Fine-Tuning LLMs&quot; by Sebastian Raschka (magazine.sebastianraschka.com) Axolotl GitHub — popular fine-tuning framework, read the config docs Build Fine-tune Llama 3.2 3B on a custom dataset using QLoRA, serve with vLLM Build a data collection pipeline — gather prompt/response pairs, clean them, format for fine-tuning</p><p><strong>Mini-exercises:</strong></p><ul><li>Implement data deduplication using MinHash (approximate)</li><li>Build a training data quality scorer (length distribution, vocabulary diversity)</li><li>Implement early stopping based on validation loss</li></ul><p><strong>Removed:</strong> Go fine-tuning job API — replace with a Python script that reads training run metadata from W&amp;B and generates a comparison report. More useful, more achievable.</p><p><strong>Resources:</strong></p><ul><li>📝 <a href=\"https://magazine.sebastianraschka.com/p/finetuning-llms-with-adapters\" target=\"_blank\" rel=\"noreferrer\">Sebastian Raschka — Finetuning LLMs Efficiently</a></li><li>📝 <a href=\"https://huggingface.co/docs/trl/\" target=\"_blank\" rel=\"noreferrer\">HuggingFace — TRL docs</a></li><li>📝 <a href=\"https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html\" target=\"_blank\" rel=\"noreferrer\">Maxime Labonne — Fine-tuning Llama-2</a></li><li>📝 <a href=\"https://wandb.ai/capecape/alpaca_ft/reports/How-to-Fine-Tune-an-LLM-Part-1--Vmlldzo1NTcyODMz\" target=\"_blank\" rel=\"noreferrer\">W&amp;amp;B — Fine-tuning Guide</a></li><li>📖 QLoRA paper: <a href=\"https://arxiv.org/abs/2305.14314\" target=\"_blank\" rel=\"noreferrer\">arXiv:2305.14314</a></li><li>🎥 <a href=\"https://www.youtube.com/watch?v=XpoKB3usmKc\" target=\"_blank\" rel=\"noreferrer\">Trelis Research — QLoRA Fine-tuning</a> (30 min)</li></ul>",
          "plainText": "Python (100%) Topics: - Data quality: cleaning, deduplication, formatting for instruction tuning - QLoRA: 4-bit quantized LoRA (revisit with production lens) - Training monitoring: loss curves, gradient norms, learning rates - Evaluation during training: perplexity, task-specific metrics - Model merging: merging LoRA adapters - Systematic hyperparameter comparison Project: Full QLoRA Fine-tuning Pipeline Build a production-ready pipeline: 1. Data pipeline: collect, clean, deduplicate, format training data 2. Data validation: schema checks, quality filters 3. QLoRA training with trl.SFTTrainer and W&B logging 4. Narrow hyperparameter tuning: Run 3 experiments varying only r (LoRA rank: 4, 8, 16). Compare validation loss. That's it. Systematic but scoped. 5. Automated evaluation: run eval suite before and after training 6. Model export: merge adapters, convert to GGUF for serving 7. Push to HuggingFace Hub with a model card documenting dataset, training config, and eval results Fine-tuning Systems Concepts to nail LoRA / QLoRA — the standard fine-tuning approach, understand the math conceptually Training data pipelines — collecting, cleaning, formatting data for fine-tuning RLHF basics — what it is conceptually, you don't need to implement it Serving fine-tuned models — LoRA adapters, merging weights, hosting on vLLM Resources HuggingFace PEFT docs — LoRA fine-tuning guide \"Fine-Tuning LLMs\" by Sebastian Raschka (magazine.sebastianraschka.com) Axolotl GitHub — popular fine-tuning framework, read the config docs Build Fine-tune Llama 3.2 3B on a custom dataset using QLoRA, serve with vLLM Build a data collection pipeline — gather prompt/response pairs, clean them, format for fine-tuning Mini-exercises: - Implement data deduplication using MinHash (approximate) - Build a training data quality scorer (length distribution, vocabulary diversity) - Implement early stopping based on validation loss Removed: Go fine-tuning job API — replace with a Python script that reads training run metadata from W&B and generates a comparison report. More useful, more achievable. Resources: - 📝 Sebastian Raschka — Finetuning LLMs Efficiently - 📝 HuggingFace — TRL docs - 📝 Maxime Labonne — Fine-tuning Llama-2 - 📝 W&B — Fine-tuning Guide - 📖 QLoRA paper: arXiv:2305.14314 - 🎥 Trelis Research — QLoRA Fine-tuning (30 min)"
        },
        {
          "id": "phase-7-unit-24-production-fine-tuning-pipeline-leetcode-2-medium-1-hard",
          "title": "LeetCode (2 medium + 1 hard)",
          "html": "<ul><li>Merge Intervals (#56) — data merging, like batch processing</li><li>Longest Increasing Subsequence (#300) — optimization, like loss minimization</li><li>Trapping Rain Water (#42) — complex optimization (Hard)</li><li><strong>Why now:</strong> At this point, consider shifting focus from LeetCode to system design interview prep. The ROI shifts at senior stages.</li></ul>",
          "plainText": "LeetCode (2 medium + 1 hard) - Merge Intervals (#56) — data merging, like batch processing - Longest Increasing Subsequence (#300) — optimization, like loss minimization - Trapping Rain Water (#42) — complex optimization (Hard) - Why now: At this point, consider shifting focus from LeetCode to system design interview prep. The ROI shifts at senior stages."
        },
        {
          "id": "phase-7-unit-24-production-fine-tuning-pipeline-systems-design",
          "title": "Systems Design",
          "html": "<ul><li>Design exercise: Design a fine-tuning-as-a-service platform (like OpenAI&#39;s fine-tuning API)</li></ul>",
          "plainText": "Systems Design - Design exercise: Design a fine-tuning-as-a-service platform (like OpenAI's fine-tuning API)"
        },
        {
          "id": "phase-7-unit-24-production-fine-tuning-pipeline-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Complete fine-tuning pipeline with W&amp;B dashboard</li><li>[ ] Before/after evaluation report</li><li>[ ] Fine-tuned model on HuggingFace Hub with model card</li><li>[ ] Exported model in GGUF format for serving</li><li>[ ] Blog post: &quot;From Data to Deployed Model — A Production Fine-tuning Pipeline&quot;</li><li>[ ] 3 LeetCode solutions</li></ul><hr>",
          "plainText": "Deliverables - [ ] Complete fine-tuning pipeline with W&B dashboard - [ ] Before/after evaluation report - [ ] Fine-tuned model on HuggingFace Hub with model card - [ ] Exported model in GGUF format for serving - [ ] Blog post: \"From Data to Deployed Model — A Production Fine-tuning Pipeline\" - [ ] 3 LeetCode solutions ---"
        }
      ],
      "searchText": "Unit 24 — Production Fine-tuning Pipeline ⭐⭐⭐⭐⭐ Theme: End-to-end fine-tuning for production; data quality matters most > W&B was introduced in Unit 10. By now it should be a habit, not a new concept. Python (100%) Topics: - Data quality: cleaning, deduplication, formatting for instruction tuning - QLoRA: 4-bit quantized LoRA (revisit with production lens) - Training monitoring: loss curves, gradient norms, learning rates - Evaluation during training: perplexity, task-specific metrics - Model merging: merging LoRA adapters - Systematic hyperparameter comparison Project: Full QLoRA Fine-tuning Pipeline Build a production-ready pipeline: 1. Data pipeline: collect, clean, deduplicate, format training data 2. Data validation: schema checks, quality filters 3. QLoRA training with trl.SFTTrainer and W&B logging 4. Narrow hyperparameter tuning: Run 3 experiments varying only r (LoRA rank: 4, 8, 16). Compare validation loss. That's it. Systematic but scoped. 5. Automated evaluation: run eval suite before and after training 6. Model export: merge adapters, convert to GGUF for serving 7. Push to HuggingFace Hub with a model card documenting dataset, training config, and eval results Fine-tuning Systems Concepts to nail LoRA / QLoRA — the standard fine-tuning approach, understand the math conceptually Training data pipelines — collecting, cleaning, formatting data for fine-tuning RLHF basics — what it is conceptually, you don't need to implement it Serving fine-tuned models — LoRA adapters, merging weights, hosting on vLLM Resources HuggingFace PEFT docs — LoRA fine-tuning guide \"Fine-Tuning LLMs\" by Sebastian Raschka (magazine.sebastianraschka.com) Axolotl GitHub — popular fine-tuning framework, read the config docs Build Fine-tune Llama 3.2 3B on a custom dataset using QLoRA, serve with vLLM Build a data collection pipeline — gather prompt/response pairs, clean them, format for fine-tuning Mini-exercises: - Implement data deduplication using MinHash (approximate) - Build a training data quality scorer (length distribution, vocabulary diversity) - Implement early stopping based on validation loss Removed: Go fine-tuning job API — replace with a Python script that reads training run metadata from W&B and generates a comparison report. More useful, more achievable. Resources: - 📝 Sebastian Raschka — Finetuning LLMs Efficiently - 📝 HuggingFace — TRL docs - 📝 Maxime Labonne — Fine-tuning Llama-2 - 📝 W&B — Fine-tuning Guide - 📖 QLoRA paper: arXiv:2305.14314 - 🎥 Trelis Research — QLoRA Fine-tuning (30 min) LeetCode (2 medium + 1 hard) - Merge Intervals (#56) — data merging, like batch processing - Longest Increasing Subsequence (#300) — optimization, like loss minimization - Trapping Rain Water (#42) — complex optimization (Hard) - Why now: At this point, consider shifting focus from LeetCode to system design interview prep. The ROI shifts at senior stages. Systems Design - Design exercise: Design a fine-tuning-as-a-service platform (like OpenAI's fine-tuning API) Deliverables - [ ] Complete fine-tuning pipeline with W&B dashboard - [ ] Before/after evaluation report - [ ] Fine-tuned model on HuggingFace Hub with model card - [ ] Exported model in GGUF format for serving - [ ] Blog post: \"From Data to Deployed Model — A Production Fine-tuning Pipeline\" - [ ] 3 LeetCode solutions ---"
    },
    {
      "id": "phase-7-unit-25-capstone-assembly-polish",
      "kind": "unit",
      "label": "Unit 25",
      "unitCode": "25",
      "title": "CAPSTONE: Assembly & Polish",
      "fullTitle": "Unit 25 — CAPSTONE: Assembly & Polish ⭐⭐⭐⭐⭐",
      "difficulty": "⭐⭐⭐⭐⭐",
      "phaseId": "phase-7",
      "phaseTitle": "PHASE 7: FINE-TUNING & CAPSTONE (Units 24-25)",
      "introHtml": "<p><strong>Theme:</strong> Integration capstone — assemble, polish, and present what you&#39;ve built</p><blockquote><p><strong>This is NOT building everything from scratch.</strong> By Unit 25 you should have: inference gateway (Phase 3), RAG platform (Phase 4), eval pipeline (Phase 6), fine-tuned model (Phase 7). Wire them together, clean up the code, write real documentation.</p></blockquote>",
      "sectionTitles": [
        "Architecture",
        "What to Do This Unit",
        "Deliverables"
      ],
      "sections": [
        {
          "id": "phase-7-unit-25-capstone-assembly-polish-architecture",
          "title": "Architecture",
          "html": "<pre><code>┌─────────────────────────────────────────────────────────────┐\n│                     CLIENT (CLI / Web)                       │\n└──────────────────────────┬──────────────────────────────────┘\n                           │ HTTP/SSE\n┌──────────────────────────▼──────────────────────────────────┐\n│              FASTAPI GATEWAY (Python)                         │\n│  • Rate limiting (Redis + token bucket)                      │\n│  • Auth (API keys)                                           │\n│  • Input guardrails (injection detection)                    │\n│  • Request routing                                           │\n│  • Prometheus metrics                                        │\n│  • Distributed tracing (OpenTelemetry)                       │\n└─────┬──────────┬───────────────┬────────────────────────────┘\n      │ REST     │ REST          │ REST (gRPC stretch goal)\n┌─────▼────┐ ┌───▼──────┐ ┌─────▼──────────┐\n│ INFERENCE │ │   RAG    │ │  EVALUATION    │\n│ SERVICE   │ │ SERVICE  │ │  SERVICE       │\n│ (Python)  │ │ (Python) │ │  (Python)      │\n│ FastAPI + │ │ Chunking │ │  LLM-as-Judge  │\n│ vLLM      │ │ pgvector │ │  Regression    │\n│ Streaming │ │ Retrieval│ │  Tests         │\n└─────┬─────┘ └────┬─────┘ └───────────────┘\n      │             │\n┌─────▼─────────────▼─────────────────────────────────────────┐\n│              POSTGRESQL + pgvector                           │\n│  • Conversations  • Embeddings  • Eval results              │\n└─────────────────────────────────────────────────────────────┘\n          │\n┌─────────▼─────────────────────────────────────────────────┐\n│           OBSERVABILITY STACK                               │\n│  • Prometheus  • Grafana  • Jaeger  • Structured Logs      │\n└─────────────────────────────────────────────────────────────┘</code></pre>",
          "plainText": "Architecture ┌─────────────────────────────────────────────────────────────┐ │ CLIENT (CLI / Web) │ └──────────────────────────┬──────────────────────────────────┘ │ HTTP/SSE ┌──────────────────────────▼──────────────────────────────────┐ │ FASTAPI GATEWAY (Python) │ │ • Rate limiting (Redis + token bucket) │ │ • Auth (API keys) │ │ • Input guardrails (injection detection) │ │ • Request routing │ │ • Prometheus metrics │ │ • Distributed tracing (OpenTelemetry) │ └─────┬──────────┬───────────────┬────────────────────────────┘ │ REST │ REST │ REST (gRPC stretch goal) ┌─────▼────┐ ┌───▼──────┐ ┌─────▼──────────┐ │ INFERENCE │ │ RAG │ │ EVALUATION │ │ SERVICE │ │ SERVICE │ │ SERVICE │ │ (Python) │ │ (Python) │ │ (Python) │ │ FastAPI + │ │ Chunking │ │ LLM-as-Judge │ │ vLLM │ │ pgvector │ │ Regression │ │ Streaming │ │ Retrieval│ │ Tests │ └─────┬─────┘ └────┬─────┘ └───────────────┘ │ │ ┌─────▼─────────────▼─────────────────────────────────────────┐ │ POSTGRESQL + pgvector │ │ • Conversations • Embeddings • Eval results │ └─────────────────────────────────────────────────────────────┘ │ ┌─────────▼─────────────────────────────────────────────────┐ │ OBSERVABILITY STACK │ │ • Prometheus • Grafana • Jaeger • Structured Logs │ └─────────────────────────────────────────────────────────────┘"
        },
        {
          "id": "phase-7-unit-25-capstone-assembly-polish-what-to-do-this-unit",
          "title": "What to Do This Unit",
          "html": "<p><strong>Week 1: Assembly</strong></p><ul><li>Wire all existing services together</li><li>Clean up APIs and interfaces between services</li><li>Docker Compose for the entire stack — single <code>docker compose up</code></li><li>Integration tests</li></ul><p><strong>Week 2: Polish &amp; Documentation</strong></p><ul><li>Written architecture document (1-2 pages) explaining design decisions — this is what senior engineers write and what interviewers respect</li><li>Architecture diagram (Mermaid or Excalidraw)</li><li>Clean GitHub README with setup instructions</li><li>Grafana dashboard with 6+ panels (latency, throughput, cost, cache hits, eval scores, error rates)</li></ul><p><strong>Week 3: Job Search Sprint</strong></p><ul><li>[ ] <strong>Apply to 10 jobs this week</strong> using your capstone as the portfolio piece</li><li>[ ] Prepare a 10-minute verbal walkthrough of the capstone</li><li>[ ] Practice explaining it to a non-technical person AND a technical person — both matter in interviews</li><li>[ ] Update resume with all projects and technologies</li></ul>",
          "plainText": "What to Do This Unit Week 1: Assembly - Wire all existing services together - Clean up APIs and interfaces between services - Docker Compose for the entire stack — single docker compose up - Integration tests Week 2: Polish & Documentation - Written architecture document (1-2 pages) explaining design decisions — this is what senior engineers write and what interviewers respect - Architecture diagram (Mermaid or Excalidraw) - Clean GitHub README with setup instructions - Grafana dashboard with 6+ panels (latency, throughput, cost, cache hits, eval scores, error rates) Week 3: Job Search Sprint - [ ] Apply to 10 jobs this week using your capstone as the portfolio piece - [ ] Prepare a 10-minute verbal walkthrough of the capstone - [ ] Practice explaining it to a non-technical person AND a technical person — both matter in interviews - [ ] Update resume with all projects and technologies"
        },
        {
          "id": "phase-7-unit-25-capstone-assembly-polish-deliverables",
          "title": "Deliverables",
          "html": "<ul><li>[ ] Fully working multi-service LLM platform</li><li>[ ] Docker Compose — single <code>docker compose up</code> to run everything</li><li>[ ] Architecture document (1-2 pages) with design decisions</li><li>[ ] Architecture diagram</li><li>[ ] Grafana dashboard with 6+ panels</li><li>[ ] Integration test suite</li><li>[ ] GitHub README with setup instructions</li><li>[ ] Final blog post: &quot;Building a Mini LLM Platform — What I Learned&quot;</li></ul><hr>",
          "plainText": "Deliverables - [ ] Fully working multi-service LLM platform - [ ] Docker Compose — single docker compose up to run everything - [ ] Architecture document (1-2 pages) with design decisions - [ ] Architecture diagram - [ ] Grafana dashboard with 6+ panels - [ ] Integration test suite - [ ] GitHub README with setup instructions - [ ] Final blog post: \"Building a Mini LLM Platform — What I Learned\" ---"
        }
      ],
      "searchText": "Unit 25 — CAPSTONE: Assembly & Polish ⭐⭐⭐⭐⭐ Theme: Integration capstone — assemble, polish, and present what you've built > This is NOT building everything from scratch. By Unit 25 you should have: inference gateway (Phase 3), RAG platform (Phase 4), eval pipeline (Phase 6), fine-tuned model (Phase 7). Wire them together, clean up the code, write real documentation. Architecture ┌─────────────────────────────────────────────────────────────┐ │ CLIENT (CLI / Web) │ └──────────────────────────┬──────────────────────────────────┘ │ HTTP/SSE ┌──────────────────────────▼──────────────────────────────────┐ │ FASTAPI GATEWAY (Python) │ │ • Rate limiting (Redis + token bucket) │ │ • Auth (API keys) │ │ • Input guardrails (injection detection) │ │ • Request routing │ │ • Prometheus metrics │ │ • Distributed tracing (OpenTelemetry) │ └─────┬──────────┬───────────────┬────────────────────────────┘ │ REST │ REST │ REST (gRPC stretch goal) ┌─────▼────┐ ┌───▼──────┐ ┌─────▼──────────┐ │ INFERENCE │ │ RAG │ │ EVALUATION │ │ SERVICE │ │ SERVICE │ │ SERVICE │ │ (Python) │ │ (Python) │ │ (Python) │ │ FastAPI + │ │ Chunking │ │ LLM-as-Judge │ │ vLLM │ │ pgvector │ │ Regression │ │ Streaming │ │ Retrieval│ │ Tests │ └─────┬─────┘ └────┬─────┘ └───────────────┘ │ │ ┌─────▼─────────────▼─────────────────────────────────────────┐ │ POSTGRESQL + pgvector │ │ • Conversations • Embeddings • Eval results │ └─────────────────────────────────────────────────────────────┘ │ ┌─────────▼─────────────────────────────────────────────────┐ │ OBSERVABILITY STACK │ │ • Prometheus • Grafana • Jaeger • Structured Logs │ └─────────────────────────────────────────────────────────────┘ What to Do This Unit Week 1: Assembly - Wire all existing services together - Clean up APIs and interfaces between services - Docker Compose for the entire stack — single docker compose up - Integration tests Week 2: Polish & Documentation - Written architecture document (1-2 pages) explaining design decisions — this is what senior engineers write and what interviewers respect - Architecture diagram (Mermaid or Excalidraw) - Clean GitHub README with setup instructions - Grafana dashboard with 6+ panels (latency, throughput, cost, cache hits, eval scores, error rates) Week 3: Job Search Sprint - [ ] Apply to 10 jobs this week using your capstone as the portfolio piece - [ ] Prepare a 10-minute verbal walkthrough of the capstone - [ ] Practice explaining it to a non-technical person AND a technical person — both matter in interviews - [ ] Update resume with all projects and technologies Deliverables - [ ] Fully working multi-service LLM platform - [ ] Docker Compose — single docker compose up to run everything - [ ] Architecture document (1-2 pages) with design decisions - [ ] Architecture diagram - [ ] Grafana dashboard with 6+ panels - [ ] Integration test suite - [ ] GitHub README with setup instructions - [ ] Final blog post: \"Building a Mini LLM Platform — What I Learned\" ---"
    },
    {
      "id": "phase-7-final-capstone-checklist",
      "kind": "checklist",
      "label": "Checklist",
      "unitCode": "",
      "title": "FINAL CAPSTONE CHECKLIST",
      "fullTitle": "FINAL CAPSTONE CHECKLIST",
      "difficulty": "",
      "phaseId": "phase-7",
      "phaseTitle": "PHASE 7: FINE-TUNING & CAPSTONE (Units 24-25)",
      "introHtml": "<p>The Unit 25 project IS the final capstone. It integrates all previous units.</p><p><strong>Grading yourself:</strong></p><ul><li>[ ] Can you explain every architectural decision?</li><li>[ ] Can you swap out any component (different LLM, different vector DB)?</li><li>[ ] Does it handle errors gracefully?</li><li>[ ] Is it observable (can you debug a slow request using traces)?</li><li>[ ] Is it secure (does it block prompt injection)?</li><li>[ ] Is it evaluated (do you have quality metrics)?</li><li>[ ] Can you explain it in 10 minutes to an interviewer?</li></ul><hr>",
      "sectionTitles": [],
      "sections": [],
      "searchText": "FINAL CAPSTONE CHECKLIST The Unit 25 project IS the final capstone. It integrates all previous units. Grading yourself: - [ ] Can you explain every architectural decision? - [ ] Can you swap out any component (different LLM, different vector DB)? - [ ] Does it handle errors gracefully? - [ ] Is it observable (can you debug a slow request using traces)? - [ ] Is it secure (does it block prompt injection)? - [ ] Is it evaluated (do you have quality metrics)? - [ ] Can you explain it in 10 minutes to an interviewer? ---"
    }
  ]
};
