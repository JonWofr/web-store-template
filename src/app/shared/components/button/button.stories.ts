import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { ButtonComponent } from './button.component';
import { ButtonSize } from '@shared/enums/button-size.enum';

export default {
  title: 'shared/button',
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

export const disabled = () => ({
  component: ButtonComponent,
  template: `
    <shared-button [isDisabled]="isDisabled">
      Klick
    </shared-button>
  `,
  props: {
    isDisabled: true,
  },
});
