import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  public enlarged = false;
  @Input("cardURL") cardURL = '';
  @Input("location") location = '';
  @ViewChild('container') container?: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const mousedown = fromEvent(this.container?.nativeElement, 'mousedown');
    const mouseup = fromEvent(this.container?.nativeElement, 'mouseup');

    mousedown.subscribe(e => {
      const clickTimer = timer(200);
      mouseup.pipe(takeUntil(clickTimer)).subscribe(e => {
        this.enlarged = !this.enlarged;
      });
    });
  }
}
