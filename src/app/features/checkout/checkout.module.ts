import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';

// Components
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';

const declarations = [ProgressIndicatorComponent];

@NgModule({
  declarations,
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class CheckoutModule {}
