import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription } from 'rxjs';
import { Users } from 'src/app/users';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-main-pageparent',
  templateUrl: './main-pageparent.component.html',
  styleUrls: ['./main-pageparent.component.css']
})
export class MainPageparentComponent {

  constructor(private srv : UtilsService , private rout : Router){}
  users : any[] = [];
  search : any = {}
  sub : Subscription = new Subscription();

  show : string = sessionStorage["show"]




sendtoadduser()
{
  this.rout.navigate(["/adduser"]);
}


  filterbyname(name : string)
  {
   this.users = this.users.filter(x=>x.name.includes(name));
    this.users = this.users.filter(x=>x.email.includes(name));
   
   if (name.length==0)
    {
      this.sub = this.srv.getdatafromusers().subscribe
    ((data : any)=>
    {
      this.users = data;
      
    })
   }


  }

  
  
  ngOnInit():void
  {
    this.sub = this.srv.getdatafromusers().subscribe
    ((data : any)=>
    {
      this.users = data;
    })




  }
  
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
  

}
