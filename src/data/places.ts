import type { Place } from '../types/place';

export const places: Place[] = [
    {
        id: 'taganay',
        title: 'Национальный парк Таганай',
        description: 'Горный хребет с уникальными скальными грядами и таёжными лесами.',
        category: 'nature',
        images: ['/images/taganay-1.jpg', '/images/taganay-2.jpg'],
    },
    {
        id: 'turgoyak',
        title: 'Озеро Тургояк',
        description: '«Уральский Байкал» — одно из самых чистых озёр России.',
        category: 'nature',
        images: ['/images/turgoyak-1.jpg', '/images/turgoyak-2.jpg'],
    },
    {
        id: 'kirovka',
        title: 'Кировка',
        description: 'Пешеходная улица в центре Челябинска с бронзовыми скульптурами.',
        category: 'architecture',
        images: ['/images/kirovka-1.jpg', '/images/kirovka-2.jpg'],
    }
];