import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { ButtonComponent, ButtonSize } from './button.component';

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const small = () => ({
  component: ButtonComponent,
  template: `
    <shared-button [size]="size">
      Klick
    </shared-button>
  `,
  props: {
    size: ButtonSize.Small,
  },
});

export const medium = () => ({
  component: ButtonComponent,
  template: `
    <shared-button [size]="size">
      Klick
    </shared-button>
  `,
  props: {
    size: ButtonSize.Medium,
  },
});

export const large = () => ({
  component: ButtonComponent,
  template: `
    <shared-button [size]="size">
      Klick
    </shared-button>
  `,
  props: {
    size: ButtonSize.Large,
  },
});

export const fluid = () => ({
  component: ButtonComponent,
  template: `
    <shared-button [size]="size">
      Klick
    </shared-button>
  `,
  props: {
    size: ButtonSize.Fluid,
  },
});
