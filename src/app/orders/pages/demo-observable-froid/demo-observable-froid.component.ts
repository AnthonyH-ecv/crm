import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-observable-froid',
  templateUrl: './demo-observable-froid.component.html',
  styleUrls: ['./demo-observable-froid.component.scss']
})
export class DemoObservableFroidComponent {
  observable = new Observable(obs => {
    obs.next(1);
    obs.next(2);
    obs.next(Math.random());
  });

  constructor() {
    this.observable.subscribe((data) => {
      console.log('sub1',data);
    });

    this.observable.subscribe((data) => {
      console.log('sub2',data);
    });
  }
}
