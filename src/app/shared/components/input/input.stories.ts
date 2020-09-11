import { InputComponent, InputType } from './input.component';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export default {
  title: 'shared/input',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const typeText = () => ({
  component: InputComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-input [formControlName]="formControlName" [type]="type" [label]="label" [placeholder]="placeholder">
            </shared-input>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      text: new FormControl(null, Validators.required),
    }),
    formControlName: 'text',
    type: InputType.Text,
    label: 'Name',
    placeholder: 'Max Mustermann',
  },
});

export const typeEmail = () => ({
  component: InputComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-input [formControlName]="formControlName" [type]="type" [label]="label" [placeholder]="placeholder">
            </shared-input>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      email: new FormControl(null, Validators.required),
    }),
    formControlName: 'email',
    type: InputType.Email,
    label: 'Email',
    placeholder: 'max-mustermann@mail.de',
  },
});

export const typePassword = () => ({
  component: InputComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-input [formControlName]="formControlName" [type]="type" [label]="label">
            </shared-input>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      password: new FormControl(null, Validators.required),
    }),
    formControlName: 'password',
    type: InputType.Password,
    label: 'Passwort',
  },
});

export const typeNumber = () => ({
  component: InputComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-input [formControlName]="formControlName" [type]="type" [label]="label" [placeholder]="placeholder">
            </shared-input>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      number: new FormControl(null, Validators.required),
    }),
    formControlName: 'number',
    type: InputType.Number,
    label: 'Alter',
    placeholder: '18',
  },
});
