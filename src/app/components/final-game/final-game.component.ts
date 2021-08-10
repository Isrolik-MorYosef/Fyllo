import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/state/app.state";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-final-game',
  templateUrl: './final-game.component.html',
  styleUrls: ['./final-game.component.css']
})
export class FinalGameComponent implements OnInit {
  summaryOfGame: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select('guess'), pluck('guess')).subscribe((data:any) => {
      this.summaryOfGame = data.filter((res: any) => res.correctAnswer).length > 2 ? 'Winner' : 'You lost..'
    })
  }

  restartGame(): void {
    location.reload();
  }
}
