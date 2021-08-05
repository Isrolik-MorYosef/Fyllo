import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {FetcherService} from "./services/fetcher.service";

export interface Result {
  rightTemp: any
  userTemp: any
  correctAnswer: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  citiesName = ['hadera', 'herzlia', 'ashkelon', 'ashdod', 'yavne'];
  tempOfUser: any;
  curCityName: any;
  cityResult: object = {};
  results: Result[] = [];
  curIndex: number = 0;
  // finalGame: boolean = false;
  summerOfGame: any;


  constructor(private loader: NgxUiLoaderService,
              private fetcherService: FetcherService) {
  }

  ngOnInit(): void {
    this.loader.startLoader('01');
    // Here is fetch data from server

    setTimeout(() => {
      this.loader.stopLoader('01');
    }, 0);
    this.curCityName = this.citiesName[0];
  }

  checkTemp() {
    this.fetcherService.getMarkers(this.curCityName).subscribe((data: object) => {
      this.cityResult = data
    })
    const correctAnswer = this.fetcherService.checkIsSuccsses(this.tempOfUser, this.cityResult.main.temp);
    const result: Result = {
      rightTemp: this.cityResult.main.temp,
      userTemp: this.tempOfUser,
      correctAnswer: correctAnswer
    }
    this.results.push(result);
    this.curIndex = this.curIndex + 1;
    this.curCityName = this.citiesName[this.curIndex];
    if(this.curIndex === this.citiesName.length){
     // this.finalGame = true;
      this.summerOfGame = this.results.filter(res => res.correctAnswer).length > 2 ? 'winner' : 'tryAgin..'

    }

  }
}
