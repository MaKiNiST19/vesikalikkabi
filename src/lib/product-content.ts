import { promises as fs } from 'fs';
import path from 'path';
import { ProductPageContent } from '@/types/product-content';

const PRODUCTS_DATA_DIR = path.join(process.cwd(), 'src/data/products');

export async function getProductContent(slug: string): Promise<ProductPageContent | null> {
    try {
        const filePath = path.join(PRODUCTS_DATA_DIR, `${slug}.json`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent) as ProductPageContent;
    } catch (error) {
        return null;
    }
}
