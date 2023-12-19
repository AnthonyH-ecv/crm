import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
    declarations: [
        ButtonComponent,
        TotalPipe,
        StateDirective
    ],
  exports: [
    TotalPipe,
    StateDirective,
    ButtonComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class SharedModule { }
