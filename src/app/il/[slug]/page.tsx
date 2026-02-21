import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CITIES, PRODUCTS } from '@/lib/data'
import { slugify } from '@/lib/utils'
import ProductCard from '@/components/features/ProductCard'
import QuoteForm from '@/components/features/QuoteForm'
import FAQ from '@/components/features/FAQ'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Truck, MapPin } from 'lucide-react'
import { getCityContent } from '@/lib/city-content'

// Generate segments for all cities
export async function generateStaticParams() {
    return CITIES.map((city) => ({
        slug: slugify(city),
    }))
}

// SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const validCity = CITIES.find(c => slugify(c) === slug)

    if (!validCity) {
        return { title: 'Sayfa Bulunamadı' }
    }

    const cityContent = await getCityContent(slug);

    if (cityContent) {
        return {
            title: cityContent.metaTitle,
            description: cityContent.metaDescription,
            keywords: [`${validCity} vesikalık kabı`, `${validCity} fotoğraf kabı`, 'toptan vesikalık kabı', 'fotoğrafçı malzemeleri'],
            alternates: {
                canonical: `https://vesikalikkabi.com.tr/il/${slug}`
            }
        }
    }

    return {
        title: `${validCity} Vesikalık Kabı Üretimi | Tekli & Çiftli Fotoğraf Kabı`,
        description: `${validCity} ili için özel üretim, logo baskılı vesikalık fotoğraf kabı. Fotoğraf stüdyolarına özel toptan satış, hızlı kargo ve uygun fiyatlar.`,
        keywords: [`${validCity} vesikalık kabı`, `${validCity} fotoğraf kabı`, 'toptan vesikalık kabı', 'fotoğrafçı malzemeleri'],
        alternates: {
            canonical: `https://vesikalikkabi.com.tr/il/${slug}`
        }
    }
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const cityName = CITIES.find(c => slugify(c) === slug)

    if (!cityName) {
        notFound()
    }

    const cityContent = await getCityContent(slug);

    // Determine nearby cities
    const nearbyCities = CITIES.filter(c => c !== cityName).slice(0, 6)

    const defaultFaqs = [
        { question: `${cityName} iline kargo süresi ne kadar?`, answer: `İzmir üretim tesisimizden ${cityName} iline kargo süresi ortalama 1-3 iş günüdür. Anlaşmalı kargolarımızla hızlı teslimat sağlıyoruz.` },
        { question: `${cityName} fotoğrafçıları için özel tasarım yapıyor musunuz?`, answer: "Evet, firmanızın logosunu ve iletişim bilgilerini içeren özel tasarım vesikalık kapları üretiyoruz." },
        { question: "Minimum sipariş adedi nedir?", answer: "Tekli ve çiftli fotoğraf kaplarında minimum sipariş adedimiz 1.000 adettir logo baskılı işler için." },
    ];

    const displayFaqs = cityContent?.faq || defaultFaqs;

    return (
        <div className="flex flex-col min-h-screen">
            {/* HEADER / HERO */}
            <section className="bg-blue-900 text-white py-16 md:py-24 relative overflow-hidden group">
                <Image
                    src="/citfli-vesikalik-kabi.jpg"
                    alt={`${cityName} Vesikalık Kabı Üretimi`}
                    fill
                    className="object-cover opacity-15"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-1.5 rounded-full mb-6 border border-blue-700">
                        <MapPin className="w-4 h-4 text-blue-300" />
                        <span className="text-sm font-medium text-blue-100">{cityName}, Türkiye</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        {cityContent ? cityContent.h1 : `${cityName} Vesikalık Kabı Üretimi`}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        {cityContent ? cityContent.heroIntro : `${cityName} ilindeki fotoğraf stüdyoları için en kaliteli, logo baskılı ve dayanıklı vesikalık fotoğraf kapları üretiyoruz.`}
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#quote">
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">Hemen Fiyat Al</Button>
                        </a>
                        <Link href="/urunler">
                            <Button variant="outline" size="lg" className="text-blue-100 border-blue-400 hover:bg-blue-800">Ürünleri İncele</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTENT + PRODUCTS */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div className="prose prose-lg max-w-none text-gray-600">
                                {cityContent ? (
                                    <>
                                        {cityContent.bodySections.map((section, idx) => (
                                            <div key={idx} className="mb-8">
                                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                                                <p>{section.content}</p>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{cityName} Fotoğrafçılarına Özel Çözümler</h2>
                                        <p>
                                            Pir Reklam olarak 1961 yılından bu yana edindiğimiz tecrübe ile fotoğrafçılık sektörünün ihtiyaçlarını çok iyi biliyoruz.
                                            {cityName} genelindeki stüdyoların kaliteli sunum materyallerine olan ihtiyacını, dayanıklı ve şık tasarımlı vesikalık kaplarımızla karşılıyoruz.
                                        </p>
                                        <p>
                                            Ürünlerimiz 230gr Amerikan Bristol karton üzerine ofset baskı tekniği ile üretilmektedir.
                                            Bu sayede renkler canlı, logonuz net ve kurumsal kimliğiniz profesyonel görünür.
                                        </p>

                                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
                                        <ul className="space-y-2 list-none pl-0">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                <span><strong>Hızlı Üretim:</strong> Siparişiniz onaylandıktan sonra 7-10 iş günü içinde kargoya verilir.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                <span><strong>Kaliteli Malzeme:</strong> Yıpranmaya dayanıklı, selefon kaplamalı sert karton.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                <span><strong>Logo Tasarımı:</strong> Mevcut logonuzu vesikalık kabı şablonuna ücretsiz uyarlıyoruz.</span>
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </div>

                            {/* Products Grid Snippet */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Popüler Ürünlerimiz</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {PRODUCTS.map(p => (
                                        <ProductCard key={p.id} product={p} />
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <FAQ items={displayFaqs} title={`${cityName} İçin Sıkça Sorulan Sorular`} />

                            {/* Internal Link Suggestions from Content */}
                            {cityContent?.internalLinkSuggestions && (
                                <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-3">İlginizi Çekebilir</h4>
                                    <ul className="space-y-2">
                                        {cityContent.internalLinkSuggestions.map((link, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-blue-800 text-sm">
                                                <span className="text-blue-500 mt-1">•</span> {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>

                        {/* Right Sidebar: Quote Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24" id="quote">
                                <QuoteForm />

                                <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Truck className="w-5 h-5 text-blue-600" />
                                        {cityName} Teslimat Bilgisi
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-2">
                                        Anlaşmalı kargo firmalarımızla {cityName} merkez ve tüm ilçelerine gönderim yapıyoruz.
                                    </p>
                                    <p className="text-sm font-medium text-blue-700">
                                        Ortalama Süre: 1-3 İş Günü
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Internal Linking */}
            <section className="py-12 bg-gray-50 border-t">
                <div className="container mx-auto px-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Diğer Şehirlerimiz</h3>
                    <div className="flex flex-wrap gap-2">
                        {nearbyCities.map(city => (
                            <Link
                                key={city}
                                href={`/il/${slugify(city)}`}
                                className="text-sm text-gray-500 hover:text-blue-600 underline decoration-gray-300 hover:decoration-blue-600 underline-offset-4"
                            >
                                {city} Vesikalık Kabı
                            </Link>
                        ))}
                        <Link href="/" className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 ml-2">
                            Tümünü Gör &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
