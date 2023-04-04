import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QnMenuModel } from '../../models';

@Component({
  selector: 'Qn-Toolbar',
  templateUrl: './qn-toolbar.component.html',
  styleUrls: ['./qn-toolbar.component.css']
})
export class QnToolbarComponent {
  @Input() title: string = "";
  @Input() lmenu: QnMenuModel[] = [];
  @Input() rmenu: QnMenuModel[] = [];

  @Output() iconClick = new EventEmitter<QnMenuModel>();

  onIconClick(menu: QnMenuModel) {
    this.iconClick.emit(menu);
  }
}
