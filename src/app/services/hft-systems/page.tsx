import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Zap } from "lucide-react";

export default function HFTPage() {
    return (
        <ServicePageLayout
            title="HFT Systems"
            subtitle="Microsecond Latency & High Throughput"
            description="In the world of High-Frequency Trading, every microsecond counts. We engineer ultra-low latency trading infrastructures using C++, Rust, and FPGA acceleration."
            icon={<Zap className="w-12 h-12 text-yellow-500" />}
            features={[
                "Low Latency Execution Engines: Optimized for sub-millisecond order placement and matching.",
                "Direct Market Access (DMA): Connectivity solutions for major global exchanges.",
                "Tick-to-Trade Optimization: Kernel bypass networking and lock-free data structures.",
                "Quantitative Analysis Tools: Real-time backtesting and strategy simulation environments."
            ]}
        />
    );
}
