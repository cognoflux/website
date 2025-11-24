import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { BarChart } from "lucide-react";

export default function QuantTradingPage() {
    return (
        <ServicePageLayout
            title="Quant Trading Solutions"
            subtitle="Algorithmic Trading & Backtesting"
            description="Empower your trading desk with institutional-grade quantitative tools. From strategy development to execution, we provide the complete stack for systematic trading."
            icon={<BarChart className="w-12 h-12 text-yellow-500" />}
            features={[
                "Strategy Studio: Python/C++ based strategy development environment.",
                "Backtesting Engine: Tick-level historical data simulation.",
                "Execution Algos: TWAP, VWAP, and sniper execution algorithms.",
                "Risk Management: Real-time P&L monitoring and exposure limits."
            ]}
        />
    );
}
