import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 { path: '', redirectTo:"/landingpage", pathMatch:"full"},
  { path: 'landingpage', component: LandingpageComponent},
  { path: 'github', component: GithubComponent},
  { path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
