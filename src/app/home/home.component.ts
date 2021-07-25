import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any[];

  constructor(private homeService: HomeService) {
    this.homeService.getUserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
   });

  ngOnInit(): void {
  }

}
