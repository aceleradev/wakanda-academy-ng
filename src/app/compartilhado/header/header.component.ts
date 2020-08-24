import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { UserService } from '../service/user/user.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { TribePerformace } from '../interface/tribe-performace';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  user: User;
  performace: TribePerformace = null;

  constructor(
    private userService: UserService,
    private config: NgbDropdownConfig,
  ) {
    config.placement = 'bottom';
  }

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => {
      this.user = user
      this.userService.getStats(this.user.wakanderCode).subscribe(res => {
        console.log(res);
        this.performace = res.body;
      });
    });
  }

  logout() {
    this.userService.logout();
  }
}
