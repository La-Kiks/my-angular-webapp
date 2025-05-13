import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-four',
  imports: [],
  templateUrl: './project-four.component.html',
  styleUrl: './project-four.component.scss'
})
export class ProjectFourComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Project Four');
  }

}
