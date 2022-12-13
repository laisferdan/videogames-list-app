import { Component, Input } from '@angular/core';

import { VideogameService } from 'src/app/services/videogame.service';
import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-item',
  templateUrl: './videogame-item.component.html',
  styleUrls: ['./videogame-item.component.css']
})

export class VideogameItemComponent {
  @Input() videogame?: Videogame;

  constructor(private videogameService: VideogameService){}

  getColor(): string {
    return this.videogame?.alreadyFinished? "#4aba91" : "";
  }

  deleteItem() {
    if (this.videogame) this.videogameService.deleteVideogame(this.videogame.id);
  }
  changeAlreadyFinished(): void {
    if (this.videogame)
      this.videogame.alreadyFinished = !this.videogame?.alreadyFinished;
  }
}