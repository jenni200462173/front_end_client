import { Injectable } from '@angular/core';
// http libary to make calls to server api
import {HttpClient} from '@angular/common/http'
// enviorment file to look up domain. Different in dev and prod
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
}) 
export class EmployerService {
  //read api server domain from enviroment file. Used in all api calls
  serverUrl : string = environment.serverUrl
  constructor(private http:HttpClient) { }

  //GET : Fetch all employers from / api/employers
  getEmployers(){
    return this.http.get(`${this.serverUrl}/api/employers`)
  }
}
