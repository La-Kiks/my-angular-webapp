import { Component } from '@angular/core';
import { DefaultButtonComponent } from "../../shared/default-button/default-button.component";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-propos',
  imports: [DefaultButtonComponent],
  templateUrl: './propos.component.html',
  styleUrl: './propos.component.scss'
})
export class ProposComponent {
  constructor(private titleService: Title, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('About');
  }

  goToCurriculum() {
    this.router.navigate(['/curriculum']);
  }
}
