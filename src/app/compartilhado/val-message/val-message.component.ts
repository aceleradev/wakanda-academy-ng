import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-val-message',
  templateUrl: './val-message.component.html',
  styleUrls: ['./val-message.component.css']
})
export class ValMessageComponent implements OnInit {

  @Input() text="";

  ngOnInit() {
  }

}
