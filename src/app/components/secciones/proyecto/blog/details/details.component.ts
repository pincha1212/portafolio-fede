import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../../../../blog.service';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService // Inyectamos el servicio
  ) {}

  ngOnInit(): void {
    // Obtén el id de la publicación desde la ruta
    const postId = this.route.snapshot.paramMap.get('id');

    // Obtén los detalles del post usando el servicio
    if (postId) {
      this.post = this.blogService.getPostById(postId);
    }
  }
}
