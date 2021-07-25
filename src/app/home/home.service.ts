import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {

  private username: string;
  private clientID = '78181b277a6a06bebb0d';
  private clientSecret = '1681b22872afd6aa2d8b77869d8c29db4ae3675f';

constructor(private http: HttpClient) {
  console.log("home is working!!");
  this.username = "OscarMugendi";
}

getUser() {
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientID + "&client_secret=" +this.clientSecret)
}

getRepos() {
  return this.http.get("https;//api.github.com/users/" + this.username + "/repos?client_id=" + this.clientID + "%client_secret=" + this.clientSecret)
}

ngOnInit() {}
}