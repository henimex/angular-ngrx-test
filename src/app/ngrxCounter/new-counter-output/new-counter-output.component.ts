//After Refactor
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-new-counter-output',
  templateUrl: './new-counter-output.component.html',
  styleUrls: ['./new-counter-output.component.css']
})
export class NewCounterOutputComponent implements OnInit {

  // @ts-ignore
  counter$:Observable<{ counterModel:number }>

  constructor(private store: Store<{counterAppModule: CounterState}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counterAppModule');
  }
}


//Before Refactor

/*
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-new-counter-output',
  templateUrl: './new-counter-output.component.html',
  styleUrls: ['./new-counter-output.component.css']
})
export class NewCounterOutputComponent implements OnInit, OnDestroy {

  // @ts-ignore
  newCounter:number;

  // @ts-ignore
  counterSubscription:Subscription;

  // @ts-ignore
  counter$:Observable<{ counterModel:number }>

  constructor(private store: Store<{counterAppModule: CounterState}>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counterAppModule')
      .subscribe(data => {
        console.log(data)
      this.newCounter = data.counterModel
    });

    this.counter$ = this.store.select('counterAppModule');
  }

  ngOnDestroy(): void {
    console.log("OnDestroy")
    if (this.counterSubscription){
      this.counterSubscription.unsubscribe();
      console.log("in if")
    }
  }
}*/
