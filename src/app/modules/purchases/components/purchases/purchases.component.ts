import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';

import { PurchaseModalComponent } from '../../modals/purchase-modal/purchase-modal.component';

import { Purchase } from 'src/app/models/purchase.model';
import { BuyPriceResponseMapper } from 'src/app/models/response/buy-price/buy-price.response.mapper';
import { BuyPrice } from 'src/app/models/buy-price.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  @Input() openNewPurchaseModalObservable: Observable<string>;
  @Input() newPurchaseEvent: Observable<Purchase>;

  public buyPrices: BuyPrice[] = [];

  public currencies = ['BTC-EUR', 'ETH-EUR', 'ZRX-EUR' , 'EOS-EUR'];

  public purchases: Purchase[] = [
    {
      'id': 1,
      'title': 'Compra BTC',
      'cCurrency': 'BTC',
      'cCurrencyQuantity': 0.00187,
      'money': 30,
      'price': 15000,
      'fee': 1.99,
    },
    {
      'id': 2,
      'title': 'Compra ETH',
      'cCurrency': 'ETH',
      'cCurrencyQuantity': 1.25,
      'price': 400,
      'money': 500,
      'fee': 19.18,
    }
  ];

  public searchQuery: string;

  constructor(
    private coinbaseService: CoinbaseService,
    private buyPriceResponseMapper: BuyPriceResponseMapper,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.newPurchaseEvent.subscribe((purchase: Purchase) => {
      this.purchases.unshift(purchase);
    });

    this.getBuyPrices();
  }

  // Precios de las monedas
  private getBuyPrices(): any {
    this.currencies.forEach(c => this.getBuyPrice(c));
  }

  private getBuyPrice(currency): void {
    this.coinbaseService.getBuyPrice(currency).subscribe(
      buyPrice => this.buyPrices.push(this.buyPriceResponseMapper.map(buyPrice, currency)),
      err => console.error(err)
    )
  }

  public updateSearchQuery(event): void {
    this.searchQuery = event;
  }

  // Abrir modal de la compra
  public openPurchaseModal(purchase: Purchase){
    const modal = this.modalService.open(PurchaseModalComponent);

    modal.componentInstance.purchase = purchase;

    modal.result.then(
      (purchase) => console.log(purchase)).catch((e: any) => console.log()
    );
  }

  public calculateProfit(purchase: Purchase) {
    const priceIndex = this.buyPrices.findIndex((b) => b.id == purchase.cCurrency + '-EUR');

    if (priceIndex != -1) {
      const price = this.buyPrices[priceIndex].amount;

      const currentMoney = ((purchase.cCurrencyQuantity * price) - purchase.fee);

      return (currentMoney - purchase.money).toFixed(2);
    } 
    
    else {
      return "Calculando....";
    }
  }
}
