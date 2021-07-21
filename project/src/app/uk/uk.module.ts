import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';



@NgModule({
  declarations: [
    AbcComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    AbcComponent
  ]
})
export class UkModule { }
