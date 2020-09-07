import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from '../../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-items-list',
  templateUrl: './shopping-cart-items-list.component.html',
  styleUrls: ['./shopping-cart-items-list.component.scss'],
})
export class ShoppingCartItemsListComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[] = [];
  @Output() changeShoppingCartItems = new EventEmitter<ShoppingCartItem[]>();

  constructor() {}

  ngOnInit(): void {}

  onClickRemoveShoppingCartItem(shoppingCartItem: ShoppingCartItem): void {
    this.shoppingCartItems = this.shoppingCartItems.filter(
      (item) => item.id !== shoppingCartItem.id
    );
    this.changeShoppingCartItems.emit(this.shoppingCartItems);
  }

  onChangeShoppingCartItem(shoppingCartItem: ShoppingCartItem): void {
    this.shoppingCartItems = this.shoppingCartItems.map((item) =>
      item.id !== shoppingCartItem.id ? item : shoppingCartItem
    );
    this.changeShoppingCartItems.emit(this.shoppingCartItems);
  }
}
