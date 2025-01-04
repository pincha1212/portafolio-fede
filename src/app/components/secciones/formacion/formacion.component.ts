import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formacion',
  imports: [
    CommonModule
  ],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {
  sections = [
    {
      title: 'Cursos y Certificaciones Técnicas',
      items: [
        { title: 'Programador web full stack Jr', source: 'Argentina Programa', year: '2020-2021' },
        { title: 'Curso de Diseño y UX/UI', source: 'Udemy', year: '2022' },
        { title: 'Curso de Marketing Digital', source: 'Udemy', year: '2022' },
        { title: 'Curso de Inglés', source: 'Duolingo', year: '2022' },
        { title: 'Curso de Francés', source: 'Duolingo', year: '2022' },
        { title: 'Ticmas Academy', source: 'Ticmas', year: '2023' }
      ]
    },
    {
      title: 'Formación Culinaria',
      items: [
        { title: 'Taller de Panadería Artesanal', source: 'CCT Enriqueta Delgado de Videla ', year: '2024' },
        { title: 'Curso de Decoración de Platos Gourmet', source: 'Instituto Gastronómico IGA', year: '2020' },
        { title: 'Curso de Manipulación de Alimentos', source: 'Municipalidad de Guaymallén', year: '2023' },

      ]
    },
    {
      title: 'Educación Formal',
      items: [
        { title: 'titulo Secundario/Bachiller en Educación Física', source: 'Nuestra Sra. de la consolata: Primaria y Secundaria:', year: '2018' }
      ]
    }
  ];
}
