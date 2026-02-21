
import { promises as fs } from 'fs';
import path from 'path';
import { CityPageContent } from '@/types/city-content';

const CITIES_DATA_DIR = path.join(process.cwd(), 'src/data/cities');

export async function getCityContent(slug: string): Promise<CityPageContent | null> {
    try {
        const filePath = path.join(CITIES_DATA_DIR, `${slug}.json`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent) as CityPageContent;
    } catch (error) {
        return null;
    }
}
