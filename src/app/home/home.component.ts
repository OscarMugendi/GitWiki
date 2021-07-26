import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { RouterModule } from '@angular/router';
import { RepoComponent } from '../repo/repo.component';
import { RepoService } from '../repo/repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myprofile:any;
  myrepos:any;
  username:string="OscarMugendi";

  constructor(private homeservice:HomeService){}

  myProfile(){
    this.homeservice.updateUser(this.username);

    this.homeservice.getUser().subscribe(myprofile => {
      console.log(myprofile);
      this.myprofile = myprofile;
    });

    this.homeservice.getRepos().subscribe(myrepos => {
      console.log(myrepos);
      this.myrepos = myrepos;
    })
  }

  ngOnInit(){
    this.myProfile()
  }

}
