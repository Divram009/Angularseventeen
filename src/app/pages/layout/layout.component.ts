import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    debugger;
    this.httpClient.get('https://localhost:5001/api/Values')
        .subscribe((res:any)=>{
        console.log(res)
        }, (error:any)=>{
          alert('Error on Values');
        });
  
  this.httpClient.get('https://localhost:5001/api/Values/test')
  .subscribe((res:any)=>{
  console.log(res)
  }, (error:any)=>{
    alert('Error on Values/test');
  });
  }
}
