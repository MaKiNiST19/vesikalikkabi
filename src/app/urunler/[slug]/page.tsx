import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PRODUCTS, COMPANY_INFO } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Check, MessageSquare } from 'lucide-react'
import { getProductContent } from '@/lib/product-content'
import FeatureHighlightCard from '@/components/features/FeatureHighlightCard'
import SeoTextRenderer from '@/components/ui/SeoTextRenderer'
import JsonLd from '@/components/seo/JsonLd'
import ProductVariationSelector from '@/components/products/ProductVariationSelector'
export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const product = PRODUCTS.find((p) => p.slug === slug)

    if (!product) {
        return { title: 'Ürün Bulunamadı' }
    }

    const content = await getProductContent(slug)

    return {
        title: content?.metaTitle || `${product.name} | Toptan Vesikalık Kabı ve Kılıfı - Pir Reklam`,
        description: content?.metaDescription || product.description,
        keywords: "vesikalık kabı, vesikalık kılıfı, " + product.name + ", plastik vesikalık kabı, naylon vesikalık kılıfı, pvc kılıf, toptan vesikalık kabı, fotoğraf stüdyosu",
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = PRODUCTS.find((p) => p.slug === slug)

    if (!product) {
        notFound()
    }

    const content = await getProductContent(slug)

    const targetUrl = product.pirReklamUrl || 'https://pirreklam.com.tr';
    const PRODUCT_COLORS = ['#0047AB', '#E02020', '#800000', '#252525', '#FFFFFF', '#808080', '#2E8B57']

    return (
        <div className="min-h-screen bg-white">
            {/* BREADCRUMB Placeholder */}
            <div className="bg-gray-50 py-4 border-b">
                <div className="container mx-auto px-4 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link> &gt;
                    <Link href="/urunler" className="ml-1 hover:text-blue-600">Ürünler</Link> &gt;
                    <span className="ml-1 text-gray-900">{product.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: IMAGE & TERMS */}
                    <div className="space-y-8">
                        <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-lg border border-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* TERMS & CONDITIONS (Sipariş Açıklamaları) */}
                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Sipariş Süreci ve Bilgilendirme</h3>
                            <ul className="space-y-4 text-gray-700 leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">–</span>
                                    <span>Sepet dışındaki sipariş aşamasında; grafik çalışmasından önce, minimum <strong>%30 ön ödeme</strong> alınır.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">–</span>
                                    <span>Siparişinizin hazır olduğunu belgeleyen <strong>video gönderilir</strong>, kalan bakiye tahsil sonrası sevk edilir.</span>
                                </li>

                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">–</span>
                                    <span>Siparişin hazırlanması süreci; grafik onayından sonra, <strong>serigrafi boya baskılı</strong> ürünlerde 7 gün, <strong>gofre kabartmalı</strong> ürünlerde 15 gündür.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">–</span>
                                    <span>Ürün, desen ve renk tonlarında <strong>+- %10 farklılıklar</strong> olabilir.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">–</span>
                                    <span>Kargo ücreti <strong>müşteriye aittir</strong>.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">–</span>
                                    <span>Fiyatlarımıza <strong>%20 KDV</strong> dahil değildir.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: DETAILS & BUTTONS */}
                    <div className="space-y-8 lg:sticky lg:top-[150px]">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                {product.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                                    Min. Sipariş: {product.specs.minOrder} Adet
                                </span>
                                <span className="text-green-600 text-sm font-bold flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                                    <Check className="w-5 h-5" /> Stokta Var (Hammadde)
                                </span>
                            </div>

                            <div className="mb-10 w-full">
                                <FeatureHighlightCard
                                    title="Ürün Özellikleri"
                                    description={product.description}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {product.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-gray-700 font-medium bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                        <div className="bg-green-100 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        {f}
                                    </div>
                                ))}
                            </div>

                            <ProductVariationSelector slug={product.slug} />

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                                <a
                                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1"
                                >
                                    <Button size="lg" className="w-full h-16 text-lg gap-3 btn-whatsapp-animated shadow-lg font-bold transform hover:-translate-y-0.5 transition-all border-none">
                                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 whatsapp-icon-shadow" />
                                        WhatsApp’tan Bilgi Al
                                    </Button>
                                </a>
                                <a
                                    href={targetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 relative group block z-10"
                                >
                                    <Button size="lg" className="w-full h-16 text-lg gap-3 btn-animated shadow-lg font-bold transition-all text-white border-none relative z-20 hover:scale-[1.02]">
                                        Ürün Renklerini İncele
                                    </Button>

                                    {/* Swatches - Sliding up on desktop, always visible below on mobile */}
                                    <div className="absolute md:absolute left-0 right-0 top-0 md:top-0 flex items-center justify-center gap-1.5 transition-all duration-300 ease-out 
                                        md:opacity-0 md:-z-10 md:group-hover:-translate-y-10 md:group-hover:opacity-100 md:pointer-events-none md:group-hover:pointer-events-auto
                                        max-md:relative max-md:opacity-100 max-md:z-10 max-md:mt-4 max-md:translate-y-0 max-md:pointer-events-auto">
                                        {PRODUCT_COLORS.map((color, i) => (
                                            <div
                                                key={i}
                                                className={`w-8 h-8 rounded-md shadow-md border-2 transition-transform duration-300 transform md:translate-y-4 md:group-hover:translate-y-0 group-hover:hover:scale-110 cursor-pointer ${color === '#FFFFFF' ? 'border-gray-200' : 'border-white/20'}`}
                                                style={{
                                                    backgroundColor: color,
                                                    transitionDelay: `${i * 40}ms`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* TECHNICAL SPECS (REFINED) */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                <h3 className="font-bold text-gray-900">Teknik Detaylar</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                                    <div className="space-y-1">
                                        <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">Malzeme</div>
                                        <div className="font-semibold text-gray-900">{product.specs.material}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">Boyutlar</div>
                                        <div className="font-semibold text-gray-900">{product.specs.dimensions}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">Baskı Türü</div>
                                        <div className="font-semibold text-gray-900">{product.specs.printing}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">Hazırlanma</div>
                                        <div className="font-semibold text-gray-900">{product.specs.leadTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DYNAMIC JSON CONTENT */}
                {content && content.bodySections && content.bodySections.length > 0 && (
                    <div className="mt-16 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-10 md:p-16 shadow-lg shadow-gray-200/50">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {content.bodySections.map((section, idx) => (
                                <FeatureHighlightCard
                                    key={idx}
                                    title={section.heading}
                                    description={section.content}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* DYNAMIC JSON FAQ */}
                {content && content.faq && content.faq.length > 0 && (
                    <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12 mb-20 border border-gray-100">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b pb-6">Sıkça Sorulan Sorular</h2>
                            <div className="space-y-6">
                                {content.faq.map((fq, idx) => (
                                    <div key={fq.question} id={`faq-${idx}`} className="scroll-mt-[150px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-4">
                                            <span className="text-blue-600 bg-blue-50 p-1 rounded-md shrink-0">S.</span>
                                            {fq.question}
                                        </h3>
                                        <p className="text-gray-600 flex items-start gap-4">
                                            <span className="text-green-600 bg-green-50 p-1 rounded-md shrink-0 font-bold">C.</span>
                                            <span className="leading-relaxed">{fq.answer}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* DYNAMIC JSON SEO TEXT */}
                {content && content.seoText && (
                    <div className="mt-4 mb-20 border-t border-gray-100 pt-16">
                        <div className="max-w-4xl mx-auto">
                            <SeoTextRenderer content={content.seoText} className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-left" />
                        </div>
                    </div>
                )}

                {/* Sticky Mobile CTA (Updated) */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-2xl md:hidden flex gap-3 z-50">
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`} className="flex-1">
                        <Button className="w-full h-14 gap-2 btn-whatsapp-animated text-white font-bold border-none shadow-lg">
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 whatsapp-icon-shadow" /> WhatsApp Sipariş
                        </Button>
                    </a>
                </div>

                <JsonLd data={{
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    'name': product.name,
                    'image': `https://vesikalikkabi.com.tr${product.image}`,
                    'description': product.description,
                    'keywords': "vesikalık kabı, vesikalık kılıfı, pvc fotoğraf kabı, naylon zarf, vesikalık fiyatları",
                    'offers': {
                        '@type': 'AggregateOffer',
                        'priceCurrency': 'TRY',
                        'offerCount': product.specs.minOrder,
                        'lowPrice': "0.00",
                        'highPrice': "0.00",
                        'availability': 'https://schema.org/InStock',
                        'seller': {
                            '@type': 'Organization',
                            'name': 'Pir Reklam'
                        }
                    },
                    'aggregateRating': {
                        '@type': 'AggregateRating',
                        'ratingValue': '4.9',
                        'reviewCount': '186'
                    }
                }} />
            </div>

        </div>
    )
}
