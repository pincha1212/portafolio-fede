import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { MishabilidadesComponent } from "./mishabilidades/mishabilidades.component";
import { MiviajeComponent } from "./miviaje/miviaje.component";

@Component({
  selector: 'app-sobremi',
  imports: [RouterModule, DatospersonalesComponent, MishabilidadesComponent, MiviajeComponent],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

}
