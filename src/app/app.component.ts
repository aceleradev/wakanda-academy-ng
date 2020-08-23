import { Component, OnInit } from '@angular/core';
import { UserService } from './compartilhado/service/user/user.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '../../node_modules/@ng-idle/core';
import { Keepalive } from '../../node_modules/@ng-idle/keepalive';
import { User } from './compartilhado/interface/user';
import { TokenService } from './compartilhado/service/token/token.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Keepalive]
})
export class AppComponent implements OnInit {
  title = 'app';
  showHeader: boolean = false;
  idleState = 'Not started.';
  timedOut: boolean = false;
  lastPing?: Date = null;
  private idleTime: number = 900;

  constructor(
    private userService: UserService,
    private idle: Idle,
    private keepAlive: Keepalive,
    private tokenService: TokenService) {

  }

  ngOnInit(): void {

    if(this.tokenService.hasToken()) {
      this.callRenewToken();
    }

    this.idle.setIdle(30);

    this.idle.setTimeout(this.idleTime);

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

    setInterval(() => {
      if (this.tokenService.hasToken()) {
        console.log("O TOKEN " + this.tokenService.getToken() + " EXPIROU");
        this.callRenewToken();
        console.log("O NOVO TOKEN É: " + this.tokenService.getToken());
      }
    }, (28*60*100));


  }

  private callRenewToken() {
    this.tokenService.renewToken().subscribe((res) => {
      const token = res.body.token;
      const expTime = res.body.expiresAt;

      this.userService.setToken(token);
      this.tokenService.setTokenExpDate(expTime);
    });
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

}
