import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';
import { animateOnScrollWithDelay } from '@shared/animations/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  product1 = {
    id: '1',
    name: 'AI',
    title: 'Super Shuh 1',
    subTitle: 'Diesen Shuh möchtest du nie wieder ausziehen',
    brand: 'Nike',
    shortDescription:
      'Sit sint consequat fugiat non. Sint minim nisi veniam dolor fugiat cupidatat magna eu elit ad. Ex est est minim non anim mollit et dolore.',
    description:
      'Cupidatat sunt sit elit aute eu nisi quis ut dolore. Minim duis ipsum aute veniam. Aliqua sunt cillum ipsum minim elit laboris laborum. Eiusmod sint exercitation voluptate dolore proident esse ex excepteur. Ea tempor qui labore id consequat eu commodo. Voluptate duis consequat consequat veniam qui et mollit nostrud mollit. Cillum ipsum laboris incididunt nostrud proident sunt non ex anim reprehenderit sint ullamco veniam aute. Adipisicing ipsum aute irure velit ullamco cupidatat exercitation eu non cillum. Officia cupidatat nulla excepteur aliquip laboris non labore nostrud qui minim. Consectetur esse irure ullamco labore in excepteur sit sit. Commodo culpa nulla adipisicing deserunt sint qui nisi ipsum consequat enim. Ullamco est deserunt reprehenderit reprehenderit tempor do. Adipisicing ea deserunt fugiat ut aliquip sint in ut dolore enim. Aute ipsum amet quis irure laborum aliquip nisi. Ipsum tempor anim nisi eu magna velit sit ex nulla culpa labore ipsum proident commodo. Proident duis ullamco excepteur et pariatur ex sit Lorem pariatur. Consequat enim incididunt elit deserunt officia. Occaecat Lorem proident amet sint incididunt magna irure elit occaecat magna ullamco enim.',
    amountOnStock: 10,
    price: 49.99,
    discountedPrice: 39.99,
    reviews: [],
    keyFacts: [],
    inStockSinceInMs: 1595614940351,
    colors: ['gray', 'dark-gray'],
    thumbnailImageUrl: '/assets/images/example-product.png',
  };

  shoppingCartItems: ShoppingCartItem[] = [
    {
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
    },
    {
      id: '2',
      product: {
        id: '2',
        name: 'shirt-2',
        title: 'Tolles T-Shirt',
        subtitle: 'Da kann man sich nur drin wohlfühlen',
        shortDescription: 'lorem ipsum dolor sit amet constitutor',
        description:
          'lorem ipsum dolor sit amet constitutor lorem ipsum dolor sit amet constitutor lorem ipsum dolor sit amet constitutor',
        amountOnStock: 40,
        price: 24.99,
        reviews: [],
        keyFacts: [],
        inStockSinceInMs: 0,
        thumbnailImageUrl: 'assets/images/81PtikmVALL._AC_UY550_.jpg',
        previewImagesUrls: [
          'assets/images/81PtikmVALL._AC_UY550_.jpg',
          'assets/images/81Vxxwy9UlL._AC_UX522_.jpg',
        ],
        discountedPrice: 19.99,
      },
      quantity: 2,
      price: 49.98,
    },
    {
      id: '3',
      product: {
        id: '3',
        name: 'shirt-3',
        title: 'Super T-Shirt',
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
    },
    {
      id: '4',
      product: {
        id: '4',
        name: 'shirt-4',
        title: 'Spitze T-Shirt',
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
      quantity: 1,
      price: 49.98,
    },
  ];

  ngOnInit(): void {
    animateOnScrollWithDelay('animate__zoomIn', '.product');
  }
  onClickAddToShoppingCart(): void {
    let shoppingCartItems: ShoppingCartItem[] = [];

    if (localStorage.getItem('shoppingCartItems')) {
      shoppingCartItems = JSON.parse(
        localStorage.getItem('shoppingCartItems') || ''
      );
    }

    this.shoppingCartItems.forEach((shoppingCartItem) =>
      shoppingCartItems.push(shoppingCartItem)
    );

    localStorage.setItem(
      'shoppingCartItems',
      JSON.stringify(shoppingCartItems)
    );
  }
}
