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
  @Input() emailInformation?: EmailInformation;
  @Output() clickContinueButton = new EventEmitter<EmailInformation>();

  formGroup?: FormGroup;

  InputType = InputType;
  Object = Object;
  ButtonSize = ButtonSize;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [
        this.emailInformation?.email,
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }
}
