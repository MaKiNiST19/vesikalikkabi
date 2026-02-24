import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { cn } from '@/lib/utils'
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO, SOCIAL_MEDIA } from '@/lib/data';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import ScrollToTop from '@/components/utils/ScrollToTop';


const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: 'https://vesikalikkabi.com.tr',
  logo: 'https://vesikalikkabi.com.tr/logo.png',
  description: "Türkiye'nin lider vesikalık kabı ve vesikalık kılıfı üreticisi. Toptan pvc, naylon, plastik vesikalık zarfı; tekli vesikalık kabı, çiftli vesikalık fotoğraf kabı imalatı, şeffaf ve biala kılıflar.",
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_INFO.phone,
    contactType: 'customer service',
    areaServed: 'TR',
    availableLanguage: 'Turkish',
  },
  sameAs: [
    SOCIAL_MEDIA.facebook,
    SOCIAL_MEDIA.instagram,
    SOCIAL_MEDIA.youtube,
    SOCIAL_MEDIA.pinterest,
    SOCIAL_MEDIA.linkedin
  ],
};


export const metadata: Metadata = {
  title: 'Pir Reklam | Kurumsal Vesikalık Kabı & Vesikalık Kılıfı Üreticisi',
  description: "1961'den beri toptan vesikalık kabı, vesikalık kılıfı, pvc, plastik folyo, biala kılıflar, tekli ve çiftli karton vesikalık fotoğraf kabı imalatı. Toptan vesikalık poşeti ve naylon kılıflar.",
  keywords: "vesikalık kabı, vesikalık kılıfı, Vesikalık fotoğraf kabı, Tekli vesikalık kabı, Tekli vesikalık kılıfı, Tek cepli vesikalık kabı, Çiftli vesikalık fotoğraf kabı, Çiftli vesikalık kabı, Çiftli vesikalık kılıfı, Çiftli karton vesikalık kabı, Çiftli karton vesikalık kılıfı, Fantezi kağıt vesikalık kabı, Fantezi kağıt vesikalık kılıfı, Varak yaldız baskılı vesikalık kabı, Varak yaldız baskılı vesikalık kılıfı, Karton çiftli vesikalık kabı, Karton vesikalık kabı, Karton vesikalık kılıfı, vesikalık zarfı, vesikalık biala, vesikalık pvc, vesikalık plastik, vesikalık naylon, pvc vesikalık kabı, pvc vesikalık kılıfı, naylon vesikalık kabı, naylon vesikalık kılıfı, vesikalık fotoğraf kabı kılıfı, vesikalık fotoğraf fiyatları, vesikalık kabı fiyatları, vesikalık kılıfı fiyatları, plastik vesikalık kabı, plastik vesikalık kılıfı, plastik folyo vesikalık kabı, plastik folyo vesikalık kılıfı, vesikalık fotoğraf koyma kabı, vesikalık poşeti, vesikalık fotoğraf kılıfı, vesikalık fotoğraf poşeti, plastik vesikalık zarfı fiyatları, biala vesikalık kabı, biala vesikalık kılıfı, şeffaf vesikalık kabı, şeffaf vesikalık kılıfı",
  icons: {
    icon: [
      { url: '/logo.webp', type: 'image/webp' },
    ],
    shortcut: ['/logo.webp'],
    apple: [
      { url: '/logo.webp', type: 'image/webp' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth scroll-pt-[110px] md:scroll-pt-[150px]">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VLX6S47KHM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VLX6S47KHM');
        `}
      </Script>
      <body className={cn(
        "bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col font-sans",
        outfit.variable,
        inter.variable
      )}>
        <ScrollToTop />
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
