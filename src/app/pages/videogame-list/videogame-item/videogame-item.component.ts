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
    return this.videogame?.currentPlaying? "#4aba91" : "";
  }

  changeCurrentPlaying(): void {
    if (this.videogame)
      this.videogame.currentPlaying = !this.videogame?.currentPlaying;
  }
}