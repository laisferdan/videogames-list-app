import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { VideogameItemComponent } from './videogame-list/videogame-item/videogame-item.component';
import { VideogameCreateComponent } from './videogame-create/videogame-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    VideogameListComponent,
    VideogameItemComponent,
    VideogameCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    VideogameListComponent,
    VideogameItemComponent
  ]
})
export class PagesModule { }