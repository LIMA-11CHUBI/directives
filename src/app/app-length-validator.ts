import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLength]',
  standalone: true
})
export class LengthDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    const value: string = this.el.nativeElement.value;

    if (value.length < 3) {
      this.setBorder('red');
    } else if (value.length <= 6) {
      this.setBorder('orange');
    } else {
      this.setBorder('green');
    }
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }
}