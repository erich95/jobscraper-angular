import { Component, Injectable, OnInit } from '@angular/core';
import { JobOffer } from '../models/jobOffer.model';
import { JobOfferService } from '../services/jobOffer.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class JobOfferComponent implements OnInit {
  title = 'Offerte di lavoro';

  jobOffersList: JobOffer[];

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService.getOffersList().subscribe(
      obs => {
        this.jobOffersList = obs;
      }
    )
  }

}
