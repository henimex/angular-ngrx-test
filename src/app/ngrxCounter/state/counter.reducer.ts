/*
//New Version 13..

import {createReducer, on} from "@ngrx/store";
import {decrement, increment, reset} from "./counter.actions";

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment,(state) => state +1),
  on(decrement,(state) => state -1),
  on(reset,(state) => 0),
);

export function counterReducer(state:any,action:any){
  return _counterReducer(state,action);
}
*/

//Old Version 10..

import {createReducer, on} from "@ngrx/store";
import {decrement, increment, reset} from "./counter.actions";
import {initialState} from "./counter.state";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counterModel: state.counterModel + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counterModel: state.counterModel - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counterModel: 0
    }
  })
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action)
}
