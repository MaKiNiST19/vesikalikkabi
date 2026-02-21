import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Üretim Süreci - Vesikalık Kabı | Pir Reklam',
    description: 'İzmir üretim tesisimizde en son teknoloji ofset baskı makineleriyle vesikalık fotoğraf kabı üretimi.',
}

export default function ProductionPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Üretim Sürecimiz</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Tasarım aşamasından kağıt seçimine, baskıdan kesim ve paketlemeye kadar tüm süreçler İzmir'deki tesisimizde titizlikle yürütülmektedir.
                </p>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Adım 1</div>
                        <h2 className="text-3xl font-bold text-gray-900">Grafik Tasarım & Onay</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Müşterimizden gelen logo ve kurumsal bilgiler, profesyonel grafik ekibimiz tarafından vesikalık kabı şablonuna yerleştirilir.
                            Görsel onay alındıktan sonra baskı kalıpları (CTP) hazırlanır.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500" /> Ücretsiz tasarım desteği
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500" /> Hızlı revizyon imkanı
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-400">
                        [Tasarım Görseli]
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-400">
                        [Baskı Makinesi Görseli]
                    </div>
                    <div className="space-y-6">
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Adım 2</div>
                        <h2 className="text-3xl font-bold text-gray-900">Ofset Baskı</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Hazırlanan kalıplar son teknoloji ofset baskı makinelerimize alınır.
                            230gr - 300gr arası Amerikan Bristol kartonlar üzerine yüksek çözünürlüklü baskı yapılır.
                            CMYK renk uzayı sayesinde logonuzun renkleri birebir tutturulur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
