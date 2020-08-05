import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../service/alert/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;
  title: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            message.title = "Sucesso!";
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            message.title = "Ops!";
            break;
          case 'info':
            message.cssClass = 'alert alert-danger';
            message.title = "Sucesso!";
            break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
