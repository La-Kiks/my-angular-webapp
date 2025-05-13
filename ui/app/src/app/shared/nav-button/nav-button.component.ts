import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  imports: [],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {
  @Input() index: string = "0";
  @Input() description: string = "";

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive
  }

  selectedButton: number = 1; // Start with button 1 selected, or null if you want none

  selectButton(buttonNumber: number) {
    this.selectedButton = buttonNumber;
  }
}
