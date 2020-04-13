import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) { 
    console.log("Directiva llamada");
  }

  @Input('appResaltado') color: string;

  @HostListener('mouseenter') mouseEnter() {
    console.log(this.color);
    this.resaltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar(null);
  }

  private resaltar( color: string ) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
