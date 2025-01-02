import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViniloPerfilComponent } from "./vinilo-perfil/vinilo-perfil.component";
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';

@Component({
  selector: 'app-sobremi',
  imports: [RouterModule, ViniloPerfilComponent, DatospersonalesComponent],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

}
