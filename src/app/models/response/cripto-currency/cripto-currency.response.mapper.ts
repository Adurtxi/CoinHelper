import { Injectable } from '@angular/core';

import { CryptoCurrency } from '../../cripto-currency.model';
import { CryptoCurrencyResponse } from './cripto-currency.response';

@Injectable({
    providedIn: 'root'
})
export class CryptoCurrencyResponseMapper {
    map(currencyResponse: CryptoCurrencyResponse): CryptoCurrency {
        const cCurrency = new CryptoCurrency();

        cCurrency.id = currencyResponse.id;
        cCurrency.name = currencyResponse.name;

        return cCurrency;
    }
}