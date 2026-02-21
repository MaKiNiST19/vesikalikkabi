import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | Pir Reklam Vesikalık Kabı',
    description: 'Vesikalikkabi.com.tr websitesinin ve hizmetlerimizin genel kullanım şartları.',
}

export default function TermsOfUsePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Kullanım Koşulları</h1>

                    <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                        <p><strong>Yürürlük Tarihi:</strong> {new Date().toLocaleDateString('tr-TR')}</p>

                        <h2>1. Sözleşmenin Tarafları</h2>
                        <p>
                            İşbu Kullanım Koşulları, "vesikalikkabi.com.tr" (bundan böyle "Site" olarak anılacaktır) adresini ziyaret eden her kişi, kurum ("Kullanıcı") ile, Site'nin sahibi ve işletmecisi olan Pir Reklam Promosyon Ürünleri San. İç ve Dış Tic. Ltd. Şti ("Pir Reklam") arasında düzenlenmiştir.
                        </p>

                        <h2>2. Üretim, Sipariş ve Teslimat Süreçleri</h2>
                        <ul>
                            <li><strong>Minimum Sipariş Miktarı (MOQ):</strong> Site üzerinde sunulan ürünler asgari 1.000 adet ile üretilmektedir.</li>
                            <li><strong>Baskı ve Renk Onayı:</strong> Logo baskılı üretimlerde müşteriden dijital olarak (WhatsApp/Mail) onay alınmadan seri üretime geçilmez. Onaydan sonra sorumluluk müşteriye aittir. Ekran parlaklığı ile kağıt baskısı (CMYK) arasında %5 - %10 oranında ton farklılığı olma ihtimali teknik olarak mevcuttur.</li>
                            <li><strong>Teslimat ve Kargo Süresi:</strong> Üretimi tamamlanan siparişler ortalama 7-10 iş günü içinde anlaşmalı kargoya verilir (özel durumlarda ve resmi tatillerde bu süre değişebilir). Gönderimler İzmir'den yapılmakta olup, kargo hasarları alıcı ve kargo şirketi arasında düzenlenecek tutanağa bağlıdır.</li>
                        </ul>

                        <h2>3. Fikri ve Sınai Haklar</h2>
                        <p>
                            pirreklam.com.tr ve vesikalikkabi.com.tr alan adları, Site dahilindeki tüm içerikler (tasarımlar, logo, metin, ürün fotoğrafları vb.) 5846 sayılı Fikir ve Sanat Eserleri Kanunu uyarınca korunmaktadır ve hakları Pir Reklam'a aittir. İzinsiz kopyalama veya ticari amaçla kullanımı yasaktır.
                            <br /><br />
                            Müşteri, baskı yapılmak üzere tarafımıza sunduğu logoların ticari/lisans haklarının kendisine ait olduğunu taahhüt eder. Şirketimiz, fikri mülkiyet ihlaline sebebiyet veren logoları basmayı reddetme hakkını saklı tutar ve sorumluluk müşteriye aittir.
                        </p>

                        <h2>4. İletişim Bilgileri</h2>
                        <p>Platformumuzu kullanmak ve hizmetlerimizle ilgili süreçler için aşağıdaki yollarla bize ulaşabilirsiniz:</p>
                        <ul className="list-disc pl-5 my-4">
                            <li><strong>Firma Unvanı:</strong> PİR REKLAM PROMOSYON ÜRÜNLERİ SAN. İÇ VE DIŞ TİC. LTD. ŞTİ.</li>
                            <li><strong>Adres:</strong> Aşık Veysel Mah. 5733/8 Sk. No: 5/101 Karabağlar – İZMİR</li>
                            <li><strong>Telefon:</strong> 444 10 30 / 0532 233 80 03</li>
                            <li><strong>E-Posta:</strong> info@pirreklam.com.tr</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
