export interface ProductContentSection {
    heading: string;
    content: string;
}

export interface ProductContentFAQ {
    question: string;
    answer: string;
}

export interface ProductPageContent {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    heroIntro: string;
    bodySections: ProductContentSection[];
    faq: ProductContentFAQ[];
    seoText?: string;
}
