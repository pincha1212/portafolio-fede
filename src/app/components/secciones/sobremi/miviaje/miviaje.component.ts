import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-miviaje',
  standalone: true, // Use standalone component feature
  imports: [CommonModule],
  templateUrl: './miviaje.component.html',
  styleUrls: ['./miviaje.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class MiviajeComponent {
  subtitulo: string = 'Mi Viaje en la Cocina';
  descripcion: string[] = this.getDescripcion(); // Moved description to a method for better readability

  private getDescripcion(): string[] {
    return [
      'Todo arrancó en la cocina de mi vieja. Me fascinaba ese olorcito a especias y el ruido del cuchillo en la tabla. Ahí entendí que cocinar no era solo preparar comida, era algo más profundo, como un idioma que te conecta con los que querés.',
      'Mi primer plato era un desastre. Quise hacer una salsa filetto y me salió un mazacote espeso que ni daba para probar. Pero no aflojé. Seguí intentando, metiendo mano y aprendiendo. Hasta que un día, ¡pum!, la salsa filetto salió igualita a la de mi vieja.',
      'Con el tiempo, empecé a prestar atención a los detalles. No era solo cocinar, era sentir los ingredientes, probar cada vez que agregaba algo, o saber cuándo el caramelo estaba en su punto justo. Cada plato era como un cuadro que iba puliendo de a poquito.',
      'Un día me cayó la ficha: quería más. No solo cocinar, sino hacer cosas únicas. Aprender a hacer panes con esa corteza crocante o salsas que cuenten una historia. Me di cuenta de que las recetas son relatos y que innovar no es romperlas, sino ponerles mi sello.',
      'Sigo aprendiendo, probando, pifiándola y mejorando. Cocinar me enseñó mucho más que recetas: me enseñó a ser paciente, a ser creativo y a no bajar los brazos. Tengo mi objetivo clarísimo: ser un gran cocinero. Quiero hacer platos que sorprendan y que lleven mi marca.',
      'Mi camino todavía no termina. Siempre hay algo nuevo para inventar. ¿Qué sigue? No sé, pero acá estoy, listo para lo que venga.'
    ];
  }
}