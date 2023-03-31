import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './Userproject/Adduser/adduser.component';
import { MainPageparentComponent } from './Userproject/main-pageparent/main-pageparent.component';
import { Page2Component } from './Userproject/page2/page2.component';

const routes: Routes = [
                        {path : "" , component : MainPageparentComponent,
                         children : [{path : "adduser" , component : AdduserComponent},
                         {path : "page2" , component : Page2Component}]},
                      //   {path : "page2" , component : Page2Component},
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
