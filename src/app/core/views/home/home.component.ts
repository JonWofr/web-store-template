import { Component, OnInit } from '@angular/core';
import { animateOnScroll } from 'src/app/shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    animateOnScroll('animate__fadeInLeft', '.wrapper.advantage');
  }
}
