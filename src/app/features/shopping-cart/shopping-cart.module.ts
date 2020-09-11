import { NgModule } from '@angular/core';

// Components
import { PriceOverviewCardComponent } from './components/price-overview-card/price-overview-card.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsListCardComponent } from './components/items-list-card/items-list-card.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

const declarations = [
  PriceOverviewCardComponent,
  ItemComponent,
  ItemsListComponent,
  ItemsListCardComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule, CommonModule],
  exports: [declarations, SharedModule],
  providers: [],
})
export class ShoppingCartModule {}
