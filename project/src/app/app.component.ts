import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allUser: any;
  isEdit= false;
  myimag:string ="assets/img/1.jpg";
 userObj={
  first_name:'',
   last_name:'',
   id:''
 }

  constructor(private commonService:CommonService){}
   
  ngOnInit() {
  this.gettestuser();
  }

 
  getUserValue(value1:any) 
  {
    console.log(value1);
    this.commonService.createUser(value1).subscribe((Response)=>{
      this.commonService.getallUser();
    })
  }
  gettestuser(){
    this.commonService.getallUser().subscribe((Response)=>{
      this.allUser = Response;
    })
  }
  editUser(user:any){
    this.isEdit  = true;
     this.userObj = user;
    //console.log(s);
  }
  deleteUser(user:any){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.gettestuser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.gettestuser();
    })
  }
  
}
