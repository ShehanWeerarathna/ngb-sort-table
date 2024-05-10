import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSortService {

  sortList<T>(list: T[], column: keyof T | '', direction: string): T[] {
    if (column === '') {
      return list;
    } else {
      return [...list].sort((a, b) => {
        if (a[column] === null) {
          return direction === 'asc' ? -1 : 1;
        }
        else if (b[column] === null) {
          return direction === 'asc' ? 1 : -1;
        }
        else if (a[column] === b[column]) {
          return 0;
        }
        else {
          let x: any;
          let y: any;
          if (typeof a[column] === 'string' && typeof b[column] === 'string') {
            x = String(a[column]).toLowerCase();
            y = String(b[column]).toLowerCase();
          } else {
            x = a[column];
            y = b[column];
          }
          const res = (x ?? a[column]) < (y ?? b[column]) ? 1 : -1;
          return direction === 'asc' ? -res : res;
        }
      });
    }
  }
}
