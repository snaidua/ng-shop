import { Component, OnInit } from '@angular/core';
import { QnCartService, QnProductService } from './../../lib/services';
import { QnProductModel } from 'src/app/lib/models';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent implements OnInit {

  prods: QnProductModel[] = [];

  constructor(private ps: QnProductService, private cs: QnCartService) {

  }

  ngOnInit(): void {
    this.prods = this.ps.getProducts();
  }

  UpdateCart(prod: QnProductModel) {
    this.cs.addToCart(prod, 1);
  }
}
