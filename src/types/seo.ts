export interface SeoAuthorityBlock {
    sections: {
        id: string;
        heading: string;
        subheading?: string;
        content: string;
        internalLinkHints?: {
            type: 'product' | 'city' | 'brand';
            anchorText: string;
            note?: string;
        }[];
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
}
