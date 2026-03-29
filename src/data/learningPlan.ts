export interface Week {
  id: number;
  phase: number;
  phaseName: string;
  title: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  difficultyLabel: string;
  overview: string;
  pythonFocus: string;
  pythonProject: string;
  goOption: string;
  goProject: string;
  topics: string[];
  miniProjects: string[];
  leetcode: { problem: string; note?: string }[];
  systemDesign: string;
  resources: { type: string; title: string; url?: string; note?: string }[];
  deliverables: string[];
  isCapstone?: boolean;
}

export interface Phase {
  id: number;
  name: string;
  description: string;
  weeks: Week[];
}

export const phases: Phase[] = [
  {
    id: 1,
    name: "Foundations",
    description: "Core Python async, Go basics, LLM fundamentals",
    weeks: [
      {
        id: 1,
        phase: 1,
        phaseName: "Foundations",
        title: "Async Python & Go Hello World",
        difficulty: 2,
        difficultyLabel: "Easy",
        overview: "Non-blocking I/O in Python; Go environment setup. Establish comfort with Go syntax while mastering Python async patterns.",
        pythonFocus: "100%",
        pythonProject: "Async URL Scraper",
        goOption: "Optional intro",
        goProject: "CLI Weather App",
        topics: [
          "asyncio event loop: async def, await, asyncio.gather, asyncio.create_task",
          "httpx async HTTP client vs requests",
          "asyncio.Semaphore for concurrency limiting",
          "Error handling in async contexts (try/except in coroutines)",
          "Go: Install Go, write 'Hello World', understand go mod init"
        ],
        miniProjects: [
          "Async Link Checker - Check 100 URLs for status codes concurrently",
          "Go File Reader - Read and process CSV files with error handling",
          "Rate-Limited Fetcher - Implement token bucket rate limiting in Python"
        ],
        leetcode: [
          { problem: "Two Sum", note: "HashMap pattern" },
          { problem: "Valid Anagram", note: "frequency counting" },
          { problem: "Contains Duplicate", note: "set usage" }
        ],
        systemDesign: "Read 'System Design Interview Vol 1' Ch. 1 — Scale from Zero to Millions. Think about: How would you design a web crawler?",
        resources: [
          { type: "Blog", title: "Real Python — Async IO in Python", url: "https://realpython.com/async-io-python/" },
          { type: "Blog", title: "Encode httpx docs", url: "https://www.python-httpx.org/async/" },
          { type: "Blog", title: "Lynn Root — asyncio: We Did It Wrong", url: "https://www.roguelynn.com/words/asyncio-we-did-it-wrong/" },
          { type: "Book", title: "Fluent Python Ch. 21 (Asynchronous Programming)" },
          { type: "Video", title: "mCoding — Asyncio Complete Tutorial", url: "https://www.youtube.com/watch?v=Qb9s3UiMSTA" },
          { type: "Blog", title: "Go by Example", url: "https://gobyexample.com/" }
        ],
        deliverables: [
          "Working async scraper that fetches 50+ URLs concurrently",
          "Benchmark: async vs sync timing comparison (include in README)",
          "Blog post: 'Python asyncio — What Actually Happens Under the Hood'",
          "3 LeetCode solutions committed to a leetcode/ repo"
        ]
      },
      {
        id: 2,
        phase: 1,
        phaseName: "Foundations",
        title: "Pydantic v2 & Data Validation",
        difficulty: 2,
        difficultyLabel: "Easy",
        overview: "Production-grade data handling; type safety in Python. Master Go's concurrency primitives while learning Pydantic.",
        pythonFocus: "100%",
        pythonProject: "API Data Validator & Transformer",
        goOption: "Optional",
        goProject: "Concurrent URL Checker",
        topics: [
          "Pydantic v2: BaseModel, Field, validators (@field_validator, @model_validator)",
          "model_dump(), model_validate(), JSON schema generation",
          "Discriminated unions, generic models",
          "Settings management with pydantic-settings",
          "Go: Goroutines, channels, buffered vs unbuffered"
        ],
        miniProjects: [
          "Pydantic Config Loader - Load and validate YAML/JSON config files",
          "Go Worker Pool - Process jobs with configurable worker count",
          "Channel vs Queue - Compare Go channels with asyncio.Queue"
        ],
        leetcode: [
          { problem: "Group Anagrams", note: "hashmap + sorting" },
          { problem: "Valid Parentheses", note: "stack basics" },
          { problem: "Merge Two Sorted Lists", note: "linked list intro" }
        ],
        systemDesign: "Worker Pool Pattern: Understand how to distribute work across multiple workers. Learn about job queues, result aggregation, and error handling.",
        resources: [
          { type: "Blog", title: "Pydantic v2 docs", url: "https://docs.pydantic.dev/latest/" },
          { type: "Blog", title: "Samuel Colvin — Pydantic v2 Plan", url: "https://docs.pydantic.dev/latest/blog/pydantic-v2-plan/" },
          { type: "Blog", title: "ArjanCodes — Pydantic v2 blog post", url: "https://www.arjancodes.com/blog/python-pydantic-v2/" },
          { type: "Book", title: "Fluent Python Ch. 5 (Data Class Builders)" },
          { type: "Video", title: "ArjanCodes — Pydantic V2 Tutorial", url: "https://www.youtube.com/watch?v=502XOB0u8OY" },
          { type: "Blog", title: "Go Blog - Concurrency Patterns", url: "https://go.dev/blog/pipelines" }
        ],
        deliverables: [
          "Data validator handling 3+ different input formats",
          "Pydantic settings config with .env file support",
          "Blog post: 'Pydantic v2 — The Best Thing in Python You're Not Using Enough'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 3,
        phase: 1,
        phaseName: "Foundations",
        title: "Decorators, Generators & Advanced Python",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Python's power features; metaprogramming basics. Master Go's interface system and Python's advanced patterns.",
        pythonFocus: "100%",
        pythonProject: "Middleware & Plugin System",
        goOption: "Optional",
        goProject: "File Word Counter",
        topics: [
          "Decorators: function decorators, class decorators, functools.wraps",
          "Decorator factories (decorators with arguments)",
          "Generators and yield, yield from, generator expressions",
          "Context managers (__enter__/__exit__, @contextmanager)",
          "Go: Interfaces, implicit implementation, io.Reader, io.Writer"
        ],
        miniProjects: [
          "Retry Decorator - Exponential backoff retry mechanism",
          "Cache Decorator - LRU cache with TTL support",
          "Go Plugin System - Interface-based plugin architecture"
        ],
        leetcode: [
          { problem: "Implement Stack using Queues", note: "design pattern" },
          { problem: "Min Stack", note: "stack with O(1) min" },
          { problem: "Generate Parentheses", note: "recursion + backtracking intro" }
        ],
        systemDesign: "Middleware Pattern: Design and implement middleware chains for HTTP processing. Understand request/response transformation.",
        resources: [
          { type: "Blog", title: "Real Python — Primer on Python Decorators", url: "https://realpython.com/primer-on-python-decorators/" },
          { type: "Blog", title: "Real Python — Introduction to Python Generators", url: "https://realpython.com/introduction-to-python-generators/" },
          { type: "Blog", title: "Trey Hunner — Decorators by Trey Hunner", url: "https://treyhunner.com/2019/12/python-decorators/" },
          { type: "Book", title: "Fluent Python Ch. 9 (Decorators and Closures)" },
          { type: "Video", title: "mCoding — Decorators in 12 Minutes", url: "https://www.youtube.com/watch?v=QH5fw9kxDQA" },
          { type: "Blog", title: "Go Blog - Interfaces", url: "https://go.dev/blog/interfaces" }
        ],
        deliverables: [
          "Working middleware system with at least 4 middleware decorators",
          "Streaming file processor using generators (handle 500MB+ file)",
          "Blog post: 'Python Decorators — From Confusion to Mastery'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 4,
        phase: 1,
        phaseName: "Foundations",
        title: "FastAPI Deep Dive",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Production API development; async web servers. Master request lifecycle management.",
        pythonFocus: "85%",
        pythonProject: "Streaming AI Chat API",
        goOption: "15%",
        goProject: "Notes CRUD API in Go",
        topics: [
          "FastAPI: path/query params, request bodies, response models",
          "Dependency injection system (Depends())",
          "Background tasks, middleware, exception handlers",
          "StreamingResponse and Server-Sent Events (SSE)",
          "Authentication: OAuth2, JWT tokens"
        ],
        miniProjects: [
          "Request ID Middleware - Propagate request IDs through context",
          "Timeout Handler - Global and per-endpoint timeout configuration",
          "Streaming Chat UI - Simple HTML interface for SSE streaming"
        ],
        leetcode: [
          { problem: "LRU Cache", note: "design problem — directly relevant to API caching" },
          { problem: "Top K Frequent Elements", note: "heap/bucket sort" },
          { problem: "Product of Array Except Self", note: "array tricks" }
        ],
        systemDesign: "Cancellation in Distributed Systems: Learn about distributed cancellation patterns, circuit breakers, and graceful degradation strategies.",
        resources: [
          { type: "Blog", title: "FastAPI Official Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
          { type: "Blog", title: "TestDriven.io — Developing APIs with FastAPI", url: "https://testdriven.io/blog/fastapi-crud/" },
          { type: "Blog", title: "Real Python — FastAPI introduction", url: "https://realpython.com/fastapi-python-web-apis/" },
          { type: "Blog", title: "Christoph Scheinine — SSE with FastAPI", url: "https://devblog.christoph-scheine.at/posts/server-sent-events-with-fastapi/" },
          { type: "Video", title: "Patrick Loeber — FastAPI Full Course", url: "https://www.youtube.com/watch?v=0sOvCWFmrtA" },
          { type: "Blog", title: "Go Blog - Context", url: "https://go.dev/blog/context" }
        ],
        deliverables: [
          "Streaming chat API with auth, rate limiting, and full OpenAPI docs",
          "Async test suite with >80% coverage",
          "Blog post: 'Building Production APIs with FastAPI — Beyond the Tutorial'",
          "3 LeetCode solutions",
          "Rate limiter middleware (token bucket or sliding window)"
        ]
      },
      {
        id: 5,
        phase: 1,
        phaseName: "Foundations",
        title: "LLM Foundations & Tokenization",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Understanding LLMs from the ground up. Network programming fundamentals and LLM tokenization.",
        pythonFocus: "100%",
        pythonProject: "Tokenizer Explorer & Cost Calculator",
        goOption: "Optional",
        goProject: "TCP Chat Server OR Mini Redis",
        topics: [
          "Transformer architecture (conceptual — attention, self-attention, multi-head attention)",
          "Tokenization: BPE, WordPiece, SentencePiece",
          "tiktoken library for OpenAI token counting",
          "Token economics: cost estimation per model",
          "Go: net package, TCP/UDP sockets, concurrent connection handling"
        ],
        miniProjects: [
          "Token Visualizer - Visualize how text is tokenized",
          "Cost Calculator - API cost estimator for different models",
          "Custom BPE - Implement simple BPE from scratch"
        ],
        leetcode: [
          { problem: "Longest Substring Without Repeating Characters", note: "sliding window — like token windows!" },
          { problem: "Encode and Decode Strings", note: "serialization" },
          { problem: "String to Integer", note: "parsing edge cases" }
        ],
        systemDesign: "Chat Server Architecture: Design a scalable chat system. Learn about connection management, message broadcasting, presence detection.",
        resources: [
          { type: "Video", title: "Andrej Karpathy — Let's build the GPT Tokenizer", url: "https://www.youtube.com/watch?v=zduSFxRajkE" },
          { type: "Blog", title: "Jay Alammar — The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
          { type: "Blog", title: "Jay Alammar — The Illustrated GPT-2", url: "https://jalammar.github.io/illustrated-gpt2/" },
          { type: "Blog", title: "Lilian Weng — Attention? Attention!", url: "https://lilianweng.github.io/posts/2018-06-24-attention/" },
          { type: "Blog", title: "OpenAI Tokenizer", url: "https://platform.openai.com/tokenizer" },
          { type: "Book", title: "Hands-On Large Language Models Ch. 1-3" }
        ],
        deliverables: [
          "Token explorer tool with multi-model comparison",
          "BPE algorithm implementation from scratch (~50-100 lines)",
          "Prompt engineering comparison notebook with results table",
          "Blog post: 'What Happens Before the LLM Sees Your Text — Tokenization Explained'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 6,
        phase: 1,
        phaseName: "Foundations",
        title: "LLM Internals & Sampling + REVIEW",
        difficulty: 4,
        difficultyLabel: "Medium-Hard",
        overview: "Sampling algorithms; attention mechanics; consolidation. System design patterns and LLM internals.",
        pythonFocus: "100%",
        pythonProject: "Temperature & Sampling Playground",
        goOption: "Optional",
        goProject: "Token Bucket Rate Limiter",
        topics: [
          "Sampling: temperature, top-k, top-p (nucleus sampling)",
          "Logits, softmax, probability distributions",
          "Attention weight visualization",
          "KV Cache concept",
          "Go: Token bucket algorithm, tickers, time package"
        ],
        miniProjects: [
          "Sliding Window Limiter - Alternative rate limiting algorithm",
          "Sampling Playground - Interactive sampling parameter explorer",
          "Attention Heatmap - Visualize attention patterns"
        ],
        leetcode: [
          { problem: "Kth Largest Element in Stream", note: "heap — like top-k sampling!" },
          { problem: "Task Scheduler", note: "greedy algorithms" },
          { problem: "Coin Change", note: "intro to dynamic programming" }
        ],
        systemDesign: "Rate Limiting Strategies: Compare token bucket vs leaky bucket vs sliding window. Design rate limiting for distributed systems with Redis.",
        resources: [
          { type: "Blog", title: "Lilian Weng — Controllable Neural Text Generation", url: "https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/" },
          { type: "Blog", title: "HuggingFace — How to Generate Text", url: "https://huggingface.co/blog/how-to-generate" },
          { type: "Blog", title: "Jay Alammar — Visualizing Neural Machine Translation", url: "https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/" },
          { type: "Book", title: "Hands-On Large Language Models Ch. 4-5" },
          { type: "Video", title: "Andrej Karpathy — Let's build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
          { type: "Blog", title: "Cloudflare - Rate Limiting", url: "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/" }
        ],
        deliverables: [
          "Sampling playground with interactive controls",
          "Attention visualizer with heatmap output",
          "All 5 previous weeks' projects refactored and documented",
          "Blog post: 'Sampling in LLMs — Temperature is Not What You Think'",
          "3 LeetCode solutions",
          "Month 1 retrospective blog post"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "HuggingFace & APIs",
    description: "Transformers, embeddings, OpenAI mastery",
    weeks: [
      {
        id: 7,
        phase: 2,
        phaseName: "HuggingFace & APIs",
        title: "HuggingFace Transformers Basics",
        difficulty: 3,
        difficultyLabel: "Easy-Medium",
        overview: "The HuggingFace ecosystem; pretrained model usage. Master the HuggingFace ecosystem - transformers library, model hub, and training pipelines.",
        pythonFocus: "100%",
        pythonProject: "Multi-Task NLP CLI + Sentiment Classifier",
        goOption: "Optional",
        goProject: "CSV to JSON Converter",
        topics: [
          "HuggingFace transformers library: pipeline(), AutoModel, AutoTokenizer",
          "Task types: text classification, NER, summarization, question answering",
          "Model Hub: finding, loading, comparing models",
          "datasets library for loading and preprocessing data",
          "Fine-tuning with Trainer API (intro)"
        ],
        miniProjects: [
          "Model Benchmarker - Compare inference speed of different models",
          "Custom Dataset Loader - Load and preprocess custom datasets",
          "Inference API - FastAPI wrapper for HF models"
        ],
        leetcode: [
          { problem: "Word Search", note: "backtracking — like NER token scanning" },
          { problem: "Binary Tree Level Order Traversal", note: "BFS" },
          { problem: "Number of Islands", note: "graph traversal" }
        ],
        systemDesign: "Model Serving Architecture: Design a system for serving multiple ML models. Learn about model versioning, A/B testing, and blue-green deployments.",
        resources: [
          { type: "Course", title: "HuggingFace Course — NLP (Ch 1-3)", url: "https://huggingface.co/learn/nlp-course/" },
          { type: "Blog", title: "Jay Alammar — A Visual Guide to Using BERT", url: "https://jalammar.github.io/a-visual-guide-to-using-bert-for-the-first-time/" },
          { type: "Blog", title: "HuggingFace Docs — Pipelines", url: "https://huggingface.co/docs/transformers/main_classes/pipelines" },
          { type: "Blog", title: "Lilian Weng — Large Language Model Table", url: "https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/" },
          { type: "Book", title: "Hands-On Large Language Models Ch. 6-7" },
          { type: "Video", title: "HuggingFace — Getting Started with Transformers", url: "https://www.youtube.com/watch?v=QEaBAZQCtwE" }
        ],
        deliverables: [
          "Multi-task NLP CLI working with 3+ HuggingFace pipelines",
          "Fine-tuned sentiment model with evaluation metrics logged",
          "FastAPI endpoint serving the fine-tuned model",
          "Blog post: 'HuggingFace Transformers — Your First Fine-Tuned Model'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 8,
        phase: 2,
        phaseName: "HuggingFace & APIs",
        title: "Embeddings & Vector Search",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Semantic search; vector databases; similarity. Master embeddings and vector similarity search - the foundation of RAG systems.",
        pythonFocus: "100%",
        pythonProject: "Semantic Search Engine",
        goOption: "Optional",
        goProject: "Go REST API with Postgres Setup",
        topics: [
          "Text embeddings: what they are, why they matter",
          "sentence-transformers library",
          "Cosine similarity, dot product, Euclidean distance",
          "Vector databases: FAISS (local), chromadb, pgvector (Postgres)",
          "Embedding model selection: trade-offs (speed vs quality vs dimensions)"
        ],
        miniProjects: [
          "Semantic Document Search - Search across document collection",
          "Embedding Visualizer - 2D/3D visualization of embeddings",
          "Similarity API - FastAPI service for similarity computation"
        ],
        leetcode: [
          { problem: "K Closest Points to Origin", note: "distance calculation — like similarity!" },
          { problem: "Meeting Rooms II", note: "interval scheduling" },
          { problem: "Course Schedule", note: "topological sort" }
        ],
        systemDesign: "Vector Database Design: Design a scalable vector search system. Understand indexing strategies (HNSW, IVF), sharding, and hybrid search.",
        resources: [
          { type: "Blog", title: "Pinecone — What are Vector Embeddings?", url: "https://www.pinecone.io/learn/vector-embeddings/" },
          { type: "Blog", title: "Simon Willison — Embeddings: What they are and why they matter", url: "https://simonwillison.net/2023/Oct/23/embeddings/" },
          { type: "Blog", title: "Sentence-Transformers docs", url: "https://www.sbert.net/" },
          { type: "Blog", title: "James Briggs — FAISS: The Missing Manual", url: "https://www.pinecone.io/learn/series/faiss/" },
          { type: "Blog", title: "Vicki Boykis — What are embeddings?", url: "https://vickiboykis.com/what_are_embeddings/" },
          { type: "Book", title: "DDIA Ch. 3 — Storage and Retrieval" }
        ],
        deliverables: [
          "Semantic search engine indexing 1000+ documents",
          "Code search tool for a real codebase",
          "Embedding visualization (t-SNE plot)",
          "Blog post: 'Building Semantic Search from Scratch with Python'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 9,
        phase: 2,
        phaseName: "HuggingFace & APIs",
        title: "PEFT, LoRA & Efficient Fine-tuning",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Parameter-efficient fine-tuning; making fine-tuning accessible. Learn Parameter-Efficient Fine-Tuning (PEFT) techniques, especially LoRA.",
        pythonFocus: "100%",
        pythonProject: "LoRA Fine-tune a Small LLM",
        goOption: "Optional",
        goProject: "Redis Rate Limiter Middleware",
        topics: [
          "Why full fine-tuning is expensive (parameter count, VRAM)",
          "LoRA: Low-Rank Adaptation — theory and practice",
          "QLoRA: quantized LoRA for consumer GPUs",
          "PEFT library: LoraConfig, get_peft_model, adapter merging",
          "bitsandbytes for quantization (4-bit, 8-bit)"
        ],
        miniProjects: [
          "Rank Comparison - Compare different LoRA ranks",
          "Multi-Adapter System - Switch between task-specific adapters",
          "Memory Profiler - Track GPU memory during training"
        ],
        leetcode: [
          { problem: "Matrix Multiplication", note: "arrays — LoRA IS matrix decomposition!" },
          { problem: "Spiral Matrix", note: "matrix traversal" },
          { problem: "Set Matrix Zeroes", note: "in-place operations" }
        ],
        systemDesign: "Multi-Tenant Model Serving: Design a system that serves multiple fine-tuned adapters efficiently. Learn about adapter swapping, memory management.",
        resources: [
          { type: "Blog", title: "HuggingFace PEFT docs", url: "https://huggingface.co/docs/peft/" },
          { type: "Blog", title: "Sebastian Raschka — Practical Tips for Fine-tuning LLMs Using LoRA", url: "https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms" },
          { type: "Blog", title: "Lightning AI — LoRA from Scratch", url: "https://lightning.ai/pages/community/lora-insights/" },
          { type: "Blog", title: "Tim Dettmers — QLoRA blog", url: "https://huggingface.co/blog/4bit-transformers-bitsandbytes" },
          { type: "Paper", title: "LoRA paper: arXiv:2106.09685", url: "https://arxiv.org/abs/2106.09685" },
          { type: "Video", title: "Umar Jamil — LoRA Explained", url: "https://www.youtube.com/watch?v=PXWYUTMt-AU" }
        ],
        deliverables: [
          "LoRA fine-tuned model with before/after comparison",
          "Parameter count analysis document (full vs LoRA)",
          "Blog post: 'LoRA Demystified — Fine-tuning LLMs on a Laptop'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 10,
        phase: 2,
        phaseName: "HuggingFace & APIs",
        title: "OpenAI API & Tool Calling",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Mastering the OpenAI API; function/tool calling; agentic patterns. Master the OpenAI API ecosystem.",
        pythonFocus: "90%",
        pythonProject: "Streaming Chat CLI with Tool Calling",
        goOption: "10%",
        goProject: "OpenAI API from Go",
        topics: [
          "OpenAI Python SDK: chat.completions.create()",
          "Streaming responses: stream=True, async streaming",
          "Function/tool calling: defining tools, handling tool calls",
          "Conversation management: message history, token budgets",
          "Vision API: image inputs, Structured outputs with response_format"
        ],
        miniProjects: [
          "Multi-Model Router - Route requests to different models based on complexity",
          "Cost Tracker - Track API usage and costs per user/conversation",
          "Retry Handler - Exponential backoff with jitter"
        ],
        leetcode: [
          { problem: "Design Twitter", note: "OOP design — like designing chat systems" },
          { problem: "Time Based Key-Value Store", note: "like conversation history with timestamps" },
          { problem: "Serialize and Deserialize Binary Tree", note: "like message serialization" }
        ],
        systemDesign: "LLM Gateway Design: Design an API gateway for LLM requests with rate limiting, caching, load balancing, and request routing.",
        resources: [
          { type: "Docs", title: "OpenAI API Docs — Chat Completions", url: "https://platform.openai.com/docs/guides/chat-completions" },
          { type: "Docs", title: "OpenAI API Docs — Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" },
          { type: "Blog", title: "Simon Willison — Understanding Tool Calling", url: "https://simonwillison.net/2024/Oct/25/tool-calling/" },
          { type: "Blog", title: "Chip Huyen — Building LLM Apps", url: "https://huyenchip.com/2023/04/11/llm-engineering.html" },
          { type: "Blog", title: "Hamel's Blog — Structured Outputs", url: "https://hamel.dev/blog/posts/structured/" },
          { type: "Video", title: "OpenAI DevDay Talks", url: "https://www.youtube.com/playlist?list=PLOXw6I10VTv_FhQqFiyGAlYErmI_ByLvE" }
        ],
        deliverables: [
          "Streaming chat CLI with 3+ working tools",
          "AI code review bot with structured JSON output",
          "Token usage tracker showing cost per conversation",
          "Blog post: 'Building an AI Agent with Tool Calling — A Practical Guide'",
          "3 LeetCode solutions"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Inference Systems",
    description: "vLLM, batching, quantization, performance",
    weeks: [
      {
        id: 11,
        phase: 3,
        phaseName: "Inference Systems",
        title: "vLLM & Model Serving",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "High-performance LLM inference; serving infrastructure. Master vLLM - the high-performance inference engine.",
        pythonFocus: "90%",
        pythonProject: "vLLM Benchmarking Suite",
        goOption: "10%",
        goProject: "Health Check Service",
        topics: [
          "vLLM installation, architecture, and concepts",
          "Continuous batching vs static batching",
          "PagedAttention — why it matters",
          "OpenAI-compatible API server",
          "Throughput vs latency trade-offs, GPU memory management basics"
        ],
        miniProjects: [
          "Load Tester - Simulate concurrent requests",
          "Benchmark Suite - Compare inference engines",
          "Config Optimizer - Find optimal batch size"
        ],
        leetcode: [
          { problem: "Design Circular Queue", note: "circular buffer — like request batching" },
          { problem: "Sliding Window Maximum", note: "sliding window — like batching windows" },
          { problem: "Median of Two Sorted Arrays", note: "statistics — like p50/p99 calculation" }
        ],
        systemDesign: "High-Throughput Inference: Design a system for maximum inference throughput. Learn about request batching, scheduling strategies.",
        resources: [
          { type: "Docs", title: "vLLM Docs", url: "https://docs.vllm.ai/" },
          { type: "Blog", title: "vLLM Blog — PagedAttention", url: "https://blog.vllm.ai/2023/06/20/vllm.html" },
          { type: "Blog", title: "Anyscale — Continuous Batching", url: "https://www.anyscale.com/blog/continuous-batching-llm-inference" },
          { type: "Blog", title: "MLC LLM — How Machine Learning Compilers Optimize Inference", url: "https://mlc.ai/chapter_introduction/" },
          { type: "Blog", title: "Lilian Weng — Large Transformer Model Inference Optimization", url: "https://lilianweng.github.io/posts/2023-01-10-inference-optimization/" },
          { type: "Book", title: "High Performance Python Ch. 1-3" }
        ],
        deliverables: [
          "Benchmarking suite with plots (latency distribution, throughput curves)",
          "Multi-model inference server with auto-routing",
          "Blog post: 'vLLM — Why It's 10x Faster Than Naive Inference'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 12,
        phase: 3,
        phaseName: "Inference Systems",
        title: "Quantization & Batching Deep Dive",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Making models smaller and faster; production optimization. Deep dive into batching strategies and quantization techniques.",
        pythonFocus: "100%",
        pythonProject: "Quantization Comparison Lab",
        goOption: "Optional",
        goProject: "Connection Pool Benchmarker",
        topics: [
          "Quantization methods: INT8, INT4, GPTQ, AWQ, GGUF",
          "bitsandbytes, auto-gptq, llama.cpp / llama-cpp-python",
          "Quantization quality vs speed benchmarks",
          "Dynamic vs static batching strategies",
          "Speculative decoding (intro), Model sharding concepts"
        ],
        miniProjects: [
          "Batching Simulator - Simulate different batching strategies",
          "Quantization Benchmark - Compare GPTQ, AWQ, bitsandbytes",
          "Accuracy Evaluator - Measure perplexity changes"
        ],
        leetcode: [
          { problem: "Maximum Subarray", note: "Kadane's algorithm — optimization!" },
          { problem: "House Robber", note: "DP — optimal substructure" },
          { problem: "Unique Paths", note: "DP — combinatorial optimization" }
        ],
        systemDesign: "GPU Memory Optimization: Design strategies for fitting larger models in limited GPU memory.",
        resources: [
          { type: "Blog", title: "HuggingFace — Quantization Overview", url: "https://huggingface.co/docs/transformers/main/en/quantization/overview" },
          { type: "Blog", title: "Tim Dettmers — The case for 4-bit precision", url: "https://timdettmers.com/2022/08/15/memory-in-deep-learning/" },
          { type: "Blog", title: "TheBloke's Quantization Guide", url: "https://huggingface.co/TheBloke" },
          { type: "Blog", title: "MIT Han Lab — AWQ Paper Blog", url: "https://hanlab.mit.edu/projects/awq" },
          { type: "Book", title: "High Performance Python Ch. 6-7" },
          { type: "Video", title: "Efficient ML Course MIT", url: "https://www.youtube.com/watch?v=rCFvPEQTxKI" }
        ],
        deliverables: [
          "Quantization benchmark with comparison charts",
          "Batching simulator with throughput visualization",
          "Blog post: 'INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 13,
        phase: 3,
        phaseName: "Inference Systems",
        title: "Inference Performance & Caching",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Latency optimization; prompt caching; monitoring. Deep understanding of inference latency and optimization.",
        pythonFocus: "90%",
        pythonProject: "TTFT Monitor & Latency Dashboard",
        goOption: "10%",
        goProject: "gRPC Mock Inference Service",
        topics: [
          "TTFT (Time to First Token) vs TPS (Tokens per Second) vs Total Latency",
          "Prompt caching: prefix caching, semantic caching",
          "KV-cache optimization and memory management",
          "Inference profiling and bottleneck identification",
          "Redis for response caching, Prometheus metrics"
        ],
        miniProjects: [
          "Latency Profiler - Detailed latency breakdown tool",
          "Cache Simulator - Simulate cache hit rates",
          "Optimization Recommender - Suggest optimizations based on profile"
        ],
        leetcode: [
          { problem: "LFU Cache", note: "advanced cache design — directly relevant!" },
          { problem: "Longest Consecutive Sequence", note: "hashmap optimization" },
          { problem: "Minimum Window Substring", note: "sliding window optimization" }
        ],
        systemDesign: "Low-Latency Inference: Design for minimal latency applications. Learn about prefill optimization, decode optimization.",
        resources: [
          { type: "Blog", title: "Databricks — LLM Inference Performance Engineering", url: "https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices" },
          { type: "Blog", title: "Anthropic — Prompt Caching", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching" },
          { type: "Blog", title: "GPTCache — Semantic Caching", url: "https://github.com/zilliztech/GPTCache" },
          { type: "Blog", title: "Brendan Gregg — Latency Numbers Every Programmer Should Know", url: "https://gist.github.com/jboner/2841832" },
          { type: "Book", title: "DDIA Ch. 7 — Transactions" },
          { type: "Video", title: "Hussein Nasser — Caching Strategies", url: "https://www.youtube.com/watch?v=ccemOqDrc2I" }
        ],
        deliverables: [
          "TTFT monitoring dashboard with alerting",
          "Semantic cache with measurable hit rate improvement",
          "Blog post: 'Caching LLM Responses — From Naive to Semantic'",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 14,
        phase: 3,
        phaseName: "Inference Systems",
        title: "Inference Gateway & Load Balancing",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Building the infrastructure layer; production routing. Build a production-ready inference gateway.",
        pythonFocus: "50%",
        pythonProject: "GPU Memory Calculator",
        goOption: "50%",
        goProject: "Go Load Balancer for LLM Backends",
        topics: [
          "Reverse proxy patterns for model serving",
          "Load balancing strategies: round-robin, least-connections, weighted",
          "Health checks and circuit breakers",
          "GPU memory estimation formulas",
          "Model routing based on request properties, Request queuing"
        ],
        miniProjects: [
          "VRAM Estimator - Web tool for GPU memory planning",
          "Model Router - Route based on model availability",
          "Auto-Scaler - Scale vLLM based on load"
        ],
        leetcode: [
          { problem: "Design HashMap", note: "fundamental data structure design" },
          { problem: "Implement Trie", note: "prefix matching — like URL routing!" },
          { problem: "Load Balancer", note: "rotational cipher for round-robin" }
        ],
        systemDesign: "Inference Service Mesh: Design a service mesh for LLM inference. Learn about service discovery, traffic management.",
        resources: [
          { type: "Blog", title: "Cloudflare — What is a reverse proxy?", url: "https://www.cloudflare.com/learning/cdn-glossary/reverse-proxy/" },
          { type: "Blog", title: "Microsoft — Circuit Breaker Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" },
          { type: "Blog", title: "Go net/http/httputil ReverseProxy", url: "https://pkg.go.dev/net/http/httputil#ReverseProxy" },
          { type: "Blog", title: "Alex Edwards — Let's Go Further", url: "https://lets-go-further.alexedwards.net/" },
          { type: "Blog", title: "Subbarao Kambhampati — LLM Inference Cost Estimation", url: "https://blog.eleuther.ai/transformer-math/" },
          { type: "Book", title: "The Go Programming Language Ch. 8" }
        ],
        deliverables: [
          "Working load balancer (Go preferred, Python acceptable)",
          "GPU memory calculator with CLI interface",
          "Load test results comparing single vs load-balanced performance",
          "Blog post: 'Building an LLM Gateway — Go vs Python for Infrastructure'",
          "3 LeetCode solutions"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Backend Systems",
    description: "Production APIs, RAG, microservices",
    weeks: [
      {
        id: 15,
        phase: 4,
        phaseName: "Backend Systems",
        title: "PostgreSQL, pgvector & RAG Foundations",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Production databases for AI; vector storage in Postgres. Build production-ready Go APIs with Postgres and pgvector.",
        pythonFocus: "50%",
        pythonProject: "pgvector Setup + RAG Prototype",
        goOption: "50%",
        goProject: "Go REST API with Postgres (Full)",
        topics: [
          "Go: Complete REST API with Postgres, pgx, connection pooling",
          "Go: Database migrations (golang-migrate), Repository pattern",
          "pgvector: Vector storage and similarity search",
          "pgvector: Index types (ivfflat, hnsw)",
          "Python: RAG prototype with document ingestion"
        ],
        miniProjects: [
          "Document Store API - CRUD for documents with embeddings",
          "Vector Search Endpoint - Similarity search API",
          "Migration Tool - Version-controlled schema changes"
        ],
        leetcode: [
          { problem: "Combine Two Tables" },
          { problem: "Second Highest Salary" },
          { problem: "Nth Highest Salary" }
        ],
        systemDesign: "Database Design for RAG: Design a schema for RAG applications. Learn about document chunking, embedding storage.",
        resources: [
          { type: "Docs", title: "pgvector Documentation", url: "https://github.com/pgvector/pgvector" },
          { type: "Blog", title: "Go pgx Tutorial", url: "https://github.com/jackc/pgx/wiki" },
          { type: "Blog", title: "Repository Pattern in Go", url: "https://threedots.tech/post/repository-pattern-in-go/" },
          { type: "Video", title: "Golang Database Tutorial", url: "https://www.youtube.com/@GolangDojo" },
          { type: "Book", title: "Let's Go by Alex Edwards", url: "https://lets-go.alexedwards.net/" }
        ],
        deliverables: [
          "Complete Go API for document management with pgvector integration",
          "Support document upload, embedding generation, and semantic search",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 16,
        phase: 4,
        phaseName: "Backend Systems",
        title: "RAG Architecture",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Build a complete RAG system with production considerations. Master chunking strategies, retrieval, and prompt engineering.",
        pythonFocus: "100%",
        pythonProject: "Full RAG System",
        goOption: "Optional",
        goProject: "Go pgvector Client",
        topics: [
          "Document chunking strategies",
          "Recursive, semantic, and agentic chunking",
          "Retrieval strategies (BM25, hybrid)",
          "Re-ranking models",
          "Prompt augmentation techniques, Context window management"
        ],
        miniProjects: [
          "Chunking Comparator - Compare different chunking strategies",
          "Hybrid Search - Combine BM25 + vector search",
          "Re-ranker Integration - Add cross-encoder re-ranking"
        ],
        leetcode: [
          { problem: "Search Suggestions System" },
          { problem: "Design Search Autocomplete System" },
          { problem: "Prefix and Suffix Search" }
        ],
        systemDesign: "RAG at Scale: Design a RAG system for millions of documents. Learn about ingestion pipelines, incremental updates.",
        resources: [
          { type: "Blog", title: "LlamaIndex - RAG Guide", url: "https://docs.llamaindex.ai/" },
          { type: "Blog", title: "LangChain - RAG Tutorial", url: "https://python.langchain.com/docs/use_cases/question_answering/" },
          { type: "Paper", title: "Retrieval-Augmented Generation", url: "https://arxiv.org/abs/2005.11401" },
          { type: "Blog", title: "Pinecone - RAG Best Practices", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
          { type: "Video", title: "Anyscale - Building RAG", url: "https://www.anyscale.com/blog" }
        ],
        deliverables: [
          "Production-ready RAG system with configurable components",
          "Test on multiple document types and publish comparison of configurations",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 17,
        phase: 4,
        phaseName: "Backend Systems",
        title: "Async Processing",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Master async job processing in both Python and Go. Build reliable background task systems.",
        pythonFocus: "50%",
        pythonProject: "Async LLM Job Queue",
        goOption: "50%",
        goProject: "Asynq Job Queue",
        topics: [
          "Python: Celery, RQ, arq task queues",
          "Python: Job states and result backends",
          "Go: Asynq library, Worker patterns in Go",
          "Redis as message broker",
          "Dead letter queues"
        ],
        miniProjects: [
          "Job Dashboard - Web UI for job monitoring",
          "Retry Handler - Exponential backoff with dead letter",
          "Priority Queue - Job prioritization system"
        ],
        leetcode: [
          { problem: "Moving Average from Data Stream" },
          { problem: "Design Hit Counter" },
          { problem: "Number of Recent Calls" }
        ],
        systemDesign: "Job Queue Architecture: Design a reliable job processing system. Learn about at-least-once delivery, idempotency.",
        resources: [
          { type: "Docs", title: "Celery Documentation", url: "https://docs.celeryq.dev/" },
          { type: "Docs", title: "Asynq Documentation", url: "https://github.com/hibiken/asynq" },
          { type: "Blog", title: "RQ - Python Job Queue", url: "https://python-rq.org/" },
          { type: "Video", title: "Celery Tutorial", url: "https://www.youtube.com/@prettyprinted" },
          { type: "Blog", title: "Redis Streams for Job Queues", url: "https://redis.io/docs/data-types/streams/" }
        ],
        deliverables: [
          "Complete async job processing system in both Python and Go",
          "Document the differences in approach and performance characteristics",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 18,
        phase: 4,
        phaseName: "Backend Systems",
        title: "Microservices",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Build microservices architecture with gRPC. Learn service-to-service communication patterns.",
        pythonFocus: "50%",
        pythonProject: "FastAPI Gateway to gRPC",
        goOption: "50%",
        goProject: "gRPC Inference Service (Full)",
        topics: [
          "gRPC fundamentals and protobuf",
          "gRPC streaming (client, server, bidirectional)",
          "gRPC interceptors and middleware",
          "Service discovery basics",
          "API Gateway patterns, FastAPI to gRPC integration"
        ],
        miniProjects: [
          "Service Mesh - Multiple services with discovery",
          "Load Balancer - Client-side load balancing",
          "Circuit Breaker - gRPC circuit breaker"
        ],
        leetcode: [
          { problem: "Implement Trie (revisit)" },
          { problem: "Design Add and Search Words Data Structure" },
          { problem: "Map Sum Pairs" }
        ],
        systemDesign: "Microservices for LLM: Design a microservices architecture for LLM applications. Learn about service boundaries.",
        resources: [
          { type: "Docs", title: "gRPC Documentation", url: "https://grpc.io/docs/" },
          { type: "Docs", title: "Protobuf Guide", url: "https://protobuf.dev/" },
          { type: "Blog", title: "Go gRPC Tutorial", url: "https://grpc.io/docs/languages/go/" },
          { type: "Blog", title: "Python gRPC Guide", url: "https://grpc.io/docs/languages/python/" },
          { type: "Video", title: "gRPC vs REST", url: "https://www.youtube.com/@TechWorldwithNana" }
        ],
        deliverables: [
          "Complete microservices system with Go gRPC services and Python FastAPI gateway",
          "Include service discovery and load balancing",
          "3 LeetCode solutions"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Observability",
    description: "Metrics, logging, tracing, alerting",
    weeks: [
      {
        id: 19,
        phase: 5,
        phaseName: "Observability",
        title: "Metrics & Logging",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Implement comprehensive metrics and logging for LLM applications. Track costs, latency, and usage patterns.",
        pythonFocus: "50%",
        pythonProject: "LLM Cost Tracker",
        goOption: "50%",
        goProject: "Prometheus Instrumented API",
        topics: [
          "Prometheus metrics types (counter, gauge, histogram)",
          "Go: client_golang instrumentation",
          "Python: prometheus_client",
          "Structured logging (JSON)",
          "Go: zerolog, slog; Python: structlog",
          "LLM-specific metrics (tokens, costs, latency)"
        ],
        miniProjects: [
          "Metrics Dashboard - Custom metrics exporter",
          "Log Aggregator - Centralized logging setup",
          "Cost Alert System - Alert on budget thresholds"
        ],
        leetcode: [
          { problem: "Find Median from Data Stream" },
          { problem: "Sliding Window Median" },
          { problem: "IPO" }
        ],
        systemDesign: "Observability Architecture: Design a complete observability stack. Learn about metric cardinality, log sampling.",
        resources: [
          { type: "Docs", title: "Prometheus Documentation", url: "https://prometheus.io/docs/" },
          { type: "Docs", title: "Grafana Documentation", url: "https://grafana.com/docs/" },
          { type: "Blog", title: "Prometheus Best Practices", url: "https://prometheus.io/docs/practices/" },
          { type: "Blog", title: "Go Structured Logging", url: "https://go.dev/blog/slog" },
          { type: "Video", title: "Observability Engineering", url: "https://www.youtube.com/@o11ycast" }
        ],
        deliverables: [
          "Complete monitoring stack with Prometheus and Grafana",
          "Create dashboards for LLM metrics and set up alerting rules",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 20,
        phase: 5,
        phaseName: "Observability",
        title: "Tracing & Alerting",
        difficulty: 3,
        difficultyLabel: "Medium",
        overview: "Implement distributed tracing and intelligent alerting for LLM systems. Understand request flows across services.",
        pythonFocus: "50%",
        pythonProject: "Alert Rules + PII Redactor",
        goOption: "50%",
        goProject: "OpenTelemetry + Grafana Dashboard",
        topics: [
          "OpenTelemetry fundamentals",
          "Distributed tracing concepts",
          "Go: OpenTelemetry instrumentation",
          "Python: OpenTelemetry SDK",
          "Jaeger for trace visualization, Prometheus alerting rules",
          "PII detection and redaction"
        ],
        miniProjects: [
          "Trace Analyzer - Identify slow spans",
          "Alert Manager - Multi-channel alerting",
          "PII Scanner - Detect sensitive data"
        ],
        leetcode: [
          { problem: "Meeting Rooms II" },
          { problem: "Non-overlapping Intervals" },
          { problem: "Merge Intervals" }
        ],
        systemDesign: "Distributed Tracing at Scale: Design a tracing system for high-volume services. Learn about sampling strategies.",
        resources: [
          { type: "Docs", title: "OpenTelemetry Documentation", url: "https://opentelemetry.io/docs/" },
          { type: "Docs", title: "Jaeger Documentation", url: "https://www.jaegertracing.io/docs/" },
          { type: "Blog", title: "Prometheus Alerting", url: "https://prometheus.io/docs/alerting/latest/overview/" },
          { type: "Blog", title: "Microsoft Presidio", url: "https://microsoft.github.io/presidio/" },
          { type: "Video", title: "Distributed Tracing", url: "https://www.youtube.com/@OpenTelemetry" }
        ],
        deliverables: [
          "End-to-end tracing pipeline with OpenTelemetry, Jaeger, and Grafana",
          "Create alert rules and test them",
          "3 LeetCode solutions"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Evaluation & Guardrails",
    description: "Testing, safety, structured outputs",
    weeks: [
      {
        id: 21,
        phase: 6,
        phaseName: "Evaluation & Guardrails",
        title: "Evaluation Pipelines",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Build comprehensive evaluation pipelines for LLM applications. Master LLM-as-judge patterns and regression testing.",
        pythonFocus: "100%",
        pythonProject: "LLM-as-Judge + Regression Eval",
        goOption: "Optional",
        goProject: "Eval Results API",
        topics: [
          "LLM evaluation metrics (BLEU, ROUGE, BERTScore)",
          "LLM-as-judge pattern",
          "Human evaluation frameworks",
          "A/B testing for LLMs",
          "Regression testing, Evaluation datasets"
        ],
        miniProjects: [
          "RAG Evaluator - Evaluate RAG pipeline quality",
          "Judge Prompt Optimizer - Optimize judge prompts",
          "Regression Detector - Auto-detect performance drops"
        ],
        leetcode: [
          { problem: "Count of Smaller Numbers After Self" },
          { problem: "Reverse Pairs" },
          { problem: "Count of Range Sum" }
        ],
        systemDesign: "Evaluation Infrastructure: Design a system for continuous LLM evaluation. Learn about test dataset management.",
        resources: [
          { type: "Blog", title: "OpenAI Evals", url: "https://github.com/openai/evals" },
          { type: "Blog", title: "RAGAS - RAG Evaluation", url: "https://docs.ragas.io/" },
          { type: "Paper", title: "Judging LLM-as-a-Judge", url: "https://arxiv.org/abs/2306.05685" },
          { type: "Blog", title: "LangChain Evaluation", url: "https://python.langchain.com/docs/guides/evaluation/" },
          { type: "Video", title: "LLM Evaluation Deep Dive", url: "https://www.youtube.com/@AIEngineerFoundation" }
        ],
        deliverables: [
          "Complete evaluation pipeline for your RAG system",
          "Create test datasets, implement LLM-as-judge, and generate evaluation reports",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 22,
        phase: 6,
        phaseName: "Evaluation & Guardrails",
        title: "Guardrails & Security",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Implement safety guardrails and security measures for LLM applications. Protect against prompt injection.",
        pythonFocus: "100%",
        pythonProject: "Prompt Injection Detector + Schema Validator",
        goOption: "Optional",
        goProject: "Input Validation Middleware",
        topics: [
          "Prompt injection attacks and defenses",
          "Input validation and sanitization",
          "Output filtering and moderation",
          "Structured outputs with Instructor",
          "JSON schema validation, Defense in depth strategies"
        ],
        miniProjects: [
          "Jailbreak Tester - Test prompt injection defenses",
          "Output Moderator - Content filtering pipeline",
          "Schema Enforcer - Strict output validation"
        ],
        leetcode: [
          { problem: "Valid Parentheses (revisit)" },
          { problem: "Decode String" },
          { problem: "Number of Atoms" }
        ],
        systemDesign: "LLM Security Architecture: Design a secure LLM application architecture. Learn about input/output filtering.",
        resources: [
          { type: "Blog", title: "Prompt Injection Defenses", url: "https://genai.owasp.org/" },
          { type: "Blog", title: "Instructor Documentation", url: "https://python.useinstructor.com/" },
          { type: "Paper", title: "Not What You've Signed Up For", url: "https://arxiv.org/abs/2302.12173" },
          { type: "Blog", title: "OpenAI Moderation API", url: "https://platform.openai.com/docs/guides/moderation" },
          { type: "Video", title: "AI Security", url: "https://www.youtube.com/@AIExplained-official" }
        ],
        deliverables: [
          "Comprehensive guardrails system with input validation, output filtering, and structured output enforcement",
          "Test against known attack patterns",
          "3 LeetCode solutions"
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Fine-Tuning & Capstone",
    description: "QLoRA, end-to-end platform",
    weeks: [
      {
        id: 23,
        phase: 7,
        phaseName: "Fine-Tuning & Capstone",
        title: "Fine-tuning Pipeline",
        difficulty: 4,
        difficultyLabel: "Hard",
        overview: "Build a complete fine-tuning pipeline with data preparation, training, and monitoring. Use QLoRA for efficient training.",
        pythonFocus: "100%",
        pythonProject: "QLoRA Fine-tune on Custom Data",
        goOption: "Optional",
        goProject: "Fine-tuning Job API",
        topics: [
          "Data pipeline design",
          "Instruction tuning formats",
          "QLoRA configuration",
          "Training monitoring and checkpointing",
          "Hyperparameter tuning, Model merging techniques"
        ],
        miniProjects: [
          "Data Preprocessor - Format datasets for training",
          "Training Monitor - Real-time training dashboard",
          "Model Comparator - Compare base vs fine-tuned"
        ],
        leetcode: [
          { problem: "Serialize and Deserialize Binary Tree" },
          { problem: "Serialize and Deserialize N-ary Tree" },
          { problem: "Serialize and Deserialize BST" }
        ],
        systemDesign: "ML Training Infrastructure: Design a system for managing training jobs. Learn about resource allocation, job scheduling.",
        resources: [
          { type: "Blog", title: "HuggingFace PEFT + TRL", url: "https://huggingface.co/docs/trl/" },
          { type: "Blog", title: "Axolotl - Fine-tuning Framework", url: "https://github.com/OpenAccess-AI-Collective/axolotl" },
          { type: "Paper", title: "QLoRA Efficient Finetuning", url: "https://arxiv.org/abs/2305.14314" },
          { type: "Video", title: "Fine-tuning LLMs", url: "https://www.youtube.com/@AIExplained-official" },
          { type: "Blog", title: "Weights & Biases - LLM Training", url: "https://wandb.ai/site/articles/llm-training" }
        ],
        deliverables: [
          "Complete a full fine-tuning run on a domain-specific dataset",
          "Document the process, challenges, and results",
          "Push the model to HuggingFace Hub",
          "3 LeetCode solutions"
        ]
      },
      {
        id: 24,
        phase: 7,
        phaseName: "Fine-Tuning & Capstone",
        title: "CAPSTONE - Mini LLM Platform",
        difficulty: 5,
        difficultyLabel: "Very Hard",
        overview: "Build a complete, integrated LLM platform combining everything learned. This is your portfolio piece.",
        pythonFocus: "60%",
        pythonProject: "Complete Platform Integration",
        goOption: "40%",
        goProject: "API Gateway & Services",
        isCapstone: true,
        topics: [
          "Go API Gateway - rate limiting, routing, auth, metrics",
          "Python Inference Service - FastAPI + vLLM, streaming",
          "Python RAG Pipeline - ingestion, pgvector, retrieval",
          "Python Evaluation Layer - automated evals, result storage",
          "Observability Stack - Prometheus, Grafana, Jaeger"
        ],
        miniProjects: [
          "End-to-end integration testing",
          "Performance benchmarking",
          "Documentation and deployment guides"
        ],
        leetcode: [],
        systemDesign: "Complete LLM Platform Architecture: Design and implement a production-ready LLM platform with all components.",
        resources: [
          { type: "Blog", title: "Production ML Systems", url: "https://madewithml.com/" },
          { type: "Blog", title: "MLOps Community", url: "https://mlops.community/" },
          { type: "Book", title: "Designing Machine Learning Systems by Chip Huyen", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
          { type: "Video", title: "Full Stack LLM Bootcamp", url: "https://www.youtube.com/@AIEngineerFoundation" }
        ],
        deliverables: [
          "Working Demo: Deployed and accessible platform",
          "Architecture Diagram: Complete system design",
          "Source Code: Well-documented repository",
          "Final Blog Post: Complete journey documentation",
          "Video Demo: 5-minute walkthrough"
        ]
      }
    ]
  }
];

export const capstoneProjects = [
  {
    month: 1,
    name: "Smart Documentation Generator",
    description: "Combine Weeks 1-6 skills into one system: Async scraping, Pydantic models, Decorator-based plugins, FastAPI endpoint, Token counting, Sampling config.",
    requirements: [
      "Async scraping (Week 1) to collect documentation from multiple URLs",
      "Pydantic models (Week 2) for structured doc schema",
      "Decorator-based plugins (Week 3) for different output formats",
      "FastAPI endpoint (Week 4) to serve generated docs",
      "Token counting (Week 5) for doc chunk sizing",
      "Sampling config (Week 6) for AI-generated summaries"
    ],
    deliverable: "Working web app that scrapes docs, chunks them, and serves them via API"
  },
  {
    month: 2,
    name: "AI Research Assistant",
    description: "Combine Weeks 7-10 skills into one system.",
    requirements: [
      "HuggingFace models (Week 7) for local classification/NER",
      "Semantic search (Week 8) to index and retrieve research papers",
      "Fine-tuned model (Week 9) specialized for your domain",
      "OpenAI tool calling (Week 10) for complex multi-step research queries",
      "FastAPI (Week 4) to serve everything behind an API"
    ],
    deliverable: "Research assistant that can index papers, answer questions, classify topics, and chain tools together"
  },
  {
    month: 3,
    name: "Mini LLM Serving Platform",
    description: "Combine Weeks 11-14 into an end-to-end inference platform.",
    requirements: [
      "vLLM backends (Week 11) serving 2 different models",
      "Quantized models (Week 12) for cost-effective serving",
      "Semantic cache (Week 13) for response caching",
      "Load balancer (Week 14) distributing traffic across backends",
      "Monitoring dashboard (Week 13) showing latency, throughput, cache hits"
    ],
    deliverable: "End-to-end inference platform with automated benchmarks proving it's faster than naive single-model serving"
  },
  {
    month: 4,
    name: "Enterprise RAG Platform",
    description: "Build an enterprise-grade RAG platform with microservices architecture.",
    requirements: [
      "Go ingestion service with async processing",
      "Python embedding service",
      "Go retrieval service with pgvector",
      "Python generation service with OpenAI",
      "gRPC inter-service communication",
      "FastAPI gateway",
      "Redis for caching and queues",
      "Complete observability"
    ],
    deliverables: [
      "Working platform: Multi-service RAG system",
      "Architecture diagram: Service interaction map",
      "API documentation: OpenAPI spec",
      "Deployment guide: Docker Compose or K8s"
    ]
  }
];

export const books = [
  { title: "Fluent Python (2nd ed)", author: "Luciano Ramalho", when: "Weeks 1-6", topic: "Python internals, decorators, async" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", when: "Weeks 11+", topic: "Systems design bible" },
  { title: "System Design Interview Vol 1 & 2", author: "Alex Xu", when: "Ongoing", topic: "Weekly systems design reading" },
  { title: "The Go Programming Language", author: "Donovan & Kernighan", when: "Go weeks", topic: "Canonical reference" },
  { title: "Hands-On Large Language Models", author: "Jay Alammar & Gregory Pichotta", when: "Weeks 5-10", topic: "LLM foundations" },
  { title: "Building LLMs for Production", author: "Various", when: "Weeks 11-18", topic: "Inference & deployment" },
  { title: "High Performance Python", author: "Gorelick & Ozsvald", when: "Weeks 11-14", topic: "Profiling, optimization" },
  { title: "Learning Go", author: "Jon Bodner", when: "Go weeks", topic: "Go programming" },
  { title: "Let's Go", author: "Alex Edwards", when: "Go weeks", topic: "Go web development" },
  { title: "Natural Language Processing with Transformers", author: "Lewis et al.", when: "Weeks 7-10", topic: "Transformers & NLP" }
];

export const leetcodeStrategy = {
  weeks1_6: "3 easy problems/week (arrays, strings, hashmaps)",
  weeks7_12: "3 medium problems/week (trees, graphs, BFS/DFS)",
  weeks13_18: "2-3 medium problems/week (DP, sliding window, binary search)",
  weeks19_24: "2 medium + 1 hard/week (advanced patterns, system-specific)",
  platform: "NeetCode 150 for structured progression"
};

export const systemDesignStrategy = {
  weeks1_6: "Read 1 chapter/week from 'System Design Interview Vol 1'",
  weeks7_14: "Read 'DDIA' chapters aligned with the weekly theme",
  weeks15_24: "Design a system weekly (30-45 min whiteboard exercise)"
};
