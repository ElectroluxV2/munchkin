import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bottomCards: string[] = [];
  topCards: string[] = [];
  leftCards: string[] = [];
  rightCards: string[] = [];

  constructor(public cardService: CardService) {
    cardService.getCards().then(c => this.bottomCards = c);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
