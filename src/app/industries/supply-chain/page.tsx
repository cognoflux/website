import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Globe } from "lucide-react";

export default function SupplyChainPage() {
    return (
        <ServicePageLayout
            title="Supply Chain"
            subtitle="Logistics & Global Tracking"
            description="Optimize your supply chain with real-time visibility and predictive analytics. We build systems that track assets from factory to doorstep."
            icon={<Globe className="w-12 h-12 text-blue-500" />}
            features={[
                "IoT Integration: Real-time sensor data ingestion (temperature, location).",
                "Blockchain Provenance: Immutable tracking of goods and authenticity.",
                "Demand Forecasting: AI-driven inventory optimization.",
                "Route Optimization: Dynamic routing for last-mile delivery."
            ]}
        />
    );
}
