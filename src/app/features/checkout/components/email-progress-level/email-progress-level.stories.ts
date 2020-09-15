import { EmailProgressLevelComponent } from './email-progress-level.component';
import { moduleMetadata } from '@storybook/angular';
import { CheckoutModule } from '../../checkout.module';

export default {
  title: 'checkout/email-progress-level',
  decorators: [
    moduleMetadata({
      imports: [CheckoutModule],
    }),
  ],
};

export const defaultProps = () => ({
  component: EmailProgressLevelComponent,
  props: {},
});
