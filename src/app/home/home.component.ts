import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isViewApplicationForm: boolean = false;
  private myControl = new FormControl();
  private options: string[] = ['Call', 'SMS', 'WhatsApp', 'Email'];

  panelOpenState = false;
  
  constructor() { }

  ngOnInit() {
  }

  private toggleApplicatiionForm(): void {
    if (this.isViewApplicationForm) {
      this.isViewApplicationForm = false;
    } else {
      this.isViewApplicationForm = true;
    }
  }
}
