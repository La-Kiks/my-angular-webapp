import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ContactModalComponent } from '../../features/contact-modal/contact-modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  imports: [NgFor, ContactModalComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private TitleService: Title, private router: Router) { }

  ngOnInit() {
    this.TitleService.setTitle("kilian-au");
  }

  goToPropos() {
    this.router.navigate(['/about']);
  }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  handleClose() {
    this.showModal = false;
  }


  // Track which project is currently active (0 = first project by default)
  activeProjectIndex: number = 0;

  // Project data array
  projects = [
    {
      title: 'Antibug solutions',
      image: '/images/Antibug-1280x720.jpg',
      arrow: '/images/Arrow.png',
      url: 'antibug-solutions'
    },
    {
      title: 'Portfolio',
      image: '/images/Portfolio-1280x720.jpg',
      arrow: '/images/Arrow.png',
      url: 'portfolio'
    },
    {
      title: 'Draft game',
      image: '/images/Lolprodraft-1280x720.jpg',
      arrow: '/images/Arrow.png',
      url: 'prodrafts'
    },
    {
      title: 'Cooldowns',
      image: '/images/Lolcooldowns-1280x720.jpg',
      arrow: '/images/Arrow.png',
      url: 'cooldowns'
    }
  ];

  // Method to handle project title clicks
  selectProject(index: number): void {
    this.activeProjectIndex = index;
  }

  // Method to check if a project is active
  isProjectActive(index: number): boolean {
    return this.activeProjectIndex === index;
  }

}
