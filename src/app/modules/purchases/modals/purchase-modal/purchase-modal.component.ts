import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent implements OnInit {
  @Input('purchase') purchase: Purchase;

  constructor(
    public modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {}

  closeModal(): void {
    this.modal.close(this.purchase);
  }
}
