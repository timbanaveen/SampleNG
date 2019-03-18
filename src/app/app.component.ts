import { Component } from '@angular/core';
import { BiddingService } from './bidding.service';
import { ProductItem } from './model/ProductItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: ProductItem[];

  constructor(private biddingService: BiddingService) { }

  stringTrending = 'TRENDING';
  stringProduct = 'PRODUCTS';

  ngOnInit() {
    this.biddingService.getProducts().subscribe(
      values => { this.items = values}
    );
  }
}
