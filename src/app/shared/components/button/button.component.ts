import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Fluid = 'fluid',
}

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size: ButtonSize = ButtonSize.Medium;
  @Input() isDisabled = false;
  @Output() clickButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
