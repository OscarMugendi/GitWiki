import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private repository:string;
  private apikey: string = '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';
  private clientID: string = '78181b277a6a06bebb0d';
  private clientSecret: string = '1681b22872afd6aa2d8b77869d8c29db4ae3675f';

constructor(private http:HttpClient) { 
  console.log("repo is working!!");
  this.repository = "";
}

getUserRepos() {
  return this.http.get("https://api.github.com/users/" + this.repository + "/repos?client_id=" + this.clientID + "&client_secret=" + this.clientSecret)
}

updateRepos(repository:string){
  this.repository = repository;
}

}
