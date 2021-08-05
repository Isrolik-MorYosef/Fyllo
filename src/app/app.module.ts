import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {FormsModule} from "@angular/forms";
import {FetcherService} from "./services/fetcher.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [FetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
