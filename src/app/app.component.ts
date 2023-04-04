import { Component } from '@angular/core';
import { QnMenuModel } from './lib/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-Shop';
  
  lmenu: QnMenuModel[] = [
    {id:"l1", desc:"Menu", icon: "menu"}, {id:"l2", desc:"Shopping", icon: "shopping-cart"}
  ];

  rmenu: QnMenuModel[] = [
    {id:"r2", desc:"Search", icon: "search"}, {id:"r3", desc:"Add", icon: "add"}
  ];

  iClick(mnu: QnMenuModel) {
    console.log(mnu);
  }
}