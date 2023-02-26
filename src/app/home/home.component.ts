import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Inject} from '@angular/core';
import { CommenttService } from '../commentt.service';
import { LikeserviceService } from '../likeservice.service';
import { Mess } from '../mess';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User =new User();
  cmess:Mess=new Mess();
  constructor(@Inject(DOCUMENT) document:Document,private http:HttpClient,private testserv:LikeserviceService,private mess:CommenttService) {
    this.document=document
   }

   document:any;
   x:any;
   y:any;
   z:any;
   c:any;
   d:any;
   e:any;
   isShown:boolean=false;
   count:any;
   users:any;
   users1:any;
   users2:any;
   coms:any;
   coms1:any;
   coms2:any;
   shownn:boolean=false;
  ngOnInit(): void {

    let responce= this.http.get("http://localhost:8060/getlikedata");
   responce.subscribe((data)=>this.users=data)

   let responce1= this.http.get("http://localhost:8060/getlikedata1");
   responce1.subscribe((data)=>this.users1=data)

   let responce2= this.http.get("http://localhost:8060/getlikedata2");
   responce2.subscribe((data)=>this.users2=data)

   let responce3= this.http.get("http://localhost:8060//getcomdata");
   responce3.subscribe((data)=>this.coms=data)

   let responce4= this.http.get("http://localhost:8060//getcomdata1");
   responce4.subscribe((data)=>this.coms1=data)

   let responce5= this.http.get("http://localhost:8060//getcomdata2");
   responce5.subscribe((data)=>this.coms2=data)
  }

  open(){
    alert("liked ")
    this.isShown = !this.isShown;
     this.y=this.document.getElementById('em').value;
    
 

    
  }

  

  openblog(){

  
  
  }

  login(){
    this.x=this.document.getElementById('em').value
    // alert(this.document.getElementById('em').value)
   
    this.z=this.user.name;
    alert("Welcome "+this.z)
    if(this.user.name==null){
      alert("Enter Your Name to see Blogs")
    }
    else{
      this.shownn=!this.shownn
    }
  }
    

  // opencom(){
  //   this.z=this.document.getElementById('em').value;
  // }

  openlikes(event:any){
    console.log("user in ts",this.user);
   this.testserv.saveuser(this.user).subscribe(user=>{
     console.log(user);
   });
  //  alert("test")
 }

 openlikes1(event:any){
  console.log("user in ts",this.user);
 this.testserv.saveuser1(this.user).subscribe(user=>{
   console.log(user);
 });
//  alert("test")

}

openlikes2(event:any){
  console.log("user in ts",this.user);
 this.testserv.saveuser2(this.user).subscribe(user=>{
   console.log(user);
 });
//  alert("test")
}

 opencoms(event:any){
  console.log("user in ts",this.mess);
 this.mess.savecom(this.cmess).subscribe(mess=>{
   console.log(mess);
 });
 alert("Comment Posted")
 this.c=this.document.getElementById('cm').value;
this.document.getElementById('cm').value=null
}

opencoms1(event:any){
  console.log("user in ts",this.mess);
 this.mess.savecom1(this.cmess).subscribe(mess=>{
   console.log(mess);
 });
//  alert("test")
this.d=this.document.getElementById('cm1').value;
this.document.getElementById('cm1').value=null
}

opencoms2(event:any){
  console.log("user in ts",this.mess);
 this.mess.savecom2(this.cmess).subscribe(mess=>{
   console.log(mess);
 });
 this.e=this.document.getElementById('cm2').value;
 this.document.getElementById('cm2').value=null
//  alert("test")


}
 
clearinput(event:any){

}

}
