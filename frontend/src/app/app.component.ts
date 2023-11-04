import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'; //import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';

  



  tareas: string[] = [];

  private timerSubscription: Subscription;
  constructor() {
    this.timerSubscription = new Subscription();
}
//private timerSubscription: Subscription = new Subscription();



//  private timerSubscription: Subscription;

  ngOnInit() {
    
    // Inicializa la lista de tareas
    this.tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

    // Crea un intervalo de tiempo que se ejecuta cada 10 segundos
    const timer = interval(10000);

    // Suscríbete al intervalo y actualiza la lista de tareas en cada disparo
    this.timerSubscription = timer.subscribe(() => {
      this.actualizarTareas();
    });
  }

  ngOnDestroy() {
    // Asegúrate de desuscribirte del intervalo cuando el componente se destruye
    this.timerSubscription.unsubscribe();
  }

  actualizarTareas() {
    // Lógica para actualizar la lista de tareas (por ejemplo, obtener tareas de una API)
    // En este ejemplo, simplemente agregamos una tarea ficticia.
    this.tareas.push('Tarea ' + (this.tareas.length + 1));
  }

}

