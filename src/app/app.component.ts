import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {FetcherService} from "./services/fetcher.service";
import {BehaviorSubject, Subject} from "rxjs";
import {debounce, debounceTime, tap} from "rxjs/operators";

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
  cityResult: any = {};
  results: Result[] = [];
  curIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  finalGame: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  summerOfGame: any = '';
  check: string = 'Check';

  constructor(private loader: NgxUiLoaderService,
              private fetcherService: FetcherService) {
  }

  ngOnInit(): void {
    this.loader.startLoader('01');
    // To initlaizer API
    this.fetcherService.getMarkers('eilat').subscribe((data: object) => {
      this.cityResult = data;
    })

    this.curCityName = this.citiesName[0];
    setTimeout(() => {
      this.loader.stopLoader('01');
    }, 0);
    this.curIndex.subscribe((i: number) => {
      if (i === this.citiesName.length) {
        this.check = 'Check my game';
      }
    })
  }

  checkTemp(): void {
    this.fetcherService.getMarkers(this.curCityName).subscribe((data: object) => {
      this.cityResult = data;
    })
    const correctAnswer = this.fetcherService.checkIsSuccess(this.tempOfUser, this.cityResult.main.temp);
    const result: Result = {
      rightTemp: this.cityResult.main.temp,
      userTemp: this.tempOfUser,
      correctAnswer: correctAnswer
    }
    this.results.push(result);

    if (this.curIndex.value === this.citiesName.length) {
      this.summerOfGame = this.results.filter(res => res.correctAnswer).length > 2 ? 'Winner' : 'Try more..'
      this.finalGame.next(true);
    }
    this.curIndex.next(this.curIndex.value + 1);
    this.curCityName = this.citiesName[this.curIndex.value];


  }
}
