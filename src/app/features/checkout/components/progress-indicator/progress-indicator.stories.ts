import { ProgressIndicatorComponent } from './progress-indicator.component';
import { action } from '@storybook/addon-actions';
import { ProgressLevel } from '@features/checkout/enums/progress-level.enum';

export default {
  title: 'checkout/progress-indicator',
};

export const firstProgressLevel = () => ({
  component: ProgressIndicatorComponent,
  props: {
    currentProgressLevel: ProgressLevel.Email,
    highestReachedProgressLevel: ProgressLevel.Email,
    clickProgressLevelButton: action('Clicked a progress button'),
  },
});

export const secondProgressLevel = () => ({
  component: ProgressIndicatorComponent,
  props: {
    currentProgressLevel: ProgressLevel.Email,
    highestReachedProgressLevel: ProgressLevel.Address,
    clickProgressLevelButton: action('Clicked a progress button'),
  },
});
