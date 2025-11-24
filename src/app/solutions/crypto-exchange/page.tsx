import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Layers } from "lucide-react";

export default function CryptoExchangePage() {
    return (
        <ServicePageLayout
            title="Crypto Exchange Solutions"
            subtitle="White-label CEX & DEX Platforms"
            description="Launch your own high-performance cryptocurrency exchange with our battle-tested infrastructure. We support both centralized (CEX) and decentralized (DEX) architectures with deep liquidity integration."
            icon={<Layers className="w-12 h-12 text-cyan-500" />}
            features={[
                "Matching Engine: 1M+ transactions per second with low latency.",
                "Liquidity Aggregation: Connect to Binance, Kraken, and other major pools.",
                "Custody Solutions: Multi-sig wallets and cold storage integration.",
                "Regulatory Compliance: Built-in KYC/AML and travel rule support."
            ]}
        />
    );
}
