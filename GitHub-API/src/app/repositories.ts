export class Repositories {

 date: Date;
 constructor(public id: number,public login: string,public url: string,date:Date,){
        this.id=id;
        this.login=login;
        this.url=url;
        this.date=date;
  }

}


