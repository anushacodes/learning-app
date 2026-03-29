export interface SupplementalResource {
  type: string;
  title: string;
  url?: string;
  note?: string;
}

export interface SupplementalContentBlock {
  title: string;
  html: string;
}

export interface WeekSectionSupplement {
  topics?: string[];
  projectBlocks?: SupplementalContentBlock[];
  miniExercises?: string[];
  leetcodeContext?: string;
  systemDesignHtml?: string;
  resources?: SupplementalResource[];
  deliverables?: string[];
  deliverableBlocks?: SupplementalContentBlock[];
}

export const weekSectionSupplements: Record<number, WeekSectionSupplement> = {
  "1": {
    "topics": [
      "asyncio event loop: async def , await , asyncio.gather , asyncio.create_task",
      "httpx async HTTP client vs requests",
      "asyncio.Semaphore for concurrency limiting",
      "Error handling in async contexts ( try/except in coroutines)"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Real Python — Async IO in Python",
        "url": "https://realpython.com/async-io-python/",
        "note": "best single article on asyncio"
      },
      {
        "type": "Reference",
        "title": "Encode httpx docs",
        "url": "https://www.python-httpx.org/async/",
        "note": "async client usage"
      },
      {
        "type": "Reference",
        "title": "Lynn Root — asyncio: We Did It Wrong",
        "url": "https://www.roguelynn.com/words/asyncio-we-did-it-wrong/",
        "note": "common mistakes"
      },
      {
        "type": "Book",
        "title": "Fluent Python Ch. 21 (Asynchronous Programming)"
      },
      {
        "type": "Video",
        "title": "mCoding — Asyncio Complete Tutorial",
        "url": "https://www.youtube.com/watch?v=Qb9s3UiMSTA",
        "note": "(15 min)"
      }
    ],
    "miniExercises": [
      "Write a coroutine that simulates slow I/O with asyncio.sleep — run 10 concurrently vs sequentially and time them",
      "Implement retry logic with exponential backoff in an async function",
      "Build an async file reader that processes lines from multiple files simultaneously"
    ],
    "projectBlocks": [
      {
        "title": "Python (100% this week)",
        "html": "<p><strong>Project: Async URL Scraper</strong> Build a CLI tool that:</p><ol><li>Reads a list of URLs from a file</li><li>Fetches all pages concurrently with <code>httpx.AsyncClient</code></li><li>Extracts page titles using <code>BeautifulSoup</code></li><li>Limits concurrency to N simultaneous requests via <code>Semaphore</code></li><li>Outputs results as JSON with timing stats per URL</li></ol>"
      },
      {
        "title": "Go (Optional intro)",
        "html": "<ul><li>Install Go, write &quot;Hello World&quot;, understand <code>go mod init</code></li><li>Complete <a href=\"https://gobyexample.com/\" target=\"_blank\" rel=\"noreferrer\">Go by Example</a> first 10 exercises</li><li>📖 <em>The Go Programming Language</em> Ch. 1-2</li></ul>"
      }
    ],
    "leetcodeContext": "These warm up hashmap thinking useful for URL deduplication",
    "systemDesignHtml": "<ul><li>📖 Read <em>System Design Interview Vol 1</em> Ch. 1 — Scale from Zero to Millions</li><li>Think about: How would you design a web crawler?</li></ul>",
    "deliverables": [
      "Working async scraper that fetches 50+ URLs concurrently",
      "Benchmark: async vs sync timing comparison (include in README)",
      "Blog post: \"Python asyncio — What Actually Happens Under the Hood\"",
      "3 LeetCode solutions committed to a leetcode/ repo"
    ]
  },
  "2": {
    "topics": [
      "Pydantic v2: BaseModel , Field , validators ( @field_validator , @model_validator )",
      "model_dump() , model_validate() , JSON schema generation",
      "Discriminated unions, generic models",
      "Settings management with pydantic-settings",
      "Custom types and serializers"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Pydantic v2 docs",
        "url": "https://docs.pydantic.dev/latest/",
        "note": "official, excellent"
      },
      {
        "type": "Reference",
        "title": "Samuel Colvin — Pydantic v2 Plan",
        "url": "https://docs.pydantic.dev/latest/blog/pydantic-v2-plan/",
        "note": "design decisions"
      },
      {
        "type": "Reference",
        "title": "ArjanCodes — Pydantic v2 blog post",
        "url": "https://www.arjancodes.com/blog/python-pydantic-v2/",
        "note": "practical examples"
      },
      {
        "type": "Book",
        "title": "Fluent Python Ch. 5 (Data Class Builders) — context on Python's data class ecosystem"
      },
      {
        "type": "Video",
        "title": "ArjanCodes — Pydantic V2 Tutorial",
        "url": "https://www.youtube.com/watch?v=502XOB0u8OY",
        "note": "(25 min)"
      }
    ],
    "miniExercises": [
      "Model a complex nested API response (e.g., GitHub API repo response) with Pydantic",
      "Write custom validators for email, phone number, and URL fields",
      "Build a discriminated union for different event types (user_signup, purchase, page_view)",
      "Create a generic PaginatedResponse[T] model"
    ],
    "projectBlocks": [
      {
        "title": "Python (100% this week)",
        "html": "<p><strong>Project: API Data Validator &amp; Transformer</strong> Build a data pipeline tool that:</p><ol><li>Reads messy JSON/CSV data from multiple sources</li><li>Validates and transforms using Pydantic models</li><li>Reports validation errors with clear messages</li><li>Outputs clean, typed data as JSON or writes to SQLite</li><li>Includes a config system using <code>pydantic-settings</code> with <code>.env</code> support</li></ol>"
      },
      {
        "title": "Go (Optional)",
        "html": "<ul><li>Go structs and JSON tags — <code>encoding/json</code></li><li>Compare Go&#39;s struct-based validation to Pydantic</li><li>📝 <a href=\"https://gobyexample.com/json\" target=\"_blank\" rel=\"noreferrer\">Go by Example — JSON</a></li></ul>"
      }
    ],
    "leetcodeContext": "Data structure manipulation mirrors data validation logic",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 2 — Back-of-the-envelope Estimation</li><li>Practice: Estimate storage for 1M users sending 10 messages/day</li></ul>",
    "deliverables": [
      "Data validator handling 3+ different input formats",
      "Pydantic settings config with .env file support",
      "Blog post: \"Pydantic v2 — The Best Thing in Python You're Not Using Enough\"",
      "3 LeetCode solutions"
    ]
  },
  "3": {
    "topics": [
      "Decorators: function decorators, class decorators, functools.wraps",
      "Decorator factories (decorators with arguments)",
      "Generators and yield , yield from , generator expressions",
      "Context managers ( __enter__/__exit__ , @contextmanager )",
      "itertools and functools deep dive"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Real Python — Primer on Python Decorators",
        "url": "https://realpython.com/primer-on-python-decorators/",
        "note": "definitive guide"
      },
      {
        "type": "Reference",
        "title": "Real Python — Introduction to Python Generators",
        "url": "https://realpython.com/introduction-to-python-generators/"
      },
      {
        "type": "Reference",
        "title": "Trey Hunner — Decorators by Trey Hunner",
        "url": "https://treyhunner.com/2019/12/python-decorators/",
        "note": "excellent mental model"
      },
      {
        "type": "Book",
        "title": "Fluent Python Ch. 9 (Decorators and Closures), Ch. 17 (Iterators, Generators)"
      },
      {
        "type": "Video",
        "title": "mCoding — Decorators in 12 Minutes",
        "url": "https://www.youtube.com/watch?v=QH5fw9kxDQA"
      }
    ],
    "miniExercises": [
      "@retry(max_attempts=3, backoff=2) — decorator with arguments",
      "@cache(ttl=60) — time-based LRU cache decorator",
      "@validate_types — decorator that checks function argument types at runtime",
      "Generator that reads a 1GB+ file in chunks without loading it all into memory",
      "Context manager for database transactions (commit on success, rollback on error)"
    ],
    "projectBlocks": [
      {
        "title": "Python (100% this week)",
        "html": "<p><strong>Project: Middleware &amp; Plugin System</strong> Build a mini web framework middleware system:</p><ol><li>Decorator-based route registration (<code>@app.route(&amp;quot;/path&amp;quot;)</code>)</li><li>Middleware chain using decorators (logging, timing, auth check)</li><li>Streaming response using generators</li><li>Resource cleanup with context managers</li><li>Plugin system where decorators register handlers dynamically</li></ol>"
      },
      {
        "title": "Go (Optional)",
        "html": "<ul><li>Go doesn&#39;t have decorators — learn the middleware pattern instead</li><li><code>func(http.Handler) http.Handler</code> pattern</li><li>📝 <a href=\"https://www.alexedwards.net/blog/making-and-using-middleware\" target=\"_blank\" rel=\"noreferrer\">Go middleware patterns</a></li></ul>"
      }
    ],
    "leetcodeContext": "Recursion and stack patterns connect to decorator chaining",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 3 — A Framework for System Design</li><li>Practice: Design a URL shortener (classic entry-level design)</li></ul>",
    "deliverables": [
      "Working middleware system with at least 4 middleware decorators",
      "Streaming file processor using generators (handle 500MB+ file)",
      "Blog post: \"Python Decorators — From Confusion to Mastery\"",
      "3 LeetCode solutions"
    ]
  },
  "4": {
    "topics": [
      "FastAPI: path/query params, request bodies, response models",
      "Dependency injection system ( Depends() )",
      "Background tasks, middleware, exception handlers",
      "StreamingResponse and Server-Sent Events (SSE)",
      "Authentication: OAuth2, JWT tokens",
      "OpenAPI auto-documentation"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "FastAPI Official Tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "note": "gold standard docs"
      },
      {
        "type": "Reference",
        "title": "TestDriven.io — Developing APIs with FastAPI",
        "url": "https://testdriven.io/blog/fastapi-crud/",
        "note": "practical CRUD guide"
      },
      {
        "type": "Reference",
        "title": "Real Python — FastAPI introduction",
        "url": "https://realpython.com/fastapi-python-web-apis/"
      },
      {
        "type": "Reference",
        "title": "Christoph Scheinine — SSE with FastAPI",
        "url": "https://devblog.christoph-scheine.at/posts/server-sent-events-with-fastapi/",
        "note": "streaming patterns"
      },
      {
        "type": "Book",
        "title": "Fluent Python Ch. 21 — revisit async in context of web servers"
      },
      {
        "type": "Video",
        "title": "Patrick Loeber — FastAPI Full Course",
        "url": "https://www.youtube.com/watch?v=0sOvCWFmrtA",
        "note": "(1hr)"
      }
    ],
    "miniExercises": [
      "Build CRUD API for a \"notes\" app with SQLite + async SQLAlchemy",
      "Implement JWT authentication from scratch (no third-party auth lib)",
      "Create a file upload endpoint with progress tracking",
      "WebSocket echo server with connection management",
      "Write pytest async tests using httpx.AsyncClient"
    ],
    "projectBlocks": [
      {
        "title": "Python (85%)",
        "html": "<p><strong>Project: Streaming AI Chat API</strong> Build a FastAPI service that:</p><ol><li>Accepts chat messages and streams responses via SSE</li><li>Uses dependency injection for auth and rate limiting</li><li>Has Pydantic models for all request/response schemas (Week 2 skills)</li><li>Background tasks for logging conversations</li><li>Middleware for request timing and CORS</li><li>Full OpenAPI docs with examples</li></ol>"
      },
      {
        "title": "Go (15% — Optional)",
        "html": "<ul><li>Build the same notes CRUD API in Go with <code>net/http</code> and <code>encoding/json</code></li><li>Compare: Lines of code, type safety, startup time</li><li>📝 <a href=\"https://gowebexamples.com/\" target=\"_blank\" rel=\"noreferrer\">Go Web Examples</a> — clean intro</li><li>📝 <a href=\"https://lets-go.alexedwards.net/\" target=\"_blank\" rel=\"noreferrer\">Alex Edwards — Let&amp;#39;s Go</a> (book, excellent)</li></ul>"
      }
    ],
    "leetcodeContext": "LRU Cache is literally an API design pattern",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 4 — Design a Rate Limiter</li><li><strong>Connect to project:</strong> Implement the rate limiter you just read about as FastAPI middleware</li></ul>",
    "deliverables": [
      "Streaming chat API with auth, rate limiting, and full OpenAPI docs",
      "Async test suite with >80% coverage",
      "Blog post: \"Building Production APIs with FastAPI — Beyond the Tutorial\"",
      "3 LeetCode solutions",
      "Rate limiter middleware (token bucket or sliding window)"
    ]
  },
  "5": {
    "topics": [
      "Transformer architecture (conceptual — attention, self-attention, multi-head attention)",
      "Tokenization: BPE, WordPiece, SentencePiece",
      "tiktoken library for OpenAI token counting",
      "Token economics: cost estimation per model",
      "Prompt engineering basics: system prompts, few-shot, chain-of-thought"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Andrej Karpathy — Let's build the GPT Tokenizer",
        "url": "https://www.youtube.com/watch?v=zduSFxRajkE",
        "note": "essential watch"
      },
      {
        "type": "Reference",
        "title": "Jay Alammar — The Illustrated Transformer",
        "url": "https://jalammar.github.io/illustrated-transformer/",
        "note": "THE visual guide"
      },
      {
        "type": "Reference",
        "title": "Jay Alammar — The Illustrated GPT-2",
        "url": "https://jalammar.github.io/illustrated-gpt2/"
      },
      {
        "type": "Reference",
        "title": "Lilian Weng — Attention? Attention!",
        "url": "https://lilianweng.github.io/posts/2018-06-24-attention/"
      },
      {
        "type": "Reference",
        "title": "OpenAI Tokenizer",
        "url": "https://platform.openai.com/tokenizer",
        "note": "interactive tool"
      },
      {
        "type": "Reference",
        "title": "Chip Huyen — Building LLM applications for production",
        "url": "https://huyenchip.com/2023/04/11/llm-engineering.html"
      },
      {
        "type": "Book",
        "title": "Hands-On Large Language Models Ch. 1-3"
      },
      {
        "type": "Video",
        "title": "Andrej Karpathy — Let's build GPT",
        "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
        "note": "2hr masterclass (weekend)"
      },
      {
        "type": "Video",
        "title": "3Blue1Brown — But what is a GPT?",
        "url": "https://www.youtube.com/watch?v=wjZofJX0v4M",
        "note": "visual intuition"
      }
    ],
    "miniExercises": [
      "Implement a simple character-level tokenizer from scratch",
      "Implement basic BPE algorithm (just the merge step, ~50 lines)",
      "Build a \"token budget\" calculator for conversation context windows",
      "Visualize attention patterns using bertviz on a sample sentence"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: Tokenizer Explorer &amp; Cost Calculator</strong> Build a CLI/web tool that:</p><ol><li>Takes text input and shows tokenization across different models (GPT-4, Claude, Llama)</li><li>Visualizes token boundaries with color coding</li><li>Estimates API cost for different providers</li><li>Compares tokenizer efficiency across languages (English vs Chinese vs code)</li><li>Includes a prompt template library with token count estimates</li></ol><p><strong>Project: Prompt Engineering Workbench</strong> Build a notebook/CLI that:</p><ol><li>Tests the same prompt across different prompt engineering techniques</li><li>Compares: zero-shot, few-shot, chain-of-thought, self-consistency</li><li>Logs results with token counts and latency</li><li>Outputs a comparison table</li></ol>"
      }
    ],
    "leetcodeContext": "String/window problems mirror tokenization and context window concepts",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 5 — Design Consistent Hashing</li><li>Think about: How would you distribute LLM inference across multiple GPUs?</li></ul>",
    "deliverables": [
      "Token explorer tool with multi-model comparison",
      "BPE algorithm implementation from scratch (~50-100 lines)",
      "Prompt engineering comparison notebook with results table",
      "Blog post: \"What Happens Before the LLM Sees Your Text — Tokenization Explained\"",
      "3 LeetCode solutions"
    ]
  },
  "6": {
    "topics": [
      "Sampling: temperature, top-k, top-p (nucleus sampling)",
      "Logits, softmax, probability distributions",
      "Attention weight visualization",
      "KV Cache concept",
      "Beam search vs greedy vs sampling"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Lilian Weng — Controllable Neural Text Generation",
        "url": "https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/",
        "note": "sampling deep dive"
      },
      {
        "type": "Reference",
        "title": "HuggingFace — How to Generate Text",
        "url": "https://huggingface.co/blog/how-to-generate",
        "note": "excellent practical guide"
      },
      {
        "type": "Reference",
        "title": "Jay Alammar — Visualizing A Neural Machine Translation Model",
        "url": "https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/"
      },
      {
        "type": "Reference",
        "title": "The Illustrated Stable Diffusion",
        "url": "https://jalammar.github.io/illustrated-stable-diffusion/",
        "note": "optional, but great"
      },
      {
        "type": "Book",
        "title": "Hands-On Large Language Models Ch. 4-5"
      },
      {
        "type": "Video",
        "title": "Andrej Karpathy — Let's build GPT",
        "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
        "note": "rewatch with new understanding"
      }
    ],
    "miniExercises": [
      "Implement greedy decoding from scratch (10 lines with HuggingFace model)",
      "Implement top-k sampling from scratch",
      "Implement nucleus (top-p) sampling from scratch",
      "Compare output quality: greedy vs temperature=0.7 vs temperature=1.2"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: Temperature &amp; Sampling Playground</strong> Build an interactive tool that:</p><ol><li>Loads a small model (GPT-2 or DistilGPT-2 via HuggingFace)</li><li>Lets user adjust temperature, top-k, top-p in real-time</li><li>Shows the probability distribution over next tokens</li><li>Visualizes how sampling parameters affect output diversity</li><li>Side-by-side generation comparison with different settings</li></ol><p><strong>Project: Attention Visualizer</strong></p><ol><li>Load a BERT/GPT-2 model</li><li>Input a sentence, extract attention weights</li><li>Visualize attention heads as heatmaps</li><li>Show which tokens attend to which (using <code>bertviz</code> or matplotlib)</li></ol>"
      }
    ],
    "leetcodeContext": "Top-k and greedy patterns directly mirror sampling algorithms",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 6 — Design a Key-Value Store</li><li><strong>Connect:</strong> KV stores = KV cache in transformers (conceptual bridge)</li></ul>",
    "deliverableBlocks": [
      {
        "title": "Review & Consolidation (Weekend)",
        "html": "<ul><li>Refactor all projects from Weeks 1-5</li><li>Write tests for any untested code</li><li>Create an architecture diagram connecting all your projects</li><li>Update your blog with a &quot;Month 1 Retrospective&quot;</li></ul>"
      }
    ],
    "deliverables": [
      "Sampling playground with interactive controls",
      "Attention visualizer with heatmap output",
      "All 5 previous weeks' projects refactored and documented",
      "Blog post: \"Sampling in LLMs — Temperature is Not What You Think\"",
      "3 LeetCode solutions",
      "Month 1 retrospective blog post"
    ]
  },
  "7": {
    "topics": [
      "HuggingFace transformers library: pipeline() , AutoModel , AutoTokenizer",
      "Task types: text classification, NER, summarization, question answering",
      "Model Hub: finding, loading, comparing models",
      "datasets library for loading and preprocessing data",
      "Fine-tuning with Trainer API (intro)"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "HuggingFace Course — NLP",
        "url": "https://huggingface.co/learn/nlp-course/",
        "note": "official, free, excellent (Ch 1-3)"
      },
      {
        "type": "Reference",
        "title": "Jay Alammar — A Visual Guide to Using BERT",
        "url": "https://jalammar.github.io/a-visual-guide-to-using-bert-for-the-first-time/"
      },
      {
        "type": "Reference",
        "title": "HuggingFace Docs — Pipelines",
        "url": "https://huggingface.co/docs/transformers/main_classes/pipelines"
      },
      {
        "type": "Reference",
        "title": "Lilian Weng — Large Language Model Table",
        "url": "https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/"
      },
      {
        "type": "Book",
        "title": "Hands-On Large Language Models Ch. 6-7"
      },
      {
        "type": "Video",
        "title": "HuggingFace — Getting Started with Transformers",
        "url": "https://www.youtube.com/watch?v=QEaBAZQCtwE",
        "note": "(30 min)"
      }
    ],
    "miniExercises": [
      "Compare inference speed: distilbert vs bert-base vs bert-large",
      "Implement batched inference for 1000 texts — measure throughput",
      "Use datasets.map() with multiprocessing for data preprocessing",
      "Build a model card template for your fine-tuned model"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: Multi-Task NLP CLI</strong> Build a CLI that:</p><ol><li>Accepts text input and a task flag (<code>--classify</code>, <code>--summarize</code>, <code>--ner</code>, <code>--qa</code>)</li><li>Runs the appropriate HuggingFace pipeline</li><li>Compares results across 2-3 models per task</li><li>Outputs structured results with confidence scores</li><li>Caches downloaded models locally</li></ol><p><strong>Project: Sentiment Analysis Fine-tuner</strong></p><ol><li>Load the IMDb dataset via <code>datasets</code></li><li>Fine-tune <code>distilbert-base-uncased</code> for sentiment classification</li><li>Evaluate on test set, log metrics (accuracy, F1)</li><li>Save model and push to HuggingFace Hub (optional)</li><li>Build a simple FastAPI endpoint to serve the fine-tuned model</li></ol>"
      }
    ],
    "leetcodeContext": "Tree/graph patterns mirror model architecture inspection",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 1 — Reliable, Scalable, and Maintainable Applications</li><li>Design exercise: How would you build a model serving platform?</li></ul>",
    "deliverables": [
      "Multi-task NLP CLI working with 3+ HuggingFace pipelines",
      "Fine-tuned sentiment model with evaluation metrics logged",
      "FastAPI endpoint serving the fine-tuned model",
      "Blog post: \"HuggingFace Transformers — Your First Fine-Tuned Model\"",
      "3 LeetCode solutions"
    ]
  },
  "8": {
    "topics": [
      "Text embeddings: what they are, why they matter",
      "sentence-transformers library",
      "Cosine similarity, dot product, Euclidean distance",
      "Vector databases: FAISS (local), chromadb, pgvector (Postgres)",
      "Embedding model selection: trade-offs (speed vs quality vs dimensions)"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Pinecone — What are Vector Embeddings?",
        "url": "https://www.pinecone.io/learn/vector-embeddings/",
        "note": "best intro"
      },
      {
        "type": "Reference",
        "title": "Simon Willison — Embeddings: What they are and why they matter",
        "url": "https://simonwillison.net/2023/Oct/23/embeddings/"
      },
      {
        "type": "Reference",
        "title": "Sentence-Transformers docs",
        "url": "https://www.sbert.net/",
        "note": "official library"
      },
      {
        "type": "Reference",
        "title": "James Briggs — FAISS: The Missing Manual",
        "url": "https://www.pinecone.io/learn/series/faiss/",
        "note": "FAISS deep dive"
      },
      {
        "type": "Reference",
        "title": "Vicki Boykis — What are embeddings?",
        "url": "https://vickiboykis.com/what_are_embeddings/",
        "note": "free e-book, thorough"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 3 — Storage and Retrieval (LSM trees, B-trees — foundational for vector DB internals)"
      },
      {
        "type": "Video",
        "title": "Computerphile — Word Embeddings",
        "url": "https://www.youtube.com/watch?v=gQddtTdmG_8",
        "note": "(15 min)"
      }
    ],
    "miniExercises": [
      "Compare embeddings from 3 different models on the same text",
      "Visualize embeddings in 2D using t-SNE or UMAP",
      "Build a duplicate document detector using embedding similarity",
      "Benchmark FAISS indexing speed vs chromadb for 100k documents"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: Semantic Search Engine</strong> Build a local search system that:</p><ol><li>Loads a corpus (Wikipedia articles, markdown docs, or your own notes)</li><li>Generates embeddings using <code>sentence-transformers</code></li><li>Stores in FAISS index (or chromadb)</li><li>Accepts natural language queries</li><li>Returns top-k results with similarity scores</li><li>Includes a simple Streamlit or CLI frontend</li></ol><p><strong>Project: Code Search Tool</strong></p><ol><li>Index a codebase by embedding function docstrings/comments</li><li>Search for functionality in natural language (&quot;function that validates emails&quot;)</li><li>Return matching code snippets with file locations</li></ol>"
      },
      {
        "title": "Go (Optional)",
        "html": "<ul><li>Build a simple REST API that wraps your Python search engine</li><li>Serve as a Go gateway → Python inference backend</li><li>📝 <a href=\"https://www.alexedwards.net/blog/a-recap-of-request-handling\" target=\"_blank\" rel=\"noreferrer\">Go net/http patterns</a></li></ul>"
      }
    ],
    "leetcodeContext": "Distance/similarity calculations directly relate to vector search",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 3 — Storage and Retrieval</li><li>Design exercise: How would you design a search engine for 10M documents?</li></ul>",
    "deliverables": [
      "Semantic search engine indexing 1000+ documents",
      "Code search tool for a real codebase",
      "Embedding visualization (t-SNE plot)",
      "Blog post: \"Building Semantic Search from Scratch with Python\"",
      "3 LeetCode solutions"
    ]
  },
  "9": {
    "topics": [
      "Why full fine-tuning is expensive (parameter count, VRAM)",
      "LoRA: Low-Rank Adaptation — theory and practice",
      "QLoRA: quantized LoRA for consumer GPUs",
      "PEFT library: LoraConfig , get_peft_model , adapter merging",
      "bitsandbytes for quantization (4-bit, 8-bit)",
      "Dataset preparation for instruction tuning"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "HuggingFace PEFT docs",
        "url": "https://huggingface.co/docs/peft/",
        "note": "official"
      },
      {
        "type": "Reference",
        "title": "Sebastian Raschka — Practical Tips for Fine-tuning LLMs Using LoRA",
        "url": "https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms",
        "note": "excellent practical guide"
      },
      {
        "type": "Reference",
        "title": "Lightning AI — LoRA from Scratch",
        "url": "https://lightning.ai/pages/community/lora-insights/",
        "note": "implementation deep dive"
      },
      {
        "type": "Reference",
        "title": "Tim Dettmers — QLoRA blog",
        "url": "https://huggingface.co/blog/4bit-transformers-bitsandbytes",
        "note": "quantization intuition"
      },
      {
        "type": "Reference",
        "title": "Lilian Weng — Large Transformer Model Inference Optimization",
        "url": "https://lilianweng.github.io/posts/2023-01-10-inference-optimization/"
      },
      {
        "type": "Book",
        "title": "LoRA paper: arXiv:2106.09685",
        "url": "https://arxiv.org/abs/2106.09685",
        "note": "read the first 5 pages"
      },
      {
        "type": "Video",
        "title": "Umar Jamil — LoRA Explained",
        "url": "https://www.youtube.com/watch?v=PXWYUTMt-AU",
        "note": "(30 min)"
      }
    ],
    "miniExercises": [
      "Calculate: How many parameters does LoRA add for rank=8 vs rank=32?",
      "Experiment with different target_modules — what happens when you only adapt attention vs all linear?",
      "Compare training time: full fine-tune vs LoRA (on a small model)",
      "Merge LoRA adapters back into base model and verify outputs match",
      "Try different quantization levels (4-bit vs 8-bit) and compare output quality"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: LoRA Fine-tune a Small LLM</strong></p><ol><li>Load a small model (Phi-2, TinyLlama, or Mistral-7B if GPU available)</li><li>Prepare instruction-following dataset (Alpaca format)</li><li>Configure LoRA adapters (rank, alpha, target modules)</li><li>Fine-tune with <code>Trainer</code> or <code>SFTTrainer</code> from <code>trl</code></li><li>Evaluate: compare base model vs fine-tuned on test prompts</li><li>Save adapter weights (show they&#39;re tiny vs full model)</li></ol>"
      }
    ],
    "leetcodeContext": "Matrix operations are the literal foundation of LoRA",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 4 — Encoding and Evolution</li><li>Design exercise: How would you design a fine-tuning-as-a-service platform?</li></ul>",
    "deliverables": [
      "LoRA fine-tuned model with before/after comparison",
      "Parameter count analysis document (full vs LoRA)",
      "Blog post: \"LoRA Demystified — Fine-tuning LLMs on a Laptop\"",
      "3 LeetCode solutions"
    ]
  },
  "10": {
    "topics": [
      "OpenAI Python SDK: chat.completions.create()",
      "Streaming responses: stream=True , async streaming",
      "Function/tool calling: defining tools, handling tool calls",
      "Conversation management: message history, token budgets",
      "Vision API: image inputs",
      "Structured outputs with response_format"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "OpenAI API Docs — Chat Completions",
        "url": "https://platform.openai.com/docs/guides/chat-completions",
        "note": "official reference"
      },
      {
        "type": "Reference",
        "title": "OpenAI API Docs — Function Calling",
        "url": "https://platform.openai.com/docs/guides/function-calling"
      },
      {
        "type": "Reference",
        "title": "Simon Willison — Understanding Tool Calling",
        "url": "https://simonwillison.net/2024/Oct/25/tool-calling/",
        "note": "excellent mental model"
      },
      {
        "type": "Reference",
        "title": "Chip Huyen — Building LLM Apps",
        "url": "https://huyenchip.com/2023/04/11/llm-engineering.html",
        "note": "production patterns"
      },
      {
        "type": "Reference",
        "title": "Hamel's Blog — Structured Outputs",
        "url": "https://hamel.dev/blog/posts/structured/",
        "note": "when to use JSON mode"
      },
      {
        "type": "Video",
        "title": "OpenAI DevDay Talks",
        "url": "https://www.youtube.com/playlist?list=PLOXw6I10VTv_FhQqFiyGAlYErmI_ByLvE"
      }
    ],
    "miniExercises": [
      "Implement automatic conversation summarization when context window fills up",
      "Build a retry wrapper with exponential backoff for rate limit errors",
      "Compare streaming vs non-streaming latency for different response lengths",
      "Implement parallel tool calls (multiple tools called simultaneously)",
      "Build a simple \"router\" that picks the best model (GPT-3.5 vs GPT-4) based on query complexity"
    ],
    "projectBlocks": [
      {
        "title": "Python (90%)",
        "html": "<p><strong>Project: Streaming Chat CLI with Tool Calling</strong> Build a terminal chat application that:</p><ol><li>Maintains conversation history with automatic context window management</li><li>Streams responses token-by-token to the terminal</li><li>Has 3+ callable tools (calculator, web search via API, file reader)</li><li>Handles multi-step tool call chains (LLM calls tool → processes result → calls another tool)</li><li>Token counting and cost tracking per conversation</li><li>Save/load conversation history</li></ol><p><strong>Project: AI Code Review Bot</strong></p><ol><li>Accepts a PR diff (or file diff)</li><li>Sends to OpenAI with a structured review prompt</li><li>Returns structured feedback using <code>response_format</code> (JSON mode)</li><li>Categories: bugs, style, security, performance</li><li>Estimates severity for each finding</li></ol>"
      },
      {
        "title": "Go (10% — Optional)",
        "html": "<ul><li>Call OpenAI API from Go using <code>net/http</code> (raw JSON, no SDK)</li><li>Compare the Go vs Python developer experience</li><li>📝 <a href=\"https://github.com/sashabaranov/go-openai\" target=\"_blank\" rel=\"noreferrer\">sashabaranov/go-openai</a> — Go OpenAI client</li></ul>"
      }
    ],
    "leetcodeContext": "Data structure design patterns mirror API design patterns",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 1</em> Ch. 12 — Design a Chat System</li><li><strong>Connect:</strong> Your streaming chat CLI IS a chat system — what would it take to make it multi-user?</li></ul>",
    "deliverables": [
      "Streaming chat CLI with 3+ working tools",
      "AI code review bot with structured JSON output",
      "Token usage tracker showing cost per conversation",
      "Blog post: \"Building an AI Agent with Tool Calling — A Practical Guide\"",
      "3 LeetCode solutions"
    ]
  },
  "11": {
    "topics": [
      "vLLM installation, architecture, and concepts",
      "Continuous batching vs static batching",
      "PagedAttention — why it matters",
      "OpenAI-compatible API server",
      "Throughput vs latency trade-offs",
      "GPU memory management basics (VRAM allocation)"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "vLLM Docs",
        "url": "https://docs.vllm.ai/",
        "note": "official documentation"
      },
      {
        "type": "Reference",
        "title": "vLLM Blog — PagedAttention",
        "url": "https://blog.vllm.ai/2023/06/20/vllm.html",
        "note": "foundational paper blog"
      },
      {
        "type": "Reference",
        "title": "Anyscale — Continuous Batching",
        "url": "https://www.anyscale.com/blog/continuous-batching-llm-inference",
        "note": "why batching matters"
      },
      {
        "type": "Reference",
        "title": "MLC LLM — How Machine Learning Compilers Optimize Inference",
        "url": "https://mlc.ai/chapter_introduction/"
      },
      {
        "type": "Reference",
        "title": "Lilian Weng — Large Transformer Model Inference Optimization",
        "url": "https://lilianweng.github.io/posts/2023-01-10-inference-optimization/",
        "note": "comprehensive"
      },
      {
        "type": "Book",
        "title": "High Performance Python Ch. 1-3 — profiling and understanding bottlenecks"
      },
      {
        "type": "Video",
        "title": "vLLM talk at Ray Summit",
        "url": "https://www.youtube.com/watch?v=80bIUggRJf4",
        "note": "(30 min)"
      }
    ],
    "miniExercises": [
      "Deploy vLLM with --quantization awq and compare speed vs quality",
      "Measure TTFT for different prompt lengths (100, 500, 1000, 4000 tokens)",
      "Test streaming output vs non-streaming from the vLLM server",
      "Monitor GPU memory usage during inference using nvidia-smi or gputil"
    ],
    "projectBlocks": [
      {
        "title": "Python (90%)",
        "html": "<p><strong>Project: vLLM Benchmarking Suite</strong> Build a benchmarking tool that:</p><ol><li>Deploys a model via vLLM (Mistral-7B, Llama-2-7B, or Phi-2)</li><li>Sends concurrent requests at different rates (1, 10, 50, 100 RPS)</li><li>Measures: TTFT, tokens/sec, total latency, throughput</li><li>Plots latency distribution (p50, p90, p99)</li><li>Compares vLLM vs HuggingFace <code>generate()</code> directly</li></ol><p><strong>Project: Multi-Model Inference Server</strong></p><ol><li>Serve 2+ models via vLLM on different ports</li><li>Build a FastAPI router that selects the best model based on request type</li><li>Implement health checks and model warm-up</li><li>Log inference metrics to a JSON file</li></ol>"
      },
      {
        "title": "Go (10% — Recommended)",
        "html": "<ul><li>Build a health check service that monitors your vLLM instances</li><li>Implement <code>/health</code>, <code>/ready</code>, and graceful shutdown (<code>SIGTERM</code> handling)</li><li>📝 <a href=\"https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/\" target=\"_blank\" rel=\"noreferrer\">Mat Ryer — How I write HTTP services in Go</a> — excellent patterns</li></ul>"
      }
    ],
    "leetcodeContext": "Queue and window patterns mirror inference batching concepts",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 5 — Replication</li><li>Design exercise: How would you design an LLM inference platform for 10K concurrent users?</li></ul>",
    "deliverables": [
      "Benchmarking suite with plots (latency distribution, throughput curves)",
      "Multi-model inference server with auto-routing",
      "Blog post: \"vLLM — Why It's 10x Faster Than Naive Inference\"",
      "3 LeetCode solutions"
    ]
  },
  "12": {
    "topics": [
      "Quantization methods: INT8, INT4, GPTQ, AWQ, GGUF",
      "bitsandbytes , auto-gptq , llama.cpp / llama-cpp-python",
      "Quantization quality vs speed benchmarks",
      "Dynamic vs static batching strategies",
      "Speculative decoding (intro)",
      "Model sharding and tensor parallelism concepts"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "HuggingFace — Quantization Overview",
        "url": "https://huggingface.co/docs/transformers/main/en/quantization/overview",
        "note": "comparison table"
      },
      {
        "type": "Reference",
        "title": "Tim Dettmers — The case for 4-bit precision",
        "url": "https://timdettmers.com/2022/08/15/memory-in-deep-learning/",
        "note": "foundational"
      },
      {
        "type": "Reference",
        "title": "TheBloke's Quantization Guide",
        "url": "https://huggingface.co/TheBloke",
        "note": "practical GGUF/GPTQ usage"
      },
      {
        "type": "Reference",
        "title": "MIT Han Lab — AWQ Paper Blog",
        "url": "https://hanlab.mit.edu/projects/awq",
        "note": "efficient quantization"
      },
      {
        "type": "Book",
        "title": "High Performance Python Ch. 6-7 — matrices and memory"
      },
      {
        "type": "Video",
        "title": "Efficient ML Course MIT",
        "url": "https://www.youtube.com/watch?v=rCFvPEQTxKI",
        "note": "Song Han lecture (1hr)"
      }
    ],
    "miniExercises": [
      "Quantize a model with GPTQ and evaluate on 100 test prompts vs original",
      "Run llama-cpp-python and compare with vLLM for single-user latency",
      "Profile memory usage during inference with memory_profiler",
      "Implement a simple token throughput counter (tokens/sec display during streaming)"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: Quantization Comparison Lab</strong> Build a comprehensive benchmark that:</p><ol><li>Loads the same model in FP16, INT8, INT4 (GPTQ), INT4 (AWQ)</li><li>Measures: inference speed, memory usage, output quality (perplexity)</li><li>Runs the same test prompts across all variants</li><li>Creates comparison charts (speed vs quality vs memory)</li><li>Tests with <code>llama-cpp-python</code> for GGUF format comparison</li></ol><p><strong>Project: Batching Optimizer</strong></p><ol><li>Simulate concurrent requests arriving at different rates</li><li>Implement simple static batching (wait for N requests)</li><li>Implement timeout-based batching (wait max T seconds)</li><li>Compare throughput at different batch sizes</li><li>Visualize the throughput vs latency trade-off</li></ol>"
      }
    ],
    "leetcodeContext": "Optimization problems mirror quantization trade-off analysis",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 6 — Partitioning</li><li>Design exercise: How would you shard a 70B model across multiple GPUs?</li></ul>",
    "deliverableBlocks": [
      {
        "title": "Review Checkpoint",
        "html": "<ul><li>Revisit Weeks 7-11 projects</li><li>Ensure all tests pass, docs are updated</li></ul>"
      }
    ],
    "deliverables": [
      "Quantization benchmark with comparison charts",
      "Batching simulator with throughput visualization",
      "Blog post: \"INT4 vs INT8 vs FP16 — A Practical Guide to LLM Quantization\"",
      "3 LeetCode solutions"
    ]
  },
  "13": {
    "topics": [
      "TTFT (Time to First Token) vs TPS (Tokens per Second) vs Total Latency",
      "Prompt caching: prefix caching, semantic caching",
      "KV-cache optimization and memory management",
      "Inference profiling and bottleneck identification",
      "Redis for response caching",
      "Prometheus metrics for inference monitoring"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Databricks — LLM Inference Performance Engineering",
        "url": "https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices",
        "note": "excellent production guide"
      },
      {
        "type": "Reference",
        "title": "Anthropic — Prompt Caching",
        "url": "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
        "note": "API-level caching patterns"
      },
      {
        "type": "Reference",
        "title": "GPTCache — Semantic Caching",
        "url": "https://github.com/zilliztech/GPTCache",
        "note": "open-source implementation reference"
      },
      {
        "type": "Reference",
        "title": "Brendan Gregg — Latency Numbers Every Programmer Should Know",
        "url": "https://gist.github.com/jboner/2841832",
        "note": "mandatory mental model"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 7 — Transactions (consistency in caching)"
      },
      {
        "type": "Video",
        "title": "Hussein Nasser — Caching Strategies",
        "url": "https://www.youtube.com/watch?v=ccemOqDrc2I",
        "note": "(20 min)"
      }
    ],
    "miniExercises": [
      "Build a prefix cache: if prompt starts with the same system prompt, reuse KV cache",
      "Measure how prompt length affects TTFT (create a scatter plot)",
      "Implement request coalescing: if same prompt arrives within 100ms, share the response",
      "Profile a vLLM server under load using py-spy or cProfile"
    ],
    "projectBlocks": [
      {
        "title": "Python (90%)",
        "html": "<p><strong>Project: TTFT Monitor &amp; Latency Dashboard</strong> Build a monitoring system that:</p><ol><li>Sends periodic test prompts to an inference server</li><li>Measures TTFT, inter-token latency, total time</li><li>Stores metrics in Redis or SQLite</li><li>Displays real-time dashboard (Streamlit or terminal-based)</li><li>Alerts when TTFT exceeds threshold</li></ol><p><strong>Project: Semantic Cache Layer</strong></p><ol><li>Before sending to LLM, check Redis for semantically similar past queries</li><li>Use embeddings (Week 8) to compute query similarity</li><li>If similarity &gt; threshold, return cached response</li><li>Track cache hit rate and latency savings</li><li>Implement cache invalidation strategies</li></ol>"
      },
      {
        "title": "Go (10% — Recommended for gRPC intro)",
        "html": "<ul><li>Build a gRPC mock inference service in Go</li><li>Define <code>.proto</code> file for an inference API (prompt in, tokens out)</li><li>Implement server with streaming response</li><li>📝 <a href=\"https://grpc.io/docs/languages/go/quickstart/\" target=\"_blank\" rel=\"noreferrer\">Go gRPC Quickstart</a></li></ul>"
      }
    ],
    "leetcodeContext": "Cache design and optimization patterns are this week's literal focus",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 7 — Transactions</li><li>Design exercise: Design a caching layer for an LLM inference system with cache invalidation</li></ul>",
    "deliverables": [
      "TTFT monitoring dashboard with alerting",
      "Semantic cache with measurable hit rate improvement",
      "Blog post: \"Caching LLM Responses — From Naive to Semantic\"",
      "3 LeetCode solutions"
    ]
  },
  "14": {
    "topics": [
      "Reverse proxy patterns for model serving",
      "Load balancing strategies: round-robin, least-connections, weighted",
      "Health checks and circuit breakers",
      "GPU memory estimation formulas",
      "Model routing based on request properties",
      "Request queuing and backpressure"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Cloudflare — What is a reverse proxy?",
        "url": "https://www.cloudflare.com/learning/cdn-glossary/reverse-proxy/",
        "note": "clear mental model"
      },
      {
        "type": "Reference",
        "title": "Microsoft — Circuit Breaker Pattern",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker",
        "note": "excellent writeup"
      },
      {
        "type": "Reference",
        "title": "Go net/http/httputil ReverseProxy",
        "url": "https://pkg.go.dev/net/http/httputil#ReverseProxy",
        "note": "Go standard library proxy"
      },
      {
        "type": "Reference",
        "title": "Alex Edwards — Let's Go Further",
        "url": "https://lets-go-further.alexedwards.net/",
        "note": "advanced Go web book"
      },
      {
        "type": "Reference",
        "title": "Subbarao Kambhampati — LLM Inference Cost Estimation",
        "url": "https://blog.eleuther.ai/transformer-math/",
        "note": "the GPU math"
      },
      {
        "type": "Book",
        "title": "The Go Programming Language Ch. 8 (Goroutines and Channels)"
      },
      {
        "type": "Video",
        "title": "Hussein Nasser — Proxy vs Reverse Proxy",
        "url": "https://www.youtube.com/watch?v=ozhe__GdWC8",
        "note": "(15 min)"
      }
    ],
    "miniExercises": [
      "Go: Implement a circuit breaker pattern with state machine (closed → open → half-open)",
      "Python: Build an async HTTP load tester ( asyncio + httpx ) that hits your gateway",
      "Compare: Go reverse proxy throughput vs Python reverse proxy throughput",
      "Calculate: VRAM needed to serve Llama-2-70B at batch_size=8, seq_len=4096"
    ],
    "projectBlocks": [
      {
        "title": "Python (50%) + Go (50% — Go recommended this week)",
        "html": "<p><strong>Project: Go Load Balancer for LLM Backends (Go)</strong> Build in Go:</p><ol><li>Reverse proxy that distributes requests across vLLM instances</li><li>Health check goroutine that pings backends every 5 seconds</li><li>Weighted round-robin based on backend GPU utilization</li><li>Circuit breaker: remove unhealthy backends, retry after 30s</li><li>Request metrics: latency per backend, error rates</li></ol><p><strong>Alternative Python project: Same load balancer in Python</strong></p><ul><li>Use <code>httpx</code> + <code>asyncio</code> for async proxying</li><li>FastAPI as the gateway</li><li>Compare performance with Go version if both built</li></ul><p><strong>Project: GPU Memory Calculator (Python)</strong> Build a tool that:</p><ol><li>Given model name + quantization level, estimates VRAM requirement</li><li>Formula: params × bytes_per_param × overhead_multiplier</li><li>Recommends: which GPU(s) can run this model</li><li>Factors in: KV cache memory at different sequence lengths + batch sizes</li></ol>"
      }
    ],
    "leetcodeContext": "Data structure design directly mirrors load balancer internals",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 8 — The Trouble with Distributed Systems</li><li>Design exercise: Design a model-serving gateway for 50K RPM with auto-scaling</li></ul>",
    "deliverables": [
      "Working load balancer (Go preferred, Python acceptable)",
      "GPU memory calculator with CLI interface",
      "Load test results comparing single vs load-balanced performance",
      "Blog post: \"Building an LLM Gateway — Go vs Python for Infrastructure\"",
      "3 LeetCode solutions"
    ]
  },
  "15": {
    "topics": [
      "PostgreSQL with asyncpg or SQLAlchemy async",
      "pgvector extension: installation, indexing, queries",
      "HNSW vs IVFFlat index types — trade-offs",
      "Connection pooling and query optimization",
      "Schema design for AI applications (embeddings + metadata)"
    ],
    "miniExercises": [
      "Compare pgvector query speed: HNSW vs IVFFlat at 10K, 100K, 1M vectors",
      "Implement hybrid search: WHERE category = 'tech' ORDER BY embedding query_embedding",
      "Build a migration script using alembic for schema evolution",
      "Benchmark: pgvector vs FAISS for the same dataset"
    ],
    "projectBlocks": [
      {
        "title": "Python (75%)",
        "html": "<p><strong>Project: RAG Document Store</strong> Build a document storage system:</p><ol><li>Postgres + pgvector for embedding storage</li><li>Ingest pipeline: PDF → chunks → embeddings → pgvector</li><li>Hybrid search: combine vector similarity with keyword filtering</li><li>Metadata filtering (by date, source, category)</li><li>API endpoints for CRUD + search</li></ol>"
      },
      {
        "title": "Go (25% — Recommended)",
        "html": "<ul><li>Go Postgres client with <code>pgx</code> library</li><li>Build the same CRUD API in Go</li><li>Implement connection pooling with <code>pgxpool</code></li><li>📝 <a href=\"https://github.com/jackc/pgx\" target=\"_blank\" rel=\"noreferrer\">jackc/pgx docs</a> — best Go Postgres driver</li><li>📖 <em>The Go Programming Language</em> Ch. 7 (Interfaces)</li></ul>"
      }
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Supabase — pgvector guide",
        "url": "https://supabase.com/docs/guides/ai",
        "note": "practical setup"
      },
      {
        "type": "Reference",
        "title": "Jonathan Katz — pgvector 0.5.0",
        "url": "https://jkatz05.com/post/postgres/pgvector-overview-0.5.0/",
        "note": "HNSW indexing"
      },
      {
        "type": "Reference",
        "title": "Timescale — PostgreSQL pgvector",
        "url": "https://www.timescale.com/blog/postgresql-as-a-vector-database-create-store-and-query-openai-embeddings-with-pgvector/",
        "note": "thorough"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 2 — Data Models and Query Languages"
      }
    ],
    "leetcodeContext": "Search algorithms mirror index-based retrieval in databases",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 2-3 — Data Models, Storage and Retrieval</li><li>Design exercise: Design a document store for 100M documents with semantic search</li></ul>",
    "deliverables": [
      "RAG document store with pgvector + hybrid search",
      "Migration scripts and schema documentation",
      "Benchmark: pgvector vs FAISS performance comparison",
      "Blog post: \"pgvector — Why Your Next Vector DB Should Just Be Postgres\"",
      "2-3 LeetCode solutions"
    ]
  },
  "16": {
    "topics": [
      "Chunking strategies: fixed-size, semantic, recursive character",
      "Retrieval: sparse (BM25) + dense (embeddings) hybrid",
      "Re-ranking: cross-encoders for result refinement",
      "Prompt augmentation: how to inject context effectively",
      "RAG evaluation: faithfulness, relevance, context precision",
      "langchain vs building from scratch (trade-offs)"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Chip Huyen — Building a RAG System",
        "url": "https://huyenchip.com/2024/07/25/genai-platform.html",
        "note": "architecture patterns"
      },
      {
        "type": "Reference",
        "title": "Pinecone — RAG Guide",
        "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        "note": "comprehensive overview"
      },
      {
        "type": "Reference",
        "title": "LlamaIndex Docs — Building a RAG Pipeline",
        "url": "https://docs.llamaindex.ai/en/stable/",
        "note": "concepts"
      },
      {
        "type": "Reference",
        "title": "Jason Wei — Retrieval Augmented Generation",
        "url": "https://blog.langchain.dev/deconstructing-rag/",
        "note": "LangChain perspective"
      },
      {
        "type": "Reference",
        "title": "Hamel Husain — RAG is More Than Just Vector Search",
        "url": "https://hamel.dev/blog/posts/rag/",
        "note": "evaluation focus"
      },
      {
        "type": "Reference",
        "title": "Ragas — RAG Evaluation Framework",
        "url": "https://docs.ragas.io/",
        "note": "metrics toolkit"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 10 — Batch Processing (data pipeline concepts)"
      },
      {
        "type": "Video",
        "title": "Sam Witteveen — RAG Deep Dive",
        "url": "https://www.youtube.com/watch?v=tcqEUSNCn8I",
        "note": "(45 min)"
      }
    ],
    "miniExercises": [
      "Compare chunking: 256 vs 512 vs 1024 token chunks (measure retrieval quality)",
      "Implement a simple BM25 scorer from scratch (~30 lines)",
      "Build a citation system: each RAG answer includes source references",
      "Test with adversarial queries designed to trigger hallucinations"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: Production RAG Pipeline</strong> Build a complete RAG system:</p><ol><li>Document ingestion: PDF, Markdown, HTML → clean text</li><li>Chunking with multiple strategies (compare results)</li><li>Embedding + indexing into pgvector (Week 15)</li><li>Retrieval with BM25 + vector hybrid search</li><li>Re-ranking with a cross-encoder</li><li>LLM generation with context injection</li><li>Streaming response via FastAPI</li><li>Evaluation: test queries with known answers</li></ol><p><strong>Project: RAG Evaluation Framework</strong></p><ol><li>Create a test dataset: 50 questions with ground truth answers</li><li>Metrics: answer relevance, faithfulness (does it hallucinate?), context recall</li><li>A/B test: different chunk sizes, different embedding models</li><li>Output a comparison report</li></ol>"
      }
    ],
    "leetcodeContext": "String processing and matching mirror text chunking algorithms",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 10 — Batch Processing</li><li>Design exercise: Design a RAG system for a company with 1M internal documents</li></ul>",
    "deliverables": [
      "End-to-end RAG pipeline with hybrid search, re-ranking, streaming",
      "RAG evaluation report comparing chunking/embedding strategies",
      "Blog post: \"Building RAG Right — Lessons from Evaluating 50+ Queries\"",
      "2-3 LeetCode solutions"
    ]
  },
  "17": {
    "topics": [
      "Task queues: Celery, RQ (Redis Queue), Dramatiq",
      "Job states: pending, running, completed, failed, retrying",
      "Async patterns: fire-and-forget, request-reply, fan-out/fan-in",
      "Redis as message broker and result backend",
      "Idempotency and exactly-once processing",
      "Dead letter queues and error handling"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Real Python — Celery Guide",
        "url": "https://realpython.com/asynchronous-tasks-with-django-and-celery/",
        "note": "adapt for FastAPI"
      },
      {
        "type": "Reference",
        "title": "Dramatiq vs Celery",
        "url": "https://dramatiq.io/motivation.html",
        "note": "comparison"
      },
      {
        "type": "Reference",
        "title": "Asynq — Simple Go Task Queue",
        "url": "https://github.com/hibiken/asynq",
        "note": "Go alternative"
      },
      {
        "type": "Reference",
        "title": "Martin Fowler — Event-Driven Architecture",
        "url": "https://martinfowler.com/articles/201701-event-driven.html"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 11 — Stream Processing"
      },
      {
        "type": "Video",
        "title": "ArjanCodes — Background Tasks",
        "url": "https://www.youtube.com/watch?v=GVvgJGAz2kg",
        "note": "(20 min)"
      }
    ],
    "miniExercises": [
      "Implement a simple in-memory task queue with asyncio.Queue",
      "Build fan-out: one request spawns 5 sub-tasks, collect all results",
      "Implement a dead letter queue for failed tasks",
      "Load test: how many jobs/sec can each system handle?"
    ],
    "projectBlocks": [
      {
        "title": "Python (60%) + Go (40% — Go recommended)",
        "html": "<p><strong>Project: LLM Job Queue (Python)</strong> Build an async processing system:</p><ol><li>FastAPI endpoint accepts LLM generation requests</li><li>Enqueues to Celery/RQ with a job ID</li><li>Worker processes the request against vLLM/OpenAI</li><li>Client polls for status or uses WebSocket for updates</li><li>Retry logic with exponential backoff on failures</li><li>Job priority levels (premium users get faster processing)</li></ol><p><strong>Project: Go Job Worker with Asynq</strong> Build the same concept in Go:</p><ol><li>HTTP endpoint accepts jobs → pushes to Redis via Asynq</li><li>Worker goroutines process jobs concurrently</li><li>Job lifecycle: enqueue → process → complete/fail</li><li>Scheduled jobs (run at a specific time)</li><li>Compare Go worker throughput vs Python Celery</li></ol>"
      }
    ],
    "leetcodeContext": "Scheduling and queue patterns directly mirror job queue design",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 11 — Stream Processing</li><li>Design exercise: Design a background job processing system handling 1M jobs/day</li></ul>",
    "deliverables": [
      "Python job queue with FastAPI + Celery/RQ",
      "Go job worker with Asynq (optional but recommended)",
      "Throughput benchmark: Python vs Go workers",
      "Blog post: \"Task Queues for ML — When Sync Isn't Enough\"",
      "2-3 LeetCode solutions"
    ]
  },
  "18": {
    "topics": [
      "gRPC: Protocol Buffers, service definitions, code generation",
      "Streaming gRPC: server streaming, client streaming, bidirectional",
      "gRPC vs REST: when to use each",
      "Service discovery and inter-service communication",
      "Docker Compose for multi-service local development",
      "API gateway pattern"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "gRPC Official Docs",
        "url": "https://grpc.io/docs/",
        "note": "language guides for Python and Go"
      },
      {
        "type": "Reference",
        "title": "Microsoft — Microservices Architecture",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices",
        "note": "patterns"
      },
      {
        "type": "Reference",
        "title": "Alex Edwards — Let's Go Further",
        "url": "https://lets-go-further.alexedwards.net/",
        "note": "advanced Go patterns"
      },
      {
        "type": "Reference",
        "title": "Real Python — gRPC in Python",
        "url": "https://realpython.com/python-microservices-grpc/"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 4 — Encoding and Evolution (protobuf context)"
      },
      {
        "type": "Video",
        "title": "Hussein Nasser — gRPC Full Course",
        "url": "https://www.youtube.com/watch?v=Yw4rkaTc0f8",
        "note": "(40 min)"
      }
    ],
    "miniExercises": [
      "Write a bidirectional streaming chat over gRPC",
      "Compare: gRPC vs REST latency for 1000 requests",
      "Implement gRPC deadline propagation (timeout handling)",
      "Build a simple service registry (service name → address mapping)"
    ],
    "projectBlocks": [
      {
        "title": "Python (50%) + Go (50% — Go strongly recommended)",
        "html": "<p><strong>Project: gRPC Inference Service (Go)</strong> Build a Go gRPC service:</p><ol><li>Define <code>.proto</code> for inference (prompt → streamed tokens)</li><li>Implement server with streaming response</li><li>Connection pooling and concurrent request handling</li><li>Interceptors for logging, auth, and metrics</li><li>Health check service following gRPC health protocol</li></ol><p><strong>Project: FastAPI Gateway (Python)</strong></p><ol><li>FastAPI HTTP gateway that proxies to Go gRPC backend</li><li>Translates REST → gRPC calls using <code>grpcio</code></li><li>Streaming: SSE (HTTP) ↔ gRPC streaming translation</li><li>Request routing to different backend services</li><li>Docker Compose setup for the full stack</li></ol>"
      }
    ],
    "leetcodeContext": "Graph algorithms model service communication patterns",
    "systemDesignHtml": "<ul><li>📖 <em>DDIA</em> Ch. 4 — Encoding and Evolution, Ch. 8 — Distributed Systems</li><li>Design exercise: Design a microservice architecture for an LLM platform</li></ul>",
    "deliverableBlocks": [
      {
        "title": "Review Checkpoint (Weekend)",
        "html": "<ul><li>Review all projects from Weeks 15-17</li><li>Ensure Docker Compose can bring up the full stack</li><li>Update blog with &quot;Month 4 Retrospective&quot;</li></ul>"
      }
    ],
    "deliverables": [
      "Go gRPC inference service with streaming",
      "Python FastAPI gateway translating REST ↔ gRPC",
      "Docker Compose for full multi-service stack",
      "Blog post: \"gRPC for ML Services — Go Backend, Python Gateway\"",
      "2-3 LeetCode solutions"
    ]
  },
  "19": {
    "topics": [
      "Prometheus: metric types (counter, gauge, histogram, summary)",
      "Structured logging: structlog (Python), zerolog (Go)",
      "Log levels, correlation IDs, request tracing",
      "Grafana basics: dashboards, panels, queries",
      "Metric cardinality and performance considerations"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Prometheus Official Docs",
        "url": "https://prometheus.io/docs/",
        "note": "metric types guide"
      },
      {
        "type": "Reference",
        "title": "Peter Bourgon — Metrics, Tracing, and Logging",
        "url": "https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html",
        "note": "foundational mental model"
      },
      {
        "type": "Reference",
        "title": "structlog Python docs",
        "url": "https://www.structlog.org/",
        "note": "best Python structured logging"
      },
      {
        "type": "Reference",
        "title": "Grafana Getting Started",
        "url": "https://grafana.com/docs/grafana/latest/getting-started/",
        "note": "dashboards"
      },
      {
        "type": "Reference",
        "title": "Cindy Sridharan — Distributed Tracing",
        "url": "https://copyconstruct.medium.com/distributed-tracing-wes-not-there-yet-f0d29f4ed29d",
        "note": "comprehensive"
      },
      {
        "type": "Book",
        "title": "DDIA Ch. 1 — Reliability, Scalability, Maintainability (revisit with monitoring lens)"
      },
      {
        "type": "Video",
        "title": "TechWorld with Nana — Prometheus",
        "url": "https://www.youtube.com/watch?v=h4Sl21AKiDg",
        "note": "(25 min)"
      }
    ],
    "miniExercises": [
      "Implement request ID propagation: generate UUID, pass through all log lines",
      "Build a structured logger wrapper that automatically adds context (user_id, model, latency)",
      "Create a Grafana dashboard from a JSON template",
      "Set up Prometheus alerting rules for high error rate (> 5%)"
    ],
    "projectBlocks": [
      {
        "title": "Python (50%) + Go (50%)",
        "html": "<p><strong>Project: Instrumented Go API</strong></p><ol><li>Go REST API with Prometheus client (<code>client_golang</code>)</li><li>Metrics: request count, latency histogram, error rate, active connections</li><li>Custom metrics: inference tokens/sec, queue depth</li><li><code>/metrics</code> endpoint scraped by Prometheus</li><li>Grafana dashboard with 4+ panels</li></ol><p><strong>Project: LLM Cost Tracker (Python)</strong></p><ol><li>FastAPI middleware that logs token usage per request</li><li>Calculates cost per model (GPT-4, Claude, local) based on token counts</li><li>Stores metrics in Prometheus (or SQLite)</li><li>Daily/weekly cost aggregation reports</li><li>Alert when daily spend exceeds budget</li></ol>"
      }
    ],
    "leetcodeContext": "Counter and time-series patterns are the foundation of metrics",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 2</em> — Metrics Monitoring and Alerting System</li><li>Design exercise: Design a monitoring system for an ML platform</li></ul>",
    "deliverables": [
      "Instrumented Go API with Prometheus metrics",
      "LLM cost tracker with budget alerting",
      "Grafana dashboard (screenshot in blog)",
      "Blog post: \"Observability for ML Systems — What to Measure and Why\"",
      "2-3 LeetCode solutions"
    ]
  },
  "20": {
    "topics": [
      "OpenTelemetry: traces, spans, context propagation",
      "Jaeger or Zipkin for trace visualization",
      "Trace propagation across services (Python → Go → Python)",
      "Alert design: symptom-based vs cause-based",
      "PagerDuty/Slack alerting (concept)",
      "SLO/SLI/SLA principles"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "OpenTelemetry Docs",
        "url": "https://opentelemetry.io/docs/",
        "note": "official"
      },
      {
        "type": "Reference",
        "title": "Lightstep — Distributed Tracing Guide",
        "url": "https://lightstep.com/distributed-tracing",
        "note": "conceptual guide"
      },
      {
        "type": "Reference",
        "title": "Google SRE Book — Monitoring Distributed Systems",
        "url": "https://sre.google/sre-book/monitoring-distributed-systems/",
        "note": "free online"
      },
      {
        "type": "Reference",
        "title": "Charity Majors — Observability Engineering",
        "url": "https://www.oreilly.com/library/view/observability-engineering/9781492076438/",
        "note": "excellent book"
      },
      {
        "type": "Reference",
        "title": "Presidio — Microsoft PII Detection",
        "url": "https://microsoft.github.io/presidio/",
        "note": "PII toolkit"
      },
      {
        "type": "Book",
        "title": "System Design Interview Vol 2 — relevant chapters on monitoring"
      },
      {
        "type": "Video",
        "title": "OTEL in 5 minutes",
        "url": "https://www.youtube.com/watch?v=r8UvWSX3KA8"
      }
    ],
    "miniExercises": [
      "Implement W3C Trace Context header propagation manually",
      "Build a simple alert manager: check metrics, send Slack webhook if threshold exceeded",
      "Add tracing to your RAG pipeline — identify the slowest step",
      "Create SLO definitions for your inference service (p99 latency 99.9%)"
    ],
    "projectBlocks": [
      {
        "title": "Python (50%) + Go (50%)",
        "html": "<p><strong>Project: Distributed Tracing Across Services</strong></p><ol><li>Instrument your Week 18 microservices with OpenTelemetry</li><li>Trace a request: Gateway → gRPC service → Database</li><li>Visualize in Jaeger: see the full request waterfall</li><li>Add custom spans for embedding generation, LLM inference, DB queries</li><li>Identify bottlenecks from trace data</li></ol><p><strong>Project: PII Redactor + Alert System (Python)</strong></p><ol><li>Middleware that scans LLM responses for PII (emails, phones, SSNs)</li><li>Redacts before returning to user</li><li>Logs PII detection events with severity</li><li>Prometheus alerts when PII detection rate spikes</li><li>Regex + NER-based detection (dual approach)</li></ol>"
      }
    ],
    "leetcodeContext": "Graph traversal mirrors trace tree visualization",
    "systemDesignHtml": "<ul><li>📖 Google SRE Book — Monitoring chapter (free online)</li><li>Design exercise: Design an alerting system with escalation policies</li></ul>",
    "deliverables": [
      "Distributed tracing across 3+ services with Jaeger",
      "PII redactor middleware with alerting",
      "SLO document for your inference service",
      "Blog post: \"Tracing LLM Requests End-to-End with OpenTelemetry\"",
      "2-3 LeetCode solutions"
    ]
  },
  "21": {
    "topics": [
      "Evaluation metrics: BLEU, ROUGE, BERTScore, perplexity",
      "LLM-as-Judge: using a strong model to evaluate a weaker model",
      "Human evaluation vs automated evaluation trade-offs",
      "Regression testing for LLM applications",
      "A/B testing frameworks for prompts",
      "ragas , deepeval , promptfoo evaluation tools"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Eugene Yan — LLM Evaluation",
        "url": "https://eugeneyan.com/writing/llm-evaluations/",
        "note": "comprehensive overview"
      },
      {
        "type": "Reference",
        "title": "Hamel Husain — Your AI Product Needs Evals",
        "url": "https://hamel.dev/blog/posts/evals/",
        "note": "practical, opinionated"
      },
      {
        "type": "Reference",
        "title": "Ragas Docs",
        "url": "https://docs.ragas.io/",
        "note": "RAG evaluation framework"
      },
      {
        "type": "Reference",
        "title": "Anthropic — Evaluating LLMs",
        "url": "https://docs.anthropic.com/en/docs/test-and-evaluate/eval-tool",
        "note": "evaluation guide"
      },
      {
        "type": "Reference",
        "title": "Braintrust — LLM Eval Guide",
        "url": "https://www.braintrust.dev/docs/guides/evals",
        "note": "practical patterns"
      },
      {
        "type": "Reference",
        "title": "promptfoo",
        "url": "https://www.promptfoo.dev/",
        "note": "prompt testing CLI tool"
      },
      {
        "type": "Video",
        "title": "Weights &amp; Biases — LLM Evaluation",
        "url": "https://www.youtube.com/watch?v=0uJVjJg_HWs",
        "note": "(30 min)"
      }
    ],
    "miniExercises": [
      "Implement BLEU score from scratch (~20 lines)",
      "Build an LLM-as-Judge prompt that rates responses on 5 criteria",
      "Create a \"golden dataset\" for your RAG system and evaluate retrieval quality",
      "Compare: GPT-4-as-Judge vs Claude-as-Judge (do they agree?)"
    ],
    "projectBlocks": [
      {
        "title": "Python (100%)",
        "html": "<p><strong>Project: LLM Evaluation Framework</strong> Build a comprehensive eval system:</p><ol><li>Define test suites: 50+ test cases with expected outputs</li><li>Multiple evaluation strategies: exact match, fuzzy match, LLM-as-Judge</li><li>Regression detection: compare current model vs baseline</li><li>Scoring dashboard: track quality over time</li><li>CI-ready: can run as a CLI command in a pipeline</li></ol><p><strong>Project: Prompt A/B Testing Tool</strong></p><ol><li>Define prompt variants (A, B, C)</li><li>Run all variants against the same test inputs</li><li>Evaluate with LLM-as-Judge on multiple criteria (relevance, helpfulness, accuracy)</li><li>Statistical significance testing (basic chi-squared or bootstrap)</li><li>Output winner with confidence interval</li></ol>"
      }
    ],
    "leetcodeContext": "String similarity metrics mirror evaluation metric concepts",
    "systemDesignHtml": "<ul><li>📖 <em>System Design Interview Vol 2</em> — Data Pipeline Design</li><li>Design exercise: Design a continuous evaluation pipeline for an LLM product</li></ul>",
    "deliverables": [
      "Evaluation framework with 50+ test cases",
      "Prompt A/B testing tool with statistical analysis",
      "Blog post: \"How to Actually Evaluate Your LLM Application\"",
      "2-3 LeetCode solutions"
    ]
  },
  "22": {
    "topics": [
      "Prompt injection attacks and defenses",
      "Input validation: length limits, content filtering, topic restriction",
      "Output validation: JSON schema enforcement, hallucination detection",
      "instructor library for structured LLM outputs",
      "guardrails-ai framework",
      "Content moderation: toxicity detection, PII filtering"
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Simon Willison — Prompt Injection",
        "url": "https://simonwillison.net/2022/Sep/12/prompt-injection/",
        "note": "foundational article"
      },
      {
        "type": "Reference",
        "title": "OWASP — LLM Top 10",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "note": "security checklist"
      },
      {
        "type": "Reference",
        "title": "Instructor docs",
        "url": "https://python.useinstructor.com/",
        "note": "structured outputs"
      },
      {
        "type": "Reference",
        "title": "Guardrails AI docs",
        "url": "https://docs.guardrailsai.com/",
        "note": "validation framework"
      },
      {
        "type": "Reference",
        "title": "Lilian Weng — LLM Powered Agents",
        "url": "https://lilianweng.github.io/posts/2023-06-23-agent/",
        "note": "agent safety context"
      },
      {
        "type": "Reference",
        "title": "NeMo Guardrails",
        "url": "https://docs.nvidia.com/nemo/guardrails/",
        "note": "NVIDIA's framework"
      },
      {
        "type": "Video",
        "title": "Computerphile — Prompt Injection",
        "url": "https://www.youtube.com/watch?v=Sv5OLj2nVAQ",
        "note": "(15min)"
      }
    ],
    "miniExercises": [
      "Build 5 different prompt injection attacks and test them against your guards",
      "Implement a \"canary token\" detector (detects if the LLM leaks system prompt)",
      "Create a hallucination detector using entailment (does the response contradict the context?)",
      "Build a JSON repair function that fixes common LLM JSON errors"
    ],
    "projectBlocks": [
      {
        "title": "Python (85%)",
        "html": "<p><strong>Project: LLM Guardrails System</strong> Build a security layer:</p><ol><li>Input guards: prompt injection detection (keyword + ML-based)</li><li>Topic restriction: block off-topic queries</li><li>Output guards: schema validation, PII redaction, toxicity check</li><li>Structured output enforcement using <code>instructor</code></li><li>Audit logging: log all blocked requests with reasons</li><li>Configurable guard chain (enable/disable guards per route)</li></ol><p><strong>Project: Structured Output Generator</strong></p><ol><li>Use <code>instructor</code> to extract structured data from unstructured text</li><li>Examples: extract events from emails, parse resumes, extract product specs</li><li>Pydantic model validation on LLM outputs</li><li>Retry logic when output doesn&#39;t match schema</li><li>Compare: <code>instructor</code> vs <code>response_format</code> vs manual parsing</li></ol>"
      },
      {
        "title": "Go (15% — Optional)",
        "html": "<ul><li>Build input validation middleware in Go</li><li>Rate limiting + content-length enforcement</li><li>Compare Go middleware vs Python middleware approach</li></ul>"
      }
    ],
    "leetcodeContext": "Validation and constraint satisfaction mirror guardrail patterns",
    "systemDesignHtml": "<ul><li>Design exercise: Design a content moderation system for an AI chat application</li></ul>",
    "deliverables": [
      "Guardrails system with 5+ configurable guards",
      "Structured output pipeline using instructor",
      "Prompt injection test suite with 10+ attack vectors",
      "Blog post: \"LLM Security — Defense in Depth for AI Applications\"",
      "2-3 LeetCode solutions"
    ]
  },
  "23": {
    "topics": [
      "Data quality: cleaning, deduplication, formatting for instruction tuning",
      "QLoRA: 4-bit quantized LoRA (revisit with production lens)",
      "Training monitoring: loss curves, gradient norms, learning rate schedules",
      "Evaluation during training: perplexity, task-specific metrics",
      "Model merging: merging LoRA adapters, model souping",
      "Weights & Biases for experiment tracking"
    ],
    "miniExercises": [
      "Implement data deduplication using MinHash (approximate)",
      "Build a training data quality scorer (length distribution, vocabulary diversity)",
      "Compare learning rates: 1e-4 vs 2e-5 vs 5e-6 on the same dataset",
      "Monitor training with W&B: loss, gradient norms, learning rate",
      "Implement early stopping based on validation loss"
    ],
    "projectBlocks": [
      {
        "title": "Python (90%)",
        "html": "<p><strong>Project: Full QLoRA Fine-tuning Pipeline</strong> Build a production-ready pipeline:</p><ol><li>Data pipeline: collect, clean, deduplicate, format training data</li><li>Data validation: schema checks, quality filters (length, language, toxicity)</li><li>QLoRA training with <code>trl.SFTTrainer</code> and W&amp;B logging</li><li>Automated evaluation: run eval suite before and after training</li><li>Model export: merge adapters, convert to GGUF/GPTQ for serving</li><li>A/B comparison: base model vs fine-tuned on held-out test set</li><li>CI pipeline concept: training triggered by data changes</li></ol>"
      },
      {
        "title": "Go (10% — Optional)",
        "html": "<ul><li>Build a fine-tuning job orchestrator API in Go</li><li>Job states: preparing_data → training → evaluating → complete</li><li>REST API to submit, monitor, and cancel training jobs</li></ul>"
      }
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "Sebastian Raschka — Finetuning LLMs Efficiently",
        "url": "https://magazine.sebastianraschka.com/p/finetuning-llms-with-adapters",
        "note": "best practical guide"
      },
      {
        "type": "Reference",
        "title": "HuggingFace — TRL docs",
        "url": "https://huggingface.co/docs/trl/",
        "note": "SFTTrainer reference"
      },
      {
        "type": "Reference",
        "title": "Maxime Labonne — Fine-tuning Llama-2",
        "url": "https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html",
        "note": "step by step"
      },
      {
        "type": "Reference",
        "title": "W&amp;B — Fine-tuning Guide",
        "url": "https://wandb.ai/capecape/alpaca_ft/reports/How-to-Fine-Tune-an-LLM-Part-1--Vmlldzo1NTcyODMz",
        "note": "experiment tracking"
      },
      {
        "type": "Reference",
        "title": "Lilian Weng — How to Train Really Large Models on Many GPUs",
        "url": "https://lilianweng.github.io/posts/2021-09-25-train-large/"
      },
      {
        "type": "Book",
        "title": "QLoRA paper: arXiv:2305.14314",
        "url": "https://arxiv.org/abs/2305.14314"
      },
      {
        "type": "Video",
        "title": "Trelis Research — QLoRA Fine-tuning",
        "url": "https://www.youtube.com/watch?v=XpoKB3usmKc",
        "note": "(30 min)"
      }
    ],
    "leetcodeContext": "Optimization problems mirror training optimization concepts",
    "systemDesignHtml": "<ul><li>Design exercise: Design a fine-tuning-as-a-service platform (like OpenAI&#39;s fine-tuning API)</li></ul>",
    "deliverables": [
      "Complete fine-tuning pipeline with W&B dashboard",
      "Before/after evaluation report",
      "Exported model in at least 2 formats (HuggingFace + GGUF)",
      "Blog post: \"From Data to Deployed Model — A Production Fine-tuning Pipeline\"",
      "3 LeetCode solutions"
    ]
  },
  "24": {
    "projectBlocks": [
      {
        "title": "Architecture",
        "html": "<pre><code>┌─────────────────────────────────────────────────────────────┐│                     CLIENT (CLI / Web)                       │└──────────────────────────┬──────────────────────────────────┘│ HTTP/SSE┌──────────────────────────▼──────────────────────────────────┐│              GO API GATEWAY                                  ││  • Rate limiting (token bucket)                              ││  • Auth (API keys)                                           ││  • Request routing                                           ││  • Prometheus metrics                                        ││  • Distributed tracing (OpenTelemetry)                       │└─────┬──────────┬───────────────┬────────────────────────────┘│ gRPC     │ gRPC          │ HTTP┌─────▼────┐ ┌───▼──────┐ ┌─────▼──────────┐│ INFERENCE │ │   RAG    │ │  EVALUATION    ││ SERVICE   │ │ SERVICE  │ │  SERVICE       ││ (Python)  │ │ (Python) │ │  (Python)      ││ FastAPI + │ │ Chunking │ │  LLM-as-Judge  ││ vLLM      │ │ pgvector │ │  Regression    ││ Streaming │ │ Retrieval│ │  Tests         │└─────┬─────┘ └────┬─────┘ └───────────────┘│             │┌─────▼─────────────▼─────────────────────────────────────────┐│              POSTGRESQL + pgvector                           ││  • Conversations  • Embeddings  • Eval results              │└─────────────────────────────────────────────────────────────┘│┌─────────▼─────────────────────────────────────────────────┐│           OBSERVABILITY STACK                               ││  • Prometheus  • Grafana  • Jaeger  • Structured Logs      │└─────────────────────────────────────────────────────────────┘</code></pre>"
      },
      {
        "title": "Components to Build",
        "html": "<p><strong>1. Go API Gateway (Go — 40%)</strong></p><ul><li>Rate limiting with token bucket (per API key)</li><li>JWT authentication</li><li>Request routing to backend services</li><li>Prometheus instrumentation</li><li>OpenTelemetry tracing</li><li>Health checks and graceful shutdown</li><li>Structured logging with <code>zerolog</code></li></ul><p><strong>2. Inference Service (Python — 20%)</strong></p><ul><li>FastAPI + vLLM backend</li><li>Streaming token response via SSE</li><li>Model selection (multiple models available)</li><li>Token counting and cost tracking</li><li>Input guardrails (injection detection)</li></ul><p><strong>3. RAG Service (Python — 20%)</strong></p><ul><li>Document ingestion pipeline (PDF → chunks → embeddings)</li><li>Hybrid search (vector + keyword)</li><li>Re-ranking with cross-encoder</li><li>Context injection for LLM</li><li>pgvector storage</li></ul><p><strong>4. Evaluation Service (Python — 10%)</strong></p><ul><li>Nightly eval runs on test suite</li><li>LLM-as-Judge scoring</li><li>Regression detection</li><li>Results stored in Postgres</li></ul><p><strong>5. Infrastructure (10%)</strong></p><ul><li>Docker Compose for entire stack</li><li>Grafana dashboard with panels for:</li><li>Request latency (p50, p90, p99)</li><li>Token throughput</li><li>Cost per hour/day</li><li>Cache hit rate</li><li>Eval quality scores</li><li>Error rates</li></ul>"
      },
      {
        "title": "Daily Schedule for Week 24",
        "html": "<div class=\"table-wrap\"><table><thead><tr><th>Day</th><th>Focus</th></tr></thead><tbody><tr><td><strong>Mon</strong></td><td>Go gateway: auth + rate limiting + routing</td></tr><tr><td><strong>Tue</strong></td><td>Python inference service: vLLM + streaming</td></tr><tr><td><strong>Wed</strong></td><td>Python RAG service: ingest + search + context</td></tr><tr><td><strong>Thu</strong></td><td>Evaluation service + guardrails integration</td></tr><tr><td><strong>Fri</strong></td><td>Docker Compose + observability stack</td></tr><tr><td><strong>Sat</strong></td><td>Integration testing + bug fixes</td></tr><tr><td><strong>Sun</strong></td><td>Architecture diagram + final blog post + demo recording</td></tr></tbody></table></div>"
      }
    ],
    "resources": [
      {
        "type": "Reference",
        "title": "All previous weeks' resources (revisit as needed)"
      },
      {
        "type": "Reference",
        "title": "Docker Compose Docs",
        "url": "https://docs.docker.com/compose/",
        "note": "multi-service orchestration"
      },
      {
        "type": "Reference",
        "title": "12-Factor App",
        "url": "https://12factor.net/",
        "note": "production app principles"
      },
      {
        "type": "Reference",
        "title": "Chip Huyen — Building GenAI Platform",
        "url": "https://huyenchip.com/2024/07/25/genai-platform.html",
        "note": "architecture reference"
      }
    ],
    "deliverables": [
      "Fully working multi-service LLM platform",
      "Docker Compose — single docker compose up to run everything",
      "Architecture diagram (Mermaid or Excalidraw)",
      "Grafana dashboard with 6+ panels",
      "Integration test suite",
      "Demo video / screen recording",
      "Final blog post: \"Building a Mini LLM Platform — 24 Weeks of Learning\"",
      "GitHub README with setup instructions"
    ]
  }
};
