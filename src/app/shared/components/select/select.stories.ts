import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'shared/select',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const threeOptions = () => ({
  component: SelectComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-select [formControlName]="formControlName" [label]="label" [options]="options" [placeholder]="placeholder">
            </shared-select>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      select: new FormControl(null, Validators.required),
    }),
    formControlName: 'select',
    label: 'Farbe',
    options: [
      {
        label: 'Rot',
        value: 'red',
      },
      {
        label: 'Grün',
        value: 'green',
      },
      {
        label: 'Blau',
        value: 'blue',
      },
    ],
    placeholder: 'Auswahl...',
  },
});

export const withHint = () => ({
  component: SelectComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-select [formControlName]="formControlName" [label]="label" [options]="options" [placeholder]="placeholder" [hint]="hint">
            </shared-select>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      select: new FormControl(null, Validators.required),
    }),
    formControlName: 'select',
    label: 'Farbe',
    options: [
      {
        label: 'Rot',
        value: 'red',
      },
      {
        label: 'Grün',
        value: 'green',
      },
      {
        label: 'Blau',
        value: 'blue',
      },
    ],
    placeholder: 'Auswahl...',
    hint: 'Der Filter beeinträchtig nicht ihre Sehfähigkeit',
  },
});

export const disabled = () => ({
  component: SelectComponent,
  template: `
        <form [formGroup]="formGroup">
            <shared-select [formControlName]="formControlName" [label]="label" [options]="options" [placeholder]="placeholder" [isDisabled]="isDisabled">
            </shared-select>
            <div *ngIf="!(formGroup?.controls)[formControlName].valid && (formGroup?.controls)[formControlName].touched" class="alert alert-warning">
              Eingabe ist ungültig!
            </div>
        </form>
    `,
  props: {
    formGroup: new FormGroup({
      select: new FormControl(null, Validators.required),
    }),
    formControlName: 'select',
    label: 'Farbe',
    options: [
      {
        label: 'Rot',
        value: 'red',
      },
      {
        label: 'Grün',
        value: 'green',
      },
      {
        label: 'Blau',
        value: 'blue',
      },
    ],
    placeholder: 'Auswahl...',
    isDisabled: true,
  },
});
