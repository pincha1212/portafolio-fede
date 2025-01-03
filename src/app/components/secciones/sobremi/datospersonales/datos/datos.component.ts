import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ViniloPerfilComponent } from "../../vinilo-perfil/vinilo-perfil.component";

@Component({
  selector: 'app-datos',
  imports: [CommonModule, ViniloPerfilComponent],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  @Input() mostrarDatos: boolean = false;

}
