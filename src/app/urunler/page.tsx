import { Metadata } from 'next'
import { PRODUCTS } from '@/lib/data'
import ProductCard from '@/components/features/ProductCard'
import JsonLd from '@/components/seo/JsonLd'


export const metadata: Metadata = {
    title: 'Vesikalık Kabı & Vesikalık Kılıfı Modelleri | Toptan - Pir Reklam',
    description: 'En kaliteli ve dayanıklı logo baskılı vesikalık fotoğraf kabı, pvc vesikalık kabı, çiftli vesikalık kılıfı, şeffaf, naylon ve karton seçenekler. Fiyatları inceleyin.',
    keywords: 'vesikalık kabı, vesikalık kılıfı, vesikalık fotoğraf kabı, toptan vesikalık poşeti, plastik vesikalık kabı, tekli vesikalık kabı, çiftli vesikalık fotoğraf kabı, pvc vesikalık kılıfı'
}

export default function ProductsPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Vesikalık Kabı Modellerimiz</h1>
                    <p className="text-lg text-gray-600">
                        Fotoğraf stüdyoları için özel olarak ürettiğimiz, dayanıklı ve şık tasarımlı vesikalık kabı çeşitlerini inceleyin.
                        Kurumsal kimliğinize uygun logo baskısı ile müşterilerinize profesyonel bir sunum yapın.
                    </p>
                </div>

                {/* Tekli Vesikalık Kabı Bölümü */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Tekli Vesikalık Kabı & Kılıfı Modelleri</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start max-w-7xl mx-auto">
                        {PRODUCTS.filter(p => p.categoryId === 'tekli-vesikalik-kabi').slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Çiftli Vesikalık Kabı Bölümü */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Çiftli Vesikalık Kabı & Kılıfı Modelleri</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start max-w-7xl mx-auto">
                        {PRODUCTS.filter(p => p.categoryId === 'ciftli-vesikalik-kabi').slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Fotoğraf Kabı Bölümü */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Fotoğraf Kabı Modelleri (Özel Ebat)</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 items-start w-full mx-auto px-4 max-w-[1920px]">
                        {PRODUCTS.filter(p => p.categoryId === 'fotograf-kabi').map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>


                <div className="mt-20 max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                    <div className="text-left space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">Neden Vesikalık Kabı ve Vesikalık Kılıfı Seçmelisiniz?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Fotoğraf stüdyosu olarak müşterinizin karşısına en profesyonel şekilde çıkmanız bizim için önemli. Piyasada <strong>vesikalık fotoğraf kabı</strong>, <strong>vesikalık zarfı</strong> veya <strong>vesikalık poşeti</strong> olarak da araştırılan bu ürünler, firmanızın dışa dönük yüzüdür. <strong>Tekli vesikalık kılıfı</strong> kullanım kolaylığı sağlarken, iki fotoğraflık paketlerde <strong>çiftli vesikalık fotoğraf kabı</strong> tercih edilmektedir.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Klasik modellerden olan <strong>vesikalık pvc</strong> ve <strong>vesikalık naylon</strong> ürünlerinin yanı sıra daha lüks dokunuş arayanlar için <strong>varak yaldız baskılı vesikalık kabı</strong> veya <strong>fantezi kağıt vesikalık kılıfı</strong> imalatı yapıyoruz. İster <strong>plastik folyo vesikalık kabı</strong> isterseniz de <strong>karton çiftli vesikalık kabı</strong> üretimimiz sayesinde <strong>vesikalık kabı fiyatları</strong> konusunda en esnek toptan skalayı sunuyoruz.
                        </p>
                    </div>
                </div>

                <JsonLd data={{
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    'itemListElement': PRODUCTS.map((p, idx) => ({
                        '@type': 'ListItem',
                        'position': idx + 1,
                        'url': `https://vesikalikkabi.com.tr/urunler/${p.slug}`,
                        'name': p.name
                    }))
                }} />

            </div>
        </div>
    )
}
