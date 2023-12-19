import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { JobOffer } from '../models/jobOffer.model';
import { JobOfferService } from '../services/jobOffer.service';
import { Response } from '../models/response.model';

@Component({
  selector: 'app-create-job-offer',
  templateUrl: './create-job-offer.component.html',
  styleUrls: ['./create-job-offer.component.css']
})
export class CreateJobOfferComponent {
  jobOffer: JobOffer;
  title: string;
  description: string;
  city: string;
  companyName: string;
  sector: string;
  degreeTitle: string;
  workingTime: string;
  contractType: string;
  telephoneNumber: number;
  jobOfferDate: Date;
  message: Object;
  response: Response;
  constructor(private jobOfferService: JobOfferService) {}

  viewValue() {
    console.log(this.title);
  }

  createJobOffer() {
    this.jobOffer = new JobOffer;
    this.jobOffer.title = this.title;
    this.jobOffer.description = this.description;
    this.jobOffer.city = this.city;
    this.jobOffer.companyName = this.companyName;
    this.jobOffer.sector = this.sector;
    this.jobOffer.degreeTitle = this.degreeTitle;
    this.jobOffer.workingTime = this.workingTime;
    this.jobOffer.contractType = this.contractType;
    this.jobOffer.telephoneNumber = this.telephoneNumber;
    this.jobOffer.jobOfferDate = this.jobOfferDate;
    
    this.jobOffer.jobOfferImgUrl = "";
    this.jobOffer.jobOfferUrl = "";

    this.saveJobOffer(this.jobOffer);
  }

  saveJobOffer(jobOffer: JobOffer) {
    this.jobOfferService.addJobOffer(jobOffer).subscribe(msg => this.response = JSON.parse(JSON.stringify(msg)));
  }

  getMessage() {
    this.message = this.jobOfferService.getMessage();
  }

}
