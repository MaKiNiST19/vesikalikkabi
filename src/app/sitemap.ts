import { MetadataRoute } from 'next'
import { PRODUCTS, CITIES, BLOG_POSTS } from '@/lib/data'
import { slugify } from '@/lib/utils'

const BASE_URL = 'https://vesikalikkabi.com.tr'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/urunler',
        '/blog',
        '/hakkimizda',
        '/iletisim',
        '/uretim',
        '/baski',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const productRoutes = PRODUCTS.map((product) => ({
        url: `${BASE_URL}/urunler/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    const cityRoutes = CITIES.map((city) => ({
        url: `${BASE_URL}/il/${slugify(city)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticRoutes, ...productRoutes, ...cityRoutes, ...blogRoutes]
}
