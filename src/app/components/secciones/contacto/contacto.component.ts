import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [
    CommonModule,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/pincha1212' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/federico-barzola-7138b3216' },
    { name: 'Twitter', url: 'https://www.instagram.com/fedebarzola3' },
    { name: 'Instagram', url: 'https://www.instagram.com/fedebarzola3' },
    { name: 'Facebook', url: 'https://www.facebook.com/gustavo.barzola.7' },
  ];
}
