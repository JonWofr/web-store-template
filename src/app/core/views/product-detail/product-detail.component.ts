import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { Product } from '../../models/product.model';

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
  ) {}

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService
      .getManyAsPromise<Product[]>('/assets/data/products.json')
      .then((products) => {
        this.product = products.find((product) => product.id === productId);
      });

    this.setUpTopSectionHider();
  }

  setUpTopSectionHider(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0.8,
    };
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove('animate__fadeIn');
            entry.target.classList.add('animate__fadeOut');
          } else {
            entry.target.classList.remove('animate__fadeOut');
            entry.target.classList.add('animate__fadeIn');
          }
        });
      },
      options
    );
    document.querySelectorAll('.product-selection-header').forEach((value) => {
      observer.observe(value);
    });
  }
}
