import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class HomeService {

  private username: string;
  private apikey: string = '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';
  private clientID: string = '78181b277a6a06bebb0d';
  private clientSecret: string = '1681b22872afd6aa2d8b77869d8c29db4ae3675f'

constructor(private http: HttpClient) {
  console.log("home is working!!");
  this.username = "OscarMugendi";
}

getUser() {
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientID + "&client_secret=" +this.clientSecret)
}

getRepos() {
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientID + "&client_secret=" + this.clientSecret)
}

updateUser(username:string){
  this.username = username;
}

}