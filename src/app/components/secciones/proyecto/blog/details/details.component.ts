import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  blogPosts = [
    {
      id: 'como-manejar-rutas-anidadas-angular',
      title: 'Cómo manejar rutas anidadas en Angular',
      description: 'Aprende a configurar rutas anidadas paso a paso.',
      content: 'Aquí iría el contenido completo del post sobre rutas anidadas.',
    },
    {
      id: 'mejorando-accesibilidad-proyectos-web',
      title: 'Mejorando la accesibilidad en tus proyectos web',
      description: 'Consejos para interfaces accesibles y amigables.',
      content: 'Contenido completo del post sobre accesibilidad.',
    },
  ];

  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const postSlug = this.route.snapshot.paramMap.get('id');
    this.post = this.blogPosts.find(post => post.id === postSlug);
  }

}
