import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private proyectos = [
    {
      id: 'portafolio-interactivo',
      slug: 'portafolio-interactivo',
      titulo: 'Portafolio Interactivo',
      fecha: 'Miércoles, 8 de enero de 2025',
      descripcion: [
        {
          title: 'Introducción',
          texts: [
            'Este proyecto es una evolución integral de mi primer portafolio. No se trata solo de un rediseño, sino de un replanteo completo en cuanto a rendimiento, accesibilidad y estética. Mi intención principal fue crear una plataforma donde cada usuario pueda navegar de forma cómoda, fluida y sin barreras.',
            'Diseñé la interfaz pensando en la simplicidad, pero sin perder ese toque interactivo que hace que el usuario quiera explorar más. Desde la elección de colores hasta la implementación de animaciones, cada decisión está alineada con mejorar la experiencia general.',
            'Además, uno de los pilares de este proyecto es la adaptabilidad. El portafolio está diseñado para funcionar perfectamente en dispositivos de todos los tamaños y capacidades, garantizando una experiencia uniforme tanto en computadoras de escritorio como en teléfonos móviles.',
          ],
          image: {
            src: 'https://i.ibb.co/6B7mqnM/menuprincipal.webp',
            alt: 'Vista general del Portafolio Interactivo',
          }
        },
        {
          title: 'Características',
          subtitle: 'Lo que hace especial a este proyecto:',
          texts: [
            'Rendimiento mejorado: Implementé técnicas de optimización como lazy loading, compresión de imágenes y minimización de código para reducir los tiempos de carga.',
            'Interfaz moderna y clara: Usé principios de diseño minimalista con colores contrastantes y transiciones suaves, lo que permite que el contenido sea fácil de consumir sin saturar al usuario.',
            'Accesibilidad garantizada: Incorporé estándares de diseño accesible, como soporte para navegación por teclado, etiquetas ARIA y buen contraste entre texto y fondo para usuarios con dificultades visuales.'
          ],
          image: {
            src: 'https://i.ibb.co/y0RPZx0/hoveryboxsahdow.webp',
            alt: 'Ejemplo de características visuales del portafolio',
          }
        },
        {
          title: 'Detalles Técnicos',
          texts: [
            'El proyecto está desarrollado con Angular standalone, eliminando la necesidad de módulos y reduciendo la complejidad del código base. Esto no solo mejora el rendimiento, sino que también simplifica el mantenimiento.',
            'Se utilizó lazy loading para cargar solo las secciones necesarias al momento en que el usuario las necesita, mejorando significativamente los tiempos de respuesta.',
            'Las animaciones fueron creadas con Angular Animations y CSS puro, priorizando la fluidez y el rendimiento, incluso en dispositivos menos potentes.',
            'Para asegurar una experiencia óptima, medí el rendimiento y accesibilidad del sitio con herramientas como Lighthouse, logrando puntuaciones sobresalientes en métricas clave.',
            'El diseño responsivo se trabajó en base a media queries, adaptando no solo el layout, sino también el tamaño de las fuentes, márgenes y botones para una experiencia uniforme en cualquier dispositivo.'
          ],
          image: {
            src: 'https://i.ibb.co/hYBrKKv/lazyloaded.webp',
            alt: 'Vista del código optimizado del proyecto',
          }
        },
        {
          title: 'Experiencia de Usuario',
          texts: [
            'La navegación es simple e intuitiva, con un menú fijo que permite acceder rápidamente a las secciones más importantes, como proyectos, habilidades y contacto.',
            'Cada sección tiene elementos interactivos, como animaciones de hover, transiciones suaves y efectos visuales que invitan a explorar más.',
            'El contenido está organizado de manera jerárquica, usando títulos claros y un espaciado adecuado para facilitar la lectura y comprensión.',
            'Se añadieron accesos rápidos en la página de inicio para destacar los proyectos más relevantes y el formulario de contacto, mejorando la accesibilidad a información clave.'
          ],
          image: {
            src: 'https://i.ibb.co/v1hHNwy/menu-responsivo.webp',
            alt: 'Interacción del usuario con el portafolio',
          }
        },

        {
          title: 'Conclusión',
          texts: [
            'Este portafolio refleja no solo mis habilidades técnicas, sino también mi dedicación por crear experiencias digitales que inspiren y funcionen. Cada detalle, desde la optimización del rendimiento hasta el diseño visual, está pensado para ofrecer lo mejor a quien lo visite.',
            'Es un proyecto en constante evolución, y cada actualización busca incorporar lo último en tendencias y tecnología, asegurando que siempre se mantenga relevante y funcional.',
            'Espero que, al explorar este portafolio, no solo encuentres información sobre mis proyectos, sino también una muestra de mi pasión por el desarrollo web y el diseño.'
          ],
        },
      ],
    },
    
    {
      id: '2',
      slug: 'hola-mundo',
      titulo: 'Hola Mundo',
      fecha: '2024',
      descripcion: [
        {
          
        },

        {

        },
      ],
    },
  ];

  getProyectos() {
    return this.proyectos;
  }

  getProyectoBySlug(slug: string) {
    return this.proyectos.find((p) => p.slug === slug);
  }
}
