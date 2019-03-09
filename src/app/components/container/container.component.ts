import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service';
import { ApiService } from '../services/api.service';
import { SelectItem } from 'primeng/api';
import {Insurance} from '../../typing/insurance';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  insuranceList = [];
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(
    private api: ApiService,
    private link: LinkService
  ) { }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];

    this.api.getData().subscribe(
      res => this.insuranceList = res.map(i => this.link.initializeDataInsurance(i)),
      err => console.error(err));
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
