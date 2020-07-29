import { Component, OnInit } from '@angular/core';
import { animateOnScroll } from 'src/app/shared/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    const options = {
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            document.querySelector('#nav')?.classList.add('nav-transparent');
          } else {
            document.querySelector('#nav')?.classList.remove('nav-transparent');
          }
        });
      },
      options
    );
    document.querySelectorAll('.main-banner').forEach((value) => {
      observer.observe(value);
    });
  }
}
