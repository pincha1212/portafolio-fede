import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'sobremi',
    loadComponent: () =>
      import('./components/secciones/sobremi/sobremi.component').then(
        (m) => m.SobremiComponent
      ),
  },
  {
    path: 'proyecto',
    loadComponent: () =>
      import('./components/secciones/proyecto/proyecto.component').then(
        (m) => m.ProyectoComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./components/secciones/proyecto/blog/blog.component').then(
        (m) => m.BlogComponent
      ),
  },

  {
    path: 'blog/:id', // El parámetro ahora acepta slugs
    loadComponent: () =>
      import('./components/secciones/proyecto/blog/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  
  {
    path: 'formacion',
    loadComponent: () =>
      import('./components/secciones/formacion/formacion.component').then(
        (m) => m.FormacionComponent
      ),
  },
  {
    path: 'experiencia',
    loadComponent: () =>
      import('./components/secciones/experiencia/experiencia.component').then(
        (m) => m.ExperienciaComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./components/secciones/contacto/contacto.component').then(
        (m) => m.ContactoComponent
      ),
  },
  {
    path: 'minijuegos',
    loadComponent: () =>
      import('./components/secciones/mini-juegos/mini-juegos.component').then(
        (m) => m.MiniJuegosComponent
      ),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Ruta comodín para manejar errores
];
