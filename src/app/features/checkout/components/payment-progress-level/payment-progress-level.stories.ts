import { CheckoutModule } from '@features/checkout/checkout.module';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { PaymentProgressLevelComponent } from './payment-progress-level.component';

export default {
  title: 'checkout/payment-progress-level',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule],
    }),
  ],
};

export const defaultProps = () => ({
  component: PaymentProgressLevelComponent,
  props: {
    clickContinueButton: action('Clicked the continue button'),
  },
});
