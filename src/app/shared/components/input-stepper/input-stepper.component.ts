import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-input-stepper',
  templateUrl: './input-stepper.component.html',
  styleUrls: ['./input-stepper.component.scss'],
})
export class InputStepperComponent implements OnInit {
  @Input() quantity: number = 1;
  @Output() changeQuantity: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClickMinusButton(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    this.quantity--;

    this.changeQuantity.emit(this.quantity);
  }

  onClickPlusButton(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    this.quantity++;

    this.changeQuantity.emit(this.quantity);
  }
}
