import { Component, OnInit, Input } from '@angular/core';
import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';
import { BuyPriceResponseMapper } from 'src/app/models/response/buy-price/buy-price.response.mapper';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {
  private eventsSubscription: Subscription;

  public buyPrices = [];
  public currencies = ['BTC-EUR', 'ETH-EUR', 'ZRX-EUR' , 'EOS-EUR'];

  @Input() confEnabled: string;
  @Input() events: Observable<string>;

  constructor(
    private coinbaseService: CoinbaseService,
    private buyPriceResponseMapper: BuyPriceResponseMapper
  ) { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((currency) => {
      this.currencies.push(currency);

      this.getBuyPrice(currency + '-EUR');
    });
    
    this.getBuyPrices();
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
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

  // Borrar criptomoneda
  public removeCriptoCurrency(id: string){
    const index = this.buyPrices.findIndex(b => b.id == id);

    this.buyPrices.splice(index, 1);
  }
}
