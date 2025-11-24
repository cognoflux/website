import { ArrowRight, CheckCircle, MapPin, Clock } from "lucide-react";
import Link from "next/link";

// Mock data for jobs - in a real app, this would come from a CMS or API
const jobs = {
    "senior-frontend-engineer": {
        title: "Senior Frontend Engineer",
        type: "Full-time",
        location: "Remote / Noida",
        department: "Engineering",
        description: "We are looking for a Senior Frontend Engineer to lead the development of our high-performance trading interfaces and AI dashboards. You will work with cutting-edge technologies like Next.js, React Three Fiber, and WebGL to create immersive, real-time experiences that push the boundaries of web performance. Join us in building interfaces that handle millions of data points per second while maintaining buttery-smooth 60fps animations.",
        responsibilities: [
            "Architect and build scalable frontend applications using Next.js 14+, TypeScript, and modern React patterns.",
            "Implement complex 3D visualizations and data representations using Three.js, React Three Fiber, and custom WebGL shaders.",
            "Optimize application performance for low-latency data streaming, achieving sub-100ms render times for real-time market data.",
            "Design and implement reusable component libraries with comprehensive documentation and Storybook integration.",
            "Collaborate with UX designers to deliver pixel-perfect, accessible interfaces that exceed WCAG 2.1 AA standards.",
            "Lead code reviews and mentor junior engineers on best practices for performance optimization and clean architecture.",
            "Integrate real-time WebSocket connections for live trading data with automatic reconnection and state recovery.",
            "Implement comprehensive testing strategies using Jest, React Testing Library, and Playwright for E2E testing."
        ],
        requirements: [
            "5+ years of professional experience with React and the modern JavaScript/TypeScript ecosystem.",
            "Deep understanding of WebGL, GLSL shaders, and 3D graphics programming with proven portfolio examples.",
            "Expert-level knowledge of performance optimization techniques including code splitting, lazy loading, and memoization.",
            "Experience with state management solutions (Zustand, Redux Toolkit, Jotai) and data fetching libraries (React Query, SWR).",
            "Strong eye for design details, animations, and micro-interactions that enhance user experience.",
            "Proficiency with modern build tools (Vite, Turbopack, Webpack) and understanding of bundle optimization.",
            "Experience with real-time data visualization and handling high-frequency updates (1000+ updates/second).",
            "Excellent communication skills and ability to work collaboratively in a fast-paced, agile environment."
        ]
    },
    "backend-systems-architect": {
        title: "Backend Systems Architect",
        type: "Full-time",
        location: "Remote / Noida",
        department: "Engineering",
        description: "Join our core systems team to architect and build ultra-low-latency trading infrastructure and distributed AI systems. You will work with Rust, Go, and C++ to push the boundaries of performance, designing systems that process millions of transactions per second with microsecond-level precision. This role is perfect for engineers who obsess over nanoseconds and love solving complex distributed systems challenges.",
        responsibilities: [
            "Design and implement high-throughput, low-latency trading engines capable of processing 10M+ orders per second.",
            "Build distributed systems for AI model inference and training using cutting-edge frameworks and custom optimizations.",
            "Architect and optimize database schemas, indexing strategies, and query patterns for sub-millisecond response times.",
            "Develop custom network protocols and optimize TCP/UDP stack configurations for minimal latency.",
            "Implement comprehensive monitoring, alerting, and observability solutions using Prometheus, Grafana, and distributed tracing.",
            "Design fault-tolerant systems with automatic failover, circuit breakers, and graceful degradation strategies.",
            "Ensure system security through implementation of encryption, authentication, and authorization mechanisms.",
            "Lead technical design reviews and create detailed architecture documentation for complex distributed systems."
        ],
        requirements: [
            "Strong proficiency in systems programming languages: Rust, C++, or Go with 5+ years of production experience.",
            "Proven experience with high-frequency trading, real-time bidding, or other ultra-low-latency systems (sub-millisecond).",
            "Deep knowledge of distributed consensus algorithms (Raft, Paxos), event sourcing, and CQRS patterns.",
            "Expertise in cloud-native technologies including Kubernetes, Docker, gRPC, and service mesh architectures.",
            "Strong understanding of computer architecture, CPU caching, memory hierarchies, and NUMA optimization.",
            "Experience with message queues (Kafka, RabbitMQ, NATS) and real-time data streaming architectures.",
            "Proficiency in performance profiling, benchmarking, and optimization using tools like perf, flamegraphs, and custom instrumentation.",
            "Bachelor's or Master's degree in Computer Science, Engineering, or equivalent practical experience."
        ]
    },
    "ai-research-engineer": {
        title: "AI Research Engineer",
        type: "Full-time",
        location: "Remote / Noida",
        department: "AI Research",
        description: "Work on the cutting edge of Agentic AI and Large Language Models. You will design, fine-tune, and deploy state-of-the-art LLMs for enterprise applications and autonomous workflows. This role combines research and engineering, requiring you to stay current with the latest AI breakthroughs while building production-ready systems that serve millions of users. Join us in shaping the future of AI-powered automation.",
        responsibilities: [
            "Fine-tune and deploy Large Language Models (LLMs) for domain-specific applications using techniques like LoRA, QLoRA, and full fine-tuning.",
            "Develop advanced Graph RAG (Retrieval-Augmented Generation) systems for complex knowledge retrieval and reasoning.",
            "Research and implement novel agentic architectures including ReAct, AutoGPT, and custom multi-agent systems.",
            "Design and optimize prompt engineering strategies, including few-shot learning, chain-of-thought, and tree-of-thoughts prompting.",
            "Build evaluation frameworks and benchmarks to measure model performance, accuracy, and safety.",
            "Collaborate with product teams to integrate AI capabilities into production applications with proper monitoring and safeguards.",
            "Optimize model inference performance through quantization, distillation, and efficient serving infrastructure.",
            "Contribute to the AI research community through publications, open-source projects, and conference presentations."
        ],
        requirements: [
            "MS or PhD in Computer Science, Machine Learning, AI, or related field with focus on NLP or deep learning.",
            "Strong experience with PyTorch, TensorFlow, and Hugging Face Transformers library for training and deploying models.",
            "Deep understanding of Transformer architectures, attention mechanisms, and modern LLM techniques (GPT, BERT, T5, LLaMA).",
            "Hands-on experience with fine-tuning techniques including LoRA, prompt tuning, and instruction tuning.",
            "Proficiency in Python and experience with ML infrastructure tools (MLflow, Weights & Biases, Ray, Kubeflow).",
            "Knowledge of vector databases (Pinecone, Weaviate, Qdrant) and semantic search technologies.",
            "Published research papers in top-tier conferences (NeurIPS, ICML, ACL, EMNLP) or significant open-source contributions.",
            "Strong mathematical foundation in statistics, linear algebra, and optimization theory."
        ]
    },
    "rust-developer-hft": {
        title: "Rust Developer (HFT/Low Latency)",
        type: "Full-time",
        location: "Remote / Noida",
        department: "Quantitative Trading",
        description: "Join our elite quantitative trading team to build ultra-low-latency trading systems in Rust. You will design and implement high-frequency trading algorithms, market data processors, and order execution engines that operate at microsecond timescales. This role requires deep expertise in systems programming, financial markets, and performance optimization. If you're passionate about writing zero-allocation code and optimizing every CPU cycle, this is your opportunity to work on some of the most performance-critical systems in the industry.",
        responsibilities: [
            "Design and implement high-frequency trading strategies and execution algorithms in Rust with sub-microsecond latency requirements.",
            "Build ultra-low-latency market data processors capable of handling millions of market updates per second.",
            "Develop order management systems (OMS) and smart order routers with direct market access (DMA) integration.",
            "Optimize critical code paths using SIMD instructions, lock-free data structures, and cache-aware algorithms.",
            "Implement real-time risk management systems with circuit breakers, position limits, and P&L monitoring.",
            "Design and maintain FIX protocol handlers and custom binary protocol parsers for exchange connectivity.",
            "Conduct rigorous backtesting and simulation of trading strategies using historical market data.",
            "Collaborate with quantitative researchers to translate mathematical models into production-ready trading systems."
        ],
        requirements: [
            "3+ years of professional Rust development experience with focus on systems programming and performance optimization.",
            "Proven experience in high-frequency trading, algorithmic trading, or quantitative finance systems.",
            "Deep understanding of low-latency programming techniques including lock-free algorithms, memory pooling, and CPU pinning.",
            "Strong knowledge of financial markets, order types, market microstructure, and exchange protocols (FIX, ITCH, OUCH).",
            "Experience with C++ is highly valuable for interoperability with existing trading infrastructure.",
            "Proficiency in performance analysis tools (perf, valgrind, flamegraphs) and hardware optimization (NUMA, CPU affinity).",
            "Understanding of networking fundamentals including TCP/IP, UDP multicast, and kernel bypass technologies (DPDK, io_uring).",
            "Bachelor's or Master's degree in Computer Science, Mathematics, Physics, or related quantitative field."
        ]
    },
    "project-manager-agile": {
        title: "Project Manager (Agile)",
        type: "Full-time",
        location: "Remote / Noida",
        department: "Project Management",
        description: "Lead cross-functional engineering teams to deliver complex technical projects on time and within scope. As an Agile Project Manager at Cognoflux, you will orchestrate the development of cutting-edge AI and trading systems, working closely with engineers, designers, and stakeholders. You will be responsible for implementing Agile best practices, removing blockers, and ensuring seamless communication across teams. This role requires a unique blend of technical understanding, leadership skills, and agile expertise.",
        responsibilities: [
            "Lead Agile ceremonies including sprint planning, daily standups, retrospectives, and sprint reviews for multiple engineering teams.",
            "Manage project timelines, resource allocation, and dependencies across complex technical initiatives involving AI, trading, and web platforms.",
            "Implement and continuously improve Agile processes (Scrum, Kanban) tailored to the team's needs and project requirements.",
            "Collaborate with product managers and stakeholders to define project scope, requirements, and success metrics.",
            "Track and communicate project progress using tools like Jira, Confluence, and custom dashboards with clear KPIs.",
            "Identify and proactively remove blockers, manage risks, and escalate issues to ensure project delivery.",
            "Foster a culture of continuous improvement through data-driven retrospectives and process optimization.",
            "Mentor team members on Agile principles and facilitate knowledge sharing across the organization."
        ],
        requirements: [
            "5+ years of project management experience with at least 3 years leading Agile/Scrum teams in a technical environment.",
            "Certified Scrum Master (CSM), PMI-ACP, or equivalent Agile certification strongly preferred.",
            "Strong technical background with ability to understand complex systems architecture, APIs, and software development lifecycle.",
            "Expert proficiency in Agile project management tools including Jira, Confluence, Linear, or similar platforms.",
            "Proven track record of successfully delivering large-scale technical projects involving distributed teams.",
            "Excellent stakeholder management skills with ability to communicate effectively with both technical and non-technical audiences.",
            "Experience managing projects in fintech, AI/ML, or high-performance computing environments is a strong plus.",
            "Strong analytical and problem-solving skills with data-driven approach to decision making and process improvement."
        ]
    }
};

// Generate static params for all job slugs
export async function generateStaticParams() {
    return Object.keys(jobs).map((slug) => ({
        slug: slug,
    }));
}

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const job = jobs[slug as keyof typeof jobs];

    if (!job) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
                    <Link href="/careers" className="text-cyan-400 hover:underline">Back to Careers</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/careers" className="text-zinc-500 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
                    <ArrowRight className="rotate-180 w-4 h-4" /> Back to Careers
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 font-[family-name:var(--font-bruno-ace)]">
                        {job.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-zinc-400 text-sm uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-500" /> {job.department}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">About the Role</h2>
                            <p className="text-zinc-400 leading-relaxed">{job.description}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Responsibilities</h2>
                            <ul className="space-y-3">
                                {job.responsibilities.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                                        <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Requirements</h2>
                            <ul className="space-y-3">
                                {job.requirements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                                        <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-32 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-2">Apply for this position</h3>
                            <p className="text-zinc-500 text-sm mb-6">Send your resume and portfolio to our engineering team.</p>

                            <a
                                href={`mailto:careers@cognoflux.com?subject=Application for ${job.title}`}
                                className="block w-full py-3 rounded-lg bg-white text-black font-bold text-center hover:bg-zinc-200 transition-colors mb-4"
                            >
                                Apply Now
                            </a>
                            <p className="text-xs text-zinc-600 text-center">
                                Or email us at <span className="text-zinc-400">careers@cognoflux.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
