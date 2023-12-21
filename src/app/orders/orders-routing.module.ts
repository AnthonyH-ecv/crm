import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { DemoObservableChaudComponent } from './pages/demo-observable-chaud/demo-observable-chaud.component';
import { DemoObservableFroidComponent } from './pages/demo-observable-froid/demo-observable-froid.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  {path:'', component: PageListOrdersComponent},
  {path:'add', component: PageAddOrderComponent},
  {path: 'edit/:id', component: PageEditOrderComponent},
  {path: 'obs-froid', component: DemoObservableFroidComponent},
  {path: 'obs-chaud', component: DemoObservableChaudComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  subject = new Subject()

  constructor() {
    this.subject.subscribe((data) => {
      console.log('sub1',data)
    })

    this.subject.next(1)

    this.subject.subscribe((data) => {
      console.log('sub2',data)
    })

    this.subject.next(2)
    this.subject.next(Math.random())

  }
}
