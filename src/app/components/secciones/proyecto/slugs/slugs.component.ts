import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProyectosService } from '../../../../services/proyectos.service';

@Component({
  selector: 'app-slugs',
  imports: [
    CommonModule,RouterModule
  ],
  templateUrl: './slugs.component.html',
  styleUrl: './slugs.component.css'
})

export class SlugsComponent implements OnInit {
  proyecto: any;

  constructor(
    private route: ActivatedRoute,
    private proyectosService: ProyectosService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id') || '';
    this.proyecto = this.proyectosService.getProyectoBySlug(slug);
  }
}