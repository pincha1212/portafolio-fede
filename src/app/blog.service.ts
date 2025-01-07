import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts = [
    {
      id: 'como-manejar-rutas-anidadas-angular',
      title: 'Cómo manejar rutas anidadas en Angular',
      description: 'Aprende a configurar rutas anidadas paso a paso.',
      content: '¿Qué son las rutas anidadas? Las rutas anidadas en Angular permiten cargar diferentes "páginas" dentro de una página principal, sin recargar toda la aplicación. Es como tener una página con varias secciones que muestran contenido distinto cuando haces clic en un enlace. Imaginemos que tienes un blog. La página principal muestra una lista de publicaciones, y al hacer clic en una publicación, se muestra el contenido completo de esa publicación, todo sin recargar la página. ¿Cómo hacerlo paso a paso? 1. Configurar las rutas: Las rutas son como direcciones web que le decís a Angular que debe seguir. Por ejemplo: Si alguien visita /blog, debe ver la lista de publicaciones. Si visita /blog/1, debe ver los detalles de la publicación número 1. Esto se configura en el archivo de rutas (app-routing.module.ts o similar). 2. Crear el componente principal (padre): Este será el "contenedor" de la página. En este caso, será el BlogComponent, que tendrá: Un título, como "Bienvenido a mi Blog". Un espacio vacío donde Angular mostrará las "subpáginas", usando <router-outlet>. 3. Crear los componentes hijos: Aquí se definen los componentes que veremos dentro del contenedor: Lista de publicaciones: Muestra los títulos y un resumen de las publicaciones. Detalles de la publicación: Muestra el contenido completo de la publicación seleccionada. 4. Usar <router-outlet>: Dentro del componente principal (BlogComponent), necesitás un espacio donde se cargarán las subpáginas. Esto se hace con la etiqueta <router-outlet>. Cuando vas a /blog, el espacio se llena con la lista de publicaciones. Cuando vas a /blog/1, el espacio se llena con los detalles de la publicación. Ejemplo práctico paso a paso 1. Paso 1: Crear las rutas: Definimos las rutas en el archivo de rutas: /blog carga el componente principal (BlogComponent). /blog muestra la lista de publicaciones. /blog/:id muestra los detalles de una publicación según el ID de la URL. 2. Paso 2: Crear el componente principal: Este componente será el "marco" que contiene todo. Usará <router-outlet> para mostrar las subpáginas. 3. Paso 3: Crear el componente de lista de publicaciones: Este componente muestra una lista de publicaciones, por ejemplo: Publicación 1: "Introducción al Blog" Publicación 2: "Cómo crear rutas en Angular" Al hacer clic en una publicación, Angular te lleva a la página de detalles. 4. Paso 4: Crear el componente de detalles de la publicación: Este componente mostrará la publicación completa. Si estás en /blog/1, Angular buscará la publicación con el ID 1 y mostrará su contenido. Resumen del flujo 1. El usuario entra a /blog. Angular carga el BlogComponent (contenedor) y dentro de él muestra la lista de publicaciones. 2. El usuario hace clic en una publicación. Angular navega a /blog/1 (o el ID correspondiente) y muestra los detalles de esa publicación en el espacio designado con <router-outlet>. Así, las subpáginas (como los detalles de la publicación) se cargan dentro de la página principal sin recargar toda la aplicación.',

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
