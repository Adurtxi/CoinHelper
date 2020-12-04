import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';
import { CryptoCurrencyResponseMapper } from 'src/app/models/response/cripto-currency/cripto-currency.response.mapper';
import { CryptoCurrency } from 'src/app/models/cripto-currency.model';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Output() confEnabledEvent: EventEmitter<any> = new EventEmitter();
  @Output() addCurrencyEvent: EventEmitter<any> = new EventEmitter();
  
  public cCurrencies: CryptoCurrency[];
  public confEnabled: boolean;
  public sCryptoCurrency: string;

  constructor(
    private coinbaseService: CoinbaseService,
    private cCurrencyResponseMapper: CryptoCurrencyResponseMapper
  ) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  private getCurrencies(): any {
    this.coinbaseService.getCryptoCurrencies().subscribe(
      cCurrencies => {
        this.cCurrencies = cCurrencies.map(a => this.cCurrencyResponseMapper.map(a));

        this.sCryptoCurrency = this.cCurrencies[0]?.id;
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
