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

  getSnippet(content: any): string {
    if (Array.isArray(content)) {
      // Caso: content es un array de objetos
      const textContent = content
        .filter(item => item.type === 'text')
        .map(item => item.text)
        .join(' ');
      return textContent.length > 100 ? textContent.slice(0, 100) + '...' : textContent;
    } else if (typeof content === 'string') {
      // Caso: content es un string simple
      return content.length > 100 ? content.slice(0, 100) + '...' : content;
    }
    return ''; // Si no hay contenido válido
  }
  
}
