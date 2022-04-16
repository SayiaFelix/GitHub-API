import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
// import{GitHubRequestService} from '../GitHub-http/git-hub-request.service';
import { GitHubService } from '../git-hub.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  // repositories:Repositories[]| undefined;

  github:Repositories [] = [
    new Repositories(1, 'GOALS-ANGULARWORK', 'Find an online version and watch merlin find his son',new Date(2021,3,14)),
    new Repositories(2,'DELANI-STUDIO','I have to buy cookies for the parrot',new Date(2021,3,14)),
    new Repositories(3,'AKAN-NAMES','Diana has her birthday coming up soon',new Date(2021,4,14)),
    new Repositories(4,'MY-PORTFOLIO','Pupper likes expensive snacks',new Date(2021,5,14)),
    new Repositories(5,'PIZZA TOS PIZZERIA','Damn Math',new Date(2021,7,14)),
  ];

 profileInfo: User | undefined;

  constructor() {
    // this.repositories= new GitHubService.getRepositories()
  }

  ngOnInit(): void {
   
  }
}


