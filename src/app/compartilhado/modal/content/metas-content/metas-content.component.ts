import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-metas-content',
  templateUrl: './metas-content.component.html',
  styleUrls: ['./metas-content.component.css']
})
export class MetasContentComponent implements OnInit {
  @Input() name;
  metasForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    this.metasForm = this.formbuilder.group({
      metaHoras: ["", 
        [
          Validators.required
        ]
      ],
      metaJornada: ["", 
        [
          Validators.required
        ]
      ]
    });
  }

  submit() {
    console.log("enviou")
  }

}
