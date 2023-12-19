import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        StateDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
