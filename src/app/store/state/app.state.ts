import {WeatherData} from "../../interfaces/weatherData";

export interface AppState {
  indexOfGuess: number;
  guess: WeatherData[];

}

export const initialAppState: AppState = {
  guess: [],
  indexOfGuess: 0
};
