import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {FormsModule} from "@angular/forms";
import {FetcherService} from "./services/fetcher.service";
import {HttpClientModule} from "@angular/common/http";
import {GuessingAreaComponent} from './components/guessing-area/guessing-area.component';
import {ResultComponent} from './components/result/result.component';
import {FinalGameComponent} from './components/final-game/final-game.component';
import {StoreModule} from "@ngrx/store";
import {guessReducer} from "./store/guess.reducer";

@NgModule({
  declarations: [
    AppComponent,
    GuessingAreaComponent,
    ResultComponent,
    FinalGameComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({guess: guessReducer})
  ],
  providers: [FetcherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
