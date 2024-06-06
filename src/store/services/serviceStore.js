export default {
    namespaced: true,
    state: {
        header: {
            title: 'Nuestros Servicios',
            mainText: 'Recomendaciones a tu medida y acceso a recursos digitales exclusivos.',
            additionalText: 'Ofrecemos una amplia gama de servicios para garantizar tu satisfacción.'
        },
    },
    getters: {
        getHeader(state) {
            return state.header;
        },
    },
};