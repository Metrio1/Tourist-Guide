import type { Place } from '../types/place';

export const places: Place[] = [
    {
        id: 'taganay',
        title: 'Национальный парк Таганай',
        description: 'Горный хребет с уникальными скальными грядами и таёжными лесами.',
        category: 'nature',
        images: ['/images/gallery/taganay-1.jpg', '/images/gallery/taganay-2.jpg'],
    },
    {
        id: 'turgoyak',
        title: 'Озеро Тургояк',
        description: '«Уральский Байкал» — одно из самых чистых озёр России.',
        category: 'nature',
        images: ['/images/gallery/turgoyak-1.jpg', '/images/gallery/turgoyak-2.jpg'],
    },
    {
        id: 'kirovka',
        title: 'Кировка',
        description: 'Пешеходная улица в центре Челябинска с бронзовыми скульптурами.',
        category: 'architecture',
        images: ['/images/gallery/kirovka-1.jpg', '/images/gallery/kirovka-2.jpg'],
    },
    {
        id: 'zyuratkul',
        title: 'Национальный парк Зюраткуль',
        description: 'Горное озеро на высоте более 700 метров с живописными пейзажами.',
        category: 'nature',
        images: ['/images/gallery/zyuratkul-1.jpg', '/images/gallery/zyuratkul-2.jpg'],
    },
    {
        id: 'ignatiev',
        title: 'Игнатьевская пещера',
        description: 'Пещера с наскальными рисунками эпохи палеолита, памятник археологии.',
        category: 'history',
        images: ['/images/gallery/ignatiev-1.jpg', '/images/gallery/ignatiev-2.jpg'],
    },
    {
        id: 'sugomak',
        title: 'Озеро Сугомак',
        description: 'Карстовое озеро с чистейшей водой и горой Сугомак рядом.',
        category: 'nature',
        images: ['/images/gallery/sugomak-1.jpg', '/images/gallery/sugomak-2.jpg'],
    },
];