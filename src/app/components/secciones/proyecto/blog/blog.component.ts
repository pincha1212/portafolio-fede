import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPosts = [
    {
      id: 'como-manejar-rutas-anidadas-angular',
      title: 'Cómo manejar rutas anidadas en Angular',
      description: 'Aprende a configurar rutas anidadas paso a paso.',
      content: 'Aquí iría el contenido completo del post sobre rutas anidadas.',
      link: '/blog/como-manejar-rutas-anidadas-angular',
    },
    {
      id: 'mejorando-accesibilidad-proyectos-web',
      title: 'Mejorando la accesibilidad en tus proyectos web',
      description: 'Consejos para interfaces accesibles y amigables.',
      content: 'Contenido completo del post sobre accesibilidad.',
      link: '/blog/mejorando-accesibilidad-proyectos-web',
    },

    {
      id: 'introduccion-typescript',
      title: 'Introducción a TypeScript',
      description: 'Guía básica para empezar con TypeScript.',
      content: `Ut suscipit eros sed nisl tempus, vitae consectetur risus vehicula. Donec mollis consectetur sapien vel consequat. Integer ut nulla sit amet sapien gravida pretium nec vel justo.`,
      link: '/blog/introduccion-typescript',
    },
    {
      id: 'componentes-reutilizables',
      title: 'Creación de componentes reutilizables en Angular',
      description: 'Aumenta la eficiencia con componentes reutilizables.',
      content: `Curabitur dignissim nulla ac pharetra congue. Donec sit amet semper libero. Maecenas id felis sed turpis vehicula tincidunt eget ac nulla.`,
      link: '/blog/componentes-reutilizables',
    },
    {
      id: 'mejorando-seo-angular',
      title: 'Mejorando el SEO en aplicaciones Angular',
      description: 'Ajustes importantes para SEO en aplicaciones SPA.',
      content: `Mauris vehicula, elit at ultricies hendrerit, justo velit pellentesque lorem, vitae congue purus neque quis lectus. In blandit cursus libero id consectetur.`,
      link: '/blog/mejorando-seo-angular',
    },

  ];

  
  
}
