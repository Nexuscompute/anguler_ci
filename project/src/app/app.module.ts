import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModule } from './guest/guest.module';
import{ UkModule } from './uk/uk.module';




import { XyzComponent } from './xyz/xyz.component';
import { FormsModule } from '@angular/forms';
import { CommonService } from './common.service';
import { NewsComponent } from './news/news.component';
import {NeswserviceService } from './news/neswservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    NewsComponent
 
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    GuestModule,
    UkModule,
    NgbModule
  ],
  providers: [CommonService,NeswserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
