import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PurchaseModalComponent } from '../../modals/purchase-modal/purchase-modal.component';

import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  public purchases: Purchase[] = [
    {
      'title': 'Compra BTC',
      'cCurrencyQuantity': 0.0001,
      'money': 30,
      'price': 15000,
      'fee': 1.99,
    },
    {
      'title': 'Compra ETH',
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

  ngOnInit(): void {}

  public updateSearchQuery(event): void {
    this.searchQuery = event;
  }

  // Abrir modal de la compra
  public openPurchase(purchase){
    const modal = this.modalService.open(PurchaseModalComponent);

    modal.componentInstance.purchase = purchase;

    modal.result.then(
      (purchase) => console.log(purchase)).catch((e: any) => console.log()
    );
  }

  public calculateProfit(purchase) {
  }

  // Calcular cantidad de criptomonedas después de quitar la comisión
  private cFinalCriptoCurrency(price: number, money: number) {
    return (money - this.cFee(money)) / price;
  }

  // Calcular comisión
  private cFee(money: number) {
    return (money <= 10) ? 0.99 : (money <= 25) ? 1.49 : (money <= 50) ? 1.99 : money * 0.0384;
  }

}
