import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private proyectos = [
    {
      id: '1',
      slug: 'portafolio-interactivo',
      titulo: 'Portafolio Interactivo',
      fecha: '2021',
      descripcion: ['Un proyecto que combina creatividad y funcionalidad.'],
    },
    {
      id: '2',
      slug: 'recetas-artesanales',
      titulo: 'Recetas Artesanales',
      fecha: '2021',
      descripcion: ['Descripción A', 'Descripción B'],
    },
  ];

  getProyectos() {
    return this.proyectos;
  }

  getProyectoBySlug(slug: string) {
    return this.proyectos.find((p) => p.slug === slug);
  }
}
