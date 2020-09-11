import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe(() => {
      if (this.route.url !== '/') {
        document.querySelector('#nav')?.classList.add('nav-transparent');
      } else {
        this.animateOnScroll();
      }
    });
  }

  animateOnScroll(): void {
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
