import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartItem } from '../../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-items-list-card',
  templateUrl: './shopping-cart-items-list-card.component.html',
  styleUrls: ['./shopping-cart-items-list-card.component.scss'],
})
export class ShoppingCartItemsListCardComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
