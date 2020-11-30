import { Component, OnInit } from '@angular/core';

import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';
import { CurrencyResponseMapper } from 'src/app/models/response/cripto-currency/cripto-currency.response.mapper';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  public currencies;

  constructor(
    private coinbaseService: CoinbaseService,
    private currencyResponseMapper: CurrencyResponseMapper
  ) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  private getCurrencies(): any {
    this.coinbaseService.getCurrencies().subscribe(
      currencies => this.currencies = currencies.map(a => this.currencyResponseMapper.map(a)),
      err => console.error(err)
    );
  }
}
