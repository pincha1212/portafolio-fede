import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-miviaje',
  imports: [
    CommonModule
  ],
  templateUrl: './miviaje.component.html',
  styleUrl: './miviaje.component.css'
})
export class MiviajeComponent {
  subtitulo: string = 'Mi Viaje en la Cocina';
  descripcion: string[] = [
    'Todo empezó en la cocina de mi mamá. Me encantaba el olor a especias y el ruido del cuchillo en la tabla. Ahí descubrí que cocinar no era solo hacer comida, era algo más, como un idioma que conecta con mi familia.',
    'Mi primer plato fue un desastre. Quise hacer una salsa filetto y terminó siendo una salsa demasiado espesa. Pero no me rendí. Seguí intentando, probando y aprendiendo. Poco a poco, fui mejorando. Hasta que un día, mi salsa filetto salió como la que hacía mi mamá.',
    'Con el tiempo, me empecé a fijar en los detalles. No era solo cocinar, era sentir los ingredientes, probar cada vez que colocaba un ingrediente, o saber cuándo el caramelo estaba justo en su punto. Cada plato era como un dibujo que iba mejorando poco a poco.',
    'Un día me di cuenta de que quería más. No solo cocinar, sino hacer cosas únicas. Aprender a hacer panes con corteza crujiente o salsas que cuenten algo especial. Me di cuenta de que las recetas son historias, y que innovar es darles mi toque, no romperlas.',
    'Sigo aprendiendo, probando, equivocándome y mejorando. Cocinar me enseñó mucho más que recetas: me enseñó paciencia, creatividad y a no rendirme. Mi meta es clara: ser un gran cocinero. Quiero hacer platos que sorprendan y dejen mi huella.',
    'Mi camino no ha terminado. Siempre hay algo nuevo que inventar. ¿Qué sigue? No lo sé, pero estoy listo para hacerlo.'
  ];
}
