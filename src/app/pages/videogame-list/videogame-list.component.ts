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
      title: "The Legend of Zelda: Majora's Mask",
      description:"The story of Majora's Mask takes place two months after the events of Ocarina of Time. It follows Link, who on a personal quest ends up in Termina, a world parallel to Hyrule. Upon reaching Termina, Link learns that the world is endangered as the moon will fall into the world in three days.",
      avaliation: 10,
      currentPlaying: false
    },
    {
      title: "Genshin Impact",
      description:"Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks.",
      avaliation: 8,
      currentPlaying: true
    },
    {
      title: "Ragnarok",
      description:"Ragnarok Online is a massively multiplayer online role-playing game (MMORPG) created by Gravity based on the manhwa Ragnarok by Lee Myung-jin. The story of Ragnarok takes us to a place called Midgard where God, Humans, and Demons have ended a gruesome war and achieved 1000 years of fragile and forged peace.",
      avaliation: 7,
      currentPlaying: false
    },
  ];
 }
