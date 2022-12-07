import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './header/header.component';

import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { VideogameDirective } from './directives/videogame.directive';
import { AlreadyFinishedPipe } from './pipes/already-finished.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    AlreadyFinishedPipe,
    VideogameDirective,
    ChangeBackgroundDirective
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AlreadyFinishedPipe,
    VideogameDirective,
    ChangeBackgroundDirective
  ]
})
export class SharedModule { }