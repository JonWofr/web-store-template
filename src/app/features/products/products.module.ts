import { NgModule, Component } from '@angular/core';

// Components
import { ProductComponent } from './components/product/product.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

const declarations = [ProductComponent];

@NgModule({
  declarations,
  imports: [SharedModule, CommonModule],
  exports: [declarations, SharedModule],
  providers: [],
})
export class ProductModule {}
