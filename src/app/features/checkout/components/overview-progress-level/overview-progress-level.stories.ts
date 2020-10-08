import { RouterModule } from '@angular/router';
import { CheckoutModule } from '@features/checkout/checkout.module';
import { PaymentMethod } from '@features/checkout/enums/payment-method.enum';
import { moduleMetadata } from '@storybook/angular';
import { OverviewProgressLevelComponent } from './overview-progress-level.component';

export default {
  title: 'checkout/overview-progress-level',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
};

export const defaultProps = () => ({
  component: OverviewProgressLevelComponent,
  props: {
    isShippingAddressMatchingBillingAddress: true,
    emailInformation: {
      email: 'max-mustermann@mail.de',
    },
    addressInformation: {
      shippingAddressInformation: {
        name: {
          title: 'Herr',
          firstName: 'Max',
          lastName: 'Mustermann',
        },
        address: {
          street: 'Muster Str.',
          houseNumber: '1',
          addition: 'b',
          postCode: '11111',
          city: 'Musterstadt',
          country: 'Deutschland',
        },
      },
      billingAddressInformation: {
        name: {
          title: 'Herr',
          firstName: 'Max',
          lastName: 'Mustermann',
        },
        address: {
          street: 'Muster Str.',
          houseNumber: '1',
          addition: 'b',
          postCode: '11111',
          city: 'Musterstadt',
          country: 'Deutschland',
        },
      },
    },
    paymentInformation: {
      paymentMethod: PaymentMethod.Paypal,
    },
  },
});
