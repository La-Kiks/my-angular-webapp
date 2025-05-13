import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-one',
  imports: [],
  templateUrl: './project-one.component.html',
  styleUrl: './project-one.component.scss'
})
export class ProjectOneComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Project One');
  }

}
