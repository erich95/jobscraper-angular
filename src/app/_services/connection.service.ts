import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { JobOffer } from "../models/jobOffer.model";

@Injectable({
    providedIn: 'root'
  })
export class Connection {
    host = environment.HOST;
    getOffers = environment.GET_OFFERS;
    setOffer = environment.ADD_OFFER;    

    headeroption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };
      
    constructor(private http: HttpClient) {}    

    getJobOffersList() {
        return this.http.get<Array<JobOffer>>(this.host + this.getOffers)
    }

    addJobOffer(jobOffer: JobOffer) {
        var jobOfferJSON = JSON.stringify(jobOffer);
        this.headeroption.headers.set("responseType", "Text");
        return this.http.post<string>(this.host + this.setOffer, jobOfferJSON, this.headeroption)
    }
    
}