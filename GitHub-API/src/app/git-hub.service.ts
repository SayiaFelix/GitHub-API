import { Injectable } from '@angular/core';
import { Repositories } from './repositories';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  static getRepositories: any;
  getRepositories(){
    return Repositories;
  }

  constructor() { }
}
