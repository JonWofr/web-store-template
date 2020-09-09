import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  /**strings as hex e.g.: #007bff */
  @Input() colors: string[] = ['red', 'green', 'blue'];

  constructor() {}

  isHovering = false;

  ngOnInit(): void {}
}
