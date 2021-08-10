import {WeatherData} from "../interfaces/weatherData";

import { createAction, props } from '@ngrx/store';

export const addGuess = createAction(
  '[App] Add guess',
  props<{ weather:  WeatherData}>()
);

export const indexOfGame = createAction(
  '[App] index of game'
);
