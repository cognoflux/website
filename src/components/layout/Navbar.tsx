"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Globe, Lock, ChevronDown, BarChart, Server, Shield, Layers, Code, Database } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const menuItems = [
    {
        title: "Services",
        href: "/#services",
        submenu: [
            {
                title: "Agentic AI",
                desc: "Autonomous workflows & Graph RAG systems.",
                href: "/services/agentic-ai",
                icon: Cpu
            },
            {
                title: "HFT Systems",
                desc: "Microsecond-latency trading infrastructure.",
                href: "/services/hft-systems",
                icon: Zap
            },
            {
                title: "Blockchain",
                desc: "Asset tokenization & secure Web3 protocols.",
                href: "/services/blockchain",
                icon: Globe
            },
            {
                title: "Cloud Security",
                desc: "Zero-trust architecture & DevSecOps.",
                href: "/services/cloud-security",
                icon: Lock
            },
        ]
    },
    {
        title: "Solutions",
        href: "/#solutions",
        submenu: [
            {
                title: "Crypto Exchange",
                desc: "White-label CEX/DEX platforms.",
                href: "/solutions/crypto-exchange",
                icon: Layers
            },
            {
                title: "Quant Trading",
                desc: "Algo-trading bots & backtesting engines.",
                href: "/solutions/quant-trading",
                icon: BarChart
            },
            {
                title: "Enterprise RAG",
                desc: "Internal knowledge base automation.",
                href: "/solutions/enterprise-rag",
                icon: Database
            },
        ]
    },
    {
        title: "Industries",
        href: "/#industries",
        submenu: [
            { title: "FinTech", desc: "Banking & Payments", href: "/industries/fintech", icon: Server },
            { title: "Supply Chain", desc: "Logistics & Tracking", href: "/industries/supply-chain", icon: Globe },
            { title: "Healthcare", desc: "AI Diagnostics", href: "/industries/healthcare", icon: Shield },
        ]
    },
    { title: "Case Studies", href: "/#case-studies" },
    { title: "Company", href: "/about" },
];

export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/80 border-b border-white/10" onMouseLeave={() => setHoveredIndex(null)}>
            <div className="max-w-[95%] mx-auto flex items-center justify-between">
                <Link href="/" className="flex flex-col items-center mr-8 group">
                    <Logo className="h-8 w-auto text-white group-hover:text-cyan-400 transition-colors" />
                    <span className="text-[0.6rem] font-bold tracking-[0.5em] text-cyan-500 uppercase group-hover:text-white transition-colors mt-1">
                        Tech Solutions
                    </span>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-xs uppercase tracking-widest font-medium transition-colors hover:text-cyan-400 flex items-center gap-1 py-4",
                                    hoveredIndex === index ? "text-cyan-400" : "text-zinc-400"
                                )}
                            >
                                {item.title}
                                {item.submenu && <ChevronDown className="w-3 h-3" />}
                            </Link>

                            <AnimatePresence>
                                {hoveredIndex === index && item.submenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl p-6 shadow-2xl grid grid-cols-2 gap-4 z-50"
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem.href}
                                                className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group"
                                            >
                                                <div className="p-2 rounded-md bg-zinc-800 group-hover:bg-cyan-500/20 transition-colors">
                                                    <subItem.icon className="w-5 h-5 text-cyan-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{subItem.title}</h4>
                                                    <p className="text-xs text-zinc-400 leading-tight">{subItem.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/careers" className="hidden md:block text-xs uppercase tracking-widest font-medium text-zinc-400 hover:text-white transition-colors">
                        Careers
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden md:block px-6 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
