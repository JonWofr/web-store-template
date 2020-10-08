import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { ApiCreateOrderRequestBody } from '../../models/api-create-order-request-body';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  createOrder = async (
    createOrderBody: ApiCreateOrderRequestBody
  ): Promise<any> => {
    try {
      const result: any = await this.httpClient
        .post(`${environment.apiUrl}/payments/create-order`, createOrderBody)
        .toPromise();
      return result.orderID;
    } catch (err) {
      console.error('An error occurred trying to create the order.', err);
    }
  };

  onApprove = async (data: any, actions: any): Promise<any> => {
    try {
      const result: any = await this.httpClient
        .post(`${environment.apiUrl}/payments/capture-order`, {
          orderID: data.orderID,
        })
        .toPromise();
      console.log(result);
      // Error handler for funding failures using paymentmethod 'paypal' (e.g. the transaction exceeds the limit)
      if (result?.error === 'INSTRUMENT_DECLINED') {
        console.warn('A funding error occurred trying to capture the payment.');
        return actions.restart();
      } else {
        console.log(
          'Successfully captured payment. About to redirect to payment-success'
        );
        this.router.navigateByUrl('checkout/payment-success');
      }
    } catch (err) {
      console.error(
        'An error occurred trying to capture the payment. About to redirect to payment-failure.',
        err
      );
      this.router.navigateByUrl('checkout/payment-failure');
    }
  };

  /**
   * Error handler for when the user closes the popup or cancels the payment
   */
  onCancel = async (): Promise<void> => {
    console.warn('Canceled payment. About to redirect to payment-failure');

    this.router.navigateByUrl('checkout/payment-failure');
  };

  /**
   * Error handler for when no specific error handler could be called
   */
  onError = async (err: any): Promise<void> => {
    console.error(
      'An unidentified error occurred. About to redirect to payment-failure.',
      err
    );
    this.router.navigateByUrl('checkout/payment-failure');
  };
}
