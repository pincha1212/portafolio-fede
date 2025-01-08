import { Injectable } from '@angular/core';

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
          image: {src: 'https://i.ibb.co/7Kp45xP/carga-forma-perezoso.webp', alt:'carga de forma perezosa de rutas'},
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
      description: 'Consejos para interfaces accesibles y amigables.',
      content: 'Contenido completo del post sobre accesibilidad.',
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
