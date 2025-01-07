import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private proyectos = [
    {
      id: '1',
      slug: 'portafolio-interactivo',
      titulo: 'Portafolio Interactivo',
      fecha: '2024',
      descripcion: 
        'Este proyecto es una versión renovada del primero, pero encarado desde otro ángulo, buscando más rendimiento y que la experiencia sea lo más piola posible para el usuario. Le metí funcionalidades nuevas, una interfaz más clara y animaciones copadas para que todo fluya mejor. Pensé mucho en que sea accesible y que ande joya en cualquier dispositivo, desde una compu gamer hasta un celu viejito. Le sumé un navbar con secciones súper intuitivas para las rutas. Si usás Angular ni lo notás porque es re natural, pero en una web más tradicional esto sería un quilombo para lograr.Incluí un blog de notas que es re práctico: podés escribir, borrar y editar tus notas de manera súper fácil. Ideal para los que les gusta tener todo organizado. Además, armé una sección de juego que es una onda el Dino de Google, pero con un twist: acá tenés que saltar, comer huevos y esquivar a una serpiente que te quiere devorar. Un vicio total. Trabajé en mejorar los tiempos de carga, minimizando el peso de los assets y usando lazy loading para cargar solo lo necesario. También me aseguré de que todo el diseño sea responsivo y que se vea bien desde un celu hasta un monitor gigante.',
    },
    {
      id: '2',
      slug: 'hola-mundo',
      titulo: 'Hola Mundo',
      fecha: '2024',
      descripcion: 
'Creé el proyecto Hola Mundo no solo por los estilos y demás, sino porque tenía problemas para subir las páginas a GitHub Pages, algo que venía intentando hace como 2 años. Con prueba y error, logré encontar la solucion, porque Angular no está configurado de manera especial para GitHub Pages. Tuve que instalar algunos archivos globalmente para poder conectar mi GitHub con el proyecto, algo que aprendí por mí mismo. En los cursos que tomé nunca me lo enseñaron, solo lo básico. Así que tuve que ponerme las pilas y entender cómo funciona todo eso para finalmente implementarlo correctamente. Después de resolver ese tema, pude empezar a jugar con otras características como las rutas, la optimización y la responsividad, que son cosas que realmente me gustan. Es increíble lo que podés lograr cuando te metés a fondo en algo, y aunque me costó un poco, al final todo valió la pena. Ahora, los proyectos no solo los puedo subir, sino que están bien estructurados y ¿yo?, listo para cualquier cosa.'
      ,
    },
  ];

  getProyectos() {
    return this.proyectos;
  }

  getProyectoBySlug(slug: string) {
    return this.proyectos.find((p) => p.slug === slug);
  }
}
