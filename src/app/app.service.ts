import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  getWishlist(): Observable<any> {
    return this.httpClient.get('Http://localhost:3000/wishlist')
  }
}
