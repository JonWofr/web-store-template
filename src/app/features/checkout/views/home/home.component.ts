import { Component, OnInit } from '@angular/core';
import { ProgressLevel } from '../../enums/progress-level.enum';
import { AddressInformation } from '../../models/address-information.model';
import { EmailInformation } from '../../models/email-information.model';
import { PaymentInformation } from '../../models/payment-information.model';
import Swiper from 'swiper';

@Component({
  selector: 'checkout-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  get currentProgressLevel(): ProgressLevel {
    return this._currentProgressLevel;
  }
  set currentProgressLevel(currentProgressLevel: ProgressLevel) {
    this._currentProgressLevel = currentProgressLevel;
    if (this.currentProgressLevel > this.highestReachedProgressLevel) {
      this.highestReachedProgressLevel = this.currentProgressLevel;
    }
  }
  private _currentProgressLevel: ProgressLevel = ProgressLevel.Email;
  highestReachedProgressLevel: ProgressLevel = ProgressLevel.Email;
  swiper?: Swiper;

  emailInformation?: EmailInformation;
  addressInformation?: AddressInformation;
  paymentInformation?: PaymentInformation;

  isShippingAddressMatchingBillingAddress: boolean = true;

  ProgressLevel = ProgressLevel;

  constructor() {}

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      spaceBetween: 100,
      allowTouchMove: false,
    });
  }

  onClickProgressIndicatorProgressLevelButton(
    newProgressLevel: ProgressLevel
  ): void {
    this.currentProgressLevel = newProgressLevel;
    this.swiper?.slideTo(newProgressLevel - 1);
  }

  onClickEmailProgressLevelContinueButton(
    emailInformation: EmailInformation
  ): void {
    this.emailInformation = emailInformation;
    this.increaseProgressLevel(ProgressLevel.Address);
  }

  onClickAddressProgressLevelContinueButton(
    addressInformation: AddressInformation
  ): void {
    this.addressInformation = addressInformation;
    this.increaseProgressLevel(ProgressLevel.Shipment);
  }

  onClickShipmentProgressLevelContinueButton(): void {
    this.increaseProgressLevel(ProgressLevel.Payment);
  }

  onClickPaymentProgressLevelContinueButton(
    paymentInformation: PaymentInformation
  ): void {
    this.paymentInformation = paymentInformation;
    this.increaseProgressLevel(ProgressLevel.Overview);
  }

  increaseProgressLevel(newProgressLevel: ProgressLevel): void {
    this.currentProgressLevel = newProgressLevel;
    this.swiper?.slideNext();
  }

  onChangeShippingAddressMatchingBillingAddressCheckbox(
    isShippingAddressMatchingBillingAddress: boolean
  ): void {
    this.isShippingAddressMatchingBillingAddress = isShippingAddressMatchingBillingAddress;
  }
}
