import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from '../../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'shopping-cart-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[] = [];
  @Output() changeShoppingCartItems = new EventEmitter<ShoppingCartItem[]>();

  constructor() {}

  ngOnInit(): void {}

  onClickRemoveShoppingCartItem(shoppingCartItem: ShoppingCartItem): void {
    this.shoppingCartItems = this.shoppingCartItems.filter(
      (item) => item.id !== shoppingCartItem.id
    );
    this.changeShoppingCartItems.emit(this.shoppingCartItems);

    this.updateLocalStorageShoppingCartItems(this.shoppingCartItems);
  }

  updateLocalStorageShoppingCartItems(
    shoppingCartItems: ShoppingCartItem[]
  ): void {
    if (shoppingCartItems.length > 0) {
      localStorage.setItem(
        'shoppingCartItems',
        JSON.stringify(shoppingCartItems)
      );
    } else {
      localStorage.removeItem('shoppingCartItems');
    }
  }

  onChangeShoppingCartItem(shoppingCartItem: ShoppingCartItem): void {
    this.shoppingCartItems = this.shoppingCartItems.map((item) =>
      item.id !== shoppingCartItem.id ? item : shoppingCartItem
    );
    this.changeShoppingCartItems.emit(this.shoppingCartItems);

    this.updateLocalStorageShoppingCartItems(this.shoppingCartItems);
  }
}
