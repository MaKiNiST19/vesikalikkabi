export interface CityContentSection {
    heading: string;
    content: string;
}

export interface CityContentFAQ {
    question: string;
    answer: string;
}

export interface CityPageContent {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    heroIntro: string;
    bodySections: CityContentSection[];
    faq: CityContentFAQ[];
    internalLinkSuggestions: string[];
}
