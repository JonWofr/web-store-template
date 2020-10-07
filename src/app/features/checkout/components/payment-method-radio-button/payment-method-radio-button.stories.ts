import { FormControl, FormGroup } from '@angular/forms';
import { CheckoutModule } from '@features/checkout/checkout.module';
import { moduleMetadata } from '@storybook/angular';
import { PaymentMethodRadioButtonComponent } from './payment-method-radio-button.component';

export default {
  title: 'checkout/payment-method-radio-button',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule],
    }),
  ],
};

export const unchecked = () => ({
  component: PaymentMethodRadioButtonComponent,
  template: `
            <form [formGroup]="formGroup">
                <checkout-payment-method-radio-button [formControlName]="formControlName" [value]="value" [logoUrl]="logoUrl">
                </checkout-payment-method-radio-button>
            </form>
        `,
  props: {
    formGroup: new FormGroup({
      paymentMethod: new FormControl('sepa'),
    }),
    formControlName: 'paymentMethod',
    value: 'paypal',
    logoUrl: 'assets/images/paypal-logo.png',
  },
});

export const checked = () => ({
  component: PaymentMethodRadioButtonComponent,
  template: `
            <form [formGroup]="formGroup">
                <checkout-payment-method-radio-button [formControlName]="formControlName" [value]="value" [logoUrl]="logoUrl">
                </checkout-payment-method-radio-button>
            </form>
        `,
  props: {
    formGroup: new FormGroup({
      paymentMethod: new FormControl('paypal'),
    }),
    formControlName: 'paymentMethod',
    value: 'paypal',
    logoUrl: 'assets/images/paypal-logo.png',
  },
});
