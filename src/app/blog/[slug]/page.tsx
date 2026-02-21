import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/data'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = BLOG_POSTS.find((p) => p.slug === slug)

    if (!post) {
        return { title: 'Yazı Bulunamadı' }
    }

    return {
        title: `${post.title} | Blog - Pir Reklam`,
        description: post.excerpt,
        openGraph: {
            type: 'article',
            publishedTime: post.date,
            authors: ['Pir Reklam'],
        }
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = BLOG_POSTS.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    // Related posts (simple logic: random 2 excluding current)
    const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2)

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-12 border-b">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-6 group">
                        <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Blog'a Dön
                    </Link>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border shadow-sm">
                            <Calendar className="w-3 h-3 text-blue-500" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border shadow-sm">
                            <User className="w-3 h-3 text-blue-500" /> Pir Reklam
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-3xl">
                {post.image && (
                    <div className="w-full relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-sm border border-gray-100">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                <article className="prose prose-lg prose-blue mx-auto prose-img:rounded-xl prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-800">
                    {/* Main Content */}
                    <div dangerouslySetInnerHTML={{ __html: post.detail }} />
                </article>

                <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-2">
                        <span className="text-sm font-bold text-gray-900">Paylaş:</span>
                        <button aria-label="Share" className="p-1 hover:bg-gray-100 rounded-full text-gray-500 hover:text-blue-600">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            <section className="bg-gray-50 py-16 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">İlginizi Çekebilir</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {relatedPosts.map(p => (
                            <Link key={p.id} href={`/blog/${p.slug}`} className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col">
                                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">{p.title}</h4>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                                <span className="text-blue-600 text-sm font-medium mt-auto group-hover:underline decoration-2 underline-offset-4">Oku &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
