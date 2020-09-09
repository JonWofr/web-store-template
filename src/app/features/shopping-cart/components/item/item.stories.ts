import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ItemComponent } from './item.component';
import { ShoppingCartModule } from '../../shopping-cart.module';

export default {
  title: 'shopping-cart/item',
  decorators: [
    moduleMetadata({
      imports: [ShoppingCartModule],
    }),
  ],
};

export const wonderfulTShirt = () => ({
  component: ItemComponent,
  props: {
    shoppingCartItem: {
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
    clickRemove: action('Clicked the remove button'),
    changeShoppingCartItem: action('Changed the shopping cart item'),
  },
});
