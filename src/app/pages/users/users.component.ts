import { Component, QueryList, ViewChildren } from '@angular/core';
import { UserRoot, User } from '../../app.models';
import { DataService } from '../../services/data.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/table-sort.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  page = 1;
  pageSize = 4;

  constructor(private dataService: DataService) { }

  userList: UserRoot = new UserRoot();
  pagedUsers: User[] = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader<User>> = new QueryList<NgbdSortableHeader<User>>();

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.userList = data;
      this.refreshUsers();
    });
  }

  refreshUsers() {
    this.pagedUsers = this.userList.users.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  onSort({ column, direction }: SortEvent<User>) {

    const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
    // resetting other headers
    for (const header of this.headers) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }

    // sorting users
    if (direction === '' || column === '') {
      this.userList.users = this.userList.users;
    } else {
      this.userList.users = [...this.userList.users].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }

    this.refreshUsers();
  }

}