import { Component, OnInit } from '@angular/core';
import { CoinbaseService } from 'src/app/services/coinbase/coinbase.service';
import { BuyPriceResponseMapper } from 'src/app/models/response/buy-price/buy-price.response.mapper';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  public buyPrices = [];

  constructor(
    private coinbaseService: CoinbaseService,
    private buyPriceResponseMapper: BuyPriceResponseMapper
  ) { }

  ngOnInit(): void {
    this.getBuyPrices();
  }

  private getBuyPrices(): any {
    const currencies = ['BTC-EUR', 'ETH-EUR'];

    currencies.forEach(c => this.coinbaseService.getBuyPrice(c).subscribe(
        buyPrice => this.buyPrices.push(this.buyPriceResponseMapper.map(buyPrice)),
        err => console.error(err)
      ));
  }
}
