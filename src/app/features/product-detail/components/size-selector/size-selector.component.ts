import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
})
export class SizeSelectorComponent implements OnInit {
  sizes: string[] = ['S', 'M', 'L', 'XL'];

  constructor() {}

  ngOnInit(): void {}
}
