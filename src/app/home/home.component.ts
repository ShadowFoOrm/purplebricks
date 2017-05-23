import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Buyer } from './../models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('buyerDetails', [
      state('closed', style({
        height: 0
      })),
      transition('closed <=> opened', animate('300ms ease-in-out'))
    ])
  ]
})
export class HomeComponent {
  validatorState: boolean = false;
  buyerState: string = 'closed';
  newComments: boolean = false;
  newOfferValue: any;
  buyer: Buyer = new Buyer;

  toggle(): void {
    if (this.buyerState === 'closed') {
      this.buyerState = 'opened';
    } else {
      this.buyerState = 'closed';
    }
  }

  submit(): void {
    if (this.newOfferValue > 0 && this.newOfferValue != null && this.newOfferValue !== undefined) {
      const newOffer = parseInt(this.newOfferValue, 10);

      this.buyer.new_offer = newOffer;
      console.log(this.buyer);
    }
  }
}
