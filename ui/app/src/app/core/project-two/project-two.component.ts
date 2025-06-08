import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DefaultButtonComponent } from "../../shared/default-button/default-button.component";

@Component({
  selector: 'app-project-two',
  imports: [DefaultButtonComponent],
  templateUrl: './project-two.component.html',
  styleUrl: './project-two.component.scss'
})
export class ProjectTwoComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Project Two');
  }

}
