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
  buyerState: string = 'closed';
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
}
