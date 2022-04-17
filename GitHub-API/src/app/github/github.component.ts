import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

import { GitHubService } from '../git-hub.service';
import { GitHubRequestService } from '../GitHub-http/git-hub-request.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  // repositories:Repositories[]| undefined;

  github:Repositories [] = [
    new Repositories(1, 'GOALS-ANGULARWORK', 'Goal-Angular work is an angular app where i have used angular components to make the application.',new Date(2021,3,14)),
    new Repositories(2,'DELANI-STUDIO','Delani Studio is an app where a user can view our services and get to experience our jQUERY and Javascript skills.',new Date(2021,3,14)),
    new Repositories(3,'AKAN-NAMES','Akan Names is an app where i have incooperated Ghanian Culture Name where a user can input his/her name then receive a Ghanian Culture Name.',new Date(2021,4,14)),
    new Repositories(4,'MY-PORTFOLIO','My Portfolio is an app where i have showcase my skills,level of education and also my rates for services as a Data scientist and a Software Engineer.',new Date(2021,5,14)),
    new Repositories(5,'Pizza TOS PIZZERIA','Pizza TOSS PIZZERIA is an app where i have designed a web app and a user can place his/her order for pizza and it willl be delivered.',new Date(2021,7,14)),
  ];

 profileInfo: User | any;

  constructor(private gitHubRequest: GitHubRequestService) {

    // this.repositories= new GitHubService.getRepositories()
  }

  ngOnInit(): void {
   this.gitHubRequest.profileInfoRequest();
   this.profileInfo=this.gitHubRequest.profileInfo;
  }
}


