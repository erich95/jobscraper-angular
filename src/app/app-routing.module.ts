import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { CreateJobOfferComponent } from './create-job-offer/create-job-offer.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent},
  { path: 'offers', component: JobOfferComponent},
  { path: 'addOffer', component: CreateJobOfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
