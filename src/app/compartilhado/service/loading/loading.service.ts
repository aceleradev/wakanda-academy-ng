import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import { startWith } from 'rxjs/operators';
import { Loading } from '../../loading/loading/loading.enum';

@Injectable({providedIn:"root"})
export class LoadingService {

    private loadingSubject = new BehaviorSubject<Loading>(Loading.stopped);

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