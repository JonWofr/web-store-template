import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: ShoppingCartItem[] = [];

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('shoppingCartItems')) {
      this.shoppingCartItems = JSON.parse(
        localStorage.getItem('shoppingCartItems') || ''
      );
    }
  }
}
