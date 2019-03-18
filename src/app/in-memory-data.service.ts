import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
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
    ];
    return { items };
  }
}