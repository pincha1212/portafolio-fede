import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../../services/proyectos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-idea',
  imports: [CommonModule, RouterModule],
  templateUrl: './idea.component.html',
  styleUrl: './idea.component.css'
})
export class IdeaComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    this.proyectos = this.proyectosService.getProyectos();
  }
}