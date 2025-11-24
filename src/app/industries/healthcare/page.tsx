import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Shield } from "lucide-react";

export default function HealthcarePage() {
    return (
        <ServicePageLayout
            title="Healthcare"
            subtitle="AI Diagnostics & Patient Data"
            description="Leverage AI to improve patient outcomes and streamline hospital operations. We build HIPAA-compliant systems for the modern healthcare ecosystem."
            icon={<Shield className="w-12 h-12 text-red-500" />}
            features={[
                "Medical Imaging AI: Computer vision for X-ray and MRI analysis.",
                "EHR Interoperability: FHIR-based data exchange systems.",
                "Telemedicine Platforms: Secure video conferencing and remote monitoring.",
                "Drug Discovery: AI models for protein folding and molecule simulation."
            ]}
        />
    );
}
