import { moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';
import { ShoppingCartItemComponent } from './shopping-cart-item.component';
import { AppModule } from '../../../app.module';

export default {
  title: 'Shopping Cart Item',
  decorators: [
    moduleMetadata({
      imports: [AppModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
};

export const defaultProps = () => ({
  component: ShoppingCartItemComponent,
  props: {
    product: {
      id: '1',
      name: 'shirt-1',
      title: 'Wunderbares T-Shirt',
      subTitle: 'Da kann man sich nur drin wohlfühlen',
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
  },
});
