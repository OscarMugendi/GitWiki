import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoprofile:any;
  username:any;

  constructor(private reposervice:RepoService) { }

  RepoProfile(){
    this.reposervice.getUserRepo().subscribe(repoprofile => {
      console.log(repoprofile);
      this.repoprofile = repoprofile;
    })
  }

  ngOnInit(){
    this.RepoProfile()
  }

}
