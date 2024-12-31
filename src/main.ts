import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Importa la función `provideRouter`
import { routes } from './app/app.routes';  // Importa las rutas definidas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Proporciona el enrutador con las rutas
  ],
})
  .catch((err) => console.error(err));
