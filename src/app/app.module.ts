import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from './home/home.service';
import { RepoComponent } from './repo/repo.component';
import { RepoService } from './repo/repo.service';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    RepoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [HomeService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
