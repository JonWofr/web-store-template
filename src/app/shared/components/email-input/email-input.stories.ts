import { EmailInputComponent } from './email-input.component';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
            <shared-email-input [formControlName]="formControlName">
            </shared-email-input>
            <div *ngIf="!(formGroup?.controls)['email'].valid && (formGroup?.controls)['email'].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    }),
    formControlName: 'email',
  },
});
