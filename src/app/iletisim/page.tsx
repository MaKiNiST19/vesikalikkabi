import { Metadata } from 'next'
import QuoteForm from '@/components/features/QuoteForm'
import { COMPANY_INFO } from '@/lib/data'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: 'İletişim - Pir Reklam Vesikalık Kabı',
    description: 'Vesikalık fotoğraf kabı siparişi, fiyat teklifi ve iletişim bilgileri.',
}

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <div className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Bizimle İletişime Geçin</h1>
                    <p className="text-blue-200">Fotoğraf stüdyoları için özel üretim çözümleri.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="flex flex-col h-full gap-12 lg:gap-0 lg:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <h3 className="font-bold text-gray-900 pt-1">Merkez Ofis & Üretim</h3>
                                        <div className="flex items-start gap-4 bg-white border border-gray-100 shadow-sm p-4 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group">
                                            <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors shrink-0 mt-0.5">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Açık Adres</span>
                                                <span className="block text-gray-800 font-medium leading-relaxed">{COMPANY_INFO.address}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <h3 className="font-bold text-gray-900 pt-1">Telefon Kanalları</h3>

                                        <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group">
                                            <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors shrink-0">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Müşteri Hizmetleri</span>
                                                <span className="block text-blue-900 font-extrabold text-xl">{COMPANY_INFO.phone}</span>
                                            </div>
                                        </a>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <a href={`tel:${COMPANY_INFO.mobile1.replace(/\s/g, '')}`} className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm p-3.5 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group">
                                                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors shrink-0">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Mobil 1</span>
                                                    <span className="block text-gray-800 font-bold">{COMPANY_INFO.mobile1}</span>
                                                </div>
                                            </a>
                                            <a href={`tel:${COMPANY_INFO.mobile2.replace(/\s/g, '')}`} className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm p-3.5 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group">
                                                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors shrink-0">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Mobil 2</span>
                                                    <span className="block text-gray-800 font-bold">{COMPANY_INFO.mobile2}</span>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pt-2">
                                            <a
                                                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 bg-green-50 px-5 py-2.5 rounded-full text-green-700 hover:bg-green-100 transition-colors font-bold text-sm border border-green-200"
                                            >
                                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                                                WhatsApp: {COMPANY_INFO.whatsappDisplay}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <h3 className="font-bold text-gray-900 pt-1">E-Posta Adreslerimiz</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm p-3.5 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group">
                                                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors shrink-0">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Bilgi & Teklif</span>
                                                    <span className="block text-gray-800 font-bold">{COMPANY_INFO.email}</span>
                                                </div>
                                            </a>
                                            <a href={`mailto:${COMPANY_INFO.emailAccounting}`} className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm p-3.5 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group">
                                                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors shrink-0">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Muhasebe</span>
                                                    <span className="block text-gray-800 font-bold">{COMPANY_INFO.emailAccounting}</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Map */}
                        <div className="bg-gray-200 flex-1 min-h-[250px] lg:mt-12 rounded-2xl overflow-hidden relative shadow-sm border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.5891866905863!2d27.1356544!3d38.38162399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdffe88c12c17%3A0xac3738e1ec8bc340!2sP%C4%B0R%20REKLAM!5e0!3m2!1str!2str!4v1771703351927!5m2!1str!2str"
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hemen Teklif Alın</h2>
                        <QuoteForm />
                    </div>

                </div>
            </div>
        </div>
    )
}
