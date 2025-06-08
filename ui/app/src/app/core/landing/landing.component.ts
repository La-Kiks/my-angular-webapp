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


  buttons = ['Antibug Solutions', 'Portfolio', 'Prodrafts', 'Cooldowns'];
  cards = [
    { thumbnail: "/Antibug-1280x360.jpg", numero: "01", title: "Antibug Solutions", description: "Améliorations apportées au site d'un client. Optimisation d'une page lente, de plus d'une minute de chargement à moins d'une seconde, ajouts de fonctionnalités et mise à jour de Symfony.", url: "project-one" },
    { thumbnail: "/Portfolio-1280x360.jpg", numero: "02", title: "Portfolio", description: "Le site sur  lequel vous êtes, fait avec Symfony dans un premier temps où je me suis permis de tester et d'implémenter de nombreuses fonctionnalités du framework. Puis refait avec .NET et Angular afin d'élargir mes compétences !", url: "project-two" },
    { thumbnail: "/Lolprodraft-1280x360.jpg", numero: "03", title: "Prodraft", description: "Un jeu tour par tour qui utilise les websockets pour simuler une draft comme l'on peut trouver dans le jeu League of Legends. 100% Typescript, Next.", url: "project-three" },
    { thumbnail: "/Lolcooldowns-1280x360.jpg", numero: "04", title: "Cooldowns", description: "Mon tout premier site qui répond à un besoin des joueurs de League of Legends à trouver des informations tactiques. Le site a eu  une petite popularité sur  Reddit à son lancement avec 30k utilisateurs mensuels. PHP 8.2 et Symfony 7.", url: "project-four" }

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
