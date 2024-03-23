import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  constructor(private _element: ElementRef) {
    this._element.nativeElement.style.color = '#fff';
  }

  // on mouseEnters  it changes the text to red
  @HostListener('mouseenter') mouseEnter() {
    this.changeColour('red');
  }

  // on mouseleave it changes the text to white
  @HostListener('mouseleave')
  mouseLeave() {
    this.changeColour('white');
  }

  changeColour(color: string) {
    this._element.nativeElement.style.color = color;
  }
}
