import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { cn } from '@/lib/utils'
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO, SOCIAL_MEDIA } from '@/lib/data';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: 'https://vesikalikkabi.com.tr',
  logo: 'https://vesikalikkabi.com.tr/logo.png', // Placeholder
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
  title: 'Pir Reklam | Kurumsal Vesikalık Kabı Üretimi',
  description: '1961\'den beri İzmir\'de en kaliteli Vesikalık Fotoğraf Kabı üreticisi. Tekli ve çiftli seçenekler, logo baskılı kurumsal çözümler.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={cn(
        "bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col font-sans",
        outfit.variable,
        inter.variable
      )}>
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
