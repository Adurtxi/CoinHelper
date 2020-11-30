import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPurchase'
})

export class SearchPurchasePipe implements PipeTransform {

    transform(purchases, searchQuery: string): any {
        if (searchQuery == null || !purchases) {
            return purchases;
        }

        return purchases.filter(
            purchase => purchase.title.toLocaleLowerCase().includes(searchQuery));
    }
}