import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {FetcherService} from "./services/fetcher.service";
import {BehaviorSubject} from "rxjs";
import {pluck} from "rxjs/operators";
import {AppState} from "./store/state/app.state";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  finalGame: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private loader: NgxUiLoaderService,
              private fetcherService: FetcherService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loader.startLoader('01');
    this.loader.stopLoader('01');
    this.store.pipe(select('guess'), pluck('indexOfGuess')).subscribe((index: any) => {
      if (index === 5) {
        this.loader.startLoader('01');
        setTimeout(() => [this.loader.stopLoader('01'),
          this.finalGame.next(true)], 2000);
      }
    });
  }
}
