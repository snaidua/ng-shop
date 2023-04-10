import { Component } from '@angular/core';
import { QnMenuModel } from './lib/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-Shop';
  
  constructor(private router: Router) {}

  lmenu: QnMenuModel[] = [
    
  ];

  rmenu: QnMenuModel[] = [
    {id:"r1", desc:"Shopping", icon: "shopping-cart"}
  ];

  iClick(mnu: QnMenuModel) {
    if (mnu.id == "r1") {
      this.router.navigate(["cart"]);
    }
  }
}