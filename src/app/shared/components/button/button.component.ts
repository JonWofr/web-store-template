import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ButtonSize } from '@shared/enums/button-size.enum';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size: ButtonSize = ButtonSize.Medium;
  @Input() isDisabled: boolean = false;
  @Input() type: string = 'button';
  @Output() clickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
