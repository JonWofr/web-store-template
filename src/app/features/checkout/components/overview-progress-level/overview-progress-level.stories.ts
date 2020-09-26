import { CheckoutModule } from '@features/checkout/checkout.module';
import { moduleMetadata } from '@storybook/angular';
import { OverviewProgressLevelComponent } from './overview-progress-level.component';

export default {
  title: 'checkout/overview-progress-level',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule],
    }),
  ],
};

export const defaultProps = () => ({
  component: OverviewProgressLevelComponent,
  props: {
    emailInformation: {
      email: 'max-mustermann@mail.de',
    },
    addressInformation: {
      shippingAddressInformation: {
        title: 'Herr',
        name: {
          firstName: 'Max',
          lastName: 'Mustermann',
        },
        address: {
          street: 'Muster Str.',
          houseNumber: 1,
          addition: 'b',
          postCode: 11111,
          city: 'Musterstadt',
          country: 'Deutschland',
        },
      },
      billingAddressInformation: undefined,
    },
    paymentInformation: {
      paymentMethod: 'paypal',
    },
  },
});
