import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-quantity-input-stepper',
  templateUrl: './item-quantity-input-stepper.component.html',
  styleUrls: ['./item-quantity-input-stepper.component.scss'],
})
export class ItemQuantityInputStepperComponent implements OnInit {
  @Input() quantity: number = 1;
  @Output() changeQuantity = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClickMinusButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    this.quantity--;

    this.changeQuantity.emit(this.quantity);
  }

  onClickPlusButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    this.quantity++;

    this.changeQuantity.emit(this.quantity);
  }
}
