import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  /**strings as hex e.g.: #007bff */
  @Input() colors: string[] = ['red', 'green', 'blue'];

  constructor(private route: Router) {}

  isHovering = false;

  openProductDetails(): void {
    this.route.navigateByUrl('/products/1');
  }

  ngOnInit(): void {}
}
