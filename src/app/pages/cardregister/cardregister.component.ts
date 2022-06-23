import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-cardregister',
  templateUrl: './cardregister.component.html',
  styleUrls: ['./cardregister.component.css']
})
export class CardregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  card: CardModel = new CardModel();
  dataCard: CardModel[] = [
    {
      cardTitle: "Título 1",
      description: "Descripción 1",
      button: "Boton 1",
      url: "data:image/jpeg;base64,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"
    }
  ]
  addCard(card: CardModel) {
  this.dataCard.push(Object.assign({},card));
}
}