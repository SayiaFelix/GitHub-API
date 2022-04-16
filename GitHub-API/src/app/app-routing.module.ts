import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [

  { path: 'landingpage', component: LandingpageComponent},
  { path: 'github', component: GithubComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
