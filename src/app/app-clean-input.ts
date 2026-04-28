import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCleanInput]',
  standalone: true
})
export class CleanInputDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    let value: string = this.el.nativeElement.value;

    
    value = value.replace(/[^a-zA-Z0-9]/g, '');

    this.el.nativeElement.value = value;
  }
}