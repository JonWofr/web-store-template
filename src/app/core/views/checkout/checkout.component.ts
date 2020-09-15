import { Component, OnInit } from '@angular/core';
import { ProgressLevel } from '@features/checkout/enums/progress-level.enum';
import { AddressInformation } from '@features/checkout/models/address-information.model';
import { EmailInformation } from '@features/checkout/models/email-information.model';

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

  emailInformation?: EmailInformation;
  addressInformation?: AddressInformation;

  ProgressLevel = ProgressLevel;

  constructor() {}

  ngOnInit(): void {}

  onClickProgressIndicatorProgressLevelButton(
    newProgressLevel: ProgressLevel
  ): void {
    this.currentProgressLevel = newProgressLevel;
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
    console.log('clicked address level progress button');
    this.addressInformation = addressInformation;
    this.increaseProgressLevel(ProgressLevel.Shipment);
    console.log('current progress level', this.currentProgressLevel);
  }

  onClickShipmentProgressLevelContinueButton(): void {
    this.increaseProgressLevel(ProgressLevel.Payment);
  }

  onClickPaymentProgressLevelContinueButton(): void {
    this.increaseProgressLevel(ProgressLevel.Overview);
  }

  increaseProgressLevel(newProgressLevel: ProgressLevel): void {
    this.currentProgressLevel = newProgressLevel;
  }
}
