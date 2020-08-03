import { Component, OnInit } from '@angular/core';
import { UserService } from './compartilhado/service/user/user.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '../../node_modules/@ng-idle/core';
import { Keepalive } from '../../node_modules/@ng-idle/keepalive';
import { User } from './compartilhado/interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Keepalive]
})
export class AppComponent implements OnInit {
  title = 'app';
  protected showHeader: boolean = false;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(
    private userService: UserService,
    private idle: Idle,
    private keepAlive: Keepalive) {

  }

  ngOnInit(): void {

    // // sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(5);

    // // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(5);

    // // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      this.userService.logout();
      alert("Você foi desconectado por inatividade");
      // this.router.navigate(['/']);
    });

    this.idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!'
      if (!this.showHeader) {
        this.idle.stop();
      }
      console.log(this.idleState);
      // this.childModal.show();
    });

    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });

    // // Sets the ping interval to 15 seconds
    this.keepAlive.interval(15);

    this.keepAlive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();

    this.userService.getUser().subscribe((user => {
      this.showHeader = this.userService.hasUser(user);
      if (this.userService.hasUser(user)) {
        this.reset();
      } else {
        this.idle.stop();
      }
    }));
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

}
