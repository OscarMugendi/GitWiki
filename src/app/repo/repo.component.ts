import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoprofiles:any;
  repository:string="";

  constructor(private reposervice:RepoService) { }

  ReposProfile(){
    this.reposervice.updateRepos(this.repository);

    this.reposervice.getUserRepos().subscribe(repoprofiles => {
      console.log(repoprofiles);
      this.repoprofiles = repoprofiles;
    })
  }

  ngOnInit(){
    this.ReposProfile()
  }

}
