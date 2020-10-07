import { EmailProgressLevelComponent } from './email-progress-level.component';
import { moduleMetadata } from '@storybook/angular';
import { CheckoutModule } from '../../checkout.module';
import { action } from '@storybook/addon-actions';

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
  props: {
    clickContinueButton: action('Clicked the continue button'),
  },
});
