export default {
    namespaced: true,
    state: {
        header: {
            title: 'Nuestros Libros',
            mainText: 'Desde clásicos atemporales hasta las últimas novedades literarias.',
            additionalText: 'Explora nuestra vasta colección de libros en diversos géneros y formatos.',
        },
        books: [
            {
                id: 1,
                img: {
                    alt: 'The Demon of Unrest, a book release by Erik Larson.',
                    publicId: 'book_1_900x1500_dyvver',
                },
                title: 'The Demon of Unrest',
                author: 'Erik Larson',
            },
            {
                id: 2,
                img: {
                    alt: 'Light to The Hills, a book release by Bonnie Blaylock.',
                    publicId: 'book_2_900x1500_cfwaai',
                },
                title: 'Light to The Hills',
                author: 'Bonnie Blaylock',
            },
            {
                id: 3,
                img: {
                    alt: 'Holly, a book release by Stephen King.',
                    publicId: 'book_3_900x1500_dszch5',
                },
                title: 'Holly',
                author: 'Stephen King',
            },
            {
                id: 4,
                img: {
                    alt: 'After Annie, a book release by Anna Quindlen.',
                    publicId: 'book_4_900x1500_kouaap',
                },
                title: 'After Annie',
                author: 'Anna Quindlen',
            },
            {
                id: 5,
                img: {
                    alt: 'The Lord of The Ring, a book release by J.R.R. Tolkien.',
                    publicId: 'book_5_900x1500_lmytuc'
                },
                title: 'The Lord of The Ring',
                author: "J.R.R. Tolkien",
            },
            {
                id: 6,
                img: {
                    alt: 'Mercy and Grace, a book release by Anoop Judge.',
                    publicId: 'book_6_900x1500_xng2yc',
                },
                title: 'Mercy and Grace',
                author: 'Anoop Judge',
            },
            {
                id: 7,
                img: {
                    alt: 'It Ends with Us, a book release by Colleen Hoover.',
                    publicId: 'book_7_900x1500_xggza1',
                },
                title: 'It Ends with Us',
                author: 'Colleen Hoover',
            },
            {
                id: 8,
                img: {
                    alt: 'The Game and Other Stories, a book release by Joe Baldwin.',
                    publicId: 'book_8_900x1500_ehp45r',
                },
                title: 'The Game and Other Stories',
                author: 'Joe Baldwin',
            },
            {
                id: 9,
                img: {
                    alt: "A Wrinkle in Time, a book release by Madeleine L'engle.",
                    publicId: 'book_9_900x1500_sdtgcp',
                },
                title: 'A Wrinkle in Time',
                author: "'Madeleine L'engle'",
            },
            {
                id: 10,
                img: {
                    alt: 'A Great Country, a book release by Shilpi Somaya Gouda.',
                    publicId: 'book_10_900x1500_bkqosf',
                },
                title: 'A Great Country',
                author: 'Shilpi Somaya Gouda',
            },
            {
                id: 11,
                img: {
                    alt: 'The Secret, a book release by Jack Reacher.',
                    publicId: 'book_11_900x1500_o6wzif',
                },
                title: 'The Secret',
                author: 'Jack Reacher',
            },
            {
                id: 12,
                img: {
                    alt: 'Eragon, a book release by Cristopher Paolini.',
                    publicId: 'book_12_900x1500_gey7am',
                },
                title: 'Eragon',
                author: 'Cristopher Paolini',
            },
            {
                id: 13,
                img: {
                    alt: 'Butcher &amp; Blackbird, a book release by Brynne Weaver.',
                    publicId: 'book_13_900x1500_vwvpvx',
                },
                title: 'Butcher &amp; Blackbird',
                author: 'Brynne Weaver',
            },
            {
                id: 14,
                img: {
                    alt: 'No Control, a book release by Annie Wild.',
                    publicId: 'book_14_900x1500_itg9o4',
                },
                title: 'No Control',
                author: 'Annie Wild',
            },
            {
                id: 15,
                img: {
                    alt: 'The Canary Cowards, a book release by Jescie Hall.',
                    publicId: 'book_15_900x1500_bh2s9y',
                },
                title: 'The Canary Cowards',
                author: 'Jescie Hall',
            },
            {
                id: 16,
                img: {
                    alt: 'Gravitys Hammer, a book release by Jerry Reynolds.',
                    publicId: 'book_16_900x1500_f1h3rw',
                },
                title: 'Gravitys Hammer',
                author: 'Jerry Reynolds',
            },
        ],
    },
    getters: {
        getHeader(state) {
            return state.header;
        },
        getBooks(state) {
            return state.books;
        },
    },
};