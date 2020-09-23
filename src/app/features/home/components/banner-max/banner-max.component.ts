import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-max',
  templateUrl: './banner-max.component.html',
  styleUrls: ['./banner-max.component.scss'],
})
export class BannerMaxComponent implements OnInit {
  constructor() {}

  transform = 'translate3d(0px, 0px, 0px) scale(1, 1)';
  showMoreBtnFontSize = '5rem';

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
    this.animateOnScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: Event): void {
    this.computeTShirtPos();
    this.showHideScrollIndicator();
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
            entry.intersectionRatio * entry.intersectionRatio
          })`;
          if (10 - entry.intersectionRatio * 10 < 4.5) {
            this.showMoreBtnFontSize = `${
              10 - entry.intersectionRatio * 10
            }rem`;
          }
        });
      },
      options
    );
    document.querySelectorAll('.bottom-part-banner').forEach((value) => {
      observer.observe(value);
    });
  }

  product1 = {
    id: '1',
    name: 'AI',
    title: 'Super Shuh 1',
    subTitle: 'Diesen Shuh möchtest du nie wieder ausziehen',
    brand: 'Nike',
    shortDescription:
      'Sit sint consequat fugiat non. Sint minim nisi veniam dolor fugiat cupidatat magna eu elit ad. Ex est est minim non anim mollit et dolore.',
    description:
      'Cupidatat sunt sit elit aute eu nisi quis ut dolore. Minim duis ipsum aute veniam. Aliqua sunt cillum ipsum minim elit laboris laborum. Eiusmod sint exercitation voluptate dolore proident esse ex excepteur. Ea tempor qui labore id consequat eu commodo. Voluptate duis consequat consequat veniam qui et mollit nostrud mollit. Cillum ipsum laboris incididunt nostrud proident sunt non ex anim reprehenderit sint ullamco veniam aute. Adipisicing ipsum aute irure velit ullamco cupidatat exercitation eu non cillum. Officia cupidatat nulla excepteur aliquip laboris non labore nostrud qui minim. Consectetur esse irure ullamco labore in excepteur sit sit. Commodo culpa nulla adipisicing deserunt sint qui nisi ipsum consequat enim. Ullamco est deserunt reprehenderit reprehenderit tempor do. Adipisicing ea deserunt fugiat ut aliquip sint in ut dolore enim. Aute ipsum amet quis irure laborum aliquip nisi. Ipsum tempor anim nisi eu magna velit sit ex nulla culpa labore ipsum proident commodo. Proident duis ullamco excepteur et pariatur ex sit Lorem pariatur. Consequat enim incididunt elit deserunt officia. Occaecat Lorem proident amet sint incididunt magna irure elit occaecat magna ullamco enim.',
    amountOnStock: 10,
    price: 49.99,
    discountedPrice: 39.99,
    reviews: [],
    keyFacts: [],
    inStockSinceInMs: 1595614940351,
    colors: ['gray', 'dark-gray'],
    thumbnailImageUrl: '/assets/images/example-product.png',
  };
}
