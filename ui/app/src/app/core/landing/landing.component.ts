import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { NgFor } from '@angular/common';
import { TypedTextComponent } from "../../shared/typed-text/typed-text.component";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-landing',
  imports: [CardComponent, NgFor, TypedTextComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private TitleService: Title) { }

  ngOnInit() {
    this.TitleService.setTitle("kilian-au");
  }


  buttons = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];
  cards = [
    {
      thumbnail: "640px x 180px", numero: "01", title: "Card One", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.", url: "project-one"
    },
    { thumbnail: "placeholder", numero: "02", title: "Card Two", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.", url: "project-two" },
    { thumbnail: "placeholder", numero: "03", title: "Card Three", description: "This is card max 300 char", url: "project-three" },
    { thumbnail: "placeholder", numero: "04", title: "Card Four", description: "This is card four", url: "project-four" }

  ];

  selectedButton: number = 0; // Index 0 for Button 1
  selectedCard: number = 0;
  exitingCard: number | null = null;

  selectCard(index: number) {
    if (index === this.selectedCard) return;

    this.exitingCard = this.selectedCard;
    this.selectedCard = index;
    this.selectedButton = index;

    setTimeout(() => {
      this.exitingCard = null;
    }, 600);
  }

}
