import { Component } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

userdata : any = {}

constructor(private srv : UtilsService) {}

Adduser()
{
  this.srv.adduser(this.userdata).subscribe
  ((data : any)=>
  {
    alert(data)
  })
}


}
