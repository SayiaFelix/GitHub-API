import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {


  github:Repositories [] = [
    new Repositories(1, 'GOALS-ANGULARWORK', 'Find an online version and watch merlin find his son'),
    new Repositories(2,'DELANI-STUDIO','I have to buy cookies for the parrot'),
    new Repositories(3,'AKAN-NAMES','Diana has her birthday coming up soon'),
    new Repositories(4,'MY-PORTFOLIO','Pupper likes expensive snacks'),
    new Repositories(5,'PIZZA TOS PIZZERIA','Damn Math'),
  ];





  constructor() {}

  ngOnInit(): void {
  }

}
