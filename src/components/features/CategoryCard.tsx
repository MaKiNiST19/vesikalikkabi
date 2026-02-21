import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Category } from '@/lib/data'

interface CategoryCardProps {
    category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
    return (
        <div className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="aspect-[4/3] relative bg-white overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {category.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-lg">
                    {category.description}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                    <Link href={`/kategori/${category.slug}`} className="w-full">
                        <Button className="w-full justify-between">
                            Modelleri İncele
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
