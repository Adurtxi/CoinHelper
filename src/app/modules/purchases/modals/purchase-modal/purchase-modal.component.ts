import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent implements OnInit {
  @Input('purchase') purchase;

  constructor(
    public modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {}

  closeModal(): void {
    this.modal.close('Adios');
  }
}
