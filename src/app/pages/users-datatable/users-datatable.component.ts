import { Component } from '@angular/core';
import { Config } from 'datatables.net';
import { DataService } from '../../services/data.service';
import { UserRoot } from '../../app.models';

@Component({
  selector: 'app-users-datatable',
  templateUrl: './users-datatable.component.html',
  styleUrl: './users-datatable.component.css'
})
export class UsersDatatableComponent {

  dtOptions: Config = {};
  userList: UserRoot = new UserRoot();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.userList = data;
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
