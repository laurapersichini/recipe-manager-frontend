import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { HomeComponent } from './home/home.component';
import {CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent
  },
  {
    path: 'edit-recipe',
    component: EditRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
