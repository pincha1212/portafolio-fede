import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-juegos',
  imports: [],
  templateUrl: './mini-juegos.component.html',
  styleUrl: './mini-juegos.component.css'
})
export class MiniJuegosComponent {
  openModalBtn!: Element | null;
  modal!: HTMLElement | null;
  closeModalBtn!: Element | null;

  ngOnInit() {
    this.openModalBtn = document.querySelector('.open-modal-btn');
    this.modal = document.getElementById('gameModal');
    this.closeModalBtn = document.querySelector('.close-btn');

    this.openModalBtn?.addEventListener('click', () => {
      if (this.modal) {
        this.modal.style.display = 'flex';
      }
    });

    this.closeModalBtn?.addEventListener('click', () => {
      if (this.modal) {
        this.modal.style.display = 'none';
      }
    });

    window.addEventListener('click', (event) => {
      if (event.target === this.modal && this.modal) {
        this.modal.style.display = 'none';
      }
    });
  }
}
