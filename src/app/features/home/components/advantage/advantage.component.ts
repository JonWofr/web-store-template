import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss'],
})
export class AdvantageComponent implements OnInit {
  constructor() {}

  @Input() type?: Advantage = Advantage.Price;
  advantage = Advantage;

  ngOnInit(): void {}
}

enum Advantage {
  Return = 'Return',
  Price = 'Price',
  PlaceHolder = 'Placeholder',
}
