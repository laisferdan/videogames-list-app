import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { VideogameService } from 'src/app/services/videogame.service';

import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-form',
  templateUrl: './videogame-form.component.html',
  styleUrls: ['./videogame-form.component.css'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class VideogameFormComponent {
  @Input() newVideogame: Videogame = new Videogame("New videogame");
  @Input() requestType: string = "post";
  @Input() closeDialog: () => void = () => {};

  videogameForm?: FormGroup;

  constructor(private videogameService: VideogameService, public dialogRef?: MatDialogRef<any>) {}

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

    if (this.requestType == "post") {
      this.videogameService.postVideogame(this.newVideogame);
      alert("Videogame item was created!");
    } else {
      this.videogameService.updateVideogame(this.newVideogame.id, this.newVideogame);
      alert("Videogame item was updated!");
    }

    this.dialogRef?.close();
  }
}