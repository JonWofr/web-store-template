import { action } from '@storybook/addon-actions';
import { InputStepperComponent } from './input-stepper.component';
import { moduleMetadata } from '@storybook/angular';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';

export default {
  title: 'Item Quantity Input Stepper',
  decorators: [
    moduleMetadata({
      imports: [AppModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
};

export const inititallyThree = () => ({
  component: InputStepperComponent,
  props: {
    quantity: 3,
    changeQuantity: action('Change Quantity'),
  },
});
