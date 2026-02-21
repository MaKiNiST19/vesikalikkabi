import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/lib/data'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Blog & Fotoğrafçılık Rehberi | Pir Reklam',
    description: 'Vesikalık fotoğraf kabı, stüdyo yönetimi ve promosyon ürünleri hakkında faydalı bilgiler.',
}

export default function BlogIndexPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog & Rehber</h1>
                    <p className="text-lg text-gray-600">
                        Fotoğraf stüdyoları için ipuçları, sektör haberleri ve ürün kullanım rehberleri.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                            <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                                <div className="aspect-video bg-gray-200 relative">
                                    {post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                            <span className="text-sm font-medium">Görsel: {post.slug}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" /> Pir Reklam
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Devamını Oku <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
