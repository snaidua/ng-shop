import { Injectable } from '@angular/core';
import { QnProductModel } from './../models';

@Injectable({
  providedIn: 'root'
})
export class QnProductService {

  products: QnProductModel[] = [];

  constructor() {
    this.products = [
      {id: "P001", name: "COMPUTER", uom: "NOS", rate: 20000},
      {id: "P002", name: "PRINTER", uom: "NOS", rate: 3000},
      {id: "P003", name: "SCANNER", uom: "NOS", rate: 7000},
      {id: "P004", name: "KEYBOARD", uom: "NOS", rate: 250},
      {id: "P005", name: "MOUSE", uom: "NOS", rate: 100}
    ]
  }

  getProducts(): QnProductModel[]   {
    return this.products;
  }

  getProduct(id: string): QnProductModel {
    const idex = this.products.findIndex((prod) => { prod.id === id });
    return (this.products[idex]);
  }

}
