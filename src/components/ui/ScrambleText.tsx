"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "-_~=<>[]{}!@#$%^&*()abcdefghijklmnopqrstuvwxyz";

export function ScrambleText({ text, className }: { text: string; className?: string }) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        const animate = () => {
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1; // Resolve faster (1 char per tick)
            }, 50); // Slower tick for less chaotic look
        };

        animate();

        return () => clearInterval(interval);
    }, [text, isHovered]); // Re-run on hover if desired, or just mount

    return (
        <motion.span
            className={className}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {displayText}
        </motion.span>
    );
}
