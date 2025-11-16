export interface Project {
  id: number
  title: string
  description: string
  repoUrl: string
  website?: string
  image?: string
  tags: string[]
  mentorNames?: string[]
  status: "ongoing" | "paused" | "completed" | "upcoming"
  readmeSource?: string
  longDescription?: string
  summary?: string
  highlights?: string[]
  techStackSummary?: string[]
  howItWorksSummary?: string[]
}

export const projects: Project[] = [
  {
    id: 2,
    title: "Secure Federated Fraud Detection for Retail",
    description:
      "A privacy-first, real-time fraud detection platform using federated learning and encrypted model sharing. Local models detect fraud on-device while encrypted updates improve a global model via a lightweight PocketBase backend.",
    repoUrl: "https://github.com/ysoc-team/Secure-Federated-Fraud-Detection-for-Retail",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React.js",
      "Flask",
      "TensorFlow",
      "Differential Privacy",
      "Flower",
      "Fernet",
      "PocketBase"
    ],
    status: "ongoing",
    readmeSource: "Secure Federated Fraud Detection for Retail - README",
    summary:
      "Privacy-first, real-time fraud detection where each retailer trains locally and shares only encrypted model updates. A lightweight backend aggregates improvements into a global model without ever seeing raw data.",
    highlights: [
      "Real-time risk scoring and decisioning at the edge",
      "No customer data leaves retailer infrastructure",
      "Federated model improves with encrypted client updates",
      "PocketBase coordinates versions and metadata",
    ],
    techStackSummary: [
      "Frontend: React.js dashboard",
      "Backend API: Flask",
      "Training: TensorFlow + Differential Privacy",
      "Federated Learning: Flower",
      "Encryption: Fernet (AES-based)",
      "Storage/Metadata: PocketBase",
    ],
    howItWorksSummary: [
      "Local model scores transactions and trains on recent data",
      "Encrypted updates (weights/gradients) are sent to backend",
      "Backend aggregates to a new global snapshot",
      "Clients pull the latest global model and continue",
    ],
  },
  {
    id: 3,
    title: "Circular Fashion",
    description:
      "An AI-driven platform helping fashion designers choose sustainable materials with smart recommendations, eco-impact scoring, material management, and blockchain transparency.",
    repoUrl: "https://github.com/ysoc-team/circularfashion",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "Sustainability",
      "Blockchain",
      "Material Science",
      "TypeScript",
      "Vite",
      "React"
    ],
    status: "ongoing",
    summary:
      "Revolutionizing sustainable material selection in the fashion industry via AI recommendations and verifiable, blockchain-backed transparency.",
    highlights: [
      "AI-powered fabric recommendations tuned to durability and project needs",
      "Eco-impact scoring to compare environmental footprints",
      "Structured material database for querying and updates",
      "Blockchain-based sourcing and lifecycle transparency"
    ],
    howItWorksSummary: [
      "Designers input project requirements and constraints",
      "AI suggests sustainable fabrics based on biodegradability, impact, and context",
      "System scores options and explains trade-offs",
      "Selections are tracked on-chain for provenance and lifecycle transparency"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript (Vite)",
      "AI Layer: Recommendation engine for sustainability signals",
      "Data: Material database with scoring metadata",
      "Blockchain: Immutable sourcing and lifecycle records"
    ]
  },
  {
    id: 4,
    title: "NeuroShield – Parkinson’s Gait Analysis",
    description:
      "AI tool that analyzes patient gait from video to aid Parkinson’s monitoring using YOLOv8 pose estimation and stride feature analysis.",
    repoUrl: "https://github.com/ysoc-team/neuroshield",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "Streamlit",
      "YOLOv8",
      "OpenCV",
      "NumPy",
      "Matplotlib",
      "Pandas",
      "SciPy",
      "Healthcare",
      "AI"
    ],
    status: "ongoing",
    summary:
      "Upload a short gait video to extract pose keypoints, compute stride metrics, detect asymmetry, and visualize stability to support earlier Parkinson’s monitoring.",
    highlights: [
      "Pose keypoints from YOLOv8 for ankles/head/stride",
      "Stride length, variability, and asymmetry metrics",
      "Stability classification (Stable / Slightly Unstable / Unstable)",
      "Graphs and clinician-friendly insights",
    ],
    howItWorksSummary: [
      "User uploads a gait video",
      "YOLOv8 Pose extracts keypoints frame-by-frame",
      "Signals are filtered and stride features computed",
      "Model classifies gait stability and generates recommendations",
    ],
    techStackSummary: [
      "Frontend/UI: Streamlit",
      "Pose Estimation: YOLOv8 (Ultralytics)",
      "Video Processing: OpenCV + NumPy",
      "Analytics/Plots: Matplotlib + Pandas",
      "Signal Processing: SciPy",
      "Optional Data: Demographics XLS for metadata",
    ],
  },
  {
    id: 5,
    title: "DockWidgets",
    description:
      "Transparent, functional widgets that live beside your macOS dock: FlipClock, Weather, and Music controls — useful at-a-glance info without clutter.",
    repoUrl: "https://github.com/ysoc-team/dockWidgets",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "macOS",
      "Desktop",
      "Productivity",
      "Clock",
      "Weather",
      "Music"
    ],
    status: "ongoing",
    summary:
      "Turn empty dock space into a productivity surface with elegant, transparent widgets that show time, weather, and music controls — always available, never in the way.",
    highlights: [
      "Retro FlipClock with 12/24h modes and optional seconds",
      "Weather with icons, multi-location, and configurable refresh",
      "Music controls for Apple Music and Spotify with track details",
      "Transparent, lightweight, and non-intrusive design within dock height",
    ],
    howItWorksSummary: [
      "Install the app and launch DockWidgets",
      "Widgets render in unused space next to the macOS dock",
      "Configure weather location, opacity, and clock format in Preferences",
      "Control music playback and glance at current track info",
    ],
    techStackSummary: [
      "Platform: macOS 14.6+ (Intel & Apple Silicon)",
      "Widgets: FlipClock, Weather, Music Controls",
      "Distribution: downloadable app via Releases",
    ],
  },
  {
    id: 6,
    title: "Synapse – AI Powered Cognitive Retraining Platform",
    description:
      "Adaptive, home-based cognitive training for children with ADHD, Autism, and Learning Disabilities using EEG neurofeedback, multimodal AI, and gamification.",
    repoUrl: "https://github.com/ysoc-team/synapse",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "EEG",
      "Neurofeedback",
      "Gamification",
      "Healthcare",
      "FastAPI",
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "IPFS"
    ],
    status: "ongoing",
    summary:
      "Synapse personalizes cognitive retraining with real-time EEG, emotion, and speech signals to adapt games on the fly, support parents/therapists, and respect privacy via decentralized storage.",
    highlights: [
      "EEG-enabled attention and cognitive load measurement",
      "AI-driven adaptive exercises for memory, focus, and behavior",
      "Emotion and speech recognition to track engagement",
      "Parental dashboards with WhatsApp progress reports",
      "Therapist portal for data-driven insights",
      "Secure decentralized data storage (IPFS)"
    ],
    howItWorksSummary: [
      "ESP32 EEG streams brain signals via Python LSL",
      "Multimodal AI (EEG, emotion, speech) estimates state and engagement",
      "Game modules adapt difficulty and rewards in real time",
      "Automated reports stored on IPFS and shared via WhatsApp",
      "Clinicians review progress; parents get accessible dashboards"
    ],
    techStackSummary: [
      "Backend: Python / FastAPI, columnar analytics DB",
      "Frontend: React / Next.js / TypeScript",
      "Signals/AI: DeepFace, Whisper-v3, pyannote.audio, TensorFlow",
      "Hardware: ESP32 EEG",
      "Storage/Auth: IPFS (reports), Supabase",
      "Messaging: Twilio WhatsApp API",
      "Workflow: LangChain / LangGraph"
    ],
  },
  {
    id: 7,
    title: "AI-Road Hazard Analyzer (RoadGuard AI)",
    description:
      "Real-time computer vision system that detects and classifies road hazards (potholes, debris, flooding, animals) with high accuracy and speed.",
    repoUrl: "https://github.com/ysoc-team/aiRockHazard",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
      "Streamlit",
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Machine Learning",
      "Data Science"
    ],
    status: "ongoing",
    summary:
      "Automatically analyzes video feeds to surface road hazards in real time, achieving ~83.7% mAP@0.5 and 86.2% precision, enabling proactive responses by drivers and authorities.",
    highlights: [
      "Hazard detection for potholes, cracks, debris, flooding, animals",
      "Real-time throughput around 45 FPS",
      "Strong accuracy: ~83.7% mAP@0.5, 86.2% precision, 81.5% recall",
      "Inline visual overlays for immediate awareness"
    ],
    howItWorksSummary: [
      "YOLOv8 object detection model identifies hazards frame-by-frame",
      "Video feeds processed via OpenCV; predictions streamed to a dashboard",
      "Data augmentation boosts robustness to lighting/weather variations",
      "Results visualized in real time with optional alerting hooks"
    ],
    techStackSummary: [
      "Model: YOLOv8 (object detection)",
      "Processing/Analytics: Python, NumPy, Pandas, scikit-learn",
      "Video I/O: OpenCV",
      "Dashboard: Streamlit",
      "Training: Augmented images/video frames; hyperparameter tuning for speed/accuracy"
    ],
  },
  {
    id: 8,
    title: "Amazon Product Optimizer – AI SEO & Media Enhancer",
    description:
      "Cloud-native SaaS for Amazon sellers that analyzes listings, benchmarks competitors, and generates SEO-optimized titles, bullets, and descriptions while enhancing images and creating short videos.",
    repoUrl: "https://github.com/ysoc-team/productoptimizer",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AWS",
      "Cognito",
      "Bedrock",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "React",
      "Amplify",
      "SEO",
      "Media Generation"
    ],
    status: "ongoing",
    summary:
      "AMZ Optimizer boosts product visibility and conversion with AI-driven SEO content and media generation. Sellers securely log in, analyze listings, compare competitors, and instantly produce optimized copy, enhanced images, and short videos.",
    highlights: [
      "Secure authentication with AWS Cognito",
      "AI SEO engine: titles, bullets, descriptions, metadata",
      "AI Media Studio: image enhancement via prompts + carousel preview",
      "Image-to-video generation for high‑engagement assets",
      "Competitor benchmarking and keyword insights",
      "Fully serverless, scalable AWS-native architecture"
    ],
    howItWorksSummary: [
      "Seller logs in via Cognito; frontend receives tokens",
      "Enter product URL (and optional competitor); system scrapes metadata",
      "Bedrock Agents analyze keywords and gaps; generate SEO copy",
      "Images enhanced with Bedrock image models; optional image→video",
      "Results stored in DynamoDB/S3; user downloads or pushes to Seller Central (optional)"
    ],
    techStackSummary: [
      "Frontend: React (Amplify Hosting)",
      "Auth: Amazon Cognito",
      "APIs: API Gateway + AWS Lambda",
      "AI: AWS Bedrock (text & image) + AgentCore",
      "Data: DynamoDB (history), S3 (media)"
    ],
  },
  {
    id: 9,
    title: "Gesture-Controlled Smart Food Ordering System",
    description:
      "Touchless ordering via webcam-based hand gesture recognition. Browse menus, add to cart, and confirm payment using simple thumbs-up/down and swipe gestures.",
    repoUrl: "https://github.com/ysoc-team/gesture",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Tkinter",
      "Pillow",
      "Computer Vision",
      "Desktop",
      "Windows",
      "Kiosk"
    ],
    status: "ongoing",
    summary:
      "Post‑pandemic, contactless ordering matters. This system enables intuitive, hygienic, and accessible food ordering using only hand gestures—ideal for kiosks, restaurants, and self‑service setups.",
    highlights: [
      "Swipe to navigate menu items",
      "Thumbs‑up to add item and confirm payment",
      "Thumbs‑down to open cart and proceed",
      "Full‑screen GUI with premium visual themes",
      "Smooth transitions between Menu → Cart → Payment"
    ],
    howItWorksSummary: [
      "Webcam stream processed with OpenCV",
      "MediaPipe Hands detects landmarks and gesture angles",
      "Gesture logic maps to actions (navigate/add/checkout/confirm)",
      "Tkinter GUI updates cart and totals in real time"
    ],
    techStackSummary: [
      "Core: Python",
      "CV: OpenCV + MediaPipe Hands",
      "UI: Tkinter + Pillow assets",
      "Platform: Desktop (Windows), kiosk‑friendly",
      "Future: Voice (pyttsx3), DB (SQLite/Firebase), REST APIs"
    ],
  },
  {
    id: 10,
    title: "Fall Detection and Emergency Alert System",
    description:
      "YOLO-based fall detection from video that triggers alerts if a person remains fallen for 10+ seconds. Streamlit app with annotated output and demo dashboards.",
    repoUrl: "https://github.com/ysoc-team/safefall",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "Ultralytics YOLO",
      "OpenCV",
      "Streamlit",
      "NumPy",
      "Computer Vision",
      "Healthcare",
      "Safety"
    ],
    status: "ongoing",
    summary:
      "Uploads a video (or future live feed), detects falls in real time, starts a 10-second timer, and issues emergency alerts with snapshots and location to families and nearby hospitals.",
    highlights: [
      "Classifies Walking / Sitting / Fall Detected",
      "Alert threshold: fallen ≥ 10 seconds (configurable)",
      "Annotated video output with color-coded states",
      "Family & hospital dashboards (demo) notified with snapshot and details",
      "Frame-skipping optimization for speed without missing alerts"
    ],
    howItWorksSummary: [
      "User uploads video (future: live webcam) in Streamlit app",
      "YOLO detects human activity per frame; fall event starts timer",
      "If fall persists ≥ 10s, capture snapshot and trigger alert payloads",
      "Dashboards display snapshot, location, contact, duration; video available for download"
    ],
    techStackSummary: [
      "Model: Ultralytics YOLO",
      "Processing/UI: Streamlit + OpenCV",
      "Numerics: NumPy",
      "Encoding: Base64 snapshots for fast display",
      "Roadmap: Multi-person, SMS/WhatsApp/email alerts, edge deployment (Pi/Jetson)"
    ],
  },
  {
    id: 11,
    title: "DermaScan – AI Skin & Beauty Analysis",
    description:
      "Next.js app that analyzes skin and facial features using Google Gemini, provides beauty scores, and generates personalized skincare routines with a premium-tier UX.",
    repoUrl: "https://github.com/ysoc-team/dermascan",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "Gemini",
      "MongoDB",
      "Prisma",
      "better-auth",
      "Nodemailer"
    ],
    status: "ongoing",
    summary:
      "Upload a selfie for instant AI-driven skin and beauty analysis (hydration, UV damage, wrinkles, texture, symmetry, and more). Get customized skincare and diet routines with secure auth and a polished animated UI.",
    highlights: [
      "AI skin analysis with detailed condition scoring",
      "AI beauty scoring using facial symmetry and golden ratio cues",
      "Personalized skincare and diet plans via questionnaire",
      "User authentication with better-auth (email/Google)",
      "Modern animated UI built on shadcn/ui, Framer Motion, and GSAP",
      "Premium subscription tier with mock payment flow"
    ],
    howItWorksSummary: [
      "User authenticates (email/password or Google via better-auth)",
      "Selfie is uploaded; Gemini API analyzes skin and facial metrics",
      "Scores and insights returned as structured JSON",
      "Questionnaire inputs refine personalized routines",
      "Results stored and retrieved via MongoDB/Prisma-backed APIs"
    ],
    techStackSummary: [
      "Framework: Next.js (App Router) + TypeScript",
      "Styling/UI: Tailwind CSS, shadcn/ui",
      "AI: Google Gemini API",
      "Auth: better-auth (email/password + Google)",
      "DB/ORM: MongoDB + Prisma",
      "Animations/Email: Framer Motion, GSAP, Nodemailer"
    ],
  },
  {
    id: 12,
    title: "Trailblazer – AI-Powered Mind Map Search Engine",
    description:
      "Search engine that visualizes results as an interactive mind map with AI-driven topic suggestions, relationships, and real-time updates.",
    repoUrl: "https://github.com/ysoc-team/trailblazer",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "OpenAI",
      "Mind Map",
      "Search",
      "Netlify"
    ],
    status: "ongoing",
    summary:
      "Trailblazer organizes web results into dynamic mind maps for faster exploration. AI suggests related topics, understands query context, and updates the visualization in real time.",
    highlights: [
      "Interactive mind map visualization for search results",
      "AI-powered suggestions and related concepts",
      "Real-time updates as users explore nodes",
      "Organized groupings based on relationships and relevance"
    ],
    howItWorksSummary: [
      "User enters a query; backend/AI analyzes context",
      "Results are grouped into nodes and edges in a mind map",
      "AI suggests related topics to expand the map",
      "Visualization updates in real time as the user interacts"
    ],
    techStackSummary: [
      "Frontend: HTML, CSS, JavaScript",
      "AI: OpenAI GPT APIs for query understanding/suggestions",
      "Visualization: Custom JavaScript mind map physics",
      "Deployment: Netlify (frontend)"
    ],
    readmeSource: "ysoc-team/trailblazer README",
  },
  {
    id: 13,
    title: "MemoriQ – Offline, Privacy‑First Memory Assistance",
    description:
      "Android app that helps people with memory loss using fully offline, on‑device AI for note recall, reminiscence, and personalized quizzes. No cloud or logins required.",
    repoUrl: "https://github.com/ysoc-team/memoriQ",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Expo",
      "React Native",
      "TypeScript",
      "SQLite",
      "llama.cpp",
      "Llama.rn",
      "On‑device AI",
      "RAG",
      "Hugging Face"
    ],
    status: "ongoing",
    summary:
      "MemoriQ runs entirely on‑device to protect privacy. It stores rich memory notes (text, images, audio), powers AI chat over your notes, generates recall quizzes, and offers a calming reminiscence mode—offline by design.",
    highlights: [
      "Comprehensive memory notes with text, images, audio, and image descriptions",
      "AI chat over personal notes using Retrieval‑Augmented Generation (local)",
      "Personalized two‑option recall quiz generated from your notes",
      "Reminiscence mode: soothing spoken scripts over selected memories",
      "Zero cloud dependence: data stays local; no accounts/logins needed"
    ],
    howItWorksSummary: [
      "On first run, downloads and caches small local models from Hugging Face",
      "Initializes SQLite DB (notes, tags, images, embeddings, recall scripts)",
      "Embeddings and recall scripts generated in background per note",
      "RAG chat retrieves relevant notes via cosine similarity on local vectors",
      "Reminiscence selects/reads top memories with TTS and gentle UI"
    ],
    techStackSummary: [
      "App: Expo + React Native (TypeScript)",
      "Local AI: Llama.rn (llama.cpp binding); models like LFM2‑350M, gemma‑300m, Qwen3‑0.6B",
      "Storage: SQLite with optimized schemas for embeddings/media",
      "Speech: expo‑speech TTS",
      "Tooling: EAS builds; offline‑first architecture"
    ],
    readmeSource: "ysoc-team/memoriQ README",
  },
  {
    id: 14,
    title: "Mutate‑X – Genomic Variant Impact Analyzer (Evo2)",
    description:
      "Full‑stack platform that predicts pathogenicity of DNA variants in seconds using Evo2 genomic LLM, with ClinVar comparison, confidence scoring, and PDF reports.",
    repoUrl: "https://github.com/ysoc-team/mutatex",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Next.js",
      "Tailwind",
      "shadcn/ui",
      "TypeScript",
      "FastAPI",
      "Modal Labs",
      "PyTorch",
      "Evo2",
      "ClinVar",
      "UCSC Genome API"
    ],
    status: "ongoing",
    summary:
      "Mutate‑X delivers near real‑time (≈<30s) pathogenicity predictions for variants with confidence scores, gene browser, multi‑assembly support (hg19/hg38), and side‑by‑side ClinVar validation.",
    highlights: [
      "GPU‑accelerated Evo2 inference on serverless Modal",
      "ClinVar concordance view and confidence scoring",
      "Genome assembly support (hg19/hg38 + custom via UCSC)",
      "Interactive gene/variant exploration and PDF export"
    ],
    howItWorksSummary: [
      "Frontend sends variant to FastAPI backend",
      "Backend dispatches Modal GPU job to run Evo2 inference",
      "Backend fetches ClinVar/UCSC context for comparison",
      "Results returned with categorical + numeric confidence; PDF available"
    ],
    techStackSummary: [
      "Frontend: Next.js (T3), Tailwind, shadcn/ui, React Query, TypeScript",
      "Backend: FastAPI, PyTorch, Evo2 model on Modal GPU (H100)",
      "Data/APIs: ClinVar (NCBI), UCSC Genome Browser API",
      "Deploy: Serverless GPU via Modal Labs"
    ],
    readmeSource: "ysoc-team/mutatex README",
  },
  {
    id: 15,
    title: "MutualChain – DeFi Insurance Pool with AI Risk Assessment",
    description:
      "Peer‑to‑peer insurance protocol using AI for risk scoring, smart contracts for automated claims, and ZK proofs for privacy; built for affordable, transparent coverage.",
    repoUrl: "https://github.com/ysoc-team/MutualChain",
    website: "https://mutualchain.io",
    image: "/placeholder-logo.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "RainbowKit",
      "Solidity",
      "Hardhat",
      "Chainlink",
      "zkSNARKs",
      "Federated Learning",
      "Flask",
      "Docker",
      "The Graph",
      "IPFS"
    ],
    status: "ongoing",
    summary:
      "MutualChain brings AI‑powered risk assessment, automated on‑chain claims, and zero‑knowledge privacy to community insurance pools, cutting costs and improving access for SMEs and gig workers.",
    highlights: [
      "AI risk scoring (XGBoost/Transformers) and federated learning",
      "Automated claims with Chainlink oracles and Layer‑2 settlement",
      "ZK proofs (zkSNARKs/zkSTARKs) for private verification",
      "Real‑time analytics via The Graph and time‑series dashboards"
    ],
    howItWorksSummary: [
      "Users join pools and submit policies via Next.js frontend",
      "Flask AI backend computes risk; premiums priced dynamically",
      "Smart contracts manage policies/claims; Chainlink triggers events",
      "ZK proofs ensure private validation; assets/documents on IPFS/Arweave"
    ],
    techStackSummary: [
      "Frontend: Next.js 14, Tailwind, Wagmi/Viem, RainbowKit, Recharts",
      "Smart Contracts: Solidity 0.8.x, Hardhat, Chainlink oracles, ERC‑4337",
      "AI/Backend: Python Flask; XGBoost/Transformers; Federated Learning; GANs for fraud",
      "Infra: Docker, The Graph, IPFS/Arweave; L2s: Arbitrum/Optimism/Base"
    ],
    readmeSource: "ysoc-team/MutualChain README",
  },
  {
    id: 16,
    title: "Agent Orchestra – Multimodal AI Agents for Personalized Learning",
    description:
      "A multi‑agent learning platform that orchestrates specialized AI agents (curriculum, content, assessment, tutoring, feedback, progress) with real‑time adaptation and a seven‑layer architecture.",
    repoUrl: "https://github.com/ysoc-team/agentOrchestra",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Agents",
      "Personalized Learning",
      "Multimodal",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "Neo4j",
      "Pinecone",
      "Milvus"
    ],
    status: "ongoing",
    summary:
      "Intelligent multi‑agent system that guides, teaches, evaluates, and adapts to learners in real time. Orchestrator enforces consensus across agents, while knowledge graphs and analytics personalize the path.",
    highlights: [
      "Seven‑layer architecture from UI to continual learning",
      "Specialized agents for curriculum, content, assessment, feedback, tutoring, and progress",
      "Cross‑agent review, meta‑audit, and adaptive rewards for reliability",
      "Multimodal inputs (text/voice/vision/handwriting) and emotion‑aware feedback"
    ],
    howItWorksSummary: [
      "Student interacts via chat/voice/whiteboard → inputs parsed by multimodal layer",
      "Analytics + causal inference derive blockers and mastery states",
      "Orchestrator routes tasks to agents and enforces consensus",
      "Knowledge graph + vector DB update mastery and context; continual learning tunes policies"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript",
      "AI/Agents: Python, TensorFlow/PyTorch, LangChain, Whisper, OpenCV",
      "Data/Knowledge: Neo4j, Pinecone/Milvus, Redis, PostgreSQL/MongoDB",
      "Backend/Orchestration: FastAPI/Flask, Celery, GraphQL, Socket.IO, Ray, JWT"
    ],
    readmeSource: "ysoc-team/agentOrchestra README",
  },
  {
    id: 17,
    title: "Coral AI Wallet Assistant – Solana Web3 Copilot",
    description:
      "AI-powered assistant for Solana that answers wallet questions, analyzes transactions/NFTs, and surfaces staking insights with a clean dashboard UI.",
    repoUrl: "https://github.com/ysoc-team/coralai",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Solana",
      "Web3",
      "Vite",
      "TypeScript",
      "React",
      "shadcn/ui",
      "Tailwind"
    ],
    status: "ongoing",
    summary:
      "Connect a Solana wallet and chat with your on-chain activity. Get balances, recent NFT purchases, portfolio trends, and staking opportunities via a natural AI interface.",
    highlights: [
      "Conversational portfolio insights (balances, NFTs, transactions)",
      "Secure wallet integration; client‑side only with public data",
      "Portfolio dashboard with charts and NFT gallery",
      "Solana‑specific features: Token Extensions, Blinks, Mobile Stack"
    ],
    howItWorksSummary: [
      "User connects a Solana wallet",
      "On‑chain data fetched via Solana RPC/APIs and summarized",
      "AI assistant answers queries and recommends actions",
      "Dashboard visualizes tokens, NFTs, and spend trends"
    ],
    techStackSummary: [
      "Frontend: Vite + React + TypeScript",
      "UI: shadcn/ui + Tailwind CSS",
      "APIs: Solana RPC + supporting ecosystem SDKs",
      "Security: No key storage; client‑side encryption for local data"
    ],
    readmeSource: "ysoc-team/coralai README",
  },
  {
    id: 18,
    title: "HerShield – AI‑Powered Guardian for Women’s Safety",
    description:
      "Streamlit app for women’s safety with live map, emergency SMS via Twilio, AI assistant, text‑to‑speech guidance, and dataset‑driven insights.",
    repoUrl: "https://github.com/ysoc-team/hershield",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "Streamlit",
      "Folium",
      "Twilio",
      "OpenAI",
      "gTTS",
      "Pandas",
      "PandasAI"
    ],
    status: "ongoing",
    summary:
      "Quickly locate safe zones, trigger SMS alerts, and get AI‑generated safety recommendations in one lightweight, privacy‑minded web app.",
    highlights: [
      "Geolocation maps of safe zones and emergency contacts (Folium)",
      "Emergency SMS alerts using Twilio",
      "AI safety assistant for recommendations",
      "Text‑to‑speech audio guidance with gTTS",
      "Dataset analysis with Pandas/PandasAI"
    ],
    howItWorksSummary: [
      "Open Streamlit app and grant location permissions (optional)",
      "Map renders safe zones/contacts; user can trigger SMS alerts",
      "AI assistant answers safety questions and shares resources",
      "Audio guidance generated on demand for quick instructions"
    ],
    techStackSummary: [
      "App: Streamlit (Python)",
      "Mapping: Folium",
      "Messaging: Twilio SMS",
      "AI: OpenAI for assistant; gTTS for TTS",
      "Data: Pandas/PandasAI"
    ],
    readmeSource: "ysoc-team/hershield README",
  },
  {
    id: 19,
    title: "Wildfire Risk Prediction System",
    description:
      "Web app that estimates real‑time wildfire risk for U.S. locations using environmental features, with map input, automatic data fetching, and color‑coded risk levels.",
    repoUrl: "https://github.com/ysoc-team/wildfirepredictorai",
    website: "https://wildfire-web-app.onrender.com",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "Flask",
      "Random Forest",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Geopy",
      "Requests",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    status: "ongoing",
    summary:
      "Enter coordinates or pick on a map to get instant wildfire risk probabilities. The app fetches weather, vegetation, and terrain data automatically, or accepts manual inputs for custom scenarios.",
    highlights: [
      "Interactive map input and manual coordinate entry",
      "Auto‑fetch of weather/vegetation/terrain (optional)",
      "Color‑coded risk bands: Low, Moderate, High, Extreme",
      "Responsive UI for desktop and mobile",
      "REST API for programmatic predictions"
    ],
    howItWorksSummary: [
      "User selects coordinates or inputs lat/long",
      "System retrieves environmental features (or uses manual inputs)",
      "Random Forest model predicts wildfire risk probability",
      "Results shown with color band + optional map overlay"
    ],
    techStackSummary: [
      "ML: Random Forest (scikit‑learn) over engineered features",
      "Backend: Python + Flask APIs",
      "Frontend: HTML/CSS/JS with interactive map",
      "Data: NASA FIRMS, USGS Elevation, optional OpenWeatherMap"
    ],
    readmeSource: "ysoc-team/wildfirepredictorai README",
  },
  {
    id: 20,
    title: "Twin Aluminai — College Alumni Networking Platform",
    description:
      "Open‑source platform connecting alumni, students, and faculty with profiles, community feed, job board, mentorship, and events — built for scalable campus networks.",
    repoUrl: "https://github.com/ysoc-team/Twin-aluminia",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OAuth",
      "REST",
      "Socket.io"
    ],
    status: "ongoing",
    summary:
      "Helps institutions strengthen alumni ecosystems: verified profiles, mentorship requests, jobs/internships, communities, and event management with secure auth.",
    highlights: [
      "Verified alumni/student profiles with role‑aware access",
      "Community feed for updates, achievements, and opportunities",
      "Job board for internships and openings",
      "Mentorship matching and collaboration requests",
      "Events & webinars with registration and tracking"
    ],
    howItWorksSummary: [
      "Users authenticate (JWT/OAuth) and create rich profiles",
      "Community feed enables posting and discovery of opportunities",
      "Mentorship requests connect students with alumni mentors",
      "Events are listed with registration; participation tracked"
    ],
    techStackSummary: [
      "Frontend: React + Chakra UI (optional real‑time via Socket.io)",
      "Backend: Node.js / Express (REST APIs)",
      "Database: MongoDB",
      "Hosting: Vercel/Render; CI ready"
    ],
    readmeSource: "ysoc-team/Twin-aluminia README",
  },
  {
    id: 21,
    title: "SpeakEZ – Giving Voice to the Voiceless",
    description:
      "Mobile‑first, accessible communication app with Text‑to‑Speech, intelligent suggestions, favorites, and contextual phrase buttons for non‑verbal users.",
    repoUrl: "https://github.com/ysoc-team/speakez",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Accessibility",
      "Web Speech API"
    ],
    status: "ongoing",
    summary:
      "Type or tap phrases and SpeakEZ speaks them out loud. Smart suggestions and offline favorites make everyday communication fast, inclusive, and reliable.",
    highlights: [
      "Web Speech API Text‑to‑Speech with always‑visible Emergency button",
      "AI‑powered contextual phrase suggestions (Groq/OpenAI/Gemini supported)",
      "Favorites and custom phrase sets stored locally (offline)",
      "WCAG‑aligned UI: high contrast, large touch targets, keyboard support"
    ],
    howItWorksSummary: [
      "User types or taps a phrase",
      "TTS engine converts text to natural speech",
      "Suggestions adapt to context and usage patterns",
      "Favorites/custom phrases persist via LocalStorage"
    ],
    techStackSummary: [
      "Framework: Next.js + React + TypeScript",
      "UI: Tailwind CSS (mobile‑first)",
      "TTS: Browser Web Speech API (pluggable)",
      "AI: Groq/OpenAI/Gemini integrations (env‑configurable)"
    ],
    readmeSource: "ysoc-team/speakez README",
  },
  {
    id: 22,
    title: "RetailBrain AI – Intelligent Commerce Platform",
    description:
      "Multi‑context shopping and operations assistant with emotional commerce, predictive inventory, autonomous supply chain, crisis resilience, and unified analytics.",
    repoUrl: "https://github.com/ysoc-team/retailbrain",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "TypeScript",
      "Vite",
      "React",
      "Agents",
      "Supply Chain",
      "Predictive Analytics"
    ],
    status: "ongoing",
    summary:
      "From mood‑aware shopping to GPU‑fast logistics simulations, RetailBrain coordinates sourcing, routing, and inventory under normal and crisis conditions with unified checkout and insights.",
    highlights: [
      "Emotional Commerce Engine for mood‑based personalization",
      "Predictive Inventory for trend/crisis anticipation",
      "Autonomous supply chain: sourcing, logistics, and routing simulators",
      "Crisis resilience: alerts, alternative sourcing, priority shipping",
      "Unified shopping and analytics with consolidated checkout"
    ],
    howItWorksSummary: [
      "Front‑end orchestrates modules (tabs/modals) for scenarios",
      "Interactive engines simulate trends, sourcing, and logistics",
      "Decision support surfaces routes, suppliers, and allocations",
      "Unified checkout composes multi‑context purchases"
    ],
    techStackSummary: [
      "App: Vite + React + TypeScript",
      "Modules: Interactive simulators and AI service adapters",
      "Services: Pluggable Gemini/LLM service layer (env‑based)",
      "Design: Componentized tabs, cards, and modals"
    ],
    readmeSource: "ysoc-team/retailbrain README",
  },
]


