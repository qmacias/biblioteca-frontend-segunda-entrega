export default {
    namespaced: true,
    state: {
        sources: [
            {
                id: 1,
                type: 'image/webp',
                media: '(max-width: 1400px)',
                srcset: '/assets/img/hero/srcset/hero_w_1400.webp',
            },
            {
                id: 2,
                type: 'image/webp',
                media: '(max-width: 1226px)',
                srcset: '/assets/img/hero/srcset/hero_w_1226.webp',
            },
            {
                id: 3,
                type: 'image/webp',
                media: '(max-width: 1044px)',
                srcset: '/assets/img/hero/srcset/hero_w_1044.webp',
            },
            {
                id: 4,
                type: 'image/webp',
                media: '(max-width: 861px)',
                srcset: '/assets/img/hero/srcset/hero_w_861.webp',
            },
            {
                id: 5,
                type: 'image/webp',
                media: '(max-width: 670px)',
                srcset: '/assets/img/hero/srcset/hero_w_670.webp',
            },
            {
                id: 6,
                type: 'image/webp',
                media: '(max-width: 492px)',
                srcset: '/assets/img/hero/srcset/hero_w_492.webp',
            },
            {
                id: 7,
                type: 'image/webp',
                media: '(max-width: 200px)',
                srcset: '/assets/img/hero/srcset/hero_w_200.webp',
            },
        ],
        defaultImage: {
            alt: 'An open book with a radiant light shining upon it, illuminating its pages.',
            path: '/assets/img/hero/srcset/hero_w_1400.webp',
        },
    },
    getters: {
        getSources(state) {
            return state.sources;
        },
        getDefaultImage(state) {
            return state.defaultImage;
        },
    },
};