import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { startWith } from 'rxjs/operators';
import { Loading } from '../../loading/loading/loading.enum';

@Injectable({providedIn:"root"})
export class LoadingService {

    loadingSubject = new Subject<Loading>();

    getLoading () {
        return this.loadingSubject
        .asObservable()
        .pipe(startWith(Loading.stopped));
    }

    start() {
        this.loadingSubject.next(Loading.loading);
    }

    stop() {
        this.loadingSubject.next(Loading.stopped);
    }
}