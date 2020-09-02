import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() shoppingCartItem?: ShoppingCartItem;
  @Output() clickRemove = new EventEmitter<void>();
  @Output() changeShoppingCartItem = new EventEmitter<ShoppingCartItem>();

  constructor() {}

  ngOnInit(): void {}

  onChangeQuantity(quantity: number): void {
    if (this.shoppingCartItem) {
      this.shoppingCartItem.quantity = quantity;
      this.shoppingCartItem.price =
        this.shoppingCartItem.product.price * this.shoppingCartItem.quantity;
      this.changeShoppingCartItem.emit(this.shoppingCartItem);
    }
  }
}
