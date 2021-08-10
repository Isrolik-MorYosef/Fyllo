import {Component, OnInit} from '@angular/core';
import {WeatherData} from "../../interfaces/weatherData";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/state/app.state";
import {Observable} from "rxjs";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  weatherGuess$: Observable<WeatherData[]> = new Observable<WeatherData[]>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.weatherGuess$ = this.store.pipe(select('guess'), pluck('guess'));
  }
}
