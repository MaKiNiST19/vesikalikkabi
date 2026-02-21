import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Settings, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Hakkımızda - Pir Reklam | 1961\'den Beri Üretim Gücü',
    description: 'İzmir merkezli fabrikamızda yarım asırlık tecrübemizle Türkiye geneli profesyonel fotoğraf stüdyolarına doğrudan üretici olarak vesikalık fotoğraf kabı ve promosyon ürünleri tedarik ediyoruz.',
}

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Image Section */}
            <div className="w-full bg-gray-50 flex justify-center items-center py-8 border-b border-gray-100">
                <div className="w-full max-w-5xl h-64 md:h-[450px] relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-200">
                    <Image
                        src="/pir-reklam-izmir.jpg"
                        alt="Pir Reklam İzmir Fabrika"
                        fill
                        className="object-contain p-4"
                        priority
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl py-16 space-y-20 text-gray-800">
                {/* 1) Headings Moved From Hero */}
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Köklü Bir Üretim Geleneği (1961’den Bugüne)</h1>
                    <p className="text-xl text-gray-600 leading-relaxed md:px-8">
                        Pir Reklam, yarım asrı aşan sanayi kültürü ve üretim altyapısıyla Türkiye’nin lider vesikalık kabı ve stüdyo promosyon ürünleri üreticisidir. Gücümüzü aracısız üretim hattımızdan ve yılların tecrübesinden alıyoruz.
                    </p>
                </div>

                {/* 2) Marka Hikayesi */}
                <section className="pt-4">
                    <div className="flex items-center gap-4 mb-6">
                        <Building2 className="w-8 h-8 text-blue-800" />
                        <h2 className="text-3xl font-bold text-gray-900">Marka Hikayemiz</h2>
                    </div>
                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed font-medium">
                        <p className="mb-4">
                            1961 yılında İzmir’de küçük bir atölyede filizlenen üretim yolculuğumuz, bugün kurumsallaşmış fabrika altyapısı ve üçüncü kuşak yönetim anlayışıyla sektörün en güvenilir limanı haline gelmiştir. Kurucumuzun "Kaliteden ödün vermeden, üreticiden tüketiciye doğrudan güven inşa etmek" felsefesiyle atılan o ilk adımlar, günümüzde modern üretim tesislerimizin temelini oluşturuyor.
                        </p>
                        <p>
                            B2B modeline odaklanmış yapımızla, Türkiye'nin dört bir yanındaki profesyonel fotoğraf stüdyolarının marka kimliğini yansıtan özel taşıma ve sunum çözümleri üretiyoruz. Kuşaklar arası devamlılığın getirdiği sektörel birikim, hem tedarik zorluklarını öngörmemizi hem de standartlaşmış kalitemizi korumamızı sağlamaktadır. Ürettiğimiz her vesikalık kabı, stüdyolarla olan köklü ortaklığımızın bir imzası niteliğindedir.
                        </p>
                    </div>
                </section>

                {/* 3) Üretim Gücümüz */}
                <section className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <Settings className="w-8 h-8 text-blue-800" />
                        <h2 className="text-3xl font-bold text-gray-900">Üretim Gücümüz: Kapasite ve Kalite Kontrol</h2>
                    </div>
                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed font-medium">
                        <p className="mb-4">
                            İzmir Karabağlar’da konumlanan entegre üretim tesisimizde, tüm iş süreçlerini kendi bünyemizde barındırıyoruz. Hammadde kabulünden başlayarak baskı, kesim, montaj ve paketleme aşamalarının tamamı uzman ekibimiz tarafından yürütülmektedir. Bu entegre yapı, dışa bağımlılığı ortadan kaldırarak maliyet ve zaman yönetiminde net bir avantaj sağlar.
                        </p>
                        <p>
                            Makine parkurumuz; standart ofset baskı makinelerinden hassas serigrafi şablonlarına, yüksek basınçlı gofre (kabartma) preslerinden endüstriyel dikim sistemlerine kadar geniş bir donanıma sahiptir. Aylık <strong>1.500.000 adet</strong> vesikalık ve promosyon kabı üretebilme kapasitemizle, en yüksek hacimli siparişlere dahi planlanan sürede ve sıfır fire prensibiyle cevap vermekteyiz. Her üretim bandımızda standart tolerans değerlerine (+/- %10 endüstriyel kabul) riayet edilir ve üç aşamalı son kalite kontrolünden geçmeyen hiçbir ürün tesisten çıkış yapamaz.
                        </p>
                    </div>
                </section>

                {/* 4) Türkiye Geneli Tedarik Ağı */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <Truck className="w-8 h-8 text-blue-800" />
                        <h2 className="text-3xl font-bold text-gray-900">Türkiye Geneli Tedarik Ağı</h2>
                    </div>
                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed font-medium">
                        <p className="mb-4">
                            Lojistik çevikliğimiz ve güvenilir dağıtım kanallarımız sayesinde İzmir’deki fabrikamızdan 81 ile doğrudan dağıtım sağlıyoruz. Karadeniz’in en zorlu coğrafyalarından Doğu Anadolu’nun en ücra köşelerine kadar, profesyonel stüdyolarla sağladığımız B2B iş ortaklıkları aralıksız sürüyor.
                        </p>
                        <p>
                            Özellikle standart siparişlerde aynı gün kargo, baskılı özel siparişlerde ise belirlenen termin gününde (serigrafi için 7 iş günü, gofre için 15 iş günü gibi) tavizsiz teslimat oranımız <strong>%98.4</strong> seviyesindedir. Kurumsal anlaşmalı kargo firmalarıyla yaptığımız lojistik entegrasyonu, nakliye maliyetlerini stüdyolar için minimize ederken, ürünlerin raftaki kalitesiyle tüketiciye ulaşmasını garantiler.
                        </p>
                    </div>
                </section>

                {/* 5) Değerlerimiz */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <ShieldCheck className="w-8 h-8 text-blue-800" />
                        <h2 className="text-3xl font-bold text-gray-900">Temel Değerlerimiz</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Standart Kalite</h3>
                            <p className="text-gray-600">Tercih edilen folyo, PVC ve Biala malzemelerinde pazarın en dayanıklı speklerini (kalınlık ve gramaj oranlarını) kullanıyoruz. İlk sipariş ile 100. sipariş arasında kalite sapması yaşanmaz.</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Kesintisiz Süreklilik</h3>
                            <p className="text-gray-600">Üretim hammadde stoklarımız yıllık planlanarak güvenceye alınır. Satın alma talebi oluşturduğunuzda "hammadde yok" mazereti ile karşılaşmazsınız.</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Güven İlkesi</h3>
                            <p className="text-gray-600">Maliyet kalemlerini şeffaf biçimde sunarız. Gizli bedeller, önceden belirtilmeyen kargo eklentileri veya kalıp ücretleri iş yapış şeklimizde yer almaz.</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Endüstriyel Teknoloji</h3>
                            <p className="text-gray-600">Baskı netliği ve kaynak dayanımını sağlamak için analog ustalığını makineleşme teknolojisiyle destekleyerek hızlı ve sorunsuz iş çıkartırız.</p>
                        </div>
                    </div>
                </section>

                {/* 6) Neden Pir Reklam? */}
                <section className="bg-blue-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
                    <h2 className="text-3xl font-bold mb-8 relative z-10">Neden Üretici Çözüm Ortağınız Pir Reklam Olmalı?</h2>
                    <ul className="space-y-5 relative z-10">
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-lg text-blue-100"><strong>Aracısız Fiyatlandırma:</strong> Tedarik zincirindeki aracı maliyetlerini kaldırarak, stüdyolara doğrudan taban fiyatlardan alım garantisi sunuyoruz.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-lg text-blue-100"><strong>Kapasite Esnekliği:</strong> Asgari 1.000 adetten başlayarak on binlerce adede kadar tek seferde üretim bandına reaksiyon verebilme çevikliğimiz mevcuttur.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-lg text-blue-100"><strong>Tam Özelleştirme:</strong> Logonuzu, kurumsal renklerinizi ve iletişim bilgilerinizi varak, serigrafi veya ofset opsiyonlarıyla mükemmel bir şekilde kılıf yüzeyine işliyoruz.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-lg text-blue-100"><strong>Minimum Depolama Yükü:</strong> İstikrarlı ve hızlı tedarik modelimiz sayesinde stoklama (envanter) maliyetlerinizi düşürmenizi sağlıyoruz.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-lg text-blue-100"><strong>Endüstriyel Garantörlük:</strong> Sevkiyat öncesi her üretim bandının detaylı video kayıtlarını hazırlayarak şeffaf ve kanıtlı teslimat anlayışıyla hareket ediyoruz.</p>
                        </li>
                    </ul>
                </section>

                {/* 7) CTA */}
                <section className="text-center py-10 border-t border-gray-200">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Kurumsal Tedarik Sürecinizi Güvenceye Alın</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Aracı firmalar yerine doğrudan fabrika ile çalışmanın avantajını yaşayın. Stüdyonuzun yoğun sezonlarında malzeme krizleriyle uğraşmak istemiyorsanız, Pir Reklam’ın köklü üretim hattıyla hemen tanışın.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/iletisim">
                            <button className="w-full sm:w-auto px-8 h-16 rounded-xl font-bold text-lg shadow-lg hover:-translate-y-0.5 transition-all text-white border-none btn-animated">
                                Kurumsal Teklif Alın
                            </button>
                        </Link>
                        <Link href="/urunler">
                            <button className="w-full sm:w-auto px-8 h-16 bg-gray-100 text-gray-800 rounded-xl font-bold text-lg border border-gray-200 hover:bg-gray-200 hover:-translate-y-0.5 transition-all">
                                Ürünlerimizi İnceleyin
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
