import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {customIncrement} from "../state/counter.actions";

@Component({
  selector: 'app-new-custom-counter-input',
  templateUrl: './new-custom-counter-input.component.html',
  styleUrls: ['./new-custom-counter-input.component.css']
})
export class NewCustomCounterInputComponent implements OnInit {

  inputValue: number = 0;

  constructor(private store: Store<{ counterAppModel: CounterState }>) {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customIncrement({valueAction: this.inputValue}))

    //this.store.dispatch(customIncrement({valueAction: +this.inputValue}))
    //html input is text but if you need to math process you could use this little + before last value.
  }
}
