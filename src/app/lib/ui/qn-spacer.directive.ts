import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Qn-Spacer]'
})
export class QnSpacerDirective {

  constructor(private el: ElementRef, private r2: Renderer2) {
    this.r2.setStyle(this.el.nativeElement, "flex", "1 1 auto");
  }

}
