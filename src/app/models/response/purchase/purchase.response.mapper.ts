import { Injectable } from '@angular/core';

import { Purchase } from '../../purchase.model';
import { PurchaseResponse } from './purchase.response';

@Injectable({
    providedIn: 'root'
})
export class PurchaseResponseMapper {
    map(purchaseResponse: PurchaseResponse): Purchase {
        const purchase = new Purchase();

        purchase.title = purchaseResponse.title;
        purchase.money = purchaseResponse.money;
        purchase.price = purchaseResponse.price;
        purchase.cCurrencyQuantity = purchaseResponse.cCurrencyQuantity;
        purchase.fee = purchaseResponse.fee;

        return purchase;
    }
}