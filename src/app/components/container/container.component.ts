import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { InsuranceModel } from '../../models/insurance.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  insuranceList = [];
  loading = true;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];

    this.api.getData().subscribe(
      res => {
        this.insuranceList = res.map(insurance => new InsuranceModel(insurance));
        this.loading = false;
        },
      err => { console.error(err); }
    );
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
