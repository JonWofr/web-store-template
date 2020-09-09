import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum ProgressLevel {
  Email = 1,
  Address = 2,
  Shipment = 3,
  Payment = 4,
  Overview = 5,
}

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent implements OnInit {
  @Input() currentProgressLevel: ProgressLevel = ProgressLevel.Email;
  @Input() highestReachedProgressLevel: ProgressLevel = ProgressLevel.Email;
  @Output() clickProgressLevelButton = new EventEmitter<ProgressLevel>();

  ProgressLevel = ProgressLevel;

  constructor() {}

  ngOnInit(): void {}
}
