import { Component, QueryList, ViewChildren } from '@angular/core';
import { ProductRoot, Product } from '../../app.models';
import { DataService } from '../../services/data.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/table-sort.directive';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  page = 1;
	pageSize = 4;

  constructor(private dataService: DataService) { }

  productList: ProductRoot = new ProductRoot();
  pagedProducts: Product[] = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader<Product>> = new QueryList<NgbdSortableHeader<Product>>();

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => {
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

    const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
		// resetting other headers
		for (const header of this.headers) {
			if (header.sortable !== column) {
				header.direction = '';
			}
		}

    // sorting products
    if (direction === '' || column === '') {
      this.productList.products = this.productList.products;
    } else {
      this.productList.products = [...this.productList.products].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }

    this.refreshProducts();
	}

}
