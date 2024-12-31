import { Component } from '@angular/core';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [SeccionesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
