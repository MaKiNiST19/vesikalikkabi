"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button'
import { slugify } from '@/lib/utils'
import { REGIONS } from '@/lib/data'

interface CityLinksProps {
    cities?: string[]; // Kept for compatibility if passed in parent component
}

export default function CityLinks({ cities }: CityLinksProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Türkiye'nin Her Bölgesine Hızlı Teslimat</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        İzmir merkezli üretim tesisimizden tüm bölgelere güvenli ve hızlı kargo sağlıyoruz. Bölgenizi seçerek teslimat detaylarını inceleyebilir ve ilinize özel sayfamıza ulaşabilirsiniz.
                    </p>
                </div>

                {/* Tabs Header */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {REGIONS.map((region, idx) => (
                        <button
                            key={region.name}
                            onClick={() => setActiveTab(idx)}
                            className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all border ${activeTab === idx
                                ? "btn-animated text-white shadow-lg border-transparent"
                                : "bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600 border-gray-200"
                                }`}
                        >
                            {region.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{REGIONS[activeTab].name} Vesikalık Kabı Siparişi</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{REGIONS[activeTab].description}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                        {REGIONS[activeTab].cities.map((city) => (
                            <Link
                                key={city}
                                href={`/il/${slugify(city)}`}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors border border-gray-100 hover:border-blue-200 font-medium"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                {city}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/iletisim">
                        <Button size="lg" className="px-8 shadow-blue-200/50 shadow-lg text-base h-14">Toptan Fiyat Teklifi Al</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
