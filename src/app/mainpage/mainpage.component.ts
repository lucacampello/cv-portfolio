import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinnerService.stopLoading();
  }

}
