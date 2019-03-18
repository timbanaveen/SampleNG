import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../model/ProductItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: ProductItem;

  constructor() { }

  ngOnInit() {
    //TODO: start timer here and fetch value for each product
  }

}
