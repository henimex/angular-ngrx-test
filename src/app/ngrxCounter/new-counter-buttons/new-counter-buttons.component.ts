import {Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement,  increment,  reset, } from "../state/counter.actions";
import {CounterState} from "../state/counter.state";

@Component({
  selector: 'app-new-counter-buttons',
  templateUrl: './new-counter-buttons.component.html',
  styleUrls: ['./new-counter-buttons.component.css']
})
export class NewCounterButtonsComponent implements OnInit {

  constructor(private store: Store<{counterAppModule: CounterState}>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment())
    //these definitions must be same in counter.actions.ts naming is important get some errors after rename actions like increment Action
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
