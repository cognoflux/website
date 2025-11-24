import Link from "next/link";
import { HeroParticles } from "@/components/3d/Particles";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { HolographicCard } from "@/components/ui/HolographicCard";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Cpu, Globe, Lock, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden pt-20">
      {/* Background Particles */}
      <HeroParticles />

      <div className="relative z-10 flex flex-col min-h-[calc(100vh-80px)] max-w-[95%] mx-auto px-4 md:px-8">

        {/* Hero Text Section - Compact */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-4 mb-8">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6 font-[family-name:var(--font-bruno-ace)]">
            <ScrambleText text="cognoflux" />
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Intelligence in Motion. <span className="text-cyan-400">Results at Speed.</span>
          </p>

          <div className="flex gap-6 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full bg-white text-black text-base font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer">
                Start Project
              </button>
            </Link>
            <Link href="/#solutions">
              <button className="px-8 py-3 rounded-full border border-zinc-700 bg-transparent text-white text-base font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors cursor-pointer">
                View Solutions
              </button>
            </Link>
          </div>
        </div>

        {/* Services Section - Visible Above Fold */}
        <div className="pb-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
            <Link href="/services/agentic-ai" className="group h-full">
              <HolographicCard className="p-8 h-full cursor-pointer border-zinc-800/50 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10">
                      <Cpu className="w-8 h-8 text-cyan-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-bruno-ace)]">Agentic AI</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Autonomous workflows & Graph RAG systems.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-cyan-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </HolographicCard>
            </Link>

            <Link href="/services/hft-systems" className="group h-full">
              <HolographicCard className="p-8 h-full cursor-pointer border-zinc-800/50 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-yellow-500/10">
                      <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-bruno-ace)]">HFT Systems</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Microsecond-latency trading infrastructure.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-yellow-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </HolographicCard>
            </Link>

            <Link href="/services/blockchain" className="group h-full">
              <HolographicCard className="p-8 h-full cursor-pointer border-zinc-800/50 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple-500/10">
                      <Globe className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-bruno-ace)]">Blockchain</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Asset tokenization & secure Web3 protocols.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-purple-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </HolographicCard>
            </Link>

            <Link href="/services/cloud-security" className="group h-full">
              <HolographicCard className="p-8 h-full cursor-pointer border-zinc-800/50 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-red-500/10">
                      <Lock className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-bruno-ace)]">Security</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Zero-trust architecture & DevSecOps.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-red-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </HolographicCard>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
