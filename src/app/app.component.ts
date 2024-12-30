import { Component } from '@angular/core';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [SeccionesComponent, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
