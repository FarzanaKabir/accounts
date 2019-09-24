import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexModule} from './index/index.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './layout/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HomeModule,


    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
