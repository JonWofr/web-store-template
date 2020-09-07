import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';

// Components
import { ButtonComponent } from './components/button/button.component';
import { InputStepperComponent } from './components/input-stepper/input-stepper.component';

@NgModule({
  declarations: [ButtonComponent, InputStepperComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, InputStepperComponent],
  providers: [],
})
export class SharedModule {}
