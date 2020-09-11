import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { EmailProgressLevelComponent } from './components/email-progress-level/email-progress-level.component';

const declarations = [ProgressIndicatorComponent, EmailProgressLevelComponent];

@NgModule({
  declarations,
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [declarations],
  providers: [],
})
export class CheckoutModule {}
