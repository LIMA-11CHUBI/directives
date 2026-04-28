import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPassword]',
  standalone: true
})
export class PasswordDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    const value: string = this.el.nativeElement.value;

    if (/\d/.test(value)) {
      this.setBorder('blue');
    } else if (value.length < 6) {
      this.setBorder('red');
    } else {
      this.setBorder('green');
    }
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }
}