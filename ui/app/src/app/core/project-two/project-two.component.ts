import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-two',
  imports: [],
  templateUrl: './project-two.component.html',
  styleUrl: './project-two.component.scss'
})
export class ProjectTwoComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Project Two');
  }

}
