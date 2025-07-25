class CarrouselData {
    id: number;
    titulo: string;
    descripcion: string[];
    imagen: string;

    constructor(id:number, titulo: string, descripcion: string[], imagen: string) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

const readApp = new CarrouselData(
    1,                      
    "Read App",
    [
        "Aplicación desarrollada con Angular 17, Kotlin y React.",
        "Permite gestionar libros leídos, por leer y favoritos, con funcionalidades como búsqueda, valoraciones y clasificación y visualización.",
        "Pensada para mejorar la experiencia de lectura y organización personal."
    ],
    "/readApp.jpeg"
);

const uberto = new CarrouselData(
    2,
    "Uberto",
    [
        "Plataforma creada con React, Java, PostgreSQL, Redis y Neo4j.",
        "Similar a Uber, permite a los usuarios solicitar viajes, calificar conductores y mantener una red de amigos dentro de la app.",
        "Integra lógica de transporte, red social y recomendaciones personalizadas."
    ],
    "/uberto.jpeg"
);

const eventNexus = new CarrouselData(
    3,
    "Event Nexus",
    [
        "Aplicación de comunicación interna para empresas, desarrollada con Java, React y PostgreSQL.",
        "Facilita la organización de reuniones, anuncios y eventos entre sectores y empleados.",
        "Fomenta la colaboración y la transparencia dentro del entorno laboral."
    ],
    "/eventNexus.jpeg"
);

const impresiones3D = new CarrouselData(
    4,
    "Impresiones 3D",
    [
        "Sistema hecho con React, Java y MySQL para la gestión de un taller de impresión 3D.",
        "Permite recibir pedidos personalizados de autos en miniatura, figuras de acción y leyendas del automovilismo.",
        "Combina arte, tecnología y coleccionismo en un flujo de trabajo eficiente."
    ],
    "/impresiones3D.jpeg"
);
export const carrouselData: CarrouselData[] = [
    readApp,
    uberto,
    eventNexus,
    impresiones3D
];

