import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() thumbnail: string = 'Placeholder';
  @Input() numero: string = '01';
  @Input() title: string = 'Card One';
  @Input() description: string = 'Placeholder description';
  @Input() url: string = '#';
}
