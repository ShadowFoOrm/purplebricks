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
export class HomeComponent implements OnInit {
  validatorState: boolean = false;
  buyerState: string = 'closed';
  newComments: boolean = false;
  newOfferValue: number;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    if (this.buyerState === 'closed') {
      this.buyerState = 'opened';
    } else {
      this.buyerState = 'closed';
    }
  }

  newOffer(): void {
    var offersDetails = new Object();
    offersDetails = this.newOfferValue;

    console.log(offersDetails);
  }

  validateNumber(): void {
    this.newOfferValue;
  }
}
