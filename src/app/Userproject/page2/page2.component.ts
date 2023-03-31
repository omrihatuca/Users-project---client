import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

@Input()
result : any = {}

tasksdata : any = {}

postsdata : any = {}

alltasks : any = []

// info : any = {}

 infocomp : boolean = true


showtask : boolean = true

showpost : boolean = true

sub : Subscription = new Subscription 

constructor(private srv : UtilsService) {}

updateproduct(id : string, text : any )
{

 this.srv.updatetask(id,text ).subscribe
  ((data : any)=>
  {
    alert(data);
    window.location.reload();
  })
 
}


addtask()
{
  this.srv.addtask(this.tasksdata).subscribe
  ((data : any)=>
  {
    alert(data)
    window.location.reload();
  })
}

addpost()
{
  this.srv.addpost(this.postsdata).subscribe
  ((data : any)=>
  {
    alert(data)
    window.location.reload();
  })
}


ngOnInit() : void
{
  //  this.srv.getdatafromtasks().subscribe
  //  ((data : any)=>
  //  {

  //    for (let i = 0; i < data.length; i++)
  //     {
      
  //     this.info = data[i]
  //     console.log(this.info)
  //    this.infocomp = this.info.completed;
  //      console.log(this.infocomp)
  //    }
     
  
  //  })
   
 }


}
