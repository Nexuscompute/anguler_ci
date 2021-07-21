
import { Component, OnInit } from '@angular/core';
import { NeswserviceService } from './neswservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  resData:any=[];
  newsData=[];
  constructor(private neswservice:NeswserviceService) { }



topheadingDisplay:any = [];
  ngOnInit(): void {
  
    this.neswservice.topheading().subscribe(data=>{
     this.resData.push(data);
      console.log(data);
      this.topheadingDisplay=data.articles;
    })
//     const url="";
// this.neswservice.getnews()
//     this._http.get(url).subscribe((res)=>{
// this.newsData=res;
// console.log(this.newsData);
// })
  }

}
