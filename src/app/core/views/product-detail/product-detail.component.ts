import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { Product } from '../../models/product.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  transform = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) // private renderer2: Renderer2,
  // @Inject(DOCUMENT) private document: Document
  {}

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService
      .getManyAsPromise<Product[]>('/assets/data/products.json')
      .then((products) => {
        this.product = products.find((product) => product.id === productId);
      });
  }

  // createScripts() {
  //   let script = this.renderer2.createElement('script');
  //   script.type = 'text/javascript';
  //   script.text = `
  //   {
  //     "@context":""
  //   }
  //   `;
  // }

  // buildThresholdList(): number[] {
  //   const thresholds = [];
  //   const numSteps = 200;

  //   for (let i = 1.0; i <= numSteps; i++) {
  //     const ratio = i / numSteps;
  //     thresholds.push(ratio);
  //   }

  //   thresholds.push(0);
  //   return thresholds;
  // }

  // animateOnScroll(): void {
  //   const options = {
  //     rootMargin: '0px',
  //     threshold: this.buildThresholdList(),
  //   };

  //   const observer = new IntersectionObserver(
  //     (entries: IntersectionObserverEntry[]) => {
  //       entries.forEach((entry: IntersectionObserverEntry) => {
  //         this.transform = `translate3d(0px, ${
  //           (1 - entry.intersectionRatio) * 70
  //         }vh, 0px)`;
  //         console.log(entry);
  //       });
  //     },
  //     options
  //   );
  //   document.querySelectorAll('.invisible-screenbox').forEach((value) => {
  //     observer.observe(value);
  //   });
  // }
}
