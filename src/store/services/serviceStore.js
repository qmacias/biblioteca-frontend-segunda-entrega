export default {
    namespaced: true,
    state: {
        header: {
            title: 'Nuestros Servicios',
            mainText: 'Recomendaciones a tu medida y acceso a recursos digitales exclusivos.',
            additionalText: 'Ofrecemos una amplia gama de servicios para garantizar tu satisfacción.'
        },
        services: [
            {
                id: 1,
                name: "Recomendaciones",
                icon: "fa fa-star",
                description: "Recibe sugerencias de lectura en base a tus intereses y preferencias, para que descubras nuevas obras cautivadoras.",
            },
            {
                id: 2,
                name: "Audiolibros",
                icon: "fa fa-headphones",
                description: "Disfruta de tus libros favoritos en formato audio, ideal para cuando viajas, haces ejercicio o simplemente te relajas.",
            },
            {
                id: 3,
                name: "Clubes de lectura",
                icon: "fa fa-user-plus",
                description: "Únete a nuestra comunidad de lectores, comparte tus opiniones y descubre nuevas perspectivas sobre tus libros favoritos.",
            },
            {
                id: 4,
                name: "Lecturas en línea",
                icon: "fa fa-podcast",
                description: "Accede a nuestra amplia selección de libros electrónicos desde cualquier dispositivo, sin necesidad de descargas adicionales.",
            },
            {
                id: 5,
                name: "Recursos digitales",
                icon: "fa fa-arrow-down",
                description: "Explora nuestro catálogo de recursos digitales exclusivos, como entrevistas con autores, guías de lectura y mucho más.",
            },
            {
                id: 6,
                name: "Equipo de soporte",
                icon: "fa fa-life-ring",
                description: "Nuestro equipo de expertos estará disponible para brindarte asesoramiento y responder cualquier pregunta que tengas.",
            },
        ],
    },
    getters: {
        getHeader(state) {
            return state.header;
        },
        getServices(state) {
            return state.services;
        },
    },
};