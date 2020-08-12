import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Observable, throwError, } from "rxjs";
import { TokenService } from "../service/token/token.service";
import { catchError, flatMap, tap } from "rxjs/operators";

import * as environment from '../../../environments/environment.js';
import { UserService } from "../service/user/user.service";

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private tokenService: TokenService,
        private http: HttpClient,
        private userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent |
            HttpHeaderResponse |
            HttpProgressEvent |
            HttpResponse<any> |
            HttpUserEvent<any>> {

        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.tokenService.getToken()}`,
            },
        });

        return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
            if (error.status == 401) {
                this.http.post<any>(environment.wakanda.wakander.auth.renew.path,
                    { "token": this.tokenService.getToken() }, { observe: "response" }).pipe(tap((res: HttpResponse<any>) => {
                        const authToken = res.body.token;
                        this.userService.setToken(authToken);
                        return next.handle(this.injectToken(req));
                    }));
            } else {
                return next.handle(req);
            }
        }));
    }

    injectToken(req: HttpRequest<any>) {
        const token = this.tokenService.getToken();
        return req.clone({
            setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.tokenService.getToken()}`,
            },
        });
    }
}