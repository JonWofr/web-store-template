import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputType } from '@shared/enums/input-type.enum';

@Component({
  selector: 'checkout-email-progress-level',
  templateUrl: './email-progress-level.component.html',
  styleUrls: ['./email-progress-level.component.scss'],
})
export class EmailProgressLevelComponent implements OnInit {
  formGroup?: FormGroup;
  email: string = '';

  InputType = InputType;
  Object = Object;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
    console.log(this.formGroup);
  }

  onSubmit(value: { email: string }): void {
    console.log(value);
  }
}
