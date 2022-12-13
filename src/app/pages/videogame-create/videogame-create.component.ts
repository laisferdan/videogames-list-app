import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { VideogameService } from 'src/app/services/videogame.service';
import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-create',
  templateUrl: './videogame-create.component.html',
  styleUrls: ['./videogame-create.component.css']
})

export class VideogameCreateComponent {
  newVideogame: Videogame = new Videogame("New videogame item");

  videogameForm?: FormGroup;

  constructor(private videogameService: VideogameService) {}

  ngOnInit() {
    this.videogameForm = new FormGroup({
      title: new FormControl(this.newVideogame.title),
      summary: new FormControl(this.newVideogame.summary),
      score: new FormControl(this.newVideogame.score),
      releaseDate: new FormControl(this.newVideogame.releaseDate),
      alreadyFinished: new FormControl(this.newVideogame.alreadyFinished),
    });
  }

  onSubmitForm() {
    this.videogameForm?.patchValue({
      title: this.videogameForm?.controls['title'].value,
      summary: this.videogameForm?.controls['summary'].value,
      score: this.videogameForm?.controls['score'].value,
      releaseDate: new Date(this.videogameForm?.controls['releaseDate'].value),
      alreadyFinished: this.videogameForm?.controls['alreadyFinished'].value
    })

    this.newVideogame = {id: this.newVideogame.id, ...this.videogameForm?.value};

    this.videogameService.postVideogame(this.newVideogame);
  }
}
