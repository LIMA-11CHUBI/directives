import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHigh]',
  standalone: true
})
export class HighDirective {

  private isActive = false;
  private defaultBg = '';

  constructor(private el: ElementRef) {
    this.defaultBg = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('input')
  onInput() {
    const value: string = this.el.nativeElement.value;

    if (!value) {
      this.setBorder('gray');
    } else if (value.length < 5) {
      this.setBorder('red');
    } else {
      this.setBorder('green');
    }
  }

  @HostListener('click')
  onClick() {
    this.isActive = !this.isActive;

    this.el.nativeElement.style.backgroundColor =
      this.isActive ? 'yellow' : this.defaultBg;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }
}