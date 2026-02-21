import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Logo Baskı Seçenekleri | Pir Reklam',
    description: 'Vesikalık kabı üzerine uyguladığımız logo baskı teknikleri ve renk seçenekleri.',
}

export default function PrintingPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Logo Baskı Seçenekleri</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>
                        Vesikalık fotoğraf kaplarınızın en önemli özelliği, firmanızın logosunu ve iletişim bilgilerini taşımasıdır.
                        Bu sayede müşterileriniz size her ihtiyaç duyduğunda kolayca ulaşabilir.
                    </p>
                    <h2>Baskı Tekniklerimiz</h2>
                    <ul>
                        <li><strong>CMYK Ofset Baskı:</strong> 4 renk baskı teknolojisi ile fotoğraf kalitesinde logo ve görsel basımı.</li>
                        <li><strong>Tek Renk Baskı (Tire):</strong> Daha ekonomik seçenekler için tek renk (genellikle siyah veya lacivert) baskı.</li>
                        <li><strong>Yaldız Baskı (Opsiyonel):</strong> Özel talepleriniz için altın veya gümüş yaldız uygulaması.</li>
                    </ul>
                    <h2>Selefon Kaplama</h2>
                    <p>
                        Baskı sonrası uygulanan selefon kaplama, ürünün dayanıklılığını artırır ve şık bir görünüm sağlar.
                    </p>
                    <ul>
                        <li><strong>Parlak Selefon:</strong> Renkleri daha canlı gösterir, parlak bir yüzey oluşturur.</li>
                        <li><strong>Mat Selefon:</strong> Daha kurumsal ve ağırbaşlı bir görünüm sağlar, parlamayı önler.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
