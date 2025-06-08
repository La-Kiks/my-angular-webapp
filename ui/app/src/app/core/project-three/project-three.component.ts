import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DefaultButtonComponent } from "../../shared/default-button/default-button.component";

@Component({
  selector: 'app-project-three',
  imports: [DefaultButtonComponent],
  templateUrl: './project-three.component.html',
  styleUrl: './project-three.component.scss'
})
export class ProjectThreeComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Project Three');
  }

}
