import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/';
import { OAuthInterceptor} from './httpInterceptor.service'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BeerAPIService {

  constructor(private http:HttpClient) { }

  getBeers1(): Observable< any> {
    return this.http.get<any>('https://sandbox-api.brewerydb.com/v2/beer/random/?key=671fdfd20752851900f509b98757bd92')
  }

}
