import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-pallet',
  templateUrl: './color-pallet.component.html',
  styleUrls: ['./color-pallet.component.scss'],
})
export class ColorPalletComponent implements OnInit {
  @Input() colors: string[] = [
    'gray',
    'blue',
    'black',
    'hsl(0, 0%, 20%)',
    'white',
  ];
  selectedColor = 'gray';

  constructor() {}

  ngOnInit(): void {}
}
