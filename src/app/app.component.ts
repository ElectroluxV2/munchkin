import { Component } from '@angular/core';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: string[] = [];

  constructor(public cardService: CardService) {
    cardService.getCards().then(c => this.cards = c);
  }
}
