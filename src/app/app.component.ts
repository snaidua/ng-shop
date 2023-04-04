import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-Shop';
  icons = ["home", "search", "mins"];

  iClick(ico: string) {
    console.log(ico);
  }
}
