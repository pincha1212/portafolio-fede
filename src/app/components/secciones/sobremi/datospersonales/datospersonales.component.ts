import { Component,  } from '@angular/core';
import { DatosComponent } from './datos/datos.component';

@Component({
  selector: 'app-datospersonales',
  imports: [DatosComponent],
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css'
})
export class DatospersonalesComponent {
  mostrarDatos = false; // Controla la visibilidad de los datos

  // Función para alternar la visibilidad
  toggleDatos() {
    this.mostrarDatos = !this.mostrarDatos;
  }
}
