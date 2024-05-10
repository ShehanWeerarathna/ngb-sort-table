import { Component, QueryList, ViewChildren } from '@angular/core';
import { ProductRoot, Product } from '../../app.models';
import { DataService } from '../../services/data.service';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../directives/table-sort.directive';
import { TableSortService } from '../../services/table-sort.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  page = 1;
  pageSize = 4;

  constructor(
    private dataService: DataService,
    private tableSortService: TableSortService
  ) {}

  productList: ProductRoot = new ProductRoot();
  pagedProducts: Product[] = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<
    NgbdSortableHeader<Product>
  > = new QueryList<NgbdSortableHeader<Product>>();

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.productList = data;
      this.refreshProducts();
    });
  }

  refreshProducts() {
    this.pagedProducts = this.productList.products.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  onSort({ column, direction }: SortEvent<Product>) {
    this.productList.products = this.tableSortService.sortList(
      this.productList.products,
      column,
      direction
    );

    this.refreshProducts();
  }
}
