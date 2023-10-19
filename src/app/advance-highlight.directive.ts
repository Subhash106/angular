import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAdvanceHighlight]',
})
export class AdvanceHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    this.backgroundColor = this.defaultColor;
  }
}
