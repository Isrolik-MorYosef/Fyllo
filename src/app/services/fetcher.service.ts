import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class FetcherService {
  token = '7df3f2edb1590af434e645afad8aea72'


  constructor(protected httpClient: HttpClient) { }

  getMarkers(cityName: string): Observable<object> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.token}`);
  }

  checkIsSuccsses(tempOfUser: number, temp: number) : boolean{
      return tempOfUser > temp-5 && tempOfUser < temp+5
  }
}
