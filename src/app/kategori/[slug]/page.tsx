import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATEGORIES, PRODUCTS } from '@/lib/data'
import ProductCard from '@/components/features/ProductCard'
import TrustBar from '@/components/features/TrustBar'
import SeoTextRenderer from '@/components/ui/SeoTextRenderer'
import { promises as fs } from 'fs'
import path from 'path'

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        slug: category.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const category = CATEGORIES.find((c) => c.slug === slug)

    if (!category) {
        return { title: 'Kategori Bulunamadı' }
    }

    return {
        title: `${category.name} Modelleri | Pir Reklam İzmir`,
        description: category.description,
    }
}

async function getCategorySeoContent(slug: string): Promise<string | null> {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'categories', `${slug}.json`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data.seoText || null;
    } catch (error) {
        return null; // Return null if file doesn't exist
    }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const category = CATEGORIES.find((c) => c.slug === slug)

    if (!category) {
        notFound()
    }

    const categoryProducts = PRODUCTS.filter(p => p.categoryId === slug)
    const seoText = await getCategorySeoContent(slug);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* BREADCRUMB */}
            <div className="bg-white py-4 border-b border-gray-200">
                <div className="container mx-auto px-4 text-sm font-medium text-gray-500">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900">{category.name}</span>
                </div>
            </div>

            {/* HEADER */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{category.name} Modelleri</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">{category.description}</p>
                </div>
            </section>

            {/* PRODUCTS GRID */}
            <section className="py-16 flex-grow">
                <div className="container mx-auto px-4">
                    {categoryProducts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {categoryProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-2xl text-gray-500">Bu kategoride henüz ürün bulunmuyor.</h3>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO CONTENT */}
            {seoText && (
                <section className="py-16 bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                        <SeoTextRenderer content={seoText} className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-left" />
                    </div>
                </section>
            )}

            <TrustBar />
        </div>
    )
}
