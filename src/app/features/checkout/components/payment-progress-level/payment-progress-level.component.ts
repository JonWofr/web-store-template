import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PaymentInformation } from '@features/checkout/models/payment-information.model';

@Component({
  selector: 'checkout-payment-progress-level',
  templateUrl: './payment-progress-level.component.html',
  styleUrls: ['./payment-progress-level.component.scss'],
})
export class PaymentProgressLevelComponent implements OnInit {
  @Output() clickContinueButton = new EventEmitter<void>();

  paymentInformationFormGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paymentInformationFormGroup = this.formBuilder.group({
      paymentMethod: [null, Validators.compose([Validators.required])],
    });
  }
}
