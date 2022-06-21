import { Component } from '@angular/core';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  card: CardModel = new CardModel();
  dataCard: CardModel[] = [
    {
      cardTitle: "Título 1",
      description: "Descripción 1",
      button: "Boton 1",
      url: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"
    }
  ]
  addCard(card: CardModel) {
  this.dataCard.push(Object.assign({},card));
}
}



