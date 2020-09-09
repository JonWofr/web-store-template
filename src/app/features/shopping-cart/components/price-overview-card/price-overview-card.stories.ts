import { moduleMetadata } from '@storybook/angular';
import { PriceOverviewCardComponent } from './price-overview-card.component';
import { ShoppingCartModule } from '../../shopping-cart.module';

export default {
  title: 'shopping-cart/price-overview-card',
  decorators: [
    moduleMetadata({
      imports: [ShoppingCartModule],
    }),
  ],
};

export const noPrice = () => ({
  component: PriceOverviewCardComponent,
  props: {},
});

export const noShippingCosts = () => ({
  component: PriceOverviewCardComponent,
  props: {
    priceOfAllItems: 19.99,
    shippingCosts: 0,
  },
});
