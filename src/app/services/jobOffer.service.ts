import { Injectable } from '@angular/core';
import { Connection } from '../_services/connection.service';
import { JobOffer } from '../models/jobOffer.model';

@Injectable({
    providedIn: 'root'
  })
export class JobOfferService {
    public message: Object;
    constructor(private connection: Connection) {}

    getOffersList() {
        return this.connection.getJobOffersList();
    }

    addJobOffer(jobOffer: JobOffer) {        
        return this.connection.addJobOffer(jobOffer);
    }

    getMessage() {
        return this.message;
      }
}