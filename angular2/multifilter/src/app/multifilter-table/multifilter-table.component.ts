import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-multifilter-table',
  templateUrl: './multifilter-table.component.html',
  styleUrls: ['./multifilter-table.component.css']
})
export class MultifilterTableComponent implements OnInit {
  masterData: any[];
  displayData: any[];
  filterAttributes: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.masterData = this.dataService.fetchData();
    this.displayData = this.masterData;
    this.filterAttributes = {
      Article: "",
      Category: "",
      Classification: ""
    };
  }

  filter() {
    this.displayData = this.masterData.filter((art) => {
      let flag = true;
      for(let attr in this.filterAttributes) {
        if(!art[attr].startsWith(this.filterAttributes[attr])) {
          flag = false;
        }
      }
      return flag;
    });
  }

}
