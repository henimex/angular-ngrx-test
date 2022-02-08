import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter/counter.component';
import {CounterOutputComponent} from './counter/counter-output/counter-output.component';
import {CounterButtonsComponent} from './counter/counter-buttons/counter-buttons.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./ngrxCounter/state/counter.reducer"; //v10
import { NewCounterComponent } from './ngrxCounter/new-counter/new-counter.component';
import { NewCounterButtonsComponent } from './ngrxCounter/new-counter-buttons/new-counter-buttons.component';
import { NewCounterOutputComponent } from './ngrxCounter/new-counter-output/new-counter-output.component';

import { ButtonsComponent } from './SlefNgrxCounter/buttons/buttons.component';
import { OutputComponent } from './SlefNgrxCounter/output/output.component';
import {ParentComponent} from "./SlefNgrxCounter/parent/parent.component";
import { NewCustomCounterInputComponent } from './ngrxCounter/new-custom-counter-input/new-custom-counter-input.component';
import {FormsModule} from "@angular/forms";
//import {counterReducer} from "./SlefNgrxCounter/ngrxStates/self.counter.reducer"; //v13


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    NewCounterComponent,
    NewCounterButtonsComponent,
    NewCounterOutputComponent,
    ParentComponent,
    ButtonsComponent,
    OutputComponent,
    NewCustomCounterInputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counterAppModule: counterReducer}),
    FormsModule,
    //Enable This For Version 10
    //StoreModule.forRoot({count: counterReducer}),       //Enable This For Version 13
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
