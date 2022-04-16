import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';
import { GithubComponent } from './github/github.component';
import { GFormComponent } from './g-form/g-form.component';
import { HttpClientModule } from '@angular/common/http';
import { GitHubRequestService } from './GitHub-http/git-hub-request.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingpageComponent,
    ProfileComponent,
    RepoComponent,
    GithubComponent,
    GFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitHubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
