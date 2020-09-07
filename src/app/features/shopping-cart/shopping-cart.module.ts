import { NgModule } from '@angular/core';

// Components
import { PriceOverviewCardComponent } from './components/price-overview-card/price-overview-card.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartItemsListComponent } from './components/shopping-cart-items-list/shopping-cart-items-list.component';
import { ShoppingCartItemsListCardComponent } from './components/shopping-cart-items-list-card/shopping-cart-items-list-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PriceOverviewCardComponent,
    ShoppingCartItemComponent,
    ShoppingCartItemsListComponent,
    ShoppingCartItemsListCardComponent,
  ],
  imports: [SharedModule, CommonModule],
  exports: [
    PriceOverviewCardComponent,
    ShoppingCartItemComponent,
    ShoppingCartItemsListComponent,
    ShoppingCartItemsListCardComponent,
    SharedModule,
  ],
  providers: [],
})
export class ShoppingCartModule {}
