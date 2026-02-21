'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button'
import { Phone, Mail, Send, Check } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/data'

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        city: '',
        phone: '',
        email: '',
        productType: 'Tekli Kab',
        quantity: '',
        printing: false,
        notes: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // Type assertion for checkbox logic
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: val
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct message
        const message = `
Merhaba Pir Reklam,
Web siteniz üzerinden teklif almak istiyorum.

Ad Soyad: ${formData.name}
Firma: ${formData.company}
Şehir: ${formData.city}
Telefon: ${formData.phone}
E-posta: ${formData.email}

Ürün: ${formData.productType}
Adet: ${formData.quantity}
Baskı İstiyor mu?: ${formData.printing ? 'Evet' : 'Hayır'}
Notlar: ${formData.notes}
        `.trim();

        // Check if user is on mobile to prefer WhatsApp, but logic is client side.

        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-50 p-8 rounded-lg text-center border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Talebiniz Oluşturuldu!</h3>
                <p className="text-green-700 mb-6 max-w-md mx-auto">
                    Lütfen teklifinizi göndermek için aşağıdaki yöntemlerden birini seçin. Müşteri temsilcimiz en kısa sürede size dönüş yapacaktır.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Merhaba, ${formData.company} firması için teklif almak istiyorum.`)}`}
                        target="_blank" rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors font-medium shadow-sm w-full sm:w-auto"
                    >
                        <Phone className="w-5 h-5" /> WhatsApp ile Gönder
                    </a>
                    <a
                        href={`mailto:${COMPANY_INFO.email}?subject=Teklif Talebi: ${formData.company}&body=${encodeURIComponent(`...`)}`}
                        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm w-full sm:w-auto"
                    >
                        <Mail className="w-5 h-5" /> E-posta ile Gönder
                    </a>
                </div>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                    Yeni Form Doldur
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100" id="quote-form">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Hızlı Teklif Alın</h3>
            <p className="text-gray-500 mb-6 text-sm">Formu doldurun, 15 dakika içinde size özel fiyat çalışmamızı iletelim.</p>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                            placeholder="Adınız Soyadınız"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Firma Adı</label>
                        <input
                            required
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                            placeholder="Stüdyo / Firma Adı"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                            placeholder="05xx xxx xx xx"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                            placeholder="ornek@firma.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bulunduğunuz İl</label>
                    <input
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        placeholder="Örn: İzmir, İstanbul..."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ürün Tipi</label>
                        <select
                            name="productType"
                            value={formData.productType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                        >
                            <option value="Tekli Kab">Tekli Fotoğraf Kabı</option>
                            <option value="Çiftli Kab">Çiftli Fotoğraf Kabı</option>
                            <option value="Diğer">Diğer / Özel Üretim</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tahmini Adet</label>
                        <select
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                        >
                            <option value="">Seçiniz</option>
                            <option value="1000">1.000 Adet</option>
                            <option value="2000">2.000 Adet</option>
                            <option value="3000">3.000 Adet</option>
                            <option value="5000+">5.000 ve üzeri</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center gap-2 py-2">
                    <input
                        type="checkbox"
                        id="printing"
                        name="printing"
                        checked={formData.printing}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="printing" className="text-sm text-gray-700 cursor-pointer select-none">
                        Firma logolu baskı istiyorum
                    </label>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notlar / Özel İstekler</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
                        placeholder="Eklemek istedikleriniz..."
                    ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full font-bold text-base py-6 shadow-blue-500/25 shadow-lg">
                    Fiyat Teklifi Al <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    Kişisel verileriniz KVKK kapsamında korunmaktadır.
                </p>
            </div>
        </form>
    );
}
