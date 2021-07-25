import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private username:string;
  private clientID = "78181b277a6a06bebb0d";
  private clientSecret = "1681b22872afd6aa2d8b77869d8c29db4ae3675f";

  constructor(private user:User) {
    console.log("service is working")
    this.username = "OscarMugendi";
  }

  getUserInfo(){
    return this.user.get("https://api-github.com/users/" + this.username + "?client_id=" + this.clientID + "&client_secret=" + this.clientSecret)
    .map(res => res.json());
  }
}
