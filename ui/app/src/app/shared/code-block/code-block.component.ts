import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  imports: [],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent {
  @Input() code: string = '';

  copied: boolean = false;

  copyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
      console.log('Copied!');
    }).catch(err => {
      console.error('Failed to copy', err);
    });
  }
}
