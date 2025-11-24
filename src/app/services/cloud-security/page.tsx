import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Lock } from "lucide-react";

export default function CloudSecurityPage() {
    return (
        <ServicePageLayout
            title="Cloud Security"
            subtitle="Zero Trust & DevSecOps"
            description="Security isn't an afterthought; it's the foundation. We implement military-grade security architectures for cloud-native applications."
            icon={<Lock className="w-12 h-12 text-red-500" />}
            features={[
                "Zero Trust Architecture: Identity-aware proxies and strict access controls.",
                "DevSecOps Pipelines: Automated security scanning in CI/CD workflows.",
                "Cloud Infrastructure Hardening: AWS/GCP/Azure best practices and compliance (SOC2, HIPAA).",
                "Penetration Testing & Audits: Proactive vulnerability assessment."
            ]}
        />
    );
}
