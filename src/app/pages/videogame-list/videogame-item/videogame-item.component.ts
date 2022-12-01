import { Component, Input } from '@angular/core';

import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-item',
  templateUrl: './videogame-item.component.html',
  styleUrls: ['./videogame-item.component.css']
})

export class VideogameItemComponent {
  @Input() videogame: Videogame = {
    title: "No game inserted",
    description: "No description",
    avaliation: 5,
    alreadyFinished: false
  };

  constructor(){}
}