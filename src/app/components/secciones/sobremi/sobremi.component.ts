import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { MishabilidadesComponent } from "./mishabilidades/mishabilidades.component";

@Component({
  selector: 'app-sobremi',
  imports: [RouterModule, DatospersonalesComponent, MishabilidadesComponent],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

}
