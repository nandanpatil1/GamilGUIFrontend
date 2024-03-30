import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendemailService {

  constructor(private http:HttpClient) { }

  private baseUrl :string ="http://localhost:8080"

  sendEmail(data:any){

      return this.http.post(`${this.baseUrl}/sendemail`,data)
  }

  public getEmails(){
    return this.http.get(`${this.baseUrl}/emailhistory`)
  }

  public deleteEmail(id:any){
    return this.http.delete(`${this.baseUrl}/deleteemail?id=`+id)
  }
}
