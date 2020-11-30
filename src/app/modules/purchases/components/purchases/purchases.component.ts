import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  public purchases = [
    {
      'title': 'Compra BTC',
      'quantity': '0.0001',
      'price': 15000,
    },
    {
      'title': 'Compra ETH',
      'quantity': '0.1000',
      'price': 500,
    }
  ];

  public searchQuery: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateSearchQuery(event): void {
    this.searchQuery = event;
  }

}
