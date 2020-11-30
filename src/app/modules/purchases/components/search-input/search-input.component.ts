import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchQuery: string;

  constructor() {}

  ngOnInit(): void {}

  @Output() searchQueryEvent: EventEmitter<any> = new EventEmitter();

  filterActivity(): void {
    this.searchQueryEvent.emit(this.searchQuery);
  }

  resetInput() {
    this.searchQuery = '';

    this.searchQueryEvent.emit('');
  }
}
