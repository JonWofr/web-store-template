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
  @Input() paymentInformation?: PaymentInformation;
  @Output() clickContinueButton = new EventEmitter<void>();

  formGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      paymentMethod: [
        this.paymentInformation?.paymentMethod,
        Validators.compose([Validators.required]),
      ],
    });
  }
}
