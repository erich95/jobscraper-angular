import { Component } from '@angular/core';
import { JobOffer } from './models/jobOffer.model';
import { JobOfferService } from './services/jobOffer.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JOBS';
  jobOffersList: JobOffer[];
  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
   
  }  
}
