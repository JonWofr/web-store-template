import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper-slide-product-images',
  templateUrl: './swiper-slide-product-images.component.html',
  styleUrls: ['./swiper-slide-product-images.component.scss'],
})
export class SwiperSlideProductImagesComponent implements OnInit {
  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    freeModeMomentum: false,
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        freeModeMomentum: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.setUpAutoPlayOberver();
    });
  }

  setUpAutoPlayOberver(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.config.autoplay = true;
            observer.disconnect();
          }
        });
      },
      options
    );
    document.querySelectorAll('.swiper-container').forEach((value) => {
      observer.observe(value);
    });
  }
}
