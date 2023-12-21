import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
    declarations: [
        ButtonComponent,
        TotalPipe,
        StateDirective,
        ModalComponent
    ],
  exports: [
    TotalPipe,
    StateDirective,
    ButtonComponent,
    ModalComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class SharedModule { }
