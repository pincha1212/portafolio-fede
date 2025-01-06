import { Component } from '@angular/core';
import { IdeaComponent } from "./idea/idea.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  imports: [IdeaComponent, RouterModule ],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

}
