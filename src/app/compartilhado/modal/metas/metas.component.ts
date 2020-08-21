import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MetasContentComponent } from '../content/metas-content/metas-content.component';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(MetasContentComponent);
    modalRef.componentInstance.name = 'World';
  }

}
