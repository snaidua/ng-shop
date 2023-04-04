import { Component, Input } from '@angular/core';

@Component({
  selector: 'Qn-Page',
  templateUrl: './qn-page.component.html',
  styleUrls: ['./qn-page.component.css']
})
export class QnPageComponent {
  @Input() flex: string = "row";

  pageDir: string = "qn-page-" + this.flex;
}
