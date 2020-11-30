import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();

  public confEnabled;

  constructor() { }

  ngOnInit(): void {
  }

  public updateConfEnabled(event): void {
    this.confEnabled = event;
  }

  public addCurrency(event): void {
    this.eventsSubject.next(event);
  }

}
