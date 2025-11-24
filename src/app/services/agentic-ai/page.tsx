import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Cpu } from "lucide-react";

export default function AgenticAIPage() {
    return (
        <ServicePageLayout
            title="Agentic AI"
            subtitle="Autonomous Workflows & Cognitive Systems"
            description="We build AI systems that don't just chat—they act. Our Agentic AI solutions integrate deeply with your business logic to automate complex, multi-step workflows with reasoning capabilities."
            icon={<Cpu className="w-12 h-12 text-cyan-500" />}
            features={[
                "End-to-End Autonomous Agents: Systems that plan, execute, and verify tasks without human intervention.",
                "Graph RAG (Retrieval-Augmented Generation): Advanced knowledge retrieval that understands relationships between data points.",
                "Model Fine-Tuning: Customizing LLMs (Llama 3, Gemini) on your proprietary enterprise data.",
                "Time Series Analysis: Predictive AI models for supply chain forecasting and financial trends."
            ]}
        />
    );
}
