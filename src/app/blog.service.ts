import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private blogPosts = [
    {
      id: 'como-manejar-rutas-anidadas-angular',
      title: 'Cómo manejar rutas anidadas en Angular',
      content: [
        {
          title: '¿Qué Son las Rutas Anidadas?',
          texts: [
            'Las rutas anidadas permiten definir rutas dentro de otras rutas, lo cual es útil cuando una sección de tu aplicación tiene sub-secciones o vistas específicas que deben renderizarse dentro de un contenedor o layout común.',
            'Por ejemplo, si tenés una sección de perfil con sub-secciones como "Información" y "Ajustes", podrías tener algo así:',
          ],
          image: { src: 'https://i.ibb.co/VDMTmjR/ejemploruta.webp', alt: 'Ejemplo de rutas anidadas' },

        },
        {
          texts:['Esto se consigue con rutas anidadas.',],
          subtitle: null,
          image: null,
        },
        {
          title: 'Paso 1: Crear un Módulo de Rutas Standalone para las Rutas Anidadas',
          texts:['Dado que estamos trabajando con Angular Standalone (sin módulos tradicionales), las rutas se configuran dentro de componentes que se exportan directamente como "standalone".',],
        },
        {
          subtitle:'1.1. Componente Contenedor',
          texts: ['Primero, vamos a crear un componente contenedor que actuará como el "layout" o contenedor para las rutas anidadas.',
            '1. Crea un componente contenedor (por ejemplo, PerfilComponent):'
          ],
          image: { src: 'https://i.ibb.co/ZTj2L5W/terminal1.webp', alt: 'Ejemplo de PerfilComponent' },
        },
        {
          texts: ['2. Configura el HTML del contenedor. En este componente contenedor, se renderizarán las rutas hijas (anidadas) dentro de un <router-outlet>:'],
          image: {src: 'https://i.ibb.co/MM8FN2F/perfilcomponent-html.webp', alt:'perfil-component-html'}
        },
        {
          title: 'Paso 2: Configuración de las Rutas en el Archivo de Rutas Standalone',
          texts:['En este paso, vamos a configurar las rutas en el archivo de rutas, pero ya de forma independiente y usando Angular Standalone.'],
        },
        {
          subtitle: '2.1. Definir las Rutas Anidadas',
          texts:['1. Crea los componentes para las sub-rutas:'],
          image: { src:'https://i.ibb.co/mC3hb7q/TERMINAL2.webp', alt:'componentes informacion y ajustes'},
        },
        {
          texts:['2. Configura las rutas de manera anidada dentro de un archivo de rutas. Vamos a definir las sub-rutas bajo el componente principal PerfilComponent.',
            'En el archivo app.routes.ts:'],
          image: {src:'https://i.ibb.co/859qyH2/emploapproutes.webp', alt:'ejemplo de app.routes.ts'},
        },
        {
          title: 'Paso 3: Importar y Configurar las Rutas en el Módulo Standalone',
          texts:['En Angular Standalone, no usamos módulos tradicionales, sino que importamos el archivo de rutas directamente en el componente principal.'],
          subtitle:'3.1. Importar el RouterModule',
        },
        {
          texts:['Aseguráte de que el componente raíz (por ejemplo, AppComponent) importe el RouterModule y configure las rutas:'],
          image: {src:'https://i.ibb.co/4NGvmdk/App-Componentcon-Router-Module.webp', alt:'ejemplo de app.routes.ts'},
        },
        {
          title:'Paso 4: Lazy Loading de Rutas Anidadas',
          texts:['En aplicaciones más grandes, es recomendable cargar los módulos de forma perezosa (lazy loading) para mejorar el rendimiento. Con Angular Standalone, podés aplicar lazy loading a las rutas anidadas también.'],
        },
        {
          subtitle: '4.1. Implementación del Lazy Loading',
          texts:['1. Creá un archivo de rutas para las rutas anidadas de PerfilComponent, por ejemplo, perfil.routes.ts.',
            '2. Usá el siguiente patrón para implementar lazy loading en las sub-rutas:'
          ],
          image: {src:'https://i.ibb.co/2N9Mqzz/lazy-loaded-en-subrutas.webp', alt:'lazy-loading en sub-rutas'},
        },
        {
          texts: ['3. Luego, actualizá la configuración de rutas para que cargue este archivo de rutas anidadas de manera perezosa:'],
          image: {src: 'https://i.ibb.co/7Kp45xP/carga-forma-perezoso.webp', alt:'carga de forma perezosa de rutas',},
        },
        {
          title:'Paso 5: Probar las Rutas Anidadas',
          subtitle:'Probar en la aplicación:',
          texts:['Al navegar a /perfil, verás el componente PerfilComponent.',
            'Al hacer clic en Información o Ajustes, las rutas anidadas se cargarán dentro del <router-outlet>.'
          ]
        },
        {
          subtitle:'Comportamiento esperado:',
          texts:[
            'Cuando navegás a /perfil/informacion, se debería cargar el componente InformacionComponent dentro del PerfilComponent.',
            'Lo mismo ocurrirá para /perfil/ajustes.'
          ]
        }
      ]
    },
    
    {
      id: 'mejorando-accesibilidad-proyectos-web',
      title: 'Mejorando la accesibilidad en tus proyectos web',

      content: [
        {
          texts: ['Cuando hablamos de mejorar la accesibilidad en proyectos web, lo primero que se me viene a la mente es que no es solo una obligación legal en algunos países, sino también una forma de hacer que nuestros proyectos lleguen a un público mucho más amplio.',
            'La accesibilidad no solo mejora la experiencia de los usuarios con discapacidades, sino que, de hecho, beneficia a todos, ya que hace que el sitio sea más fácil de usar y más eficiente.'
          ],
        },
        
        {
          title:'HTML Semántico',
          texts:['A la hora de crear un sitio accesible, el HTML semántico es clave. Las etiquetas como <header>, <nav>, <section>, <footer>, entre otras, no solo sirven para darle estructura al sitio, sino que ayudan a los lectores de pantalla a entender de qué se trata cada parte del contenido. Si evitamos abusar de <div> y <span> para todo, y usamos etiquetas semánticas, estamos dando un paso gigante en accesibilidad.'
          ],
        },

        {
          title:'Contraste de Color y Visibilidad',
          texts: ['Otro punto esencial es el contraste de color. No es solo un tema estético, sino funcional. Si el contraste no es el adecuado, se complica la lectura, especialmente para personas con dificultades visuales o en condiciones de baja luz. Para asegurarme de que todo esté bien, siempre uso herramientas como el WCAG Contrast Checker para asegurarme de que los colores que elijo cumplen con los estándares de accesibilidad.'
          ]
        },

        {
          title:'Teclas de Acceso Rápido (Shortcuts) y Navegación con el Teclado',
          texts: ['Es clave que el sitio sea totalmente navegable con el teclado. No todos los usuarios pueden usar un ratón, así que debemos asegurarnos de que puedan moverse de manera fluida a través del contenido usando solo el teclado. Para eso, los atajos de teclado y una navegación lógica por tabulación son fundamentales.']
        },

        {
          title:'Etiquetas aria y Roles',
          texts: ['Las etiquetas aria son fundamentales para mejorar la accesibilidad de sitios con contenido dinámico, como menús o modales. Estas etiquetas indican a los lectores de pantalla el tipo de contenido y su estado. Usarlas correctamente puede hacer una gran diferencia, sobre todo cuando los elementos son interactivos o cambian su estado de manera dinámica.']
        },

        {
          title:'Texto Alternativo y Multimedia',
          texts: ['El texto alternativo es algo básico pero que muchas veces se pasa por alto. Las imágenes deben tener descripciones claras y concisas en el atributo alt, y los videos deben contar con subtítulos o transcripciones. Esto no solo es útil para personas con discapacidades visuales, sino también para quienes tienen dificultades auditivas o no hablan el idioma principal del sitio.']
        },
        {
          title:'Lenguaje Claro y Conciso',
          texts: ['Usar un lenguaje simple y directo es otra manera de mejorar la accesibilidad. El lenguaje claro ayuda a personas con discapacidades cognitivas, pero también es útil para aquellos que no hablan el idioma principal del sitio. Evitar jerga o términos demasiado complejos es fundamental.']
        },
        {
          title:'Formularios Accesibles',
          texts: ['Los formularios deben ser diseñados de manera accesible, y no solo en términos de usabilidad, sino también de comprensión. Las etiquetas deben estar bien asociadas a los campos de entrada, y los mensajes de error deben ser claros y fáciles de entender. Para los usuarios que usan lectores de pantalla, todo debe estar bien marcado con los atributos correspondientes.']
        },
        {
          title:'Animaciones y Efectos',
          texts: ['Las animaciones pueden ser geniales, pero también pueden causar problemas. Algunas personas tienen sensibilidad al movimiento o pueden sufrir de epilepsia fotosensible. Es importante asegurarnos de que las animaciones no sean invasivas y, si es posible, darles la opción a los usuarios de desactivarlas.']
        },
        {
          title:'Testeo y Feedback Continuo',
          texts: ['La accesibilidad no es algo que se hace una vez y se olvida. Siempre que actualizamos un proyecto, debemos asegurarnos de que seguimos cumpliendo con los estándares de accesibilidad. No hay mejor manera de saber si estamos haciendo bien las cosas que probando con usuarios reales, sobre todo con aquellos que tienen discapacidades.']
        },
        {
          title:'Conclusión',
          texts: ['En resumen, mejorar la accesibilidad no es solo un conjunto de tareas que completar, sino un compromiso con todos los usuarios. Un sitio accesible no solo se hace más fácil de usar para las personas con discapacidades, sino que, al final, crea una experiencia web más inclusiva, eficiente y agradable para todos. Implementar buenas prácticas de accesibilidad no es complicado, pero requiere que pensemos siempre en el usuario y en cómo asegurarnos de que todos puedan disfrutar de nuestro trabajo.']
        },
      ],
    },
    
    {
      id: 'introduccion-typescript',
      title: 'Introducción a TypeScript',
      description: 'Guía básica para empezar con TypeScript.',
      content: `Ut suscipit eros sed nisl tempus, vitae consectetur risus vehicula. Donec mollis consectetur sapien vel consequat. Integer ut nulla sit amet sapien gravida pretium nec vel justo.`,
    },
  ];

  constructor() {}

  getPosts() {
    return this.blogPosts;
  }

  getPostById(id: string) {
    return this.blogPosts.find((post) => post.id === id);
  }
}
