import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  public async getCard(id: number): Promise<string> {
    const requestCardURL = `./assets/cards/${id}.png`;
    await fetch(requestCardURL);
    return requestCardURL;
  }

  public async getCards(): Promise<string[]> {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(await this.getCard(0));
    }
    return cards;
  }
}
