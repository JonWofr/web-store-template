import { CheckoutModule } from '@features/checkout/checkout.module';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ShipmentProgressLevelComponent } from './shipment-progress-level.component';

export default {
  title: 'checkout/shipment-progress-level',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule],
    }),
  ],
};

export const defaultProps = () => ({
  component: ShipmentProgressLevelComponent,
  props: {
    clickContinueButton: action('Clicked the continue button'),
  },
});
