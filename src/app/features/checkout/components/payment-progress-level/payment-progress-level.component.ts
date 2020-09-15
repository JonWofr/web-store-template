import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'checkout-payment-progress-level',
  templateUrl: './payment-progress-level.component.html',
  styleUrls: ['./payment-progress-level.component.scss'],
})
export class PaymentProgressLevelComponent implements OnInit {
  @Output() clickContinueButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
