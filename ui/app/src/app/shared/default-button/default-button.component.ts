import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-button',
  imports: [RouterModule, NgStyle],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss'
})
export class DefaultButtonComponent {
  @Input() label: string = 'Back';
  @Input() route: string = '/';
  @Input() backgroundColor: string = '#f0f0f0';
  @Input() textColor: string = '#2F4F4F';
}
