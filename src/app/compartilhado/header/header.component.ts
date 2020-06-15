import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  user$: Observable<User>;
  user: User;

  constructor(
    private userService:UserService
  ) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.userService.logout();
  }
}
