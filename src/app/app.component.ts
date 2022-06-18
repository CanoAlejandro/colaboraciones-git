import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  dataCard: any[] = [
    {
      cardTitle: "Título 1",
      description: "Descripción 1",
      buttonText: "Botón 1"
    },
    {
      cardTitle: "Título 2",
      description: "Descripción 2",
      buttonText: "Botón 2"
    },
    {
      cardTitle: "Título 3",
      description: "Descripción 3",
      buttonText: "Botón 3"
    }
  ]
}
