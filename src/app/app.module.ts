import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateRecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
