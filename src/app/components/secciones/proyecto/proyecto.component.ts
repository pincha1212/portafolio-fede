import { Component } from '@angular/core';
import { IdeaComponent } from "./idea/idea.component";

@Component({
  selector: 'app-proyecto',
  imports: [IdeaComponent],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

}
