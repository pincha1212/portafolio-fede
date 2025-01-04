import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  imports: [
    CommonModule
  ],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  experiences = [
    {
      category: 'Gastronomía',
      items: [
        {
          title: 'Ayudante de Cocina Eventual – HOTEL & CASINO CÓNDOR DE LOS ANDES, Mendoza',
          duration: '(2021 – 2022)',
          details: [
            ' Limpiar, cortar y pelar verduras.',
            ' Mezclar ingredientes.',
            'Orden y revisión de las cámaras de carne, verduras y producción.',
            ' Preparación de platos gourmets.',
          ],
        },

        {
          title: 'Ayudante de Cocina - Bachero – FRAN COFFEE MAKERS, Mendoza',
          duration: '(2022)',
          details: [
            'Preparación de desayunos.',
            'Lavado, secado y orden de la cocina (Bachero).',
            'Hacer producción para los desayunos.',
          ],
        },

        {
          title: 'Ayudante de Cocina - Bachero – BLACK ELEVEN 11, Mendoza',
          duration: '(2022)',
          details: [
            'Preparación de desayunos, postres, comida rápida, etc.',
            'Hacer producción. ',
          ],
        },

        {
          title: ' Planchero - Bachero – CRISTÓBAL CAFÉ – BAR, Mendoza',
          duration: '(2022)',
          details: [
            'Preparación de comida rápida. ',
            ' Preparación de desayunos.',
            'Hacer producción.',
            ' Orden y limpieza de la cocina y la bacha.',
          ],
        },

        {
          title: ' Mozo Eventual – BODEGA – Los Toneles, Mendoza',
          duration: '(2023 – 2024)',
          details: [
            'Atención Personalizada (atender y recibir clientes).',
            'Orden y limpieza del comedor (lugar de eventos).',
          ],
        },

        {
          title: ' Planchero – Pizzero – RINCÓN DE LA BOCA, Mendoza',
          duration: '(2023 - 2024)',
          details: [
            'Preparación de comidas rápidas.',
            'Orden y limpieza de la cocina.',
            'Hacer producción.',
          ],
        },

        {
          title: 'Panadero Artesano – Empredimiento propio',
          duration: '(2024 – Actualidad)',
          details: [
            'Elaboración de panificados artesanales con técnicas tradicionales.',
            'Innovación en recetas.',
          ],
        },
      ],
    },
    {
      category: 'Desarrollo Web',
      items: [
        {
          title: 'Desarrollador Front-End – Freelance',
          duration: '(2020 – Actualidad)',
          details: [
            'Mi primer experiencia solo.',
            'aun sigo aprendiendo, voy a crear una base de datos propia para aumentar mis conocimientos.',
            'Despliegue de proyectos en GitHub Pages.',
          ],
        },

      ],
    },

    {
      category: 'Preparación Física y validacion de entradas',
      items: [
        {
          title: 'Preparador Físico – Club Atlético Boca Bermejo, Mendoza',
          duration: '(2018)',
          details: [
            'Mi primer experiencia trabajando.',
            ' Coordinación y orden de actividades de grupos deportivos infantiles.',
            'Preparación física.',
          ],
        },

        {
          title: 'Validador – ESTADIO Aconcagua-arena, Mendoza',
          duration: '(2023)',
          details: [
            '  Recibir entradas(validar).',
            'Acompañar a la gente a sus lugares.',
          ],
        },

      ],
    },

  ];
}
