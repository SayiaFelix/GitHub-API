export class Repositories {

 date: Date 
 constructor(public id: number,public login: string,public url: string,date:Date,){
        this.id=id;
        this.login=login;
        this.url=url;
        this.date=date;
  }
// constructor(public name: string, public full_name: string, public description: string, public updated_at:Date, public html_url: string, public clone_url: string, public language: string, public created_at:Date){}
}



