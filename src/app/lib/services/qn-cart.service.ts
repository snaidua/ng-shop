import { Injectable } from '@angular/core';
import { QnProductModel, QnCartModel } from './../models';

@Injectable({
  providedIn: 'root'
})
export class QnCartService {
  public cart: QnCartModel[] = [];

  constructor() { }

  getCart(): QnCartModel[] {
    return this.cart;
  }

  getItemIndex(id: string): number {
    return ( this.cart.findIndex((prod) => prod.id === id) );
  }

  addToCart(prod: QnProductModel, qty: number) {
    const item: QnCartModel = {
      id: prod.id,
      name: prod.name,
      uom: prod.uom,
      qty: qty,
      rate: prod.rate
    }

    var idx = this.getItemIndex(item.id);
    if (idx >= 0) {
      this.cart[idx].qty += qty 
    }
    else {
      this.cart.push(item);
    }
  }

  delFromCart(id: string) {
    var idx = this.getItemIndex(id);
    if (idx >= 0) {
      this.cart.splice(idx,1);
    }
  }

}
