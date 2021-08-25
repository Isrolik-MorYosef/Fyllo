import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cities} from "../../assets/cities/cities";

@Injectable()
export class FetcherService {
  token = '7df3f2edb1590af434e645afad8aea72';

  constructor(protected httpClient: HttpClient,
              protected cities: Cities) { }

  getWeather(cityName: string): Observable<object> {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.token}`);
  }

  checkIsSuccess(tempOfUser: number, temp: number): boolean {
      return (tempOfUser > temp-5 && tempOfUser < temp+5);
  }

  getRandomCities(): string[] {
    let citiesToGame: string[] = [];
    let index: number = 0;
    while (index < 5) {
      let num = Math.floor(Math.random() * this.cities.citiesArray.length);
      if (!(citiesToGame.includes(this.cities.citiesArray[num]))) {
        citiesToGame.push(this.cities.citiesArray[num]);
        index += 1;
      }
    }
    return citiesToGame;
  }
}
