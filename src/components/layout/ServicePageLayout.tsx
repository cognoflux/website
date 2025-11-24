import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
}

export function ServicePageLayout({ title, subtitle, description, features, icon }: ServicePageProps) {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-zinc-500 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
                    <ArrowRight className="rotate-180 w-4 h-4" /> Back to Home
                </Link>

                <div className="mb-12">
                    <div className="mb-6 inline-block p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                        {icon}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        {title}
                    </h1>
                    <p className="text-xl text-cyan-400 mb-6">{subtitle}</p>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 mb-4" />
                            <p className="text-zinc-300">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to deploy?</h3>
                    <p className="text-zinc-400 mb-6">Let's discuss how we can implement this solution for your business.</p>
                    <a href="https://wa.me/9187139871" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        Chat with our engineers - Now
                    </a>
                </div>
            </div>
        </div>
    );
}
