import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ButtonComponent } from './components/button/button.component';
import { InputStepperComponent } from './components/input-stepper/input-stepper.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectComponent } from './components/select/select.component';

const declarations = [
  ButtonComponent,
  InputStepperComponent,
  InputComponent,
  CheckboxComponent,
  SelectComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [declarations, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
