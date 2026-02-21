
interface FAQ {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQ[];
    title?: string;
    className?: string;
    id?: string;
}

export default function FAQ({ items, title = "Sıkça Sorulan Sorular", className, id }: FAQProps) {
    return (
        <section id={id} className={`bg-gray-50 py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="text-left mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600">Vesikalık kabı üretimi ve sipariş süreci hakkında merak ettikleriniz.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 w-full">
                    {items.map((faq, idx) => (
                        <details key={idx} className="group p-4 bg-white border border-gray-200 rounded-lg cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between font-medium text-gray-900 hover:text-blue-600 list-none">
                                <span>{faq.question}</span>
                                <span className="transition group-open:rotate-180 shrink-0 ml-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-gray-600 group-open:animate-fadeIn">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
