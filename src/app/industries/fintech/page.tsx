import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Server } from "lucide-react";

export default function FintechPage() {
    return (
        <ServicePageLayout
            title="FinTech"
            subtitle="Banking & Payments Innovation"
            description="We help financial institutions modernize their legacy systems and adopt next-gen technologies like blockchain and AI-driven fraud detection."
            icon={<Server className="w-12 h-12 text-green-500" />}
            features={[
                "Core Banking Modernization: Microservices migration strategies.",
                "Payment Gateways: Secure, high-concurrency transaction processing.",
                "Fraud Detection: Real-time AI anomaly detection.",
                "Open Banking: API development for PSD2 compliance."
            ]}
        />
    );
}
