import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.scss'],
})
export class ProductImageSliderComponent implements OnInit {
  images: string[] = ['/assets/images/model0.JPG', '/assets/images/model1.JPG'];

  constructor() {}

  ngOnInit(): void {}
}
