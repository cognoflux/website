import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 300 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-10 w-auto", className)}
            aria-label="Cognoflux Logo"
        >
            <text
                x="0"
                y="45"
                fill="currentColor"
                className="font-[family-name:var(--font-bruno-ace)] font-bold tracking-widest"
                style={{ fontSize: "42px" }}
            >
                cogno
            </text>
            <text
                x="175"
                y="45"
                fill="#22d3ee"
                className="font-[family-name:var(--font-bruno-ace)] font-bold tracking-widest"
                style={{ fontSize: "42px" }}
            >
                flux
            </text>
        </svg>
    );
}
