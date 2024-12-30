import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/secciones/contacto/contacto.component';
import { ExperienciaComponent } from './components/secciones/experiencia/experiencia.component';
import { FormacionComponent } from './components/secciones/formacion/formacion.component';
import { SobremiComponent } from './components/secciones/sobremi/sobremi.component';
import { ProyectoComponent } from './components/secciones/proyecto/proyecto.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, children: [ 
          { path: 'sobremi', component: SobremiComponent },
          { path: 'proyecto', component: ProyectoComponent },
          { path: 'formacion', component: FormacionComponent },
          { path: 'experiencia', component: ExperienciaComponent },
          { path: 'contacto', component: ContactoComponent }
        ]
      }
];
