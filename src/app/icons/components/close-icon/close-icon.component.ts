import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss'],
})
export class CloseIconComponent {
  faIcon = faTimes
}
