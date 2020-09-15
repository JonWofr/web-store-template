import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgressLevel } from '@features/checkout/enums/progress-level.enum';

@Component({
  selector: 'checkout-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent implements OnInit {
  @Input() currentProgressLevel: ProgressLevel = ProgressLevel.Email;
  @Input() highestReachedProgressLevel: ProgressLevel = ProgressLevel.Email;
  @Output() clickProgressLevelButton: EventEmitter<
    ProgressLevel
  > = new EventEmitter<ProgressLevel>();

  ProgressLevel = ProgressLevel;

  constructor() {}

  ngOnInit(): void {}
}
