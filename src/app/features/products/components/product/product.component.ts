import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  /**strings as hex e.g.: #007bff */

  @Input() product?: Product;
  @Input() backgroundColorHeader = 'hsl(0, 0%, 95%)';
  @Input() darkmode = false;
  constructor(private route: Router) {}

  isHovering = false;

  openProductDetails(): void {
    this.route.navigateByUrl(`/products/${this.product?.id}`);
  }

  ngOnInit(): void {}
}
