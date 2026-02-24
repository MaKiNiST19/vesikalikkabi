import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pir Reklam | Kurumsal Vesikalık Kabı & Vesikalık Kılıfı Üreticisi',
        short_name: 'Pir Reklam',
        description: "Türkiye'nin lider vesikalık kabı ve vesikalık kılıfı üreticisi.",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#cc0735',
        icons: [
            {
                src: '/logo.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/logo.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    }
}
