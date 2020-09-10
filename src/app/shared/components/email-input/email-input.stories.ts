import { EmailInputComponent } from './email-input.component';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { FormGroup, FormControl } from '@angular/forms';

export default {
  title: 'shared/email-input',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const defaultProps = () => ({
  component: EmailInputComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-email-input formControlName="email">
            </shared-email-input>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      email: new FormControl(null),
    }),
  },
});
