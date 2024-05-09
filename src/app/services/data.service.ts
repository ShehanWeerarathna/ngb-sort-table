import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRoot, UserRoot } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductRoot> {
    return this.http.get<ProductRoot>(`${this.baseUrl}/products`);
  } 

  getUsers(): Observable<UserRoot> {
    return this.http.get<UserRoot>(`${this.baseUrl}/users`);
  }

}
