import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-zinc-500 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
                    <ArrowRight className="rotate-180 w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    Get in Touch
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-zinc-500 mt-1" />
                                <div>
                                    <p className="font-semibold">Headquarters</p>
                                    <p className="text-zinc-400">Sector 63, Noida<br />Uttar Pradesh, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-zinc-500 mt-1" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <a href="mailto:info@cognoflux.com" className="text-zinc-400 hover:text-white transition-colors">info@cognoflux.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-zinc-500 mt-1" />
                                <div>
                                    <p className="font-semibold">Phone & WhatsApp</p>
                                    <div className="flex flex-col">
                                        <p className="text-zinc-400">+91 98765 43210</p>
                                        <a href="https://wa.me/9187139871" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors flex items-center gap-2 mt-1">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Tell us about your project..." />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
