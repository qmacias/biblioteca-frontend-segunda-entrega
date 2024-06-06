export default {
    namespaced: true,
    state: {
        navbar: [
            {
                id: 1,
                path: '/',
                label: 'Biblioteca Online',
            },
            {
                id: 2,
                path: '/books',
                label: 'Libros',
            },
            {
                id: 3,
                path: '/services',
                label: 'Servicios',
            },
            {
                id: 4,
                path: '/contact',
                label: 'Contacto',
            },
            {
                id: 5,
                path: '/login',
                label: 'Ingresar',
            },
            {
                id: 6,
                path: '/signup',
                label: 'Registrarse',
            },
        ],
    },
    getters: {
        getNavbar(state) {
            return state.navbar;
        },
    },
};