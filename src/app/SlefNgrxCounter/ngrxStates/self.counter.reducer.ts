import {createReducer, on} from "@ngrx/store";
import {decrement, increment2, reset} from "./self.counter.actions";

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment2, (state) => state + 1),
  on(decrement, (state) => state -1),
  on(reset, (state) => 0),
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
