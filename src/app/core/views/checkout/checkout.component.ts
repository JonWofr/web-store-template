import { Component, OnInit } from '@angular/core';
import { ProgressLevel } from '@features/checkout/enums/progress-level.enum';
import { AddressInformation } from '@features/checkout/models/address-information.model';
import { EmailInformation } from '@features/checkout/models/email-information.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
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
    console.log(this.addressInformation);
    this.increaseProgressLevel(ProgressLevel.Shipment);
  }

  onClickShipmentProgressLevelContinueButton(): void {
    this.increaseProgressLevel(ProgressLevel.Payment);
  }

  onClickPaymentProgressLevelContinueButton(): void {
    this.increaseProgressLevel(ProgressLevel.Overview);
  }

  increaseProgressLevel(newProgressLevel: ProgressLevel): void {
    this.currentProgressLevel = newProgressLevel;
    this.swiper?.slideNext();
  }
}
