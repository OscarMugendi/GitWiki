import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myprofile:any;
  myrepos:any;
  username:any = 'OscarMugendi'

  constructor(private homeservice:HomeService){}

  myProfile(){
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
    //this.myProfile()
  }

}
