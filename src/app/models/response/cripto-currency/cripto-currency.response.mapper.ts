import { Injectable } from '@angular/core';
import { Currency } from '../../cripto-currency.model';
import { CurrencyResponse } from './cripto-currency.response';

@Injectable({
    providedIn: 'root'
})
export class CurrencyResponseMapper {
    map(currencyResponse: CurrencyResponse): Currency {
        const currency = new Currency();

        currency.id = currencyResponse.id;
        currency.name = currencyResponse.name;

        return currency;
    }
}