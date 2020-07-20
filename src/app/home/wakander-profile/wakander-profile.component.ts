import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/compartilhado/interface/user';
import { UserService } from 'src/app/compartilhado/service/user/user.service';

@Component({
  selector: 'app-wakander-profile',
  templateUrl: './wakander-profile.component.html',
  styleUrls: ['./wakander-profile.component.css']
})
export class WakanderProfileComponent implements OnInit {

 
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
