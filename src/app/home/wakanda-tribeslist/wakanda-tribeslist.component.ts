import { Component, OnInit } from '@angular/core';
import { WakandaTribeslistService } from '../services/wakanda-tribeslist.service';
import { WakandaTribe } from '../interfaces/wakanda-tribe';
import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { User } from 'src/app/compartilhado/interface/user';

@Component({
  selector: 'app-wakanda-tribeslist',
  templateUrl: './wakanda-tribeslist.component.html',
  styleUrls: ['./wakanda-tribeslist.component.css']
})
export class WakandaTribeslistComponent implements OnInit {
  tribes: WakandaTribe[] = [];
  user: User;

  constructor(
    private wakandaTribesListService: WakandaTribeslistService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUser()
      .subscribe(user => this.user = user)
      console.log(this.user);
      

    this.wakandaTribesListService
      .getTribos(this.user.id)
      .subscribe(tribes => {
        this.tribes = tribes
        console.log(tribes);
      })
      console.log(this.tribes);
      
  }

}
