import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-g-form',
  templateUrl: './g-form.component.html',
  styleUrls: ['./g-form.component.css']
})
export class GFormComponent implements OnInit {
  
  user:User | undefined;
	username: string | undefined; 

  constructor() { }
 
  ngOnInit(): void {
  }

}
