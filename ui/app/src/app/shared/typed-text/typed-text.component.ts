import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typed-text',
  imports: [NgIf],
  templateUrl: './typed-text.component.html',
  styleUrl: './typed-text.component.scss'
})
export class TypedTextComponent implements OnInit {
  fullText: string = "Web Developper";
  displayedText: string = "";
  private index: number = 0;
  private typingSpeed: number = 160;
  typingFinished: boolean = false;

  ngOnInit(): void {
    this.typeLetter();
  }

  typeLetter(): void {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeLetter(), this.typingSpeed);
    } else {
      this.typingFinished = true;
      // setTimeout(() => { this.index = 0; this.displayedText = ""; this.typeLetter(); }, 5000);
    }
  }

}
