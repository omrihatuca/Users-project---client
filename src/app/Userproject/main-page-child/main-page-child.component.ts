import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {find, Subscription } from 'rxjs';
import { Users } from 'src/app/users';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-main-page-child',
  templateUrl: './main-page-child.component.html',
  styleUrls: ['./main-page-child.component.css']
})
export class MainPageChildComponent {
   @Input()
   userid : string = "" ;
  users : any = {};
  tasks : any ={};
taskid : string = ""
  changevalue : boolean = false;
  taskcomleted : any  ;

  chamgecbackground : boolean = false;
  
  showinfo : boolean = false

  @Output()
  senddata : EventEmitter<any> = new EventEmitter<any>();

  sub : Subscription = new Subscription()

  constructor(private srv : UtilsService, private rout : Router){}

  showdetailes()
  {
   
if (this.showinfo==false)
 {
  this.senddata.emit(this.users)
}
else
{
  this.senddata.emit("")
}
this.showinfo = !this.showinfo
sessionStorage["show"]=this.showinfo

   

    sessionStorage["userid"]=this.userid
   
    
  }




  updateuser()
  {
    this.srv.updateuser(this.userid,this.users).subscribe
    ((data : any)=>
    {
      data = this.users;
      alert(data);
      window.location.reload();
    })
  }

  deleteuser()
  {
    this.srv.deleteuser(this.userid).subscribe
    ((data:any)=>
    {
      alert(data);
      window.location.reload();
    })

  }



ngOnInit():void
{

 this.sub = this.srv.getdatafromusersbyid(this.userid).subscribe
((data : any)=>
{

for (let i = 0; i < data.length; i++)
 {
this.users=data[i]

  
  
for (let i = 0; i < this.users.tasks.length; i++) 
{
  this.tasks=this.users.tasks[i]
   this.taskcomleted = this.tasks.completed
  
  
  
}

}



});



}

ngOnDestroy()
{
  this.sub.unsubscribe();
}

}
