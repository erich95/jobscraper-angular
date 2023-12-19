import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateJobOfferComponent } from './create-job-offer/create-job-offer.component';
import { FormsModule } from '@angular/forms';
import { ModifyJobOfferComponent } from './modify-job-offer/modify-job-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    JobOfferComponent,
    CreateJobOfferComponent,
    ModifyJobOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
