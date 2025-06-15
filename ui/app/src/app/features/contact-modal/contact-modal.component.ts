import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-modal',
  imports: [NgIf],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  @Input() visible = false;
  @Input() email = 'yourmail@example.com';
  @Input() discord = 'YourDiscord#1234';
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.visible = false;
    this.closed.emit();
  }

  copiedMessage = '';

  copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedMessage = `${label} copied!`;

      setTimeout(() => {
        this.copiedMessage = '';
      }, 2000);
    });
  }

}
