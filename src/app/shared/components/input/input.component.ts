import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '@shared/enums/input-type.enum';
import { v4 as uuidv4 } from 'uuid';

/**
 * This component can be used for more than just a text input. It also supports inputs of all types mentioned in the enum {@link InputType}
 */
@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() type: InputType = InputType.Text;
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() label?: string;
  @Input() hint?: string;

  elementId?: string;
  value: string = '';
  propagateChange?: (value: string) => {};
  propagateBlur?: () => {};

  ngOnInit(): void {
    this.elementId = uuidv4();
  }

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
