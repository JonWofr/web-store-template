import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RouterModule } from '@angular/router';
import { AppModule } from '../../../app.module';
import { ButtonComponent, ButtonSize } from './button.component';

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      imports: [AppModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
};

export const small = () => ({
  component: ButtonComponent,
  template: `
    <app-button [size]="size">
      Klick
    </app-button>
  `,
  props: {
    size: ButtonSize.Small,
  },
});

export const medium = () => ({
  component: ButtonComponent,
  template: `
    <app-button [size]="size">
      Klick
    </app-button>
  `,
  props: {
    size: ButtonSize.Medium,
  },
});

export const large = () => ({
  component: ButtonComponent,
  template: `
    <app-button [size]="size">
      Klick
    </app-button>
  `,
  props: {
    size: ButtonSize.Large,
  },
});

export const fluid = () => ({
  component: ButtonComponent,
  template: `
    <app-button [size]="size">
      Klick
    </app-button>
  `,
  props: {
    size: ButtonSize.Fluid,
  },
});
