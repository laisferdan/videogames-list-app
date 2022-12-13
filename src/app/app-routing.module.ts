import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideogameListComponent } from './pages/videogame-list/videogame-list.component';
import { VideogameCreateComponent } from './pages/videogame-create/videogame-create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "list", component: VideogameListComponent },
  { path: "create", component: VideogameCreateComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
