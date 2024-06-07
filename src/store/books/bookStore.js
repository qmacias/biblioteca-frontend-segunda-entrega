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
                    publicId: 'book_1_900x1500_dyvver',
                },
                title: 'The Demon of Unrest',
                author: 'Erik Larson',
            },
            {
                id: 2,
                img: {
                    publicId: 'book_2_900x1500_cfwaai',
                },
                title: 'Light to The Hills',
                author: 'Bonnie Blaylock',
            },
            {
                id: 3,
                img: {
                    publicId: 'book_3_900x1500_dszch5',
                },
                title: 'Holly',
                author: 'Stephen King',
            },
            {
                id: 4,
                img: {
                    publicId: 'book_4_900x1500_kouaap',
                },
                title: 'After Annie',
                author: 'Anna Quindlen',
            },
            {
                id: 5,
                img: {
                    publicId: 'book_5_900x1500_lmytuc'
                },
                title: 'The Lord of The Ring',
                author: "J.R.R. Tolkien",
            },
            {
                id: 6,
                img: {
                    publicId: 'book_6_900x1500_xng2yc',
                },
                title: 'Mercy and Grace',
                author: 'Anoop Judge',
            },
            {
                id: 7,
                img: {
                    publicId: 'book_7_900x1500_xggza1',
                },
                title: 'It Ends with Us',
                author: 'Colleen Hoover',
            },
            {
                id: 8,
                img: {
                    publicId: 'book_8_900x1500_ehp45r',
                },
                title: 'The Game and Other Stories',
                author: 'Joe Baldwin',
            },
            {
                id: 9,
                img: {
                    publicId: 'book_9_900x1500_sdtgcp',
                },
                title: 'A Wrinkle in Time',
                author: "Madeleine L'engle",
            },
            {
                id: 10,
                img: {
                    publicId: 'book_10_900x1500_bkqosf',
                },
                title: 'A Great Country',
                author: 'Shilpi Somaya Gouda',
            },
            {
                id: 11,
                img: {
                    publicId: 'book_11_900x1500_o6wzif',
                },
                title: 'The Secret',
                author: 'Jack Reacher',
            },
            {
                id: 12,
                img: {
                    publicId: 'book_12_900x1500_gey7am',
                },
                title: 'Eragon',
                author: 'Cristopher Paolini',
            },
            {
                id: 13,
                img: {
                    publicId: 'book_13_900x1500_vwvpvx',
                },
                title: 'Butcher & Blackbird',
                author: 'Brynne Weaver',
            },
            {
                id: 14,
                img: {
                    publicId: 'book_14_900x1500_itg9o4',
                },
                title: 'No Control',
                author: 'Annie Wild',
            },
            {
                id: 15,
                img: {
                    publicId: 'book_15_900x1500_bh2s9y',
                },
                title: 'The Canary Cowards',
                author: 'Jescie Hall',
            },
            {
                id: 16,
                img: {
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