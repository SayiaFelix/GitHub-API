import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user';
// import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root'
})
export class GitHubRequestService {
 
  profileInfo:any; User: any;

  private username: string;
  private gitHubApi: string = 'environment.gitHubApi';
  private gitUrl: string = 'https://api.github.com/users/';

  constructor(private http:HttpClient) {
     this.profileInfo = new User("","");
     this.username='SayiaFelix'
  }


updateProfile(username: string) {
  this.username = username;
}
 profileInfoRequest(){
     interface ApiResponse{
       login:string;
       url:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://api.github.com/users/' + this.username + '?access_token=' + environment.gitHubApi).toPromise().then( (response:any)=>{
         this.profileInfo.login = response.login
         this.profileInfo.url = response.url
         resolve(response)
       },
       error=>{
         this.profileInfo.login = "Sir Felix"
         this.profileInfo.url = "Page is not found check your url"
         reject(error)
       })
     })
     return promise
   }


}
