import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DefaultButtonComponent } from "../../shared/default-button/default-button.component";

@Component({
  selector: 'app-project-four',
  imports: [DefaultButtonComponent],
  templateUrl: './project-four.component.html',
  styleUrl: './project-four.component.scss'
})
export class ProjectFourComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Cooldowns');
  }

}
