export interface Place {
    id: string;
    title: string;
    description: string;
    category: 'nature' | 'history' | 'architecture';
    images: string[];
}
