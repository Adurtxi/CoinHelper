import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';
import { CurrencyResponseMapper } from 'src/app/models/response/cripto-currency/cripto-currency.response.mapper';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Output() confEnabledEvent: EventEmitter<any> = new EventEmitter();
  @Output() addCurrencyEvent: EventEmitter<any> = new EventEmitter();
  
  public currencies;
  public confEnabled: boolean;
  public sCurrency: string;

  constructor(
    private coinbaseService: CoinbaseService,
    private currencyResponseMapper: CurrencyResponseMapper
  ) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  private getCurrencies(): any {
    this.coinbaseService.getCurrencies().subscribe(
      currencies => {
        this.currencies = currencies.map(a => this.currencyResponseMapper.map(a));

        this.sCurrency = this.currencies[0]?.id;
      },
      err => console.error(err)
    );
  }

  // Habilitar la configuración
  public enableConf() {
    this.confEnabled = !this.confEnabled;

    this.confEnabledEvent.emit(this.confEnabled);
  }

  public addCurrency(currencyEvent): void {
    this.addCurrencyEvent.emit(currencyEvent);
  }
}
