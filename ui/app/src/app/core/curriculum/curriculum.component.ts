import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-curriculum',
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {
  constructor(private TitleService: Title) { }

  ngOnInit() {
    this.TitleService.setTitle("curriculum");
  }

}
