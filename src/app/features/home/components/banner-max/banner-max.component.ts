import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-max',
  templateUrl: './banner-max.component.html',
  styleUrls: ['./banner-max.component.scss'],
})
export class BannerMaxComponent implements OnInit {
  constructor() {}

  transform = 'translate3d(0px, 0px, 0px) scale(1, 1)';

  ngOnInit(): void {
    this.animateOnScroll();
  }

  buildThresholdList() {
    const thresholds = [];
    const numSteps = 200;

    for (let i = 1.0; i <= numSteps; i++) {
      const ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  animateOnScroll() {
    const options = {
      rootMargin: '0px',
      threshold: this.buildThresholdList(),
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          this.transform = `translate3d(0px, 0px, 0px) scale(1, ${
            entry.intersectionRatio * entry.intersectionRatio * 2
          })`;
        });
      },
      options
    );
    document.querySelectorAll('.banner-max').forEach((value) => {
      observer.observe(value);
    });
  }
}
