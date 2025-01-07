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
      content: [
        { type: 'text', text: 'Permiten cargar diferentes "páginas" dentro de una página principal.' },
        { type: 'text', text: 'Son útiles para aplicaciones jerárquicas.' },
        { type: 'image', src: 'ruta/a/imagen1.jpg', alt: 'Ejemplo de rutas anidadas' },
        { type: 'text', text: 'Este párrafo no tiene imagen asociada.' },
        { type: 'image', src: null, alt: null }
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
