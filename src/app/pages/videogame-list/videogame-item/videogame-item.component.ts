import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VideogameService } from 'src/app/services/videogame.service';
import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-item',
  templateUrl: './videogame-item.component.html',
  styleUrls: ['./videogame-item.component.css']
})

export class VideogameItemComponent {
  @Input() videogame?: Videogame;

  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  constructor(private videogameService: VideogameService, private dialog: MatDialog){}

  ngOnInit() {
    console.log(`Videogame List Item com id = ${this.videogame?.id}!`);
  }

  changeAlreadyFinished(): void {
    if (this.videogame)
      this.videogame.alreadyFinished = !this.videogame?.alreadyFinished;
  }

  getColor(): string {
    return this.videogame?.alreadyFinished? "#4aba91" : "";
  }

  deleteItem() {
    if (this.videogame) this.videogameService.deleteVideogame(this.videogame.id);
  }

  openDialog() {
    if (this.dialogTemplate) {
      this.dialog.open(this.dialogTemplate, {
        data: { title: "Update Videogame" }
      });
    }
  }

  ngOnChanges(): void {
    console.log('Videogame List Item has changed!');
  }
}