import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-idea',
  imports: [CommonModule],
  templateUrl: './idea.component.html',
  styleUrl: './idea.component.css'
})
export class IdeaComponent {

  titulo: any;
  fecha: any;
  detalles: any;

  proyectos = [
    {
      titulo: 'Proyecto Personal: Portafolio Web',
      fecha: '2024',
      detalles: [
        'Creación de un portafolio interactivo que combina creatividad y funcionalidad.',
        'Uso de tecnologías modernas para diseño y desarrollo.'
      ]
    },
    {
      titulo: 'Proyecto: Hola mundo con Angular (Front-End)',
      fecha: '2024',
      detalles: [
        'Desarrollo de una aplicación web dinámica usando Angular.',
        'Optimización de la interfaz para una mejor experiencia de usuario.',
        'Despliegue de proyectos en GitHub Pages.'
      ]
    }
  ];

}
