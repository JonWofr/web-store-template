import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'shared-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;
  @Input() hint?: string;

  elementId?: string;
  isChecked: boolean = false;
  propagateChange?: (value: boolean) => {};
  propagateBlur?: () => {};

  ngOnInit(): void {
    this.elementId = uuidv4();
  }

  /**
   * A method that writes a new value from the form model into the view
   */
  writeValue(value: any): void {
    if (typeof value === 'boolean') {
      this.isChecked = value;
    }
  }

  /**
   * A method that registers a handler that should be called when something in the view has changed
   */
  registerOnChange(propagateChangeFunction: (value: boolean) => {}): void {
    this.propagateChange = propagateChangeFunction;
  }

  /**
   * A method that registers a handler specifically for when a control receives a touch event
   */
  registerOnTouched(propagateBlurFunction: () => {}): void {
    this.propagateBlur = propagateBlurFunction;
  }

  /**
   * Is called when the input value of the underlying view is changed
   */
  onChangeValue(isChecked: boolean): void {
    if (this.propagateChange) {
      this.propagateChange(isChecked);
    }
  }

  /**
   * Is called when the input of the underlying view has been touched
   */
  onBlur(): void {
    if (this.propagateBlur) {
      this.propagateBlur();
    }
  }
}
