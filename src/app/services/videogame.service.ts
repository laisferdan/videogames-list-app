import { Injectable } from '@angular/core';

import Videogame from '../models/Videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  videogameList: Videogame[] = [
    {
      id: 1,
      title: "Luigi's Mansion",
      summary:"Luigi steps out from the shadow of his brother Mario and into the gloomy shadows of a very haunted house in this, his first-ever starring role. Armed with a flashlight and a customized vacuum cleaner, Luigi must rid the mansion of Boos and ghouls--and find his missing brother to boot. As Luigi, you'll search for the keys that open the many locked doors; vacuum coins, cash, and gold bars; and explore vases, bookcases, and drawers. From the brick-walled basement to the gloomy grounds, Luigi's Mansion is packed with chills, thrills, and creepy surprises.",
      score: 7,
      releaseDate: new Date(2001, 8, 14),
      alreadyFinished: true
    },
    {
      id: 2,
      title: "The Legend of Zelda: Tears of the Kingdom",
      summary:"The sequel to The Legend of Zelda: Breath of the Wild is aiming for a spring 2023 release on Nintendo Switch. The setting for the adventure has been expanded to include the skies above Hyrule.",
      releaseDate: new Date(2023, 4, 12),
      alreadyFinished: false
    },
    {
      id: 3,
      title: "The Legend of Zelda: Ocarina of Time",
      summary:"As a young boy, Link is tricked by Ganondorf, the King of the Gerudo Thieves. The evil human uses Link to gain access to the Sacred Realm, where he places his tainted hands on Triforce and transforms the beautiful Hyrulean landscape into a barren wasteland. Link is determined to fix the problems he helped to create, so with the help of Rauru he travels through time gathering the powers of the Seven Sages",
      score: 10,
      releaseDate: new Date(1998, 10, 23),
      alreadyFinished: true
    },
    {
      id: 4,
      title: "Undertale",
      summary:"In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever. You don't have to kill anyone. Each enemy can be 'defeated' nonviolently. Dance with a slime. Pet a dog. Whisper your favorite secret to a knight. Or, ignore this choice and rain destruction upon your foes.",
      score: 9,
      releaseDate: new Date(2015, 8, 15),
      alreadyFinished: false
    },
  ];

  constructor() {
    console.log(Videogame.lastId);
  }

  getVideogames(): Videogame[] {
    return this.videogameList;
  }

  postVideogame(newVideogame: Videogame): void {
    this.videogameList.push(newVideogame);
  }

  updateVideogame(id: number, updatedVideogame: Videogame) {
    const index = this.videogameList.findIndex((videogame)=> videogame.id == id);
    this.videogameList[index] = updatedVideogame;
  }

  deleteVideogame(id: number) {
    const index = this.videogameList.findIndex((videogame)=> videogame.id == id);
    this.videogameList.splice(index, 1);
  }
}
