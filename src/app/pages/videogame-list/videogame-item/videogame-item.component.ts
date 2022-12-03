import { Component, Input } from '@angular/core';

import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-item',
  templateUrl: './videogame-item.component.html',
  styleUrls: ['./videogame-item.component.css']
})

export class VideogameItemComponent {
  @Input() videogame?: Videogame;

  constructor(){}

  getColor(): string {
    return this.videogame?.alreadyFinished? "#4aba91" : "";
  }

  changeAlreadyFinished(): void {
    if (this.videogame)
      this.videogame.alreadyFinished = !this.videogame?.alreadyFinished;
  }
}