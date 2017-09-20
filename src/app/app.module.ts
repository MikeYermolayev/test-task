import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {
  AppComponent,
  FeedComponent,
  PostComponent
} from './components';

import {
  ApiService,
  PostsService
} from './services/';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxDatatableModule,
    AppRoutingModule
  ],
  providers: [
  	ApiService,
  	PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
