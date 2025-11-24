import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-zinc-500 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
                    <ArrowRight className="rotate-180 w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    About Cognoflux
                </h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                        Cognoflux is not just a software development company; we are a strategic technology partner for businesses that demand the extraordinary. Born from a passion for complex engineering, we specialize in solving problems that others deem "too hard."
                    </p>

                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Our Philosophy</h2>
                    <p className="text-zinc-400 mb-8">
                        We believe in "Engineering First." We don't just assemble off-the-shelf components; we build robust, scalable systems from first principles. Whether it's shaving microseconds off a trade execution or designing a self-healing AI agent, we obsess over the details.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h2>
                    <p className="text-zinc-400 mb-8">
                        To build intelligent systems that adapt and thrive in a constantly changing digital landscape.
                    </p>
                </div>
            </div>
        </div>
    );
}
