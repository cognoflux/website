"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function HolographicCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-colors hover:bg-zinc-800/50 ${className}`}
        >
            <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
            </div>

            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={style}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20" />
            </motion.div>

            <div className="relative z-10">{children}</div>
        </div>
    );
}
