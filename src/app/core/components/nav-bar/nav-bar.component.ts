import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onNavigationChange();
  }

  onNavigationChange(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        event = event as NavigationEnd;
        this.createNewRellax();
        switch (event.url) {
          case '/':
            this.animateNavBarOnScroll();
            break;
          default: {
            document.querySelector('#nav')?.classList.add('nav-transparent');
          }
        }
      });
  }

  createNewRellax(): void {
    const rellax = new Rellax('.rellax');
  }

  animateNavBarOnScroll(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
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
