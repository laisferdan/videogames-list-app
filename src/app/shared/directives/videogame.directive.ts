import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
  
@Directive({
    selector: '[videogameDirective]',
  })
  export class VideogameDirective implements OnChanges {
    @Input()
    videogameDirective: boolean | undefined;
  
    constructor(private el: ElementRef) {
      console.log(this.videogameDirective);
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      if (this.videogameDirective) {
        this.el.nativeElement.style.backgroundColor = '#4aba91';
      } else {
        this.el.nativeElement.style.backgroundColor = '';
      }
    }
  }