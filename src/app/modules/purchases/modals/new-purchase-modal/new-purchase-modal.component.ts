import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';

import { CryptoCurrency } from 'src/app/models/cripto-currency.model';
import { CryptoCurrencyResponseMapper } from 'src/app/models/response/cripto-currency/cripto-currency.response.mapper';
import { Purchase } from 'src/app/models/purchase.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-purchase-modal',
  templateUrl: './new-purchase-modal.component.html',
  styleUrls: ['./new-purchase-modal.component.scss']
})
export class NewPurchaseModalComponent implements OnInit {
  public purchase: Purchase;
  public cCurrencies: CryptoCurrency[];

  public fCurrency = 0;

  constructor(
    private coinbaseService: CoinbaseService,
    private cCurrencyResponseMapper: CryptoCurrencyResponseMapper,
    public modal: NgbActiveModal,
  ) {
    this.purchase = new Purchase();
   }

  ngOnInit(): void {
    this.getCryptoCurrencies();
  }

  private getCryptoCurrencies(): void {
    this.coinbaseService.getCryptoCurrencies().subscribe(
      cCurrencies => {
        this.cCurrencies = cCurrencies.map(a => this.cCurrencyResponseMapper.map(a));

        this.purchase.cCurrency = this.cCurrencies[0]?.id;
      },
      err => console.error(err)
    );
  }

  public calcAll(): void {
    const money = this.purchase.money;
    const price = this.purchase.price;

    if (money != undefined && price != undefined){
      this.purchase.fee = +this.cFee(money).toFixed(2);
      this.fCurrency = +this.cFinalCurrency(money, this.purchase.fee).toFixed(2);
      this.purchase.cCurrencyQuantity = +this.cFinalCriptoCurrency(this.fCurrency, price).toFixed(10);
    }
  }

  // Calcular comisión
  private cFee(money: number) {
    return (money == undefined) ? 0 : (money <= 10) ? 0.99 : (money <= 25) ? 1.49 : (money <= 50) ? 1.99 : money * 0.0384;
  }

  // Calcular cantidad de euros después de quitar la comisión
  private cFinalCurrency(money: number, fee: number) : number {
    return money - fee;
  }

  // Calcular cantidad de criptomonedas después de quitar la comisión
  private cFinalCriptoCurrency(fCurrency: number, price: number) : number {
    return fCurrency / price;
  }

  public onSubmitPurchase(purchaseForm): void {
    this.modal.close(this.purchase);
  }

  public closeModal(): void {
    this.modal.close(null);
  }

}
