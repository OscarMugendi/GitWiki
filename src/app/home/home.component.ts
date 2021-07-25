import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any[];

  constructor(private homeservice:HomeService){
    this.homeservice.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

}
