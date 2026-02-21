import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Pir Reklam Vesikalık Kabı',
    description: 'Vesikalikkabi.com.tr ziyaretçilerinin kişisel verilerinin korunması ve işlenmesi hakkındaki gizlilik politikamız.',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Gizlilik Politikası</h1>

                    <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                        <p><strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}</p>

                        <h2>1. Veri Sorumlusu</h2>
                        <p>
                            Vesikalikkabi.com.tr ("Site") üzerinden elde edilen kişisel verileriniz, İzmir'de kurulu bulunan Pir Reklam Promosyon Ürünleri San. İç ve Dış Tic. Ltd. Şti ("Şirket") tarafından, veri sorumlusu sıfatıyla, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca işlenmektedir.
                        </p>

                        <h2>2. İşlenen Kişisel Verileriniz ve İşlenme Amaçları</h2>
                        <p>Sitemizi ziyaretiniz ve hizmetlerimizden yararlanmanız kapsamında aşağıdaki kişisel verileriniz işlenebilir:</p>
                        <ul>
                            <li><strong>İletişim Bilgileriniz (Ad, Soyad, Telefon, E-posta):</strong> Teklif taleplerinize(form üzerinden) yanıt verebilmek, sipariş süreçlerinizi yürütmek ve müşteri iletişimi sağlamak amacıyla,</li>
                            <li><strong>Firma/Stüdyo Bilgileriniz:</strong> Kurumsal siparişlerinizin oluşturulması, faturalandırma ve kargo süreçleri için,</li>
                            <li><strong>Logonuz ve Tasarım Dosyalarınız:</strong> Logo baskılı vesikalık kabı üretiminin gerçekleştirilmesi için,</li>
                            <li><strong>Dijital İz Verileriniz (IP, Çerezler):</strong> Site güvenliğini sağlamak ve ziyaretçi istatistiklerini oluşturarak kullanıcı deneyimini iyileştirmek amacıyla işlenmektedir.</li>
                        </ul>

                        <h2>3. Kişisel Verilerinizin Aktarımı</h2>
                        <p>
                            Kişisel verileriniz ve firma logonuz, yalnızca üretim ve teslimat faaliyetlerinin yerine getirilebilmesi amacıyla (örneğin anlaşmalı kargo firmaları, mali müşavirler vb.) KVKK’nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde yurtiçindeki iş ortaklarımızla veya kanunen yetkili kamu kurumlarıyla paylaşılabilir. Verileriniz kesinlikle üçüncü parti reklam şirketlerine satılmaz veya devredilmez.
                        </p>

                        <h2>4. Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
                        <p>
                            Kişisel verileriniz, Site üzerindeki iletişim ve teklif formları, WhatsApp destek hattı veya telefon görüşmeleri aracılığıyla elektronik ve sözlü ortamda toplanmaktadır. Bu veriler KVKK madde 5/2-c (sözleşmenin kurulması veya ifası) ve madde 5/2-f (veri sorumlusunun meşru menfaati) hukuki sebeplerine dayalı olarak işlenmektedir.
                        </p>

                        <h2>5. İlgili Kişinin (Veri Sahibinin) Hakları</h2>
                        <p>KVKK'nın 11. maddesi uyarınca veri sahipleri haklarına sahiptir. Haklarınızı kullanmak için iletişim adreslerimizden (info@pirreklam.com.tr) bize ulaşabilirsiniz.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
