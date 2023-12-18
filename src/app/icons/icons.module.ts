import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { NavIconComponent } from './components/nav-icon/nav-icon.component';



@NgModule({
  declarations: [
    CloseIconComponent,
    NavIconComponent
  ],
  exports: [
    NavIconComponent,
    CloseIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
