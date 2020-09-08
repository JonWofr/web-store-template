import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: ShoppingCartItem[] = [];
  priceOfAllItems = 0;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('shoppingCartItems')) {
      this.shoppingCartItems = JSON.parse(
        localStorage.getItem('shoppingCartItems') || ''
      );
      this.priceOfAllItems = this.calculateSumOfAllItems(
        this.shoppingCartItems
      );
    }
  }

  calculateSumOfAllItems(shoppingCartItems: ShoppingCartItem[]): number {
    let priceOfAllItems = 0;
    shoppingCartItems.forEach(
      (shoppingCartItem) => (priceOfAllItems += shoppingCartItem.price)
    );
    return priceOfAllItems;
  }

  onChangeShoppingCartItems(shoppingCartItems: ShoppingCartItem[]): void {
    this.shoppingCartItems = shoppingCartItems;
    this.priceOfAllItems = this.calculateSumOfAllItems(this.shoppingCartItems);
  }
}
