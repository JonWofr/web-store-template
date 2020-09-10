import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'shared-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
  ],
})
export class EmailInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'max-mustermann@mail.de';

  value: string = '';
  propagateChange?: (value: string) => {};
  propagateBlur?: () => {};

  /**
   * A method that writes a new value from the form model into the view
   */
  writeValue(value: any): void {
    if (typeof value === 'string') {
      this.value = value;
    }
  }

  /**
   * A method that registers a handler that should be called when something in the view has changed
   */
  registerOnChange(propagateChangeFunction: (value: string) => {}): void {
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
  onChangeValue(value: string): void {
    if (this.propagateChange) {
      this.propagateChange(value);
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
