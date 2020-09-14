import { FormControl, FormGroup, Validators } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'shared/checkbox',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const unchecked = () => ({
  component: CheckboxComponent,
  template: `
          <form [formGroup]="formGroup">
              <shared-checkbox [formControlName]="formControlName" [label]="label">
              </shared-checkbox>
          </form>
      `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl(),
    }),
    formControlName: 'isBored',
    label: 'Ist dir langweilig?',
  },
});

export const checked = () => ({
  component: CheckboxComponent,
  template: `
          <form [formGroup]="formGroup">
              <shared-checkbox [formControlName]="formControlName" [label]="label">
              </shared-checkbox>
          </form>
      `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl(true),
    }),
    formControlName: 'isBored',
    label: 'Ist dir langweilig?',
  },
});

export const withHint = () => ({
  component: CheckboxComponent,
  template: `
          <form [formGroup]="formGroup">
              <shared-checkbox [formControlName]="formControlName" [label]="label" [hint]="hint">
              </shared-checkbox>
          </form>
      `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl(true),
    }),
    formControlName: 'isBored',
    label: 'Ist dir langweilig?',
    hint: 'Du kannst ruhig ehrlich sein',
  },
});

export const disabled = () => ({
  component: CheckboxComponent,
  template: `
          <form [formGroup]="formGroup">
              <shared-checkbox [formControlName]="formControlName" [label]="label" [isDisabled]="isDisabled">
              </shared-checkbox>
          </form>
      `,
  props: {
    formGroup: new FormGroup({
      isBored: new FormControl(true),
    }),
    formControlName: 'isBored',
    label: 'Ist dir langweilig?',
    isDisabled: true,
  },
});
