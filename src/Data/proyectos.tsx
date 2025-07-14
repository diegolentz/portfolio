export class Proyecto {
    id: number;
    imgs: string[];
    titulo: string;
    descripcion: string[];
    constructor(id: number, titulo: string, descripcion: string[], imgs: string[]) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgs = imgs;
    }
}

const readApp = new Proyecto(
  1,
  "Read App",
  [
    "Esta pantalla permite al usuario explorar y seleccionar libros de interés dentro de ReadApp. Se presentan distintas opciones con información relevante de cada libro, facilitando la comparación y selección para añadirlos a la lista personal de lecturas. Cada libro incluye datos como páginas, traducciones y ventas, apoyando una decisión informada y promoviendo la gestión personalizada de lecturas.",
    "Esta vista forma parte de la sección de amigos en ReadApp, donde se muestran sugerencias de usuarios para agregar como amigos. El diseño permite visualizar la información básica de cada usuario sugerido e interactuar fácilmente para añadirlos a la red personal.",
    "Esta pantalla corresponde al catálogo principal de libros en ReadApp. Permite al usuario explorar una amplia variedad de títulos disponibles, mostrando detalles clave de cada libro como el autor, páginas, traducciones y ventas semanales. Además, cuenta con una barra de búsqueda para facilitar la navegación y selección de lecturas, optimizando la experiencia de descubrimiento dentro de la aplicación.",
    "Esta pantalla muestra la información detallada de un libro específico en ReadApp, incluyendo su portada, título, descripción y datos relevantes como el autor y número de páginas. Permite al usuario conocer en profundidad el contenido antes de añadirlo a su biblioteca personal.",
    "Esta pantalla corresponde al acceso principal de ReadApp, donde los usuarios pueden iniciar sesión, crear una nueva cuenta o recuperar su contraseña. El diseño presenta un formulario sencillo sobre un fondo de libros abiertos, transmitiendo la esencia literaria de la aplicación y facilitando el acceso seguro y rápido a todas las funcionalidades.",
    "Esta sección muestra las recomendaciones personalizadas para el usuario en ReadApp. Presenta una selección curada de libros basada en sus preferencias de lectura anteriores, facilitando el descubrimiento de nuevos títulos que podrían ser de su interés.",
    "Esta pantalla corresponde al panel de administración para crear nuevos autores en ReadApp. Permite al usuario agregar información detallada del autor como nombre, biografía y otros datos relevantes, manteniendo actualizada la base de datos de escritores de la plataforma.",
    "Esta pantalla corresponde al dashboard administrativo de ReadApp, donde se muestran indicadores clave de la aplicación. El usuario puede visualizar rápidamente datos como la cantidad de recomendaciones, libros disponibles, centros de lectura activos y usuarios activos, ofreciendo una visión general del estado de la plataforma.",
    "Esta vista muestra la gestión de libros en el panel administrativo de ReadApp. Permite visualizar, editar y organizar toda la biblioteca de libros disponibles en la plataforma, con opciones para agregar nuevos títulos y modificar información existente.",
    "Esta pantalla corresponde al sistema de autenticación del panel administrativo de ReadApp. Proporciona acceso seguro a las funcionalidades de gestión y administración de la plataforma, diferenciándose del login de usuarios regulares.",
    "Esta vista corresponde al formulario de creación de nuevos libros en el panel administrativo de ReadApp. Permite agregar títulos, descripciones, autores, géneros y toda la información necesaria para enriquecer el catálogo de la aplicación."
  ],
  [
    "/ReadApp/Readapp-agregaLibros.jpg",
    "/ReadApp/Readapp-amigos.jpg",
    "/ReadApp/Readapp-buscarLibros.jpg",
    "/ReadApp/Readapp-informacion.jpg",
    "/ReadApp/Readapp-login.jpg",
    "/ReadApp/Readapp-recomendaciones.jpg",
    "/ReadApp/Readapp-React-crearAutor.jpg",
    "/ReadApp/Readapp-React-dashboard.jpg",
    "/ReadApp/Readapp-React-libros.jpg",
    "/ReadApp/Readapp-React-login.jpg",
    "/ReadApp/Readapp-React-crear.jpg",
  ]
);

const uberto = new Proyecto(
  2,
  "Uberto",
  [
    "Pantalla principal del conductor en Uberto que muestra el mapa interactivo con viajes disponibles. Los conductores pueden ver las solicitudes de viaje en tiempo real, aceptar servicios y navegar eficientemente por la ciudad para brindar el mejor servicio de transporte.",
    "Interface de autenticación para conductores en Uberto. Esta pantalla permite a los conductores registrados acceder a su cuenta de manera segura, validar sus credenciales y comenzar a ofrecer servicios de transporte en la plataforma.",
    "Perfil del conductor en Uberto donde se muestra información personal, estadísticas de viajes realizados, calificaciones recibidas y configuraciones de la cuenta. Permite a los conductores gestionar su información profesional y ver su desempeño en la plataforma.",
    "Sección de amigos para pasajeros en Uberto que permite agregar y gestionar contactos dentro de la aplicación. Los usuarios pueden conectar con amigos, compartir viajes y coordinar traslados de manera social y colaborativa.",
    "Sistema de calificaciones en Uberto donde los pasajeros pueden evaluar su experiencia de viaje. Esta funcionalidad permite calificar tanto al conductor como al servicio recibido, contribuyendo a mantener altos estándares de calidad en la plataforma.",
    "Pantalla principal del pasajero en Uberto con mapa integrado para solicitar viajes. Los usuarios pueden ingresar su destino, ver conductores cercanos, elegir el tipo de vehículo y realizar solicitudes de transporte de manera intuitiva.",
    "Perfil del pasajero en Uberto que muestra información personal, historial de viajes, métodos de pago y preferencias de usuario. Permite gestionar la cuenta y personalizar la experiencia de uso de la aplicación.",
    "Vista de viajes pendientes para pasajeros en Uberto donde se muestran las solicitudes activas, viajes programados y el estado en tiempo real de los servicios contratados. Facilita el seguimiento y gestión de los traslados solicitados."
  ],
  [
    "/Uberto/Uberto-driver-home.jpg",
    "/Uberto/Uberto-driver-login.jpg",
    "/Uberto/Uberto-driver-perfil.jpg",
    "/Uberto/Uberto-pasajero-amigos.jpg",
    "/Uberto/Uberto-pasajero-calificarciones.jpg",
    "/Uberto/Uberto-pasajero-home.jpg",
    "/Uberto/Uberto-pasajero-perfil.jpg",
    "/Uberto/Uberto-pasajero-viajesPendientes.jpg",
  ]
);

const eventNexus = new Proyecto(
  3,
  "Event Nexus",
  [
    "Interface para la creación de nuevos eventos en Event Nexus. Los administradores pueden definir detalles del evento como título, descripción, fecha, hora y participantes, facilitando la organización eficiente de reuniones y actividades corporativas.",
    "Panel de administración para la creación de usuarios en Event Nexus. Permite agregar nuevos empleados al sistema, asignar roles y configurar permisos de acceso, manteniendo la seguridad y estructura organizacional de la empresa.",
    "Vista principal de eventos en Event Nexus donde se muestran todas las actividades programadas. Los usuarios pueden ver próximas reuniones, eventos corporativos y anuncios importantes, con filtros para una navegación eficiente.",
    "Pantalla de inicio de Event Nexus que proporciona una visión general de la actividad empresarial. Muestra resúmenes de eventos próximos, notificaciones importantes y accesos rápidos a las funcionalidades principales de la plataforma.",
    "Sección de información directiva en Event Nexus donde se muestran anuncios ejecutivos, comunicados oficiales y mensajes de la alta dirección. Facilita la comunicación descendente y mantiene informados a todos los empleados sobre decisiones estratégicas.",
    "Sistema de autenticación de Event Nexus que permite a los empleados acceder de forma segura a la plataforma. Incluye validación de credenciales corporativas y gestión de sesiones para mantener la seguridad de la información empresarial.",
    "Centro de notificaciones de Event Nexus donde los usuarios reciben actualizaciones en tiempo real sobre eventos, cambios en reuniones, nuevos anuncios y mensajes importantes de la organización.",
    "Perfil de usuario en Event Nexus que muestra información personal del empleado, su rol en la empresa, eventos asignados y configuraciones de cuenta. Permite personalizar la experiencia y gestionar preferencias de notificación."
  ],
  [
    "/EventNexus/EventNexus-crearEventos.jpg",
    "/EventNexus/EventNexus-crearUsuario.jpg",
    "/EventNexus/EventNexus-eventos.jpg",
    "/EventNexus/EventNexus-home.jpg",
    "/EventNexus/EventNexus-infoDirectiva.jpg",
    "/EventNexus/EventNexus-login.jpg",
    "/EventNexus/EventNexus-notificaciones.jpg",
    "/EventNexus/EventNexus-perfil.jpg",
  ]
);

const impresiones3D = new Proyecto(
  4,
  "Impresiones 3D",
  [
    "Pantalla de inicio del sistema de Impresiones 3D que presenta la propuesta de valor del taller especializado en figuras coleccionables. Muestra los productos destacados y servicios disponibles, con un diseño moderno que combina la estética automovilística con la tecnología de impresión 3D.",
    "Catálogo completo de productos disponibles en Impresiones 3D. Los usuarios pueden explorar distintas categorías de figuras como autos en miniatura, personajes de acción y leyendas del automovilismo. Cada producto muestra información detallada y opciones de personalización.",
    "Vista detallada de producto individual en Impresiones 3D donde se muestran todas las especificaciones técnicas, opciones de personalización disponibles, materiales de impresión y galería de imágenes. Permite al cliente conocer a fondo el producto antes de realizar su pedido personalizado.",
    "Sistema de carrito de compras de Impresiones 3D que permite gestionar los productos seleccionados, ajustar cantidades, aplicar descuentos y proceder al checkout. Incluye cálculo automático de costos de impresión y tiempos de entrega estimados para cada artículo personalizado."
  ],
  [
    "/Impresiones3D/impresiones3D-home.jpg",
    "/Impresiones3D/impresiones3D-productos.jpg",
    "/Impresiones3D/impresiones3D-detalleProducto.jpg",
    "/Impresiones3D/impresiones3D-carritoCompras.jpg",
  ]
);

export const proyectosData: Proyecto[] = [
    readApp,
    uberto,
    eventNexus,
    impresiones3D
];