import { Component, signal } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isMenuOpened = signal<boolean>(false);
  toggleMenu() {
    this.isMenuOpened.update((prevVal) => !prevVal);
  }
  clickOutside(): void {
    this.isMenuOpened.set(false);
  }
}
