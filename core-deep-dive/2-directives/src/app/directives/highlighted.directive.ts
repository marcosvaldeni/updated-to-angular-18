import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
  standalone: false
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter<boolean>();


  constructor() {
    console.log('Directive created...')
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return 'true';
  // }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);0
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
