import {Component, OnInit} from '@angular/core';
import {FetcherService} from "../../services/fetcher.service";
import {WeatherData} from "../../interfaces/weatherData";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/state/app.state";
import {addGuess, indexOfGame} from "../../store/guess.actions";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-guessing-area',
  templateUrl: './guessing-area.component.html',
  styleUrls: ['./guessing-area.component.css']
})
export class GuessingAreaComponent implements OnInit {
  citiesName = ['Hadera', 'Herzlia', 'Ashkelon', 'Ashdod', 'Yavne'];
  curCityName: string = '';
  tempOfUser: string = '';
  cityResult: any;

  constructor(private fetcherService: FetcherService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select('guess'))
      .subscribe((guess: any) => {
        this.curCityName = this.citiesName[guess.indexOfGuess];
      })
  }

  guessingHandling(): void {
    if (this.tempOfUser.toString() !== '') {
      let weatherData: WeatherData;
      this.fetcherService.getWeather(this.curCityName).pipe(take(1))
        .subscribe((data: object) => {
          this.cityResult = data;
          const correctAnswer: boolean = this.fetcherService.checkIsSuccess(Number(this.tempOfUser), this.cityResult.main.temp);
          weatherData = {
            city: this.curCityName,
            rightTemp: this.cityResult.main.temp,
            userTemp: Number(this.tempOfUser),
            correctAnswer: correctAnswer
          }
          this.store.dispatch(addGuess({weather: weatherData}));
          this.store.dispatch(indexOfGame());
          this.tempOfUser = ''
        })
    }
  }
}
