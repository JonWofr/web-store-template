import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-max',
  templateUrl: './banner-max.component.html',
  styleUrls: ['./banner-max.component.scss'],
})
export class BannerMaxComponent implements OnInit {
  constructor() {}

  transform = 'translate3d(0px, 0px, 0px) scale(1, 1)';

  computeTShirtPos(): void {
    const margin = screen.width * 0.25;
    const leftTShirt = document.getElementsByClassName(
      't-shirt move-left'
    )[0] as HTMLElement;
    const rightTShirt = document.getElementsByClassName(
      't-shirt move-right'
    )[0] as HTMLElement;
    leftTShirt.style.left = margin - window.scrollY + 'px';
    rightTShirt.style.right = margin - window.scrollY + 'px';
    leftTShirt.style.transform = `translateX(-50%) rotate(${
      -5 - window.scrollY / 50
    }deg)`;
    rightTShirt.style.transform = `translateX(50%) rotate(${
      5 + window.scrollY / 50
    }deg)`;
  }

  showHideScrollIndicator(): void {
    const arrow = document.getElementsByClassName(
      'arrow-down'
    )[0] as HTMLElement;
    arrow.style.opacity = `${1 - window.scrollY / 300}`;
  }

  ngOnInit(): void {
    this.computeTShirtPos();
    this.showHideScrollIndicator();
    // this.animateOnScroll()
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: Event): void {
    this.computeTShirtPos();
    this.showHideScrollIndicator();
  }

  // buildThresholdList() {
  //   const thresholds = [];
  //   const numSteps = 200;

  //   for (let i = 1.0; i <= numSteps; i++) {
  //     const ratio = i / numSteps;
  //     thresholds.push(ratio);
  //   }

  //   thresholds.push(0);
  //   return thresholds;
  // }

  // animateOnScroll() {
  //   const options = {
  //     rootMargin: '0px',
  //     threshold: this.buildThresholdList(),
  //   };

  //   const observer = new IntersectionObserver(
  //     (entries: IntersectionObserverEntry[]) => {
  //       entries.forEach((entry: IntersectionObserverEntry) => {
  //         this.transform = `translate3d(0px, 0px, 0px) scale(1, ${
  //           entry.intersectionRatio * entry.intersectionRatio * 2
  //         })`;
  //       });
  //     },
  //     options
  //   );
  //   document.querySelectorAll('.banner-max').forEach((value) => {
  //     observer.observe(value);
  //   });
  // }
}
