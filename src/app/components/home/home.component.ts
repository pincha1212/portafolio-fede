import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeccionesComponent } from '../secciones/secciones.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, SeccionesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
