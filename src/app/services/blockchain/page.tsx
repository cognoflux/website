import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Globe } from "lucide-react";

export default function BlockchainPage() {
    return (
        <ServicePageLayout
            title="Blockchain & Web3"
            subtitle="Decentralized Infrastructure & Tokenization"
            description="We build secure, scalable decentralized applications. From asset tokenization to custom protocol development, we bridge the gap between traditional finance and Web3."
            icon={<Globe className="w-12 h-12 text-purple-500" />}
            features={[
                "Asset Tokenization: Real-world asset (RWA) digitization platforms.",
                "Smart Contract Auditing & Development: Solidity and Rust-based contracts with formal verification.",
                "Custom Layer 1/Layer 2 Solutions: Forking and customizing chains for specific enterprise needs.",
                "DeFi Protocol Engineering: AMMs, Lending protocols, and Yield aggregators."
            ]}
        />
    );
}
