export default {
    namespaced: true,
    state: {
        header: {
            title: 'Nuestros Libros',
            mainText: 'Desde clásicos atemporales hasta las últimas novedades literarias.',
            additionalText: 'Explora nuestra vasta colección de libros en diversos géneros y formatos.'
        },
    },
    getters: {
        getHeader(state) {
            return state.header;
        },
    },
};