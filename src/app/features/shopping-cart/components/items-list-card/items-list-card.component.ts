import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from '../../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'shopping-cart-items-list-card',
  templateUrl: './items-list-card.component.html',
  styleUrls: ['./items-list-card.component.scss'],
})
export class ItemsListCardComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[] = [];
  @Output() changeShoppingCartItems = new EventEmitter<ShoppingCartItem[]>();

  constructor() {}

  ngOnInit(): void {}
}
