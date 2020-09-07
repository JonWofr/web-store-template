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

export const defaultProps = () => ({
  component: PriceOverviewCardComponent,
  props: {},
});
