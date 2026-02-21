"use client";
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Menu, X, Phone, MessageSquare, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import { COMPANY_INFO, SOCIAL_MEDIA } from '@/lib/data'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full shadow-sm bg-white border-b border-gray-100">
            <div className="relative w-full">
                {/* ABSOLUTE LOGO POSITIONED INSIDE CONTAINER SPAN */}
                <div className="container mx-auto px-4 sm:px-8 absolute inset-0 pointer-events-none z-50 flex justify-start">
                    <Link href="/" className="pointer-events-auto absolute top-[10px] md:top-[13px] flex items-center bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-xl shadow-xl border border-gray-100 transition-transform hover:scale-105 h-[80px] md:h-[106px] min-w-[100px] md:min-w-[140px] justify-center">
                        <img
                            src="/logo.webp"
                            alt="Pir Reklam Logo"
                            className="h-full w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* TOP BAR (RED) */}
                <div className="bg-[#cc0735] text-white h-[20px] md:h-[26px] flex items-center">
                    <div className="container mx-auto px-4 sm:px-8 flex justify-end md:justify-between items-center text-[10px] md:text-xs font-semibold tracking-wide w-full">
                        {/* Space for absolute logo */}
                        <div className="w-[110px] md:w-[150px] shrink-0"></div>

                        <div className="flex gap-4 overflow-hidden whitespace-nowrap flex-grow">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                Vesikalık Kabı Siparişi ve Fiyatları
                            </span>
                        </div>
                        <div className="hidden sm:flex items-center gap-4 shrink-0">
                            {/* Social Media Icons */}
                            <div className="flex items-center gap-3 border-r border-white/20 pr-4">
                                <a href={SOCIAL_MEDIA.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                                    <Facebook className="w-3.5 h-3.5" />
                                </a>
                                <a href={SOCIAL_MEDIA.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                                    <Instagram className="w-3.5 h-3.5" />
                                </a>
                                <a href={SOCIAL_MEDIA.youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                                    <Youtube className="w-3.5 h-3.5" />
                                </a>
                                <a href={SOCIAL_MEDIA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                                    <Linkedin className="w-3.5 h-3.5" />
                                </a>
                            </div>

                            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:underline flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5" />
                                {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* MIDDLE BAR (WHITE) */}
                <div className="bg-white h-[60px] md:h-[80px] flex items-center">
                    <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between w-full h-full">
                        {/* Space for absolute logo */}
                        <div className="w-[110px] md:w-[150px] shrink-0 hidden md:block"></div>

                        <div className="flex-1 flex justify-end md:justify-between items-center h-full">
                            {/* DESKTOP NAV */}
                            <nav className="hidden md:flex items-center gap-5 lg:gap-8 flex-1 justify-center pr-4">
                                <Link href="/urunler" className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors uppercase tracking-wide">
                                    Ürünlerimiz
                                </Link>
                                <Link href="/blog" className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors uppercase tracking-wide">
                                    Blog & Rehber
                                </Link>
                                <Link href="/hakkimizda" className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors uppercase tracking-wide">
                                    Kurumsal
                                </Link>
                                <Link href="/iletisim" className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors uppercase tracking-wide">
                                    İletişim
                                </Link>
                            </nav>

                            {/* CTAs */}
                            <div className="hidden md:flex items-center gap-3 shrink-0">
                                <a href="/iletisim#quote-form">
                                    <Button size="sm" className="hidden lg:flex btn-animated text-white font-bold h-10 border-none shadow-sm">
                                        Hızlı Teklif Al
                                    </Button>
                                </a>
                                <a
                                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 btn-whatsapp-animated text-white px-5 py-2.5 rounded-md transition-all text-sm font-bold shadow-sm"
                                >
                                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 whatsapp-icon-shadow" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>

                            {/* MOBILE MENU TOGGLE */}
                            <button
                                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md ml-auto"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR (BLUE) */}
                <div className="bg-[#26497f] h-[20px] md:h-[26px] w-full"></div>

                {/* MOBILE MENU DROPDOWN */}
                {isMobileMenuOpen && (
                    <div className="border-t bg-white md:hidden absolute top-full left-0 w-full shadow-lg">
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            <Link
                                href="/urunler"
                                className="block text-base font-bold text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Ürünlerimiz
                            </Link>
                            <Link
                                href="/blog"
                                className="block text-base font-bold text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/hakkimizda"
                                className="block text-base font-bold text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Kurumsal
                            </Link>
                            <Link
                                href="/iletisim"
                                className="block text-base font-bold text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                İletişim
                            </Link>
                            <div className="pt-2 border-t flex flex-col gap-2">
                                <a href={`tel:${COMPANY_INFO.mobile1.replace(/\s/g, '')}`} className="w-full">
                                    <Button className="w-full justify-start gap-2 btn-animated text-white border-none shadow-sm">
                                        <Phone className="h-4 w-4 text-white" /> Hemen Ara
                                    </Button>
                                </a>
                                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-full">
                                    <Button className="w-full justify-start gap-2 btn-whatsapp-animated text-white border-none shadow-sm">
                                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 whatsapp-icon-shadow" /> WhatsApp Destek
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
