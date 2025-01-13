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
      title: 'Mejorando la accesibilidad en mis proyectos web',

      content: [
        {
          texts: ['Cuando empecé a diseñar mi portafolio web, me di cuenta de que la accesibilidad era algo que no podía pasar por alto. A veces, en el camino del diseño web, nos enfocamos tanto en lo estético que olvidamos cómo un sitio puede ser más accesible para todos. Sin embargo, aprendí que mejorar la accesibilidad no solo ayuda a las personas con discapacidades, sino que hace que el sitio sea más funcional y fácil de usar para todos.'
          ],
        },
        
        {
          title:' La base de un buen proyecto',
          texts:['Desde el principio, traté de mantener mi HTML limpio y semántico. En lugar de usar <div>o <span>por todo el código, comience a usar etiquetas más descriptivas como <header>, <footer>, <section>, entre otras. Esto no solo hace que el código sea más fácil de mantener, sino que también facilita la tarea a los lectores de pantalla, que son fundamentales para los usuarios con discapacidad visual. Además, al usar un HTML estructurado correctamente, mi portafolio se volvió más accesible y organizado.'
          ],
        },

        {
          title:'Los Contraste de Colores y Visibilidad',
          texts: ['Uno de los aspectos que más me costó al principio fue asegurarme de que el contraste entre los textos y los fondos fuera adecuado. Cuando comencé a revisar el contraste de los colores en mi diseño, me di cuenta de que algunos elementos no eran lo suficientemente legibles para usuarios con problemas de visión. Usé herramientas como el WCAG Contrast Checker para verificar que el contraste cumpliera con los estándares y ajustar los colores sin perder la estética que buscaba. A veces, un pequeño ajuste de color puede hacer que el contenido sea mucho más accesible para todos.'
          ]
        },

        {
          title:'Etiquetas aria y Roles',
          texts: ['Las etiquetas aria son geniales cuando tenemos contenido dinámico, como un menú desplegable o un pop-up. Estas etiquetas permiten que los lectores de pantalla sepan qué está pasando en la página, lo que facilita mucho la navegación para quienes las usan.']
        },

        {
          title:'Texto Alternativo y Multimedia',
          texts: ['Las imágenes siempre deben tener una descripción en el atributo alt, y si hay videos, lo ideal es agregar subtítulos o transcripciones. Esto no es solo para personas con discapacidades visuales o auditivas, sino también para quienes no entienden el idioma del sitio o prefieren leer antes que escuchar.']
        },
        {
          title:'Lenguaje Claro y Conciso',
          texts: ['Tratar de usar un lenguaje simple es clave. A veces nos gusta complicar las cosas con jerga o palabras rebuscadas, pero lo mejor es ser claro y directo. Esto ayuda a todo el mundo, pero sobre todo a personas con discapacidades cognitivas o quienes no dominan el idioma del sitio.']
        },
        {
          title:'Formularios Accesibles',
          texts: ['Los formularios son otro tema importante. No basta con hacer que funcionen; deben estar bien estructurados, con etiquetas claras asociadas a los campos y mensajes de error fáciles de entender. Además, para quienes usan lectores de pantalla, todo debe estar bien marcado para que sea lógico y fácil de seguir.']
        },
        {
          title:'Animaciones y Efectos',
          texts: ['Las animaciones están buenas, pero hay que tener cuidado con ellas. Algunas personas tienen sensibilidad al movimiento o pueden ser propensas a ataques de epilepsia fotosensible. Por eso, trato de que las animaciones sean suaves o, si es posible, permitir que el usuario las apague si no le gustan.']
        },
        {
          title:'Testeo y Feedback Continuo',
          texts: ['Lo más importante: siempre probar todo. A veces uno cree que todo está perfecto, pero la mejor forma de saber si realmente es accesible es pidiéndole feedback a los usuarios reales, especialmente aquellos que dependen de tecnologías de asistencia. Además, la accesibilidad no es algo que se hace una sola vez; siempre es bueno revisar y mejorar con el tiempo.']
        },
        {
          title:'Conclusión',
          texts: ['Mejorar la accesibilidad no solo es cumplir con una norma, sino que es una forma de hacer que el sitio sea más útil y fácil de usar para todos. No es tan complicado como parece, y con algunos ajustes simples podemos hacer que la web sea un lugar más inclusivo.']
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
