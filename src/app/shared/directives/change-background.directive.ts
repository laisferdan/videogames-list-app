import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeBackgroundDirective]',
})
export class ChangeBackgroundDirective {
  constructor(private el: ElementRef<HTMLParagraphElement>) {
    console.log(el);
    
    this.el.nativeElement.style.backgroundColor = '';

    el.nativeElement.addEventListener('mouseover', () => {
      this.el.nativeElement.style.backgroundColor = '#158154';
    })

    el.nativeElement.addEventListener('mouseleave', () => {
      this.el.nativeElement.style.backgroundColor = '';
    })

  }
}