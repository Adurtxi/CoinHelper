import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CryptoCurrency } from 'src/app/models/cripto-currency.model';
import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-new-purchase-modal',
  templateUrl: './new-purchase-modal.component.html',
  styleUrls: ['./new-purchase-modal.component.scss']
})
export class NewPurchaseModalComponent implements OnInit {
  public purchase: Purchase;
  public cCurrencies: CryptoCurrency[];

  constructor(
    public modal: NgbActiveModal,
  ) {
    this.purchase = new Purchase();
  }

  ngOnInit(): void {}

  onSubmitPurchase(purchaseForm): void {
    console.log(this.purchase);
  }

  closeModal(): void {
    this.modal.close(this.purchase);
  }

}
