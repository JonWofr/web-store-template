import { CheckoutModule } from '@features/checkout/checkout.module';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { AddressProgressLevelComponent } from './address-progress-level.component';

export default {
  title: 'checkout/address-progress-level',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule],
    }),
  ],
};

export const defaultProps = () => ({
  component: AddressProgressLevelComponent,
  props: {
    clickContinueButton: action('Clicked the continue button'),
  },
});
