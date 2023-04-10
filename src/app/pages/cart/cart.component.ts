import { Component, OnInit } from '@angular/core';
import { QnCartModel, QnProductModel } from 'src/app/lib/models';
import { QnCartService } from 'src/app/lib/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {

  cart: QnCartModel[] = [];

  constructor(private cs: QnCartService) {

  }

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }

  UpdateCart(prod: QnProductModel) {
    this.cs.delFromCart(prod.id);
  }
}
