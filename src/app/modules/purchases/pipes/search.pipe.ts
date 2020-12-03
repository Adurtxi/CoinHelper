import { Pipe, PipeTransform } from '@angular/core';

import { Purchase } from 'src/app/models/purchase.model';

@Pipe({
    name: 'searchPurchase'
})

export class SearchPurchasePipe implements PipeTransform {

    transform(purchases: Purchase[], searchQuery: string): any {
        if (searchQuery == null || !purchases) {
            return purchases;
        }

        return purchases.filter(
            purchase => purchase.title.toLocaleLowerCase().includes(searchQuery));
    }
}