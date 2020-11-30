import { Injectable } from '@angular/core';
import { BuyPrice } from '../../buy-price.model';
import { BuyPriceResponse } from './buy-price.response';

@Injectable({
    providedIn: 'root'
})
export class BuyPriceResponseMapper {
    map(buyPriceResponse: BuyPriceResponse, criptoCurrency: string): BuyPrice {
        const buyPrice = new BuyPrice();

        
        buyPrice.id = criptoCurrency;
        buyPrice.criptoCurrency = buyPriceResponse.base;
        buyPrice.currency = buyPriceResponse.currency;
        buyPrice.amount = buyPriceResponse.amount;

        return buyPrice;
    }
}