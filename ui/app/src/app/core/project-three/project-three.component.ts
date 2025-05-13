import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-three',
  imports: [],
  templateUrl: './project-three.component.html',
  styleUrl: './project-three.component.scss'
})
export class ProjectThreeComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Project Three');
  }

}
