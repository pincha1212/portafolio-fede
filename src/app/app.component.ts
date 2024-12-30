import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { SeccionesComponent } from "./components/secciones/secciones.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, SeccionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
