import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[setFooter]' })
export class FooterDirective implements OnInit {
  color = 'transparent';
  @Input() setFooter!: string;
  constructor(private el: ElementRef<HTMLElement>) {
    el.nativeElement.style.height = '5px';
  }
  ngOnInit(): void {
    const dayNow = new Date('2019-10-30').getTime();
    const publishDate = new Date(this.setFooter).getTime();
    const dayFlew = Math.ceil((dayNow - publishDate) / 1000 / 3600 / 24);
    if (dayFlew < 7) {
      this.color = 'blue';
    } else if (dayFlew < 30) {
      this.color = 'green';
    } else if (dayFlew < 180) {
      this.color = 'yellow';
    } else this.color = 'red';

    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
