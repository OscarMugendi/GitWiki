import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userprofile:any;
  userrepos:any;
  username:any;

  constructor(private userservice:UserService) { }

  userProfile(){
    this.userservice.getUserProfile().subscribe(userprofile => {
      console.log(userprofile);
      this.userprofile = userprofile;
    });

    this.userservice.getUserRepos().subscribe(userrepos => {
      console.log(userrepos);
      this.userrepos = userrepos;
    })
  }

  ngOnInit(){
    this.userProfile()
  }

}
