import { Component, OnInit, Input } from '@angular/core';
import { ButtonSize } from '../button/button.component';

@Component({
  selector: 'app-price-overview-card',
  templateUrl: './price-overview-card.component.html',
  styleUrls: ['./price-overview-card.component.scss'],
})
export class PriceOverviewCardComponent implements OnInit {
  @Input() priceOfAllItems = 0;
  @Input() shippingCosts = 3.99;

  ButtonSize = ButtonSize;

  constructor() {}

  ngOnInit(): void {}

  onClickCheckoutButton(): void {}
}
