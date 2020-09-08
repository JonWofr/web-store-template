import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ShoppingCartItem } from '../../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'shopping-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
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
