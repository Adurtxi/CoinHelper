import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewPurchaseModalComponent } from '../../modals/new-purchase-modal/new-purchase-modal.component';

@Component({
  selector: 'app-purchases-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class PurchasesLeftPanelComponent implements OnInit {
  @Output() newPurchaseEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {}

  public openNewPurchaseModal(){
    const modal = this.modalService.open(NewPurchaseModalComponent, { size: 'lg' });

    modal.result.then(
      (purchase) => this.newPurchaseEvent.emit(purchase)).catch((e: any) => console.log()
    );
  }

}
