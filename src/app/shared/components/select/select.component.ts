import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '@shared/models/select-option.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
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
   * Is called when the select value of the underlying view is changed
   */
  onChangeValue(value: string): void {
    if (this.propagateChange) {
      this.propagateChange(value);
    }
  }

  /**
   * Is called when the select of the underlying view has been touched
   */
  onBlur(): void {
    if (this.propagateBlur) {
      this.propagateBlur();
    }
  }
}
