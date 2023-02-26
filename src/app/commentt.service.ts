import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Mess } from './mess';

@Injectable({
  providedIn: 'root'
})
export class CommenttService {
  
  private userposturl!: string;
  private userposturl1!: string;
  private userposturl2!: string; 
  user:Mess =new Mess();
    constructor(private http:HttpClient) { 
    this.userposturl='http://localhost:8060/postcomments';
    this.userposturl1='http://localhost:8060/postcomments1';
    this.userposturl2='http://localhost:8060/postcomments2';
  }


  savecom(user:Mess){
    //console.log(user.name+" - "+user.email);
    // alert("okk")
    return this.http.post<Mess>(this.userposturl,user)
    
  }

  savecom1(user:Mess){
    //console.log(user.name+" - "+user.email);
    // alert("okk")
    return this.http.post<Mess>(this.userposturl1,user)
    
  }

  savecom2(user:Mess){
    //console.log(user.name+" - "+user.email);
    // alert("okk")
    return this.http.post<Mess>(this.userposturl2,user)
    
  }

}
