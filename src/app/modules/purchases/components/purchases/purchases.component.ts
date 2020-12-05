import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';

import { PurchaseModalComponent } from '../../modals/purchase-modal/purchase-modal.component';

import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  @Input() openNewPurchaseModalObservable: Observable<string>;
  @Input() newPurchaseEvent: Observable<Purchase>;

  public purchases: Purchase[] = [
    {
      'id': 1,
      'title': 'Compra BTC',
      'cCurrency': 'BTC-EUR',
      'cCurrencyQuantity': 0.0001,
      'money': 30,
      'price': 15000,
      'fee': 1.99,
    },
    {
      'id': 2,
      'title': 'Compra ETH',
      'cCurrency': 'ETH-EUR',
      'cCurrencyQuantity': 0.1000,
      'price': 500,
      'money': 500,
      'fee': 1.99,
    }
  ];

  public searchQuery: string;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.newPurchaseEvent.subscribe((purchase) => {
      this.purchases.unshift(purchase);
    });
  }

  public updateSearchQuery(event): void {
    this.searchQuery = event;
  }

  // Abrir modal de la compra
  public openPurchaseModal(purchase){
    const modal = this.modalService.open(PurchaseModalComponent);

    modal.componentInstance.purchase = purchase;

    modal.result.then(
      (purchase) => console.log(purchase)).catch((e: any) => console.log()
    );
  }

  public calculateProfit(purchase) {
  }
}
