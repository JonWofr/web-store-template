import { HttpClient } from '@angular/common/http';
import { ElementRef, Input, ViewChild, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod } from '@features/checkout/enums/payment-method.enum';
import { environment } from '../../../../../environments/environment';

declare var paypal: any;

@Component({
  selector: 'checkout-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss'],
})
export class PaymentButtonComponent implements OnInit {
  @Input() set selectedPaymentMethod(selectedPaymentMethod: PaymentMethod) {
    this._selectedPaymentMethod = selectedPaymentMethod;
  }
  get selectedPaymentMethod(): PaymentMethod {
    return this._selectedPaymentMethod;
  }
  @Input() createOrder?: () => {};
  @Input() onApprove?: (data: any, actions: any) => {};
  @Input() onCancel?: () => {};
  @Input() onError?: (err: any) => {};

  @ViewChild('paypalButtonContainer', { static: true })
  paypalButtonContainer?: ElementRef;
  @ViewChild('sepaButtonContainer', { static: true })
  sepaButtonContainer?: ElementRef;
  @ViewChild('sofortButtonContainer', { static: true })
  sofortButtonContainer?: ElementRef;
  @ViewChild('cardButtonContainer', { static: true })
  cardButtonContainer?: ElementRef;

  PaymentMethod = PaymentMethod;

  _selectedPaymentMethod: PaymentMethod = PaymentMethod.Paypal;

  ngOnInit(): void {
    this.renderPaymentButton(paypal.FUNDING.PAYPAL, this.paypalButtonContainer);
    this.renderPaymentButton(paypal.FUNDING.SEPA, this.sepaButtonContainer);
    this.renderPaymentButton(paypal.FUNDING.SOFORT, this.sofortButtonContainer);
    this.renderPaymentButton(paypal.FUNDING.CARD, this.cardButtonContainer);
  }

  renderPaymentButton(
    fundingSource: string,
    containerElement?: ElementRef
  ): void {
    paypal
      .Buttons({
        fundingSource,
        style: {
          color: 'white',
          label: 'pay',
        },
        createOrder: this.createOrder,
        onApprove: this.onApprove,
        onCancel: this.onCancel,
        onError: this.onError,
      })
      .render(containerElement?.nativeElement);
  }
}
