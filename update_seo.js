const fs = require('fs');
const path = require('path');

const keywords = [
    "Vesikalık fotoğraf kabı", "Tekli vesikalık kabı", "Tekli vesikalık kılıfı", "Tek cepli vesikalık kabı",
    "Çiftli vesikalık fotoğraf kabı", "Çiftli vesikalık kabı", "Çiftli vesikalık kılıfı", "Çiftli karton vesikalık kabı",
    "Çiftli karton vesikalık kılıfı", "Fantezi kağıt vesikalık kabı", "Fantezi kağıt vesikalık kılıfı",
    "Varak yaldız baskılı vesikalık kabı", "Varak yaldız baskılı vesikalık kılıfı", "Karton çiftli vesikalık kabı",
    "Karton vesikalık kabı", "Karton vesikalık kılıfı", "vesikalık kabı", "vesikalık kılıfı", "vesikalık zarfı",
    "vesikalık biala", "vesikalık pvc", "vesikalık plastik", "vesikalık naylon", "pvc vesikalık kabı", "pvc vesikalık kılıfı",
    "naylon vesikalık kabı", "naylon vesikalık kılıfı", "vesikalık fotoğraf kabı kılıfı", "vesikalık fotoğraf fiyatları",
    "vesikalık kabı fiyatları", "vesikalık kılıfı fiyatları", "plastik vesikalık kabı", "plastik vesikalık kılıfı",
    "plastik folyo vesikalık kabı", "plastik folyo vesikalık kılıfı", "vesikalık fotoğraf koyma kabı", "vesikalık poşeti",
    "vesikalık fotoğraf kılıfı", "vesikalık fotoğraf poşeti", "plastik vesikalık zarfı fiyatları", "biala vesikalık kabı",
    "biala vesikalık kılıfı", "şeffaf vesikalık kabı", "şeffaf vesikalık kılıfı"
];

// Add a keyword rich paragraph to product SEO text.
const richSeoParagraph = `\n\n### Sık Aranan Ürün ve Kategori Detayları\n\nStüdyonuz için vazgeçilmez olan **vesikalık kabı** ve **vesikalık kılıfı** ihtiyaçlarınıza profesyonel çözümler üretiyoruz. Hem **pvc vesikalık kabı** hem de **karton vesikalık kabı** seçenekleriyle geniş bir yelpaze sunmaktayız. Klasik kullanımlar için tasarlanan **tekli vesikalık kabı** (aynı zamanda **tekli vesikalık kılıfı** olarak da bilinir) veya **tek cepli vesikalık kabı** oldukça pratik bir muhafaza yöntemidir. Daha kapsamlı sunumlar veya promosyonel ikramlar için **çiftli vesikalık fotoğraf kabı**, **çiftli vesikalık kabı** ve **çiftli vesikalık kılıfı** ürünlerimiz idealdir. Özel günler için **çiftli karton vesikalık kabı**, **çiftli karton vesikalık kılıfı**, **fantezi kağıt vesikalık kabı** ve **fantezi kağıt vesikalık kılıfı** gibi lüks seçeneklerimizi değerlendirebilirsiniz. Firmanızın prestijini zirveye taşıyacak **varak yaldız baskılı vesikalık kabı** ve **varak yaldız baskılı vesikalık kılıfı** detaylarıyla da fark yaratıyoruz.\n\nFotoğraflarınızın zarar görmesini engelleyen **vesikalık zarfı**, **vesikalık biala**, **vesikalık pvc**, **vesikalık plastik** ve **vesikalık naylon** kılıflar, üretim hattımızın yüksek kalite standartlarındadır. Özellikle **pvc vesikalık kabı** ve **pvc vesikalık kılıfı**, dayanıklılığı ile ön plana çıkarken; **naylon vesikalık kabı** veya **naylon vesikalık kılıfı** arayışınız için **plastik folyo vesikalık kabı**, **plastik folyo vesikalık kılıfı**, **plastik vesikalık kabı**, ve **plastik vesikalık kılıfı** modellerimizi sunuyoruz.\n\nMüşterilerimiz tarafından en çok araştırılan konulardan olan **vesikalık fotoğraf fiyatları**, **vesikalık kabı fiyatları**, **vesikalık kılıfı fiyatları** ve **plastik vesikalık zarfı fiyatları** gibi detaylar, üretici firma olmamızın sağladığı toptan indirimlerle bütçe dostudur. Ayrıca **vesikalık fotoğraf kabı kılıfı**, **vesikalık fotoğraf koyma kabı**, **vesikalık poşeti**, **vesikalık fotoğraf kılıfı** ve **vesikalık fotoğraf poşeti** gibi ürünler de aynı üretim standartlarından geçmektedir. Eğer özel doku arıyorsanız **biala vesikalık kabı** ile **biala vesikalık kılıfı**, modern ve minimalist bir tarz için ise **şeffaf vesikalık kabı** ve **şeffaf vesikalık kılıfı** alternatiflerimizi inceleyebilirsiniz.`;

const productsDir = path.join(__dirname, 'src', 'data', 'products');

fs.readdirSync(productsDir).forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(productsDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Add keywords directly into the seoText
        if (!data.seoText.includes("Sık Aranan Ürün ve Kategori Detayları")) {
            data.seoText += richSeoParagraph;
        }

        // Modify meta description to be richer
        if (data.metaDescription) {
            if (!data.metaDescription.includes("vesikalık kılıfı")) {
                data.metaDescription = data.metaDescription + " Toptan vesikalık kılıfı, pvc, naylon, karton, biala vesikalık kapları ve şeffaf kılıf en uygun fiyatlarla.";
            }
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
        console.log(`Updated ${file}`);
    }
});
