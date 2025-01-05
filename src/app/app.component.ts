import { Component } from '@angular/core';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [SeccionesComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class AppComponent {}
