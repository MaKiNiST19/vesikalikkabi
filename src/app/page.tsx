import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import CategoryCard from '@/components/features/CategoryCard'
import FAQ from '@/components/features/FAQ'
import CityLinks from '@/components/features/CityLinks'
import QuoteForm from '@/components/features/QuoteForm'
import Hero from '@/components/layout/Hero'
import TrustBar from '@/components/features/TrustBar'
import { CATEGORIES, CITIES } from '@/lib/data'
import { seoAuthorityBlock } from '@/lib/seo-content'
import { Clock } from 'lucide-react'
import SeoTextRenderer from '@/components/ui/SeoTextRenderer'
import AnimatedTextButton from '@/components/ui/AnimatedTextButton'

export default function Home() {
  const faqs = [
    { question: "Minimum sipariş neden 1000 adet vesikalık kabı olarak belirlenmiştir?", answer: "Üretim süreçlerimiz ofset ve seri baskı teknolojisine dayalıdır. 1000 adet altındaki üretimler maliyet açısından verimsiz olduğundan, müşterilerimize en uygun birim fiyatı sunabilmek için minimum sipariş bandı bu şekilde belirlenmiştir." },
    { question: "Vesikalıkkabı.com.tr ile Pir Reklam arasındaki ilişki nedir?", answer: "Vesikalıkkabı.com.tr, Pir Reklam’ın vesikalık kabı ürün grubuna özel oluşturduğu ihtisas sitesidir. Tüm üretim ve sevkiyat süreçleri Pir Reklam güvencesiyle yürütülür." },
    { question: "Logo baskılı vesikalık kabı sipariş süreci nasıl ilerler?", answer: "Sipariş sonrası logonuz tasarım şablonuna yerleştirilir ve dijital onayınıza sunulur. Onay sonrası üretim planlaması yapılır ve belirlenen süre içinde sevkiyat gerçekleştirilir." },
    { question: "Türkiye geneline gönderim yapıyor musunuz?", answer: "Evet. İzmir’deki üretim tesisimizden Türkiye’nin 81 iline düzenli ve planlı kargo organizasyonu ile gönderim yapılmaktadır." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <Hero />

      {/* MOBILE QUOTE FORM SECTION (Visible only on mobile/tablet) */}
      <section className="lg:hidden py-12 bg-gray-50 px-4" id="quote-form-mobile">
        <div className="container mx-auto max-w-lg">
          <QuoteForm />
        </div>
      </section>

      {/* Manufacturer Authority Section - Moved from old features/trust section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-left space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">1961’den Beri Vesikalık Kabı Üreticisi</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vesikalık kabı, fotoğraf stüdyoları için yalnızca bir koruma ürünü değil, aynı zamanda markanın müşteriye temas ettiği son noktadır. Pir Reklam olarak 1961 yılından bu yana <strong>vesikalık kabı üretici</strong> kimliğimizle sektöre doğrudan hizmet veriyoruz. Vesikalikkabi.com.tr, yalnızca bu ürün grubuna odaklanan ihtisas platformumuzdur ve <strong>tekli vesikalık kabı</strong> ile <strong>çiftli vesikalık kabı</strong> modellerini detaylı biçimde sunar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aracı değil, doğrudan üretici olarak çalışıyoruz. <strong>Logo baskılı vesikalık kabı</strong> siparişleriniz <strong>1000 adet vesikalık kabı</strong> minimum üretim bandıyla planlanır ve İzmir’deki tesislerimizde hazırlanır. <strong>Toptan vesikalık kabı</strong> üretiminde kalite, baskı netliği ve zamanında teslim bizim için standarttır. Her ürün, stüdyonuzun kurumsal kimliğini uzun süre taşıyacak dayanıklılıkta üretilir.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS / CATEGORIES */}
      <section className="py-20 bg-gray-50" id="urunler">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Ürün Kategorilerimiz</h2>
            <p className="text-gray-600 text-lg">Fotoğraf stüdyonuzun ihtiyacına uygun, firmanıza özel baskılı vesikalık kabı kategorilerimiz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION / ABOUT SNIPPET */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative shadow-2xl">
                <Image
                  src="/vesikalık-kabi-toptan.jpg"
                  alt="İzmir'deki Pir Reklam Entegre Üretim Tesisimiz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-xl -z-10 opacity-20 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-yellow-400 rounded-xl -z-10 opacity-20 hidden md:block"></div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">İzmir’de Kendi Tesisimizde Entegre Üretim</h2>
              <p className="text-gray-600 leading-relaxed">
                Üretim süreçlerimizin tamamı İzmir’deki Pir Reklam tesislerinde gerçekleştirilir. Tasarım onayından baskıya, kesimden son kalite kontrol aşamasına kadar tüm adımlar aynı çatı altında yürütülür. Bu yapı, hem kalite standardını korumamızı hem de teslim sürelerini net şekilde planlamamızı sağlar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tekli vesikalık kabı ve çiftli vesikalık kabı üretiminde kullanılan PVC ve kağıt bazlı malzemeler, uzun ömürlü kullanım için seçilir. Baskı öncesi dijital prova süreci uygulanır, müşteri onayı alınmadan seri üretime geçilmez. Pir Reklam üretim gücü sayesinde Türkiye’nin 81 iline düzenli sevkiyat yapılmakta ve her parti ürün aynı kalite kontrol prosedüründen geçirilmektedir.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link href="/hakkimizda">
                  <Button className="btn-animated text-white border-none shadow-sm h-14 px-8 text-lg font-bold w-full sm:w-auto">
                    Üretim Sürecimizi Keşfedin
                  </Button>
                </Link>
                <a href="https://pirreklam.com.tr" target="_blank" rel="noopener noreferrer">
                  <AnimatedTextButton text="Tüm Promosyon Ürünleri İçin Pir Reklam" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITY LINKS (SEO) */}
      <CityLinks cities={CITIES} />

      {/* SEO AUTHORITY BLOCK */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="space-y-16">
            {seoAuthorityBlock.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
                {section.subheading && <h3 className="text-xl font-semibold text-gray-700 mb-4">{section.subheading}</h3>}
                <SeoTextRenderer content={section.content} className="prose prose-blue max-w-none text-gray-600 leading-relaxed text-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={[...faqs, ...seoAuthorityBlock.faq]} />

      {/* FOOTER ABOVE TRUST BAR */}
      <TrustBar />

    </div>
  )
}
