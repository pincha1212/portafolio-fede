import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BlogService } from '../../../../blog.service';

@Component({
  selector: 'app-blog',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];

  constructor(private blogService: BlogService, private router: Router) {
    this.posts = this.blogService.getPosts(); 
  }

  viewPost(id: string) {
    // Redirige a la página de detalles del post
    this.router.navigate([`/blog/${id}`]);
  }
}
