import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-purchases-page',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesPageComponent implements OnInit {
  newPurchaseEventSubject: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  newPurchaseEvent(event): void {
    this.newPurchaseEventSubject.next(event);
  }
  
}
