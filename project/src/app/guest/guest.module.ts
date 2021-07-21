import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';






import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, EmpComponent],
  imports: [
    CommonModule
  
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    EmpComponent,
    LoginComponent
  ]
})
export class GuestModule { }
