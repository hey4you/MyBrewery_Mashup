import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BeerAPIService } from './beer-api.service';
import { OAuthInterceptor } from './httpInterceptor.service'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [BeerAPIService,
    {provide: HTTP_INTERCEPTORS,
    useClass: OAuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
