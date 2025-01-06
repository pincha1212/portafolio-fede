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
      content:  `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod velit vel lacus gravida, id scelerisque risus 
      pretium. Suspendisse potenti. Integer viverra lorem ac libero convallis, ac laoreet elit tincidunt. In nec libero sit 
      amet lorem laoreet tincidunt ut id magna. Proin vel consequat ipsum, eu malesuada arcu. Aliquam erat volutpat. Curabitur 
      ac libero purus. Ut vitae venenatis metus, sit amet gravida tortor. Suspendisse id nisl nisl. Donec a ligula vel lorem 
      aliquam eleifend. Fusce non felis a ante luctus ultricies ac sit amet lorem.
      
      Sed laoreet auctor purus, non gravida libero convallis ut. Vivamus euismod nisi at risus consequat, sit amet pretium 
      metus elementum. Mauris aliquet, ipsum vel feugiat rhoncus, augue urna scelerisque eros, eget aliquet velit ipsum vitae 
      nunc. Nulla fringilla nec felis ac fermentum. Etiam feugiat odio leo, a volutpat magna auctor vitae. Morbi feugiat 
      nunc id elit vestibulum, non tempus urna maximus. Donec viverra leo quis odio pharetra, a tincidunt lorem luctus.`,
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
