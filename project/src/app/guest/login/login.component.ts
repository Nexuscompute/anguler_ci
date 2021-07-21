import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
      import { GuestService } from '../guest.service';
    


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  closeResult = '';
  
  constructor(private modalService: NgbModal, private GuestServicehttp:GuestService) { }

  ngOnInit(): void {
    this.gettestuser();
  }
  allUser:any;
  userObj={
    name_folder:'',
     id:''
   }
 Objimg={
   img:'',
   id:''
 }
open(content:any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getfolder(value:any){
   
    console.log(value);
    this.GuestServicehttp.createUser(value).subscribe((Response)=>{
      this.GuestServicehttp.getallUser();
    })
  }
  gettestuser(){
    this.GuestServicehttp.getallUser().subscribe((Response)=>{
      this.allUser = Response;
    })
    
  }
  deleteUser(user:any){
    console.log(user);
    this.GuestServicehttp.deleteUser(user).subscribe(()=>{
      this.gettestuser();
    })
  }
  saveimage(user:any){
  
    console.log(user);
    this.GuestServicehttp.saveimg(user).subscribe((Response)=>{
      this.GuestServicehttp.getallUser();
    })

  }
}
