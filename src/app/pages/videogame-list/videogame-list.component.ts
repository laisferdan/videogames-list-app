import { VideogameService } from 'src/app/services/videogame.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import Videogame from 'src/app/models/Videogame';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent implements OnInit, OnChanges {

  videogameList: Videogame[] = [];

  constructor(private videogameService: VideogameService) {}

  ngOnInit(): void {
    this.videogameList = this.videogameService.getVideogames();
    console.log("Videogame List was born!");
  }

  ngOnChanges():void {
    console.log("Videogame List has changed!");
  }
 }
