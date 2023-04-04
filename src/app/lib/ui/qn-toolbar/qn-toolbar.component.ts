import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Qn-Toolbar',
  templateUrl: './qn-toolbar.component.html',
  styleUrls: ['./qn-toolbar.component.css']
})
export class QnToolbarComponent {
  @Input() title: string = "";
  @Input() icons: string[] = [];

  @Output() iconClick = new EventEmitter<string>();

  onIconClick(icon: string) {
    this.iconClick.emit(icon);
  }
}
