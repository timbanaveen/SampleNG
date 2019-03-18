import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItem } from './model/ProductItem';

@Injectable({
  providedIn: 'root'
})
export class BiddingService {

  constructor() { }

  getProducts(): Observable<ProductItem[]> {
    return of(
      [
        {
          "product_id": "123",
          "image_url": "./images/apple-macbook.jpeg",
          "bid_time": "00:00:30",
          "bid_time_format": "HH:MM:SS",
          "bid_price": "$310",
          "bid_status": "open"
        },
        {
          "product_id": "124",
          "image_url": "./images/sony-head-phone.jpeg",
          "bid_time": "00:00:30",
          "bid_time_format": "HH:MM:SS",
          "bid_price": "$110",
          "bid_status": "open"
        },
        {
          "product_id": "125",
          "image_url": "./images/apple-watch.jpeg",
          "bid_time": "00:00:30",
          "bid_time_format": "HH:MM:SS",
          "bid_price": "$250",
          "bid_status": "closed"
        }
      ]
    );
  }
}
