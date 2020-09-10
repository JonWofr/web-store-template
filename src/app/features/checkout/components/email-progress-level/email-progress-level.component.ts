import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'checkout-email-progress-level',
  templateUrl: './email-progress-level.component.html',
  styleUrls: ['./email-progress-level.component.scss'],
})
export class EmailProgressLevelComponent implements OnInit {
  formGroup?: FormGroup;
  email: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, Validators.required],
    });
  }

  continue(values: any): void {
    console.log(values);
    this.email = values.email;
  }
}
