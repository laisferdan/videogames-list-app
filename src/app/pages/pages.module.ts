import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { VideogameItemComponent } from './videogame-list/videogame-item/videogame-item.component';

@NgModule({
  declarations: [
    VideogameListComponent,
    VideogameItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    VideogameListComponent,
    VideogameItemComponent
  ]
})
export class PagesModule { }