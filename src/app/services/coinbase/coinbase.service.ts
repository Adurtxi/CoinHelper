import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data/data.service';

@Injectable({
    providedIn: 'root'
})
export class CoinbaseService {
    constructor(
        private dataService: DataService
    ) { }

    getCurrencies(): Observable<any> {
        const url = 'https://api.pro.coinbase.com/currencies';

        return new Observable((obs) => {
            this.dataService.getCoinbase(url).subscribe(
                currencies => obs.next(currencies),
                err => obs.error(err)
            );
        });
    }

    getBuyPrice(currency: String): Observable<any> {
        const url = 'https://api.coinbase.com/v2/prices/' + currency + '/buy';

        return new Observable((obs) => {
            this.dataService.getCoinbase(url).subscribe(
                buyPrice => obs.next(buyPrice['data']),
                err => obs.error(err)
            );
        });
    }
}
