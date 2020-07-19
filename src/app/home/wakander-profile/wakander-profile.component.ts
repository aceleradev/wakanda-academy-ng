import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/compartilhado/interface/user';
import { UserService } from 'src/app/compartilhado/service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  userInfo: User;

  constructor(public userservice:UserService) { }

  ngOnInit(      ) {
     this.getinfoclient();
   
  }

  getinfoclient() {
   this.userservice.getUser().subscribe((user : User) =>{
    this.userInfo = user;
    console.log(this.userInfo);
  });
}
  

}
