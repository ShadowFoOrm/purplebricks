import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  newOfferValue: number;

  toggle(): void {
    if (this.buyerState === 'closed') {
      this.buyerState = 'opened';
    } else {
      this.buyerState = 'closed';
    }
  }

  newOffer(): void {
    if (this.newOfferValue > 0 && this.newOfferValue != null && this.newOfferValue !== undefined) {
      const offer = this.newOfferValue.toFixed(0);
      console.log(offer);

      // const myData = new Object();
      // myData.offer = this.newOfferValue.toFixed(0);
      // console.log(myData);
    }
  }
}

// interface myData {
//   offer: any;
// }
