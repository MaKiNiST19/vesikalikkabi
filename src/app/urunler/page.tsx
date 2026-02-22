import { Metadata } from 'next'
import { PRODUCTS } from '@/lib/data'
import ProductCard from '@/components/features/ProductCard'


export const metadata: Metadata = {
    title: 'Vesikalık Kabı Modelleri | Tekli ve Çiftli Seçenekler - Pir Reklam',
    description: 'En kaliteli, dayanıklı ve logo baskılı vesikalık fotoğraf kabı modellerimiz. Tekli ve çiftli seçenekler, uygun fiyatlar ve hızlı üretim.',
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Tekli Vesikalık Kabı Modelleri</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start max-w-7xl mx-auto">
                        {PRODUCTS.filter(p => p.categoryId === 'tekli-vesikalik-kabi').slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Çiftli Vesikalık Kabı Bölümü */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Çiftli Vesikalık Kabı Modelleri</h2>
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


            </div>
        </div>
    )
}
