import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FileText, Box, ShieldCheck, Factory, Truck, Check } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-white overflow-hidden pt-4 pb-16 lg:pt-12 lg:pb-24">
            {/* Background Texture (CSS alternatives to avoid missing assets) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 self-center lg:self-start mx-auto lg:mx-0">
                            <ShieldCheck className="w-5 h-5 text-blue-900" />
                            <span className="text-shine text-sm font-bold tracking-wide">
                                1961’den Beri Üretim | Pir Reklam
                            </span>
                        </div>

                        {/* H1 SEO Optimized */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
                            <span className="block text-blue-900 mb-2">Logo Baskılı</span>
                            Vesikalık Kabı Üretimi
                            <span className="block text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium mt-4 tracking-normal">
                                Tekli & Çiftli Fotoğraf Kabı
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Fotoğraf stüdyoları ve ajanslar için doğrudan üreticiden toptan <strong>vesikalık kabı</strong> çözümleri.
                            İzmir’deki tesisimizde yüksek kalite baskı ile markanızı en iyi şekilde temsil ediyoruz. Aracı yok, komisyon yok.
                        </p>

                        {/* Social Proof */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-green-700 bg-green-50 px-4 py-2 rounded-lg border border-green-200 w-fit mx-auto lg:mx-0 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            Son 12 Ayda 1.200+ Fotoğrafçıya Üretim
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Merhaba, fiyat teklifi almak istiyorum.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg" className="w-full sm:w-auto btn-whatsapp-animated shadow-lg gap-2 text-base font-bold h-14 px-8 transform hover:-translate-y-0.5 transition-all border-none">
                                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 whatsapp-icon-shadow" />
                                    WhatsApp’tan Teklif Al
                                </Button>
                            </a>

                            <Link href="/urunler" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto btn-animated gap-2 text-base font-semibold h-14 px-8 transform hover:-translate-y-0.5 transition-all text-white border-none">
                                    <FileText className="w-5 h-5 text-white" />
                                    Vesikalık Kabı Fiyatları
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative mt-8 lg:mt-0 px-4 lg:px-0">
                        {/* Main Visual */}
                        <div className="relative aspect-square md:aspect-[4/3] bg-white rounded-3xl border border-gray-200 shadow-2xl flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/vesikalik-kabi.jpg"
                                alt="Pir Reklam Vesikalık Kabı Üretimi"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Gradient Overlay for better tag readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>

                            {/* Floating Tags */}
                            <div className="absolute top-4 left-4 md:top-10 md:left-10 bg-white/95 backdrop-blur shadow-xl rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 border border-gray-100 hover:scale-105 transition-transform cursor-default z-20">
                                <div className="bg-blue-100 p-1.5 md:p-2 rounded-full text-blue-700">
                                    <img src="/vesikalik-kabi.svg" alt="Min Sipariş" className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-900 leading-tight">
                                    Min. 1000 Adet
                                    <span className="block text-[8px] md:text-xs font-medium text-gray-500">Toptan Üretim</span>
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/95 backdrop-blur shadow-xl rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 border border-gray-100 hover:scale-105 transition-transform cursor-default z-20">
                                <div className="bg-purple-100 p-1.5 md:p-2 rounded-full text-purple-700">
                                    <img src="/logo-baski.svg" alt="Logo Baskı" className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-900 leading-tight">
                                    Özel Logo Baskı
                                    <span className="block text-[8px] md:text-xs font-medium text-gray-500">Ücretsiz Tasarım</span>
                                </div>
                            </div>

                            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur shadow-xl rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 border border-gray-100 hover:scale-105 transition-transform cursor-default z-20">
                                <div className="bg-orange-100 p-1.5 md:p-2 rounded-full text-orange-700">
                                    <img src="/hizli-kargo.svg" alt="Hızlı Kargo" className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-900 leading-tight">
                                    Hızlı Sevkiyat
                                    <span className="block text-[8px] md:text-xs font-medium text-gray-500">81 İle Kargo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* TRUST BAR (Under Fold / Bottom of Hero) */}
                <div className="mt-0 md:mt-8 pt-8 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="flex items-center gap-4 justify-start p-4 bg-white border border-gray-100 rounded-[6px] shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                        <div className="bg-blue-50 p-3 rounded-[6px] border border-blue-100 text-blue-900 group-hover:bg-blue-100 transition-all shrink-0">
                            <Factory className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-base leading-tight">1961’den Beri Üretim</h3>
                            <p className="text-xs text-gray-500 font-medium mt-0.5">Yarım asırlık tecrübe ve güven.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-start p-4 bg-white border border-gray-100 rounded-[6px] shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                        <div className="bg-blue-50 p-3 rounded-[6px] border border-blue-100 text-blue-900 group-hover:bg-blue-100 transition-all shrink-0">
                            <Check className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-base leading-tight">İzmir’de Kendi Tesisimiz</h3>
                            <p className="text-xs text-gray-500 font-medium mt-0.5">%100 yerli ve milli üretim.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-start p-4 bg-white border border-gray-100 rounded-[6px] shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                        <div className="bg-blue-50 p-3 rounded-[6px] border border-blue-100 text-blue-900 group-hover:bg-blue-100 transition-all shrink-0">
                            <Truck className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-base leading-tight">Türkiye Geneli Sevkiyat</h3>
                            <p className="text-xs text-gray-500 font-medium mt-0.5">Sigortalı ve güvenli kargo.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
