import { Component, QueryList, ViewChildren } from '@angular/core';
import { OnlineSiteVM } from '../../app.models';
import { DataService } from '../../services/data.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/table-sort.directive';
import { TableSortService } from '../../services/table-sort.service';

@Component({
  selector: 'app-online-site',
  templateUrl: './online-site.component.html',
  styleUrl: './online-site.component.css'
})
export class OnlineSiteComponent {

  constructor(private dataService: DataService, private tableSortService: TableSortService) { }
  modelList:Array<OnlineSiteVM> = [];
  modelListPaged:Array<OnlineSiteVM> = [];
  page = 1;
  pageSize = 10;

  ngOnInit(): void {
    this.dataService.getOnlineSites().subscribe(data => {
      this.modelList = data;
      //this.refreshOnlineSites();
      this.onPageSiteList();
    });
  }

  @ViewChildren(NgbdSortableHeader) siteListHeaders: QueryList<NgbdSortableHeader<any>> = new QueryList<NgbdSortableHeader<any>>();

  isStringNullOrEmpty(value: string): boolean {
    return value == null || value == '' || value == undefined;
  }

  StatusIdStr(statusId: number): string {
    switch (statusId) {
      case 0:
        return 'Active';
      case -1:
        return 'Inactive';
      default:
        return 'Unknown';

    }
  }

  onPageSiteList() {
    this.modelListPaged = this.modelList.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  onSortSiteList({ column, direction }: SortEvent<OnlineSiteVM>) {
    this.modelList = this.tableSortService.sortList(this.modelList, column, direction);
    this.onPageSiteList();
  }
}
