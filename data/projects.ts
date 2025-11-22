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
  {
    id: 23,
    title: "Ideagen Studio — AI Film Production Suite",
    description:
      "Fully integrated, cloud-powered production studio with AI-generated scenes, lifelike voiceovers, and in-browser video merging—designed for directors who want cinematic quality without leaving the browser.",
    repoUrl: "https://github.com/ysoc-team/ideagen",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "FFmpeg.wasm",
      "AI",
      "Video Generation",
      "Voiceover",
      "Gemini",
      "Cerebras"
    ],
    status: "ongoing",
    summary:
      "Scene-by-scene AI film production suite that routes prompts through a secure backend, renders clips with models like Gemini and Cerebras, layers AI voiceovers, and fuses everything locally via FFmpeg.wasm for a private final cut.",
    highlights: [
      "Cloud-powered AI core with Gemini/Cerebras switching",
      "Interactive storyboard editor with real-time clip previews",
      "AI voiceover selector with tonal presets (calm, cheerful, deep)",
      "100% in-browser final merge using FFmpeg.wasm for privacy",
      "Sleek Tailwind-powered UI optimized for creators"
    ],
    howItWorksSummary: [
      "Creators script scenes and pick AI engines/voice styles in the React studio",
      "Backend orchestrates requests across Gemini, Cerebras, and optional ElevenLabs voice APIs",
      "Rendered clips stream back into the storyboard for review and tweaks",
      "Final video is stitched locally via FFmpeg.wasm so media never leaves the device"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript + Tailwind (Vite)",
      "Backend: Node.js + Express AI routing layer",
      "AI Engines: Google Gemini, Cerebras, ElevenLabs voiceover",
      "Video Processing: FFmpeg.wasm (browser-side)",
      "Infrastructure: LiquidMetal Raindrop AI on Vultr cloud GPUs"
    ],
    readmeSource: "ysoc-team/ideagen README",
  },
  {
    id: 24,
    title: "Spooktrunt — Haunted Architectural Intelligence",
    description:
      "Unified architectural playground where haunted creativity meets engineering rigor. Design floating cities, cursed cathedrals, and surreal structures while AI keeps them structurally grounded.",
    repoUrl: "https://github.com/ysoc-team/spooktrunt",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "AR",
      "AI",
      "Vertex AI",
      "Gemini",
      "Node.js",
      "Google Cloud"
    ],
    status: "ongoing",
    summary:
      "Spooktrunt turns poetic prompts into levitating towers, spiral bridges, or bone cathedrals, then runs feasibility audits, energy checks, and material swaps so the impossible becomes buildable.",
    highlights: [
      "Freeform designer for floating floors, cursed bridges, and surreal towers",
      "AI feasibility analyzer covering stability, energy, materials, and cost",
      "AR/3D walkthroughs to explore haunted or futuristic structures",
      "Blueprint revival to modernize legacy plans with AI suggestions",
      "JSON/GLTF skeleton templates seeded with mutation logic"
    ],
    howItWorksSummary: [
      "Creators drag/drop surreal geometry or describe it in natural language",
      "Gemini + custom engines convert prompts into JSON/GLTF structures",
      "Feasibility analyzer simulates hover physics, materials, and costs",
      "AR portal loads assets so users can wander inside cursed cathedrals",
      "Mutation tools iterate designs with constraint-aware placement"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript (Vite) with 3D/AR components",
      "Backend: Node.js services for model generation and analysis",
      "AI: Google Gemini + Vertex AI pipelines for prompts and feasibility",
      "Infra: Google Cloud (Cloud Run, Functions, Firestore, GCS, Pub/Sub)",
      "Tooling: Cloud Build, Artifact Registry, Cloud Armor, Cloud CDN"
    ],
    readmeSource: "ysoc-team/spooktrunt README",
  },
  {
    id: 25,
    title: "AuraFarmer – AURA Telegram Bot with Groq AI",
    description:
      "AI-powered Telegram bot that leverages Groq's fast inference for intelligent analysis and automation, with database migrations and containerized deployment.",
    repoUrl: "https://github.com/ysoc-team/AuraFarmer",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "JavaScript",
      "Node.js",
      "Telegram Bot",
      "Groq",
      "AI",
      "Docker",
      "Bot API"
    ],
    status: "ongoing",
    summary:
      "Telegram bot powered by Groq AI for fast, intelligent analysis and automated responses. Containerized for easy deployment with migration support for database schema management.",
    highlights: [
      "Groq AI integration for high-speed inference and analysis",
      "Telegram Bot API for seamless user interactions",
      "Database migration system for schema versioning",
      "Dockerized deployment for consistent environments",
      "Environment-based configuration for flexible setups"
    ],
    howItWorksSummary: [
      "Users interact with the bot via Telegram commands or messages",
      "Bot processes requests and routes them to Groq analyzer module",
      "Groq AI performs fast inference and returns intelligent responses",
      "Results are formatted and sent back to users via Telegram",
      "Database migrations handle schema updates on deployment"
    ],
    techStackSummary: [
      "Core: Node.js + JavaScript",
      "Bot Framework: Telegram Bot API",
      "AI Engine: Groq for fast inference",
      "Database: Migration system for schema management",
      "Deployment: Docker containerization",
      "Configuration: Environment-based settings"
    ],
  },
  {
    id: 26,
    title: "ChoreoRockstar – AI That Feels the Dance",
    description:
      "Revolutionary AI-powered dance analysis platform featuring AI-Lex, an empathetic AI dance mentor that evaluates technique, emotion, musicality, and artistic presence. Combines multimodal AI, voice synthesis, and cinematic UI to transform every performance into a personalized artistic dialogue.",
    repoUrl: "https://github.com/ysoc-team/Choreography-",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "Dance",
      "Google Gemini",
      "Cerebras",
      "ElevenLabs",
      "Vultr",
      "Firebase",
      "Next.js",
      "TypeScript",
      "Vite",
      "FastAPI",
      "TailwindCSS",
      "Framer Motion",
      "LiquidMetal",
      "Raindrop AI",
      "Computer Vision",
      "Voice AI",
      "Emotion Detection"
    ],
    status: "ongoing",
    summary:
      "ChoreoRockstar democratizes artistic excellence by giving every dancer access to AI-powered professional critique. AI-Lex analyzes not just technique but emotion, rhythm, and stage presence, delivering personalized feedback with empathy and precision through voice narration and cinematic animations.",
    highlights: [
      "AI-Lex persona: Adaptive choreographic mentor with empathy and flair",
      "Multimodal analysis: Posture, rhythm, emotion, costume, and stage presence",
      "Voice-narrated feedback via ElevenLabs with professional critique tone",
      "Emotion Gradient Model (EGM) quantifies facial energy and microexpressions",
      "Rockstar celebration mode: Confetti and neon animations for high scores (≥85)",
      "LiquidMetal Engine for ultra-fluid frame-by-frame rendering",
      "Privacy-first: Client-side processing, ephemeral feedback sessions"
    ],
    howItWorksSummary: [
      "User uploads 15-second dance video or keyframe image",
      "Media processor extracts frames and audio client-side",
      "Gemini Vision + Raindrop AI analyze posture, emotion, and rhythm patterns",
      "Cerebras Cloud executes deep neural scoring for technique evaluation",
      "AI-Lex generates structured feedback (0-100 score + personalized Rockstar Tip)",
      "ElevenLabs synthesizes empathetic voice narration of critique",
      "LiquidMetal renders cinematic UI with glassmorphism and particle motion",
      "High-scoring performances trigger celebratory confetti and stage animations"
    ],
    techStackSummary: [
      "Frontend: Next.js 15 + TypeScript + Vite, TailwindCSS, Framer Motion",
      "AI Analysis: Google Gemini Vision (Vertex AI), PoseNet, EmotionNet",
      "Compute: Cerebras Cloud (neural scoring), Vultr Cloud (GPU inference)",
      "Voice AI: ElevenLabs SSML API for narrated feedback",
      "Pattern Recognition: Raindrop AI for rhythm and choreography motifs",
      "Backend: FastAPI + Node.js hybrid orchestration layer",
      "Storage/Auth: Firebase (Cloud Storage, performance logs)",
      "Rendering: LiquidMetal Engine (custom frame analysis)",
      "Deploy: Vercel (frontend), Google Cloud Run (API), Docker, GitHub Actions"
    ],
    readmeSource: "ysoc-team/Choreography- README",
  },
  {
    id: 27,
    title: "FutureMind Pro – Scientifically Accurate Future Prediction App",
    description:
      "AI-powered prediction platform combining psychological science, behavioral analytics, and voice analysis to make scientifically accurate predictions about career, health, relationships, and personal growth — not fortune-telling, but science-backed human prediction.",
    repoUrl: "https://github.com/ysoc-team/futuremind-pro",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "Psychology",
      "Behavioral Analytics",
      "Voice Analysis",
      "Google Cloud",
      "GCP",
      "Vertex AI",
      "BigQuery",
      "Cloud Run",
      "Speech-to-Text",
      "Machine Learning",
      "Prediction",
      "Truth Detection"
    ],
    status: "ongoing",
    summary:
      "FutureMind Pro combines psychological science, behavioral analytics, and AI pattern recognition to deliver scientifically accurate predictions about your future. Using voice analysis, truth detection, and data-driven behavioral models, it provides insights on career, health, relationships, and personal growth.",
    highlights: [
      "Voice analysis technology reads emotion, honesty, and intent from speech patterns",
      "Truth detection system using acoustic features and linguistic markers",
      "Scientific prediction pipeline based on psychology research and behavioral data",
      "Multi-domain predictions: career trajectory, health outcomes, relationship patterns, personal growth",
      "Built on GCP infrastructure with Vertex AI, BigQuery, and Cloud Run",
      "Evidence-based approach using validated psychological models and pattern recognition"
    ],
    howItWorksSummary: [
      "User provides voice responses to structured psychological assessments",
      "Voice analysis extracts acoustic features (pitch, tone, pace, emotion) via Speech-to-Text",
      "Truth detection algorithms analyze linguistic patterns and voice stress indicators",
      "Behavioral analytics engine processes questionnaire data and voice metrics",
      "AI models trained on psychological research predict future outcomes across life domains",
      "Results presented with confidence scores and scientific explanations for predictions"
    ],
    techStackSummary: [
      "AI/ML: Google Vertex AI, TensorFlow, PyTorch for prediction models",
      "Voice Tech: Speech-to-Text API, acoustic feature extraction, emotion detection",
      "Data Platform: BigQuery for analytics, Firestore for user data",
      "Backend: Cloud Run, Cloud Functions, FastAPI/Flask",
      "Frontend: React/Next.js with real-time voice recording interface",
      "Infrastructure: GKE for orchestration, Cloud Storage for voice data, Pub/Sub for processing",
      "Monitoring: Cloud Monitoring, Cloud Logging, Operations Suite"
    ],
  },
  {
    id: 28,
    title: "NeuraPath – Discover Your Authentic Career Path",
    description:
      "Neuroscience-driven, AI-powered career guidance platform that analyzes cognitive strengths, personality traits, and bias influences to help users discover authentic career paths. Features 3D cognitive mapping, bias filtering, and personalized portfolio generation.",
    repoUrl: "https://github.com/ysoc-team/neurapath",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "Career Guidance",
      "Neuroscience",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "TensorFlow",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Firebase",
      "Vercel",
      "Machine Learning",
      "3D Visualization",
      "Cognitive Science"
    ],
    status: "ongoing",
    summary:
      "NeuraPath is a scientific, interactive career guidance platform that quantifies cognitive strengths with neuroscience-backed tests, filters external biases, and recommends AI-aligned careers. It generates personalized portfolios and provides objective, data-driven insights for authentic career decisions.",
    highlights: [
      "Gamified cognitive assessment capturing logic, creativity, and emotional intelligence",
      "Interactive 3D neural network mapping personality traits (OCEAN) to skills",
      "Bias Filter Engine quantifies external influences and reveals authentic self",
      "AI-driven career recommendations with compatibility scores and skill development paths",
      "Portfolio Lab generates personalized, deployable portfolio websites",
      "Emotion Mode dynamically adapts UI based on user mood using affective computing",
      "Insights Dashboard visualizes longitudinal cognitive growth and career progress",
      "Science-backed approach filters parental, societal, and peer pressures"
    ],
    howItWorksSummary: [
      "User completes gamified Self-Discovery Module with adaptive questions and challenges",
      "System generates dynamic cognitive profile across multiple dimensions",
      "3D Cognitive Map visualizes personality traits and skill interconnections",
      "Bias Filter Engine applies statistical models to separate internal traits from external pressures",
      "Career Alignment Engine uses ML models to calculate career compatibility scores",
      "Portfolio Lab aligns portfolio style and content with user's authentic strengths",
      "Emotion Mode adapts interface colors and animations based on user mood",
      "Insights Dashboard tracks cognitive evolution and exports AI-generated reports"
    ],
    techStackSummary: [
      "Frontend/UI: React.js + TypeScript + Framer Motion for interactive animations",
      "3D Visualization: React Three Fiber + Three.js for immersive neural maps",
      "Backend/API: FastAPI + Python for AI, bias filtering, cognitive analysis",
      "AI/ML: TensorFlow.js (client), TensorFlow + Scikit-learn (server)",
      "Cognitive Models: OCEAN personality mapping, bias separation algorithms",
      "Database/Auth: Firebase for authentication and real-time data",
      "Deployment: Vercel for zero-config frontend hosting",
      "Affective Computing: Emotion detection for dynamic UI adaptation"
    ],
    readmeSource: "ysoc-team/neurapath README",
  },
  {
    id: 29,
    title: "NeuroFinance – Your Brain Meets Your Budget",
    description:
      "First neuro-emotional AI assistant that monitors users in real-time to prevent impulsive financial losses. Uses Emotional Confidence Score (ECS) combining facial cues, typing patterns, and behavioral signals to intercept risky transactions during cognitive vulnerability.",
    repoUrl: "https://github.com/ysoc-team/NEUROFINACE",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "FinTech",
      "Behavioral Cybersecurity",
      "Python",
      "TensorFlow",
      "TensorFlow Lite",
      "D3.js",
      "Facial Recognition",
      "Emotion Detection",
      "Behavioral Analytics",
      "Go",
      "Machine Learning",
      "Biometrics",
      "Real-time Analytics",
      "On-Device ML",
      "Security",
      "Financial Security"
    ],
    status: "ongoing",
    summary:
      "NeuroFinance protects users from financial losses during cognitive vulnerability—panic, stress, distraction. Unlike traditional FinTech that checks account validity, NeuroFinance monitors rationality of mind, detecting emotional phishing and preventing impulsive transactions through real-time fusion AI.",
    highlights: [
      "Emotional Confidence Score (ECS): Fusion of emotional, cognitive, and behavioral risk factors",
      "Real-time interception: Blocks transactions when ECS < 50% during vulnerability",
      "Multi-factor analysis: Facial stress (50%), typing patterns (30%), transaction behavior (20%)",
      "Privacy-first: On-device ML with TensorFlow Lite keeps emotional data local",
      "D3.js Radar Chart for transparent factor visualization",
      "D3.js Line Chart for continuous ECS monitoring",
      "NeuroBadge gamification rewards healthy financial habits",
      "API-ready for M-Pesa, MTN, and African commercial banks"
    ],
    howItWorksSummary: [
      "System continuously monitors user through facial recognition, typing patterns, and behavior",
      "Emotional Risk engine analyzes facial cues for stress and anxiety (50% weight)",
      "Cognitive Risk engine tracks typing speed and error rates for distraction (30% weight)",
      "Behavioral Risk engine flags unusual patterns: new recipients, large amounts, off-hours (20% weight)",
      "Fusion AI Engine calculates Emotional Confidence Score (ECS) in real-time",
      "When ECS drops below 50%, transaction is intercepted with gentle friction UI",
      "D3.js dashboard visualizes risk factors and ECS trends for user awareness",
      "NeuroBadge system gamifies emotional and financial health improvements"
    ],
    techStackSummary: [
      "AI/ML: Python + TensorFlow for model training, TensorFlow Lite for on-device inference",
      "Biometrics: Facial recognition for stress/anxiety detection, EEG support",
      "Behavioral Analytics: Typing speed, error rate, transaction pattern analysis",
      "Visualization: D3.js for real-time radar charts and line graphs",
      "Backend: Go services for high-performance API layer",
      "Frontend: HTML/CSS/JS with cyber-neon UI design",
      "Security: On-device ML processing, encrypted data storage",
      "Integration: API-ready for African FinTech platforms (M-Pesa, MTN, banks)",
      "Demo: Jupyter notebooks for interactive demonstrations"
    ],
    readmeSource: "ysoc-team/NEUROFINACE README",
  },
  {
    id: 30,
    title: "SRG – Smart Recycling Guide",
    description:
      "A Flutter mobile application that helps users identify recyclable materials and provides guidance on proper recycling practices to promote environmental sustainability.",
    repoUrl: "https://github.com/ysoc-team/SRG-Smart-Recycling-Guide-",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Flutter",
      "Dart",
      "Mobile",
      "iOS",
      "Android",
      "Sustainability",
      "Recycling",
      "Environmental"
    ],
    status: "ongoing",
    summary:
      "Smart Recycling Guide (SRG) is a cross-platform Flutter app designed to help users make informed recycling decisions by identifying materials and providing location-specific recycling guidance.",
    highlights: [
      "Cross-platform support for iOS and Android",
      "Material identification and recycling guidance",
      "Location-based recycling information",
      "User-friendly interface for sustainable practices"
    ],
    howItWorksSummary: [
      "Users scan or input items they want to recycle",
      "App identifies material type and recyclability status",
      "Provides location-specific recycling instructions",
      "Guides users to nearest recycling centers if needed"
    ],
    techStackSummary: [
      "Framework: Flutter (Dart)",
      "Platform: iOS and Android support",
      "UI: Material Design components",
      "Features: Camera integration, location services, offline capabilities"
    ],
    readmeSource: "ysoc-team/SRG-Smart-Recycling-Guide- README",
  },
  {
    id: 31,
    title: "NeuroGuard – Biosignal API and Consent Ledger",
    description:
      "FastAPI backend for NeuroGuard system that reads biosignal data (EEG), processes it via simulated AI analysis, and handles immutable consent logging using a blockchain-based smart contract ledger.",
    repoUrl: "https://github.com/ysoc-team/blockchain",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "FastAPI",
      "Solidity",
      "Blockchain",
      "EEG",
      "Biosignals",
      "Healthcare",
      "Smart Contracts",
      "web3.py",
      "mne",
      "yasa",
      "Cryptography"
    ],
    status: "ongoing",
    summary:
      "NeuroGuard provides a secure, blockchain-backed system for managing biosignal data and patient consent. The FastAPI backend processes EEG signals with AI simulation while maintaining immutable consent records on-chain.",
    highlights: [
      "Real-time biosignal reading via serial port with mock data fallback",
      "AI-driven biosignal processing and anomaly detection simulation",
      "Blockchain-based consent ledger using Solidity smart contracts",
      "Immutable consent records with patient IDs, timestamps, and signatures",
      "Robust fallback mechanism for hardware-free development and testing"
    ],
    howItWorksSummary: [
      "System reads biosignal data from connected device (or uses mock data)",
      "FastAPI backend processes signals through simulated AI analysis",
      "Consent status and data logs are recorded on blockchain ledger",
      "Smart contract ensures immutable consent records with cryptographic signatures",
      "API endpoints provide live biosignal data and consent ledger status"
    ],
    techStackSummary: [
      "Backend: Python + FastAPI",
      "Blockchain: Solidity (NeuroGuardConsentLedger.sol)",
      "Web3: web3.py for blockchain interactions",
      "Signal Processing: mne (EEG), yasa (sleep stage analysis)",
      "Security: cryptography library for consent signatures",
      "Infrastructure: Uvicorn ASGI server"
    ],
    readmeSource: "ysoc-team/blockchain README",
  },
  {
    id: 32,
    title: "Full-Stack Buddy – AI-Powered Code Generator",
    description:
      "AI-powered development assistant that instantly generates Frontend, Backend, or Full-Stack solutions from a single prompt, helping developers prototype faster and streamline workflows.",
    repoUrl: "https://github.com/ysoc-team/Full-Stack-Buddy",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Gemini",
      "AI",
      "Code Generation",
      "Vite",
      "Full-Stack",
      "Developer Tools"
    ],
    status: "ongoing",
    summary:
      "Full-Stack Buddy is an AI-powered code generator that transforms a single prompt into complete frontend, backend, or full-stack solutions with structured code, explanations, and secure API key management.",
    highlights: [
      "Full-stack code generation from one prompt (Frontend, Backend, or Full-Stack)",
      "Tabbed code display with syntax highlighting for Overview, Backend, and Frontend",
      "Secure API key manager with validation and localStorage persistence",
      "Clean React + TypeScript UI with modular components",
      "Node.js/Express backend integration with Gemini API",
      "Persistent settings with secure localStorage"
    ],
    howItWorksSummary: [
      "User enters task or idea in the prompt input",
      "Selects generation type: Backend Only, Frontend Only, or Full-Stack",
      "Gemini API generates structured JSON with overview, backend, and frontend code",
      "Results displayed in organized tabs with syntax highlighting",
      "API keys managed securely with masked display and validation"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript, Vite, CSS Modules, Styled Components",
      "Backend: Node.js + Express",
      "AI: Google Gemini API integration",
      "UI: React Syntax Highlighter, LocalStorage persistence",
      "Deployment: Netlify (frontend), AWS/GCP/Azure support"
    ],
    readmeSource: "ysoc-team/Full-Stack-Buddy README",
  },
  {
    id: 33,
    title: "Neuronattar – Multi-Source Sleep & Wellness Intelligence",
    description:
      "Advanced sleep and wellness tracking platform using multi-source data inputs, Fivetran ETL pipelines, Elastic Graph Database, and Gemini AI to provide comprehensive health insights through a 7-tab dashboard.",
    repoUrl: "https://github.com/ysoc-team/neuronattar",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "Python",
      "Jupyter Notebook",
      "Fivetran",
      "Elasticsearch",
      "Graph Database",
      "Gemini",
      "AI",
      "ETL",
      "Healthcare",
      "Wellness",
      "Sleep Tracking",
      "Data Analytics"
    ],
    status: "ongoing",
    summary:
      "Neuronattar aggregates multi-source wellness data through Fivetran ETL pipelines, stores relationships in an Elastic Graph DB, and leverages Gemini AI to deliver actionable health insights via an intelligent 7-tab dashboard.",
    highlights: [
      "Multi-source data ingestion from various wellness and sleep tracking devices",
      "Fivetran ETL pipeline for automated data transformation and loading",
      "Elastic Graph Database for complex relationship mapping",
      "Gemini AI-powered insights and recommendations",
      "Comprehensive 7-tab dashboard for health monitoring",
      "Sleep stage analysis, fatigue detection, and wind-down recommendations"
    ],
    howItWorksSummary: [
      "Multi-source inputs collect data from various wellness devices and apps",
      "Fivetran ETL pipeline processes and transforms raw data",
      "Elastic Graph DB stores interconnected health and wellness relationships",
      "Gemini AI analyzes patterns and generates personalized insights",
      "7-tab dashboard visualizes sleep, energy, fatigue, and recommendations",
      "Intelligent recommendations adapt based on user patterns and goals"
    ],
    techStackSummary: [
      "Data Processing: Python, Jupyter Notebooks",
      "ETL: Fivetran for automated data pipelines",
      "Database: Elasticsearch with Graph Database capabilities",
      "AI: Google Gemini for intelligent analysis and recommendations",
      "Analytics: Data visualization and dashboard components",
      "Integration: Multi-source API connections for wellness data"
    ],
    readmeSource: "ysoc-team/neuronattar README",
  },
  {
    id: 34,
    title: "BioSynapse Cloud – The Living Intelligence of Earth",
    description:
      "Self-evolving AWS-based multi-intelligence ecosystem that learns from planetary data and human cognition, creating a living intelligence network for comprehensive environmental and biological insights.",
    repoUrl: "https://github.com/ysoc-team/BioSynapse",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AWS",
      "Machine Learning",
      "AI",
      "Multi-Intelligence",
      "Ecosystem",
      "Cloud",
      "Python",
      "Environmental Data",
      "Biological Intelligence",
      "Self-Evolving Systems"
    ],
    status: "ongoing",
    summary:
      "BioSynapse Cloud is a self-evolving multi-intelligence ecosystem built on AWS that continuously learns from Earth's systems and human cognition, creating adaptive insights for environmental and biological understanding.",
    highlights: [
      "Self-evolving intelligence that learns from planetary and human data",
      "AWS-based cloud infrastructure for scalable processing",
      "Multi-intelligence architecture integrating diverse data sources",
      "Continuous learning and adaptation mechanisms",
      "Comprehensive environmental and biological insights",
      "Living intelligence network that grows over time"
    ],
    howItWorksSummary: [
      "System ingests data from multiple planetary and biological sources",
      "AWS cloud infrastructure processes and stores vast datasets",
      "Multi-intelligence engines analyze patterns across domains",
      "Self-evolving algorithms adapt and learn from new information",
      "Living intelligence network synthesizes insights across systems",
      "Users access comprehensive insights through cloud-based interfaces"
    ],
    techStackSummary: [
      "Cloud: AWS (EC2, S3, Lambda, SageMaker, etc.)",
      "AI/ML: Machine learning models for pattern recognition",
      "Data Processing: Python-based processing pipelines",
      "Architecture: Multi-intelligence ecosystem design",
      "Storage: Distributed cloud storage for large-scale data",
      "Integration: APIs for diverse environmental and biological data sources"
    ],
    readmeSource: "ysoc-team/BioSynapse README",
  },
  {
    id: 35,
    title: "DreamGuardian – Sleep & Wellness for Seniors",
    description:
      "Sleep and wellness app for seniors that collects sleep data, analyzes it using AI, and displays actionable insights for both seniors and caregivers using TiDB Cloud and Chat2Query API for automated SQL generation.",
    repoUrl: "https://github.com/ysoc-team/dreamguardian",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "TiDB Cloud",
      "Chat2Query",
      "AI",
      "Healthcare",
      "Wellness",
      "Sleep Tracking",
      "Senior Care",
      "Caregiver Dashboard"
    ],
    status: "ongoing",
    summary:
      "DreamGuardian is a comprehensive sleep and wellness app designed for seniors, featuring AI-powered sleep analysis, caregiver dashboards, and TiDB Cloud's Chat2Query API for intelligent SQL generation and data insights.",
    highlights: [
      "Sleep data collection and analysis with AI-powered insights",
      "TiDB Cloud Chat2Query API for automatic SQL query generation",
      "Dedicated caregiver dashboard for monitoring and alerts",
      "User-friendly interface optimized for seniors",
      "Actionable wellness recommendations and guidance",
      "Secure data storage and privacy protection"
    ],
    howItWorksSummary: [
      "Users input sleep and wellness data through React frontend",
      "Data sent to TiDB Cloud via Chat2Query API for processing",
      "Chat2Query automatically generates and executes SQL queries",
      "AI analyzes patterns and generates actionable insights",
      "Results displayed to users and caregivers via dashboard",
      "Alerts and recommendations provided in real-time"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript, Vite",
      "Database: TiDB Cloud with Chat2Query Data App",
      "AI: Pattern analysis and insight generation",
      "UI: shadcn/ui components, Tailwind CSS",
      "Storage: TiDB Cloud database cluster",
      "Features: Sleep tracking, caregiver portal, wellness tips"
    ],
    readmeSource: "ysoc-team/dreamguardian README",
  },
  {
    id: 36,
    title: "InfoStream – Real-Time News Aggregator",
    description:
      "React-based application that aggregates and displays real-time news from various sources, providing users with up-to-date information across customizable categories with a user-friendly interface.",
    repoUrl: "https://github.com/ysoc-team/InfoStream",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "News",
      "Real-Time",
      "Data Aggregation",
      "API Integration",
      "Web App"
    ],
    status: "ongoing",
    summary:
      "InfoStream fetches news data from multiple APIs, processes the information, and presents it in an organized, user-friendly format with real-time updates and customizable news categories.",
    highlights: [
      "Real-time news updates from multiple sources",
      "User-friendly interface with customizable news categories",
      "Responsive design for optimal viewing on various devices",
      "Efficient data aggregation and processing",
      "Organized presentation of news articles"
    ],
    howItWorksSummary: [
      "System fetches news data from multiple API sources",
      "Information is processed and categorized automatically",
      "Users can customize categories and preferences",
      "Real-time updates keep content fresh and current",
      "Results displayed in organized, user-friendly format"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript",
      "Data: Multiple news API integrations",
      "UI: Responsive design components",
      "Features: Category filtering, search, bookmarks",
      "Real-time: Live data updates and refresh"
    ],
    readmeSource: "ysoc-team/InfoStream README",
  },
  {
    id: 37,
    title: "AIEditor – AI-Powered Text Editor",
    description:
      "React-based text editor enhanced with AI capabilities to assist users in writing and editing content more efficiently with grammar suggestions, style improvements, and real-time collaboration features.",
    repoUrl: "https://github.com/ysoc-team/aieditor",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "AI",
      "Text Editor",
      "Natural Language Processing",
      "Writing Assistant",
      "Grammar Check",
      "Collaboration"
    ],
    status: "ongoing",
    summary:
      "AIEditor utilizes AI models to analyze text input, providing real-time suggestions and corrections to improve writing quality, with support for multiple document formats and collaborative editing.",
    highlights: [
      "AI-driven grammar and style suggestions",
      "Real-time collaboration features",
      "Support for multiple document formats",
      "Intelligent writing assistance",
      "Context-aware recommendations",
      "Export and sharing capabilities"
    ],
    howItWorksSummary: [
      "User types or pastes text into the editor",
      "AI models analyze text in real-time",
      "Suggestions for grammar, style, and clarity provided",
      "Users can accept or reject recommendations",
      "Documents saved with version history",
      "Collaborative features enable team editing"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript",
      "AI: Language models for text analysis (GPT/Gemini)",
      "Editor: Rich text editing with syntax highlighting",
      "Collaboration: Real-time sync and comments",
      "Storage: Document persistence and versioning"
    ],
    readmeSource: "ysoc-team/aieditor README",
  },
  {
    id: 38,
    title: "SkillSync-AI – AI-Powered Peer Learning Platform",
    description:
      "Platform that connects learners with peers for collaborative learning experiences, leveraging AI to match users based on skills, interests, and learning goals for effective skill development.",
    repoUrl: "https://github.com/ysoc-team/SkillSync-AI",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "AI",
      "Peer Learning",
      "Education",
      "Matching Algorithm",
      "Collaboration",
      "Skills Development",
      "Social Learning"
    ],
    status: "ongoing",
    summary:
      "SkillSync-AI uses AI algorithms to analyze user profiles and learning goals, facilitating connections between compatible learners for mutual growth and skill development through peer-to-peer collaboration.",
    highlights: [
      "Intelligent peer matching based on skills and interests",
      "Support for a wide range of subjects and skill levels",
      "Community features for group discussions and resource sharing",
      "Personalized learning paths and recommendations",
      "Progress tracking and skill assessment",
      "Secure messaging and collaboration tools"
    ],
    howItWorksSummary: [
      "Users create profiles with skills, interests, and learning goals",
      "AI algorithms analyze profiles and match compatible learners",
      "Matched peers connect through the platform",
      "Collaborative learning sessions and resource sharing enabled",
      "Progress tracked and recommendations updated",
      "Community features support group learning activities"
    ],
    techStackSummary: [
      "Frontend: React/Next.js + TypeScript",
      "AI: Matching algorithms and recommendation systems",
      "Backend: Node.js/Express or Python/FastAPI",
      "Database: User profiles, skills, and match data",
      "Features: Messaging, video calls, resource sharing",
      "Analytics: Progress tracking and skill assessment"
    ],
    readmeSource: "ysoc-team/SkillSync-AI README",
  },
  {
    id: 39,
    title: "SafePath – Location-Aware Safety Navigation",
    description:
      "Mapping application designed to help users navigate safely by providing real-time information about route safety conditions, integrating with local law enforcement data for incident reports and alerts.",
    repoUrl: "https://github.com/ysoc-team/safepath",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React Native",
      "TypeScript",
      "Maps",
      "Navigation",
      "Safety",
      "Location Services",
      "Real-Time Updates",
      "Mobile"
    ],
    status: "ongoing",
    summary:
      "SafePath collects data from various sources, analyzes route safety, and offers users the safest paths to their destinations with real-time updates on safety conditions and incident reports.",
    highlights: [
      "Real-time updates on safety conditions of routes",
      "Integration with local law enforcement data for incident reports",
      "User-friendly interface with customizable route preferences",
      "Safe route recommendations based on historical data",
      "Community reporting for safety incidents",
      "Offline map support for reliable navigation"
    ],
    howItWorksSummary: [
      "User enters destination and preferences",
      "System collects safety data from multiple sources",
      "Routes analyzed for safety conditions and incidents",
      "Safest paths recommended with visual indicators",
      "Real-time updates alert users to safety changes",
      "Users can report incidents to help community"
    ],
    techStackSummary: [
      "Mobile: React Native + TypeScript",
      "Maps: Map integration (Google Maps/Mapbox)",
      "Location: GPS and geolocation services",
      "Data: Law enforcement APIs, community reports",
      "Features: Route planning, safety alerts, incident reporting",
      "Backend: Safety data aggregation and processing"
    ],
    readmeSource: "ysoc-team/safepath README",
  },
  {
    id: 40,
    title: "Rimo – Remote Monitoring System",
    description:
      "System designed for remote monitoring of various environments, providing real-time data and alerts to users through customizable alert settings and support for multiple sensor integrations.",
    repoUrl: "https://github.com/ysoc-team/rimo",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "IoT",
      "Remote Monitoring",
      "Sensors",
      "Real-Time Data",
      "Alerts",
      "Dashboard"
    ],
    status: "ongoing",
    summary:
      "Rimo collects data from connected sensors, processes the information, and provides users with real-time updates and alerts for environmental conditions, equipment status, and custom monitoring parameters.",
    highlights: [
      "Real-time monitoring of environmental conditions",
      "Customizable alert settings for different parameters",
      "Support for multiple sensor integrations",
      "Dashboard with visual data representation",
      "Historical data tracking and analytics",
      "Mobile and web access for remote monitoring"
    ],
    howItWorksSummary: [
      "Sensors collect data from monitored environments",
      "Data transmitted to Rimo system in real-time",
      "System processes and analyzes sensor readings",
      "Alerts triggered based on customizable thresholds",
      "Dashboard displays current status and historical trends",
      "Users receive notifications via multiple channels"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript",
      "IoT: Sensor integration and data collection",
      "Backend: Data processing and alert management",
      "Database: Time-series data storage",
      "Features: Real-time dashboards, alerts, analytics",
      "Communication: MQTT/WebSocket for real-time updates"
    ],
    readmeSource: "ysoc-team/rimo README",
  },
  {
    id: 41,
    title: "Plantologist – AI Plant Care Assistant",
    description:
      "Application that assists users in caring for their plants by providing personalized care schedules, reminders for watering and fertilizing, and optimal care recommendations based on plant species and local weather data.",
    repoUrl: "https://github.com/ysoc-team/plantologist",
    website: "",
    image: "/placeholder-logo.png",
    tags: [
      "React",
      "TypeScript",
      "AI",
      "Plant Care",
      "Weather Integration",
      "Reminders",
      "Gardening",
      "Mobile"
    ],
    status: "ongoing",
    summary:
      "Plantologist uses a database of plant care information, user input, and local weather data to generate customized care plans and reminders, helping users maintain healthy plants with personalized guidance.",
    highlights: [
      "Personalized care schedules based on plant species",
      "Reminders for watering, fertilizing, and other care tasks",
      "Integration with weather data for optimal care recommendations",
      "Plant identification and care database",
      "Progress tracking and plant health monitoring",
      "Seasonal care adjustments and tips"
    ],
    howItWorksSummary: [
      "Users add plants to their collection with species information",
      "System references plant care database for specific requirements",
      "Local weather data integrated for personalized recommendations",
      "Care schedule generated with automatic reminders",
      "Users track watering, fertilizing, and other care activities",
      "System adjusts recommendations based on season and weather"
    ],
    techStackSummary: [
      "Frontend: React + TypeScript",
      "Database: Plant species and care information",
      "Weather: Weather API integration for local conditions",
      "Notifications: Reminder system for care tasks",
      "Features: Plant identification, care logs, progress tracking",
      "Mobile: Responsive design for on-the-go use"
    ],
    readmeSource: "ysoc-team/plantologist README",
  },
]