import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LikeserviceService {
  private userposturl!: string;
  private userposturl1!: string;
  private userposturl2!: string;
  user:User =new User();
  constructor(private http:HttpClient) { 
    this.userposturl='http://localhost:8060/postlikes';
    this.userposturl1='http://localhost:8060/postlikes1';
    this.userposturl2='http://localhost:8060/postlikes2';
  }


  saveuser(user:User){
    //console.log(user.name+" - "+user.email);
    // alert("okk")
    return this.http.post<User>(this.userposturl,user)
    
   }
   saveuser1(user:User){
    //console.log(user.name+" - "+user.email);
    // alert("okk")
    return this.http.post<User>(this.userposturl1,user)
    
   }
   saveuser2(user:User){
    //console.log(user.name+" - "+user.email);
    // alert("okk")
    return this.http.post<User>(this.userposturl2,user)
    
   }
}
