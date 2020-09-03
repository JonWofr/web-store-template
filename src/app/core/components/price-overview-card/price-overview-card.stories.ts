import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RouterModule } from '@angular/router';
import { PriceOverviewCardComponent } from './price-overview-card.component';
import { AppModule } from '../../../app.module';

export default {
  title: 'Price Overview Card',
  decorators: [
    moduleMetadata({
      imports: [AppModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
};

export const defaultProps = () => ({
  component: PriceOverviewCardComponent,
  props: {},
});
