import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myprofile:any = [];
  myrepos:any = [];

  constructor(private homeservice:HomeService){
  // Initialization inside the constructor
  this.myprofile = [];
  this.myrepos = [];
}

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

  ngOnInit(): void {
  }

}
