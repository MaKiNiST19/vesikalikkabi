"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

interface VariationData {
    materials?: { label: string; value: string }[];
    colors?: { label: string; value: string; hex: string }[];
    quantities?: { label: string; value: string }[];
    materialTitle?: string;
    colorsTitle?: string;
}

const VARIATION_CONFIG: Record<string, VariationData> = {
    "folyo-pvc-tekli-vesikalik-kabi": {
        materialTitle: "MALZEME KALİTE SEÇENEĞİ",
        materials: [
            { label: "Folyo İnce Pvc 0,15 Mikron", value: "ince" },
            { label: "Folyo Kalın Pvc 0,25 Mikron", value: "kalin" }
        ],
        colorsTitle: "FOLYO PVC RENKLER",
        colors: [
            { label: "Beyaz", value: "beyaz", hex: "#FFFFFF" },
            { label: "Siyah", value: "siyah", hex: "#000000" },
            { label: "Mavi", value: "mavi", hex: "#0000FF" },
            { label: "Sarı", value: "sari", hex: "#FFD700" },
            { label: "Turuncu", value: "turuncu", hex: "#FF8C00" },
            { label: "Kırmızı", value: "kirmizi", hex: "#DA291C" },
            { label: "Bordo", value: "bordo", hex: "#800000" }
        ],
        quantities: [
            { label: "1000 Adet", value: "1000" },
            { label: "2000 Adet", value: "2000" },
            { label: "5000 Adet", value: "5000" },
            { label: "10000 Adet", value: "10000" }
        ]
    },
    "buzlu-seffaf-pvc-tekli-vesikalik-kabi": {
        materialTitle: "MALZEME KALİTE SEÇENEĞİ",
        materials: [
            { label: "Buzlu İnce Pvc 0,15 Mikron", value: "ince" },
            { label: "Buzlu Kalın Pvc 0,25 Mikron", value: "kalin" }
        ],
        quantities: [
            { label: "1000 Adet", value: "1000" },
            { label: "2000 Adet", value: "2000" },
            { label: "5000 Adet", value: "5000" },
            { label: "10000 Adet", value: "10000" }
        ]
    },
    "mat-biala-tekli-vesikalik-kabi": {
        materialTitle: "MALZEME KALİTE SEÇENEĞİ",
        materials: [
            { label: "Ekonomik Mat Biala", value: "ekonomik" },
            { label: "Standart Mat Biala", value: "standart" }
        ],
        colorsTitle: "BİALA RENKLER",
        colors: [
            { label: "Mavi", value: "mavi", hex: "#0047AB" },
            { label: "Kırmızı", value: "kirmizi", hex: "#DA291C" },
            { label: "Bordo", value: "bordo", hex: "#800000" },
            { label: "Siyah", value: "siyah", hex: "#252525" },
            { label: "Beyaz", value: "beyaz", hex: "#FFFFFF" },
            { label: "Gri", value: "gri", hex: "#6b7280" },
            { label: "Yeşil", value: "yesil", hex: "#2E8B57" }
        ],
        quantities: [
            { label: "1000 Adet", value: "1000" },
            { label: "2000 Adet", value: "2000" },
            { label: "5000 Adet", value: "5000" },
            { label: "10000 Adet", value: "10000" }
        ]
    },
    "deri-desen-kalin-biala-tekli-vesikalik-kabi": {
        colorsTitle: "BİALA RENKLER",
        colors: [
            { label: "Açık Mavi", value: "acik_mavi", hex: "#2196F3" },
            { label: "Koyu Mavi", value: "koyu_mavi", hex: "#0047AB" },
            { label: "Kırmızı", value: "kirmizi", hex: "#DA291C" },
            { label: "Bordo", value: "bordo", hex: "#800000" },
            { label: "Sarı", value: "sari", hex: "#FFEB3B" },
            { label: "Siyah", value: "siyah", hex: "#252525" },
            { label: "Gri", value: "gri", hex: "#6b7280" }
        ],
        quantities: [
            { label: "1000 Adet", value: "1000" },
            { label: "2000 Adet", value: "2000" },
            { label: "5000 Adet", value: "5000" },
            { label: "10000 Adet", value: "10000" }
        ]
    },
    "biala-ciftli-vesikalik-kabi": {
        materialTitle: "MALZEME KALİTE SEÇENEĞİ",
        materials: [
            { label: "Mat Biala", value: "mat_biala" },
            { label: "Deri Desen Kalın Biala", value: "deri_desen" }
        ],
        colorsTitle: "BİALA RENKLER",
        colors: [
            { label: "Mavi", value: "mavi", hex: "#2196F3" },
            { label: "Koyu Mavi", value: "koyu_mavi", hex: "#0047AB" },
            { label: "Kırmızı", value: "kirmizi", hex: "#DA291C" },
            { label: "Bordo", value: "bordo", hex: "#800000" },
            { label: "Sarı", value: "sari", hex: "#FFEB3B" },
            { label: "Siyah", value: "siyah", hex: "#252525" },
            { label: "Beyaz", value: "beyaz", hex: "#FFFFFF" },
            { label: "Gri", value: "gri", hex: "#6b7280" },
            { label: "Turkuaz", value: "turkuaz", hex: "#40E0D0" },
            { label: "Lacivert", value: "lacivert", hex: "#2C3E50" },
            { label: "Turuncu", value: "turuncu", hex: "#FF8C00" },
            { label: "Lila", value: "lila", hex: "#C8A2C8" },
            { label: "Açık Pembe", value: "acik_pembe", hex: "#FFC0CB" },
            { label: "Fuşya", value: "fusya", hex: "#FF1493" },
            { label: "Koyu Yeşil", value: "koyu_yesil", hex: "#1b5e20" },
            { label: "Açık Yeşil", value: "acik_yesil", hex: "#8BC34A" },
            { label: "Haki", value: "haki", hex: "#556B2F" }
        ],
        quantities: [
            { label: "500 Adet", value: "500" },
            { label: "1000 Adet", value: "1000" }
        ]
    },
    "ofset-baskili-seffaf-pvc-ciftli-vesikalik-kabi": {
        quantities: [
            { label: "500 Adet", value: "500" },
            { label: "1000 Adet", value: "1000" }
        ]
    },
    "dikisli-lux-fantezi-kagit-ciftli-vesikalik-kabi": {
        materialTitle: "BASKI SEÇENEKLERİ",
        materials: [
            { label: "Lüx Fantezi Kağıt Sıcak Varak Yaldız", value: "varak" }
        ],
        quantities: [
            { label: "2000 Adet", value: "2000" },
            { label: "5000 Adet", value: "5000" }
        ]
    },
    "ofset-baski-dikisli-kuse-kagit-ciftli-vesikalik-kabi": {
        materialTitle: "BASKI SEÇENEKLERİ",
        materials: [
            { label: "Kuşe Kağıt Ofset (CMYK)", value: "cmyk" }
        ],
        quantities: [
            { label: "2000 Adet", value: "2000" },
            { label: "5000 Adet", value: "5000" }
        ]
    }
};

export default function ProductVariationSelector({ slug }: { slug: string }) {
    const config = VARIATION_CONFIG[slug];

    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedQuantity, setSelectedQuantity] = useState<string | null>(null);

    // If config doesn't exist for the slug, render nothing
    if (!config) return null;

    const handleClear = () => {
        setSelectedMaterial(null);
        setSelectedColor(null);
        setSelectedQuantity(null);
    };

    const hasSelection = selectedMaterial || selectedColor || selectedQuantity;

    const selectedMaterialObj = config.materials?.find(m => m.value === selectedMaterial);
    const selectedColorObj = config.colors?.find(c => c.value === selectedColor);
    const selectedQuantityObj = config.quantities?.find(q => q.value === selectedQuantity);

    return (
        <div className="flex flex-col gap-6 mb-8 mt-4">
            {config.materials && (
                <div>
                    <h4 className="text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-2 uppercase">
                        {config.materialTitle} :
                        {selectedMaterialObj && <span className="text-rose-600 font-medium normal-case">{selectedMaterialObj.label}</span>}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {config.materials.map(mat => (
                            <button
                                key={mat.value}
                                onClick={() => setSelectedMaterial(mat.value)}
                                className={`px-4 py-2 border rounded-md text-[15px] transition-all ${selectedMaterial === mat.value
                                    ? "border-rose-600 text-rose-600 shadow-sm"
                                    : "border-gray-300 text-gray-700 hover:border-gray-400 bg-white"
                                    }`}
                            >
                                {mat.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {config.colors && (
                <div>
                    <h4 className="text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-2 uppercase">
                        {config.colorsTitle} :
                        {selectedColorObj && <span className="text-rose-600 font-medium normal-case">{selectedColorObj.label}</span>}
                    </h4>
                    <div className="flex flex-wrap gap-3 py-1 px-1">
                        {config.colors.map(col => {
                            const isSelected = selectedColor === col.value;
                            return (
                                <button
                                    key={col.value}
                                    onClick={() => setSelectedColor(col.value)}
                                    className={`relative flex items-center justify-center rounded-sm transition-transform hover:scale-110 ${isSelected
                                        ? "ring-2 ring-rose-600 ring-offset-2 border-transparent"
                                        : "border border-gray-300"
                                        }`}
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        backgroundColor: col.hex,
                                    }}
                                    title={col.label}
                                >
                                    {isSelected && (
                                        <Check
                                            className={`w-5 h-5 ${col.hex === "#FFFFFF" || col.hex === "#FFEB3B" || col.hex === "#FFD700" ? "text-gray-900" : "text-white"}`}
                                            strokeWidth={3}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {config.quantities && (
                <div>
                    <h4 className="text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-2 uppercase">
                        TOPLAM ADET :
                        {selectedQuantityObj && <span className="text-rose-600 font-medium normal-case">{selectedQuantityObj.label}</span>}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {config.quantities.map(qty => (
                            <button
                                key={qty.value}
                                onClick={() => setSelectedQuantity(qty.value)}
                                className={`px-4 py-2 border rounded-md text-[15px] transition-all ${selectedQuantity === qty.value
                                    ? "border-rose-600 text-rose-600 shadow-sm"
                                    : "border-gray-300 text-gray-700 hover:border-gray-400 bg-white"
                                    }`}
                            >
                                {qty.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {hasSelection && (
                <div className="mt-2">
                    <button
                        onClick={handleClear}
                        className="flex items-center gap-1.5 text-lg text-rose-600 hover:text-rose-700 transition-colors"
                    >
                        <X className="w-5 h-5" /> Temizle
                    </button>
                </div>
            )}
        </div>
    );
}
