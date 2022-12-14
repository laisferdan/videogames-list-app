import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { VideogameDirective } from './directives/videogame.directive';

import { AlreadyFinishedPipe } from './pipes/already-finished.pipe';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { VideogameFormComponent } from './videogame-form/videogame-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlreadyFinishedPipe,
    VideogameDirective,
    ChangeBackgroundDirective,
    DialogComponent,
    VideogameFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    AlreadyFinishedPipe,
    VideogameDirective,
    ChangeBackgroundDirective,
    DialogComponent, 
    VideogameFormComponent
  ]
})
export class SharedModule { }