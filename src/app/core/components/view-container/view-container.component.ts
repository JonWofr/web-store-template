import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  @Input() shouldBeFullscreen = false;
  @Input() shouldBeFullWidth = false;

  constructor() {}

  ngOnInit(): void {}
}
