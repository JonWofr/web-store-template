import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RouterModule } from '@angular/router';
import { ShoppingCartItemsListComponent } from './shopping-cart-items-list.component';
import { AppModule } from '../../../app.module';

export default {
  title: 'Shopping Cart Items List',
  decorators: [
    moduleMetadata({
      imports: [AppModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
};

export const threeItems = () => ({
  component: ShoppingCartItemsListComponent,
  props: {
    shoppingCartItems: [
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
    ],
    changeShoppingCartItems: action('Changed the shopping cart items'),
  },
});
