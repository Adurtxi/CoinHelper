import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PurchasesRoutingModule } from './purchases-routing.module';

import { PurchasesPageComponent } from './page/purchases.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PurchasesComponent } from './components/purchases/purchases.component';

import { SearchPurchasePipe } from './pipes/search.pipe';

import { PurchaseModalComponent } from './modals/purchase-modal/purchase-modal.component';
import { NewPurchaseModalComponent } from './modals/new-purchase-modal/new-purchase-modal.component';
import { PurchasesLeftPanelComponent } from './components/left-panel/left-panel.component';

@NgModule({
  declarations: [
    PurchasesPageComponent,
    SearchInputComponent,
    PurchasesComponent,
    SearchPurchasePipe,
    PurchasesLeftPanelComponent,
    PurchaseModalComponent,
    NewPurchaseModalComponent,
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    FormsModule
  ]
})
export class PurchasesModule { }
