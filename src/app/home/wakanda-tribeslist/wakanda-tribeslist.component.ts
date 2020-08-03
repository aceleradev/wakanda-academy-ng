import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { WakandaTribeslistService } from '../services/wakanda-tribeslist.service';
import { WakandaTribe } from '../../compartilhado/interface/wakanda-tribe';
import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { User } from 'src/app/compartilhado/interface/user';
import { WakandaTribeHome } from 'src/app/compartilhado/interface/wakanda-tribe-home';

@Component({
  selector: 'app-wakanda-tribeslist',
  templateUrl: './wakanda-tribeslist.component.html',
  styleUrls: ['./wakanda-tribeslist.component.css']
})
export class WakandaTribeslistComponent implements OnInit {
  @Input() tribes: WakandaTribeHome[] = [];
  rows: any[] = [];
  user: User;
  wkCode:string;
  numeral:string;
  

  constructor(
    private wakandaTribesListService: WakandaTribeslistService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUser()
      .subscribe(user => this.user = user)
     
      
      this.wkCode = this.user.wakanderCode
      
    this.wakandaTribesListService
      .getTribos(this.user.wakanderCode)
      .subscribe(tribes => {
        this.tribes = tribes
            
        this.rows = this.groupColumns(tribes);
      });
    
     
     
  }

  groupNumer(numeral){
    for (let i= 0; i<this.tribes.length; i++){
      numeral = i
    }
    console.log("groupNumer");
    console.log(numeral);
    return numeral;
        
  }
  
  groupColumns(tribes: WakandaTribeHome[]) {
    const newRows = [];
    
    for(let index = 0; index < tribes.length; index+=2) {
      newRows.push(tribes.slice(index, index + 2));
    }   
    console.log(newRows);                         
    return newRows;
  }

}
