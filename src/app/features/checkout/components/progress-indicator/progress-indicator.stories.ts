import { ProgressIndicatorComponent } from './progress-indicator.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'checkout/progress-indicator',
};

export const firstProgressLevel = () => ({
  component: ProgressIndicatorComponent,
  props: {
    currentProgressLevel: 1,
    highestReachedProgressLevel: 1,
    clickProgressLevelButton: action('Clicked a progress button'),
  },
});

export const secondProgressLevel = () => ({
  component: ProgressIndicatorComponent,
  props: {
    currentProgressLevel: 1,
    highestReachedProgressLevel: 2,
    clickProgressLevelButton: action('Clicked a progress button'),
  },
});
