import { Injectable } from '@angular/core';

import { Purchase } from '../../purchase.model';
import { PurchaseResponse } from './purchase.response';

@Injectable({
    providedIn: 'root'
})
export class PurchaseResponseMapper {
    map(purchaseResponse: PurchaseResponse): Purchase {
        const purchase = new Purchase();

        purchase.id = purchaseResponse.id;
        purchase.title = purchaseResponse.title;
        purchase.money = purchaseResponse.money;
        purchase.price = purchaseResponse.price;
        purchase.cCurrency = purchaseResponse.cCurrency
        purchase.cCurrencyQuantity = purchaseResponse.cCurrencyQuantity;
        purchase.fee = purchaseResponse.fee;

        return purchase;
    }
}