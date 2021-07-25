import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private username: string;
  private clientID: string = '78181b277a6a06bebb0d';
  private clientSecret: string = '1681b22872afd6aa2d8b77869d8c29db4ae3675f';
  private apikey: string = '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'

constructor(private http: HttpClient) {
  console.log("repo is working!!");
  this.username = "";
}

getUserRepo() {
  return this.http.get("https://api.github.com/users/" +this.username + "/repos?client_id" + this.clientID + "&client_secret=" + this.clientSecret)
}

}
