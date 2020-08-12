import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-metas-content',
  templateUrl: './metas-content.component.html',
  styleUrls: ['./metas-content.component.css']
})
export class MetasContentComponent implements OnInit {
  @Input() name;
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
