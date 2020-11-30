import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PurchasesRoutingModule } from './purchases-routing.module';


import { PurchasesPageComponent } from './page/purchases.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PurchasesComponent } from './components/purchases/purchases.component';

import { SearchPurchasePipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    PurchasesPageComponent,
    SearchInputComponent,
    PurchasesComponent,
    SearchPurchasePipe,
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    FormsModule
  ]
})
export class PurchasesModule { }
