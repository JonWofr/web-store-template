import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailInformation } from '@features/checkout/models/email-information.model';
import { ButtonSize } from '@shared/enums/button-size.enum';
import { InputType } from '@shared/enums/input-type.enum';

@Component({
  selector: 'checkout-email-progress-level',
  templateUrl: './email-progress-level.component.html',
  styleUrls: ['./email-progress-level.component.scss'],
})
export class EmailProgressLevelComponent implements OnInit {
  @Output() clickContinueButton = new EventEmitter<EmailInformation>();

  emailInformationFormGroup?: FormGroup;

  InputType = InputType;
  Object = Object;
  ButtonSize = ButtonSize;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.emailInformationFormGroup = this.formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }
}
