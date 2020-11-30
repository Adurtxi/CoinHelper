import { Component, OnInit, Input } from '@angular/core';
import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';
import { BuyPriceResponseMapper } from 'src/app/models/response/buy-price/buy-price.response.mapper';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  public buyPrices = [];

  @Input() confEnabled: string;

  constructor(
    private coinbaseService: CoinbaseService,
    private buyPriceResponseMapper: BuyPriceResponseMapper
  ) { }

  ngOnInit(): void {
    this.getBuyPrices();
  }

  // Precios de las monedas
  private getBuyPrices(): any {
    const currencies = ['BTC-EUR', 'ETH-EUR', 'ZRX-EUR' , 'EOS-EUR'];

    currencies.forEach(c => this.coinbaseService.getBuyPrice(c).subscribe(
        buyPrice => this.buyPrices.push(this.buyPriceResponseMapper.map(buyPrice, c)),
        err => console.error(err)
      ));
  }

  // Borrar criptomoneda
  public removeCriptoCurrency(id: string){
    const index = this.buyPrices.findIndex(b => b.id == id);

    this.buyPrices.splice(index, 1);
  }
}
