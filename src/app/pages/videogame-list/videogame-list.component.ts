import { Component } from '@angular/core';
import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent {
  videogameList: Videogame[] = [
    {
      title: "Luigi's Mansion",
      summary:"In this videogame Luigi is the main character instead of Mario, after Mario Is Missing! Players control him as he explores a haunted mansion, searches for Mario and deals with ghosts by capturing them through a vacuum cleaner supplied by Professor E. Gadd.",
      score: 7,
      releaseDate: new Date(2001, 8, 14),
      alreadyFinished: true
    },
    {
      title: "The Legend of Zelda: Tears of the Kingdom",
      summary:"The Legend of Zelda: Tears of the Kingdom is an upcoming action-adventure game developed and published by Nintendo. It is the sequel to The Legend of Zelda: Breath of the Wild (2017) and is scheduled for release on the Nintendo Switch on May 12, 2023.",
      releaseDate: new Date(2023, 4, 12),
      alreadyFinished: false
    },
    {
      title: "Undertale",
      summary:"In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever. You don't have to kill anyone. Each enemy can be 'defeated' nonviolently. Dance with a slime. Pet a dog. Whisper your favorite secret to a knight. Or, ignore this choice and rain destruction upon your foes.",
      score: 9,
      releaseDate: new Date(2015, 8, 15),
      alreadyFinished: true
    },
  ];
 }
