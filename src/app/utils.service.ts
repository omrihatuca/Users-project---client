import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http : HttpClient) { }
  getdatafromusers()
  {
    return this.http.get("http://localhost:8000/api/users")
  }

  getdatafromusersbyid(id : string)
  {
    return this.http.get("http://localhost:8000/api/users/"+id)
  }

  getdatafromusersbyname(name : string)
  {
    return this.http.get("http://localhost:8000/api/users?name="+name)
  }

  adduser(data : any)
  {
    return this.http.post("http://localhost:8000/api/users",data)
  }

  updateuser(id : string , data : any)
  {
    return this.http.put("http://localhost:8000/api/users/"+id,data)
  }

deleteuser(id : string)
{
  return this.http.delete("http://localhost:8000/api/users/"+id)
}


getdatafromtasks()
  {
    return this.http.get("http://localhost:8000/api/tasks")
  }

  getdatafromtasksbyid(id : string)
  {
    return this.http.get("http://localhost:8000/api/tasks/"+id)
  }

  getdatafromtasksbyusername(username : string)
  {
    return this.http.get("http://localhost:8000/api/tasks?username=" + username)
  }

 updatetask(userid : string , data : any)
 {
  return this.http.put("http://localhost:8000/api/tasks/"+userid,data)
 } 

addtask(data : any)
{
  return this.http.post("http://localhost:8000/api/tasks",data)
}


addpost(data : any)
{
  return this.http.post("http://localhost:8000/api/posts",data)
}



}
