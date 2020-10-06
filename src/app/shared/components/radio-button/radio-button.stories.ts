import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

export default {
  title: 'shared/radio-button',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const unchecked = () => ({
  component: RadioButtonComponent,
  template: `
            <form [formGroup]="formGroup">
                <shared-radio-button [formControlName]="formControlName" [value]="value" [label]="label">
                </shared-radio-button>
            </form>
        `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl('no'),
    }),
    formControlName: 'isBored',
    value: 'yes',
    label: 'Ist dir langweilig?',
  },
});

export const checked = () => ({
  component: RadioButtonComponent,
  template: `
            <form [formGroup]="formGroup">
                <shared-radio-button [formControlName]="formControlName" [value]="value" [label]="label">
                </shared-radio-button>
            </form>
        `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl('yes'),
    }),
    formControlName: 'isBored',
    value: 'yes',
    label: 'Ist dir langweilig?',
  },
});

export const withoutLabel = () => ({
  component: RadioButtonComponent,
  template: `
              <form [formGroup]="formGroup">
                  <shared-radio-button [formControlName]="formControlName" [value]="value">
                  </shared-radio-button>
              </form>
          `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl('no'),
    }),
    formControlName: 'isBored',
    value: 'yes',
  },
});
