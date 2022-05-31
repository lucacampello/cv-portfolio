import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() {
    this.stopLoading();
  }

  loadingStatus: Subject<boolean> = new Subject();

  get getLoadingStatus() {
    return this.loadingStatus;
  }

  private setLoading(value: boolean) {
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.setLoading(true);
  }

  stopLoading() {
    this.setLoading(false);
  }
}
