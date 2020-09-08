import { Component, OnInit } from '@angular/core';
import { animateOnScroll } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    animateOnScroll('animate__jackInTheBox', '.advantage');
  }
}
