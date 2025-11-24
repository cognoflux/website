import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="relative z-10 bg-zinc-900/50 border-t border-zinc-800 pt-16 pb-8 backdrop-blur-sm">
            <div className="max-w-[95%] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="block w-fit">
                            <Logo className="h-8 w-auto text-white" />
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Strategic Technology Partner specialized in Agentic AI, HFT, and Blockchain solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="/services/agentic-ai" className="hover:text-cyan-400 transition-colors">Agentic AI</Link></li>
                            <li><Link href="/services/hft-systems" className="hover:text-cyan-400 transition-colors">HFT Systems</Link></li>
                            <li><Link href="/services/blockchain" className="hover:text-cyan-400 transition-colors">Blockchain</Link></li>
                            <li><Link href="/services/cloud-security" className="hover:text-cyan-400 transition-colors">Cloud Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 shrink-0 text-cyan-500" />
                                <span>Sector 63, Noida<br />Uttar Pradesh, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 shrink-0 text-cyan-500" />
                                <a href="mailto:info@cognoflux.com" className="hover:text-white transition-colors">info@cognoflux.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>© 2025 Cognoflux. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
