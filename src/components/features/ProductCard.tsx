import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Product } from '@/lib/data'

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="aspect-[4/3] relative bg-white overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-blue-900 rounded-full shadow-sm">
                    {product.specs.minOrder} Adet Min.
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                    {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                    <Link href={`/urunler/${product.slug}`} className="w-full">
                        <Button className="w-full justify-between">
                            İncele & Teklif Al
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
