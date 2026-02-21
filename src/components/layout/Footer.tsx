import Link from 'next/link'
import { COMPANY_INFO, SOCIAL_MEDIA } from '@/lib/data'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block bg-white p-2 md:p-3 rounded-xl">
                            <img
                                src="/logo.webp"
                                alt="Pir Reklam Logo"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            1961'den beri İzmir'de kaliteli vesikalık fotoğraf kabı üretimi.
                            Fotoğraf stüdyoları ve kurumsal firmalar için güvenilir çözüm ortağı.
                        </p>
                        <div className="flex gap-4">
                            <a href={SOCIAL_MEDIA.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaFacebook size={20} /></a>
                            <a href={SOCIAL_MEDIA.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
                            <a href={SOCIAL_MEDIA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                            <a href={SOCIAL_MEDIA.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaYoutube size={20} /></a>
                            <a href={SOCIAL_MEDIA.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaPinterest size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Hızlı Erişim</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="/urunler" className="hover:text-white transition-colors">Ürünlerimiz</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Rehber</Link></li>
                            <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Ürünler</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/urunler/tekli-fotograf-kabi" className="hover:text-white transition-colors">Tekli Fotoğraf Kabı</Link></li>
                            <li><Link href="/urunler/ciftli-fotograf-kabi" className="hover:text-white transition-colors">Çiftli Fotoğraf Kabı</Link></li>
                            <li><Link href="/uretim" className="hover:text-white transition-colors">Özel Üretim</Link></li>
                            <li><Link href="/baski" className="hover:text-white transition-colors">Logo Baskı Seçenekleri</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">İletişim Bilgileri</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span>{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <div>
                                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors block font-bold text-white">Destek: {COMPANY_INFO.phone}</a>
                                    <a href={`tel:${COMPANY_INFO.mobile1.replace(/\s/g, '')}`} className="hover:text-white transition-colors block text-xs mt-1">Mobil: {COMPANY_INFO.mobile1}</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-950">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p> {currentYear} &copy; {COMPANY_INFO.name}. Tüm hakları saklıdır. Vesikalık Kabı - Pir Reklam Ltd. Şti. | Bu site <a style={{ color: 'white' }} href="https://alptekbilisim.com" target="_blank" rel="noopener noreferrer">Alp Tek Bilişim</a> tarafından inşa edilmiştir.</p>
                    <div className="flex gap-6">
                        <Link href="/gizlilik-politikasi" className="hover:text-gray-300 transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kullanim-kosullari" className="hover:text-gray-300 transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
