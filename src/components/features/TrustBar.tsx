import { Factory, Check, Truck, Clock } from 'lucide-react';

export default function TrustBar() {
    const trustItems = [
        {
            icon: Factory,
            title: "1961’den Beri Üretim",
            desc: "Yarım asırlık tecrübe ve güven."
        },
        {
            icon: Check,
            title: "İzmir’de Kendi Tesisimiz",
            desc: "%100 yerli ve milli üretim."
        },
        {
            icon: Truck,
            title: "Türkiye Geneli Sevkiyat",
            desc: "Sigortalı ve güvenli kargo."
        },
        {
            icon: Clock,
            title: "Zamanında Teslim",
            desc: "Söz verdiğimiz tarihte teslimat."
        }
    ];

    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trustItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 justify-start p-4 bg-white border border-gray-100 rounded-[6px] shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                            <div className="bg-blue-50 p-3 rounded-[6px] border border-blue-100 text-blue-900 group-hover:bg-blue-100 transition-all shrink-0">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-base leading-tight">{item.title}</h3>
                                <p className="text-xs text-gray-500 font-medium mt-0.5">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
