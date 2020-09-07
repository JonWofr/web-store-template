import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shoppingCartItem: ShoppingCartItem = {
    id: '1',
    product: {
      id: '1',
      name: 'shirt-1',
      title: 'Wunderbares T-Shirt',
      subtitle: 'Da kann man sich nur drin wohlfühlen',
      shortDescription: 'lorem ipsum dolor sit amet constitutor',
      description:
        'lorem ipsum dolor sit amet constitutor lorem ipsum dolor sit amet constitutor lorem ipsum dolor sit amet constitutor',
      amountOnStock: 40,
      price: 24.99,
      reviews: [],
      keyFacts: [],
      inStockSinceInMs: 0,
      thumbnailImageUrl: 'assets/images/81c1CIYeVQL._AC_UX522_.jpg',
      previewImagesUrls: [
        'assets/images/81PtikmVALL._AC_UY550_.jpg',
        'assets/images/81Vxxwy9UlL._AC_UX522_.jpg',
      ],
      discountedPrice: 19.99,
    },
    quantity: 2,
    price: 49.98,
  };

  constructor() {}

  ngOnInit(): void {}

  onClickAddToShoppingCart(): void {
    let shoppingCartItems: ShoppingCartItem[] = [];

    if (localStorage.getItem('shoppingCartItems')) {
      shoppingCartItems = JSON.parse(
        localStorage.getItem('shoppingCartItems') || ''
      );
    }

    shoppingCartItems.push(this.shoppingCartItem);
    localStorage.setItem(
      'shoppingCartItems',
      JSON.stringify(shoppingCartItems)
    );
  }
}
