import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-pallet',
  templateUrl: './color-pallet.component.html',
  styleUrls: ['./color-pallet.component.scss'],
})
export class ColorPalletComponent implements OnInit {
  @Input() colors: string[] = ['gray', 'blue', 'black', 'white'];

  constructor() {}

  ngOnInit(): void {}
}
