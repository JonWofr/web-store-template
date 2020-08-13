import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product?: Product;
  @Input() quantity: number = 1;
  @Input() size?: number;
  @Input() color?: string;

  constructor() {}

  ngOnInit(): void {}
}
