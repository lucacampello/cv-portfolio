import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading: boolean = true;

  loadingSubscription: Subscription;

  constructor(private spinnerService: SpinnerService) {
    this.loadingSubscription = this.spinnerService.getLoadingStatus.subscribe((value) => {
      this.isLoading = value;
    })
  }

  ngOnInit(): void {
  }

}
