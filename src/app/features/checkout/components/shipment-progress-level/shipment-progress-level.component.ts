import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'checkout-shipment-progress-level',
  templateUrl: './shipment-progress-level.component.html',
  styleUrls: ['./shipment-progress-level.component.scss'],
})
export class ShipmentProgressLevelComponent implements OnInit {
  @Output() clickContinueButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
