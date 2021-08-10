import {addGuess, indexOfGame} from "./guess.actions";
import {initialAppState} from "./state/app.state";
import {createReducer, on} from "@ngrx/store";

const appReducer = createReducer(
  initialAppState,
  on(addGuess, (state, { weather }) => ({
    ...state,
    guess: [...state.guess, weather]
  })),
  on(indexOfGame, (state) => {
    return {
      ...state,
      indexOfGuess: state.indexOfGuess + 1
    }
  })
);

export function guessReducer(state: any, action: any) {
  return appReducer(state, action);
}
