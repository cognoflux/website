import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-zinc-500 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
                    <ArrowRight className="rotate-180 w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    Join the Future
                </h1>
                <p className="text-xl text-cyan-400 mb-12">Build the impossible with us.</p>

                <div className="space-y-6">
                    {[
                        { title: "Senior Frontend Engineer", slug: "senior-frontend-engineer", type: "Remote / Noida", stack: "Next.js, Three.js, WebGL" },
                        { title: "Backend Systems Architect", slug: "backend-systems-architect", type: "Remote / Noida", stack: "Rust, Go, Node.js" },
                        { title: "AI Research Engineer", slug: "ai-research-engineer", type: "Remote / Noida", stack: "Python, PyTorch, LLMs" },
                        { title: "Rust Developer (HFT/Low Latency)", slug: "rust-developer-hft", type: "Remote / Noida", stack: "Rust, C++, Low-Latency Systems" },
                        { title: "Project Manager (Agile)", slug: "project-manager-agile", type: "Remote / Noida", stack: "Scrum, Kanban, Jira" },
                    ].map((job, index) => (
                        <Link key={index} href={`/careers/${job.slug}`}>
                            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                                    <p className="text-zinc-400 text-sm">{job.type} • {job.stack}</p>
                                </div>
                                <ArrowRight className="text-zinc-600 group-hover:text-white transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 text-center">
                    <p className="text-zinc-400 mb-4">Don't see your role? We are always looking for exceptional talent.</p>
                    <a href="mailto:careers@cognoflux.com" className="text-cyan-400 hover:underline">Email us your resume</a>
                </div>
            </div>
        </div>
    );
}
