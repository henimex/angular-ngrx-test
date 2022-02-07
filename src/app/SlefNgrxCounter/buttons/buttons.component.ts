import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {increment2,decrement,reset} from "../ngrxStates/self.counter.actions";


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private store: Store<{count:number}>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment2());
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }

}
