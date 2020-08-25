import { Component, OnInit } from '@angular/core';
import { TribePerformace } from 'src/app/compartilhado/interface/tribe-performace';
import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit {

  performace: Observable<TribePerformace>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.performace = this.userService.getPerformace();
  }

}
