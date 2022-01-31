import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../data/recipedata'
import { RecipesService } from '../recipes.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: any = []

  constructor(
    private router: Router,
    private recipe: RecipesService
    ) { 
      this.recipe.getAllRecipes().subscribe(data=>{
        console.log(data)
        this.recipes= data;
      })
    }

  ngOnInit(): void {
    
  }

  goToCreateRecipe() {
    this.router.navigate(['/create-recipe'])
  }

  goToEditRecipe() {
    this.router.navigate(['edit-recipe'])
  }

  onDelete(recipe: any) {
    this.recipe.deleteRecipe(recipe._id).subscribe(data=>{
      console.log(data)
      this.recipes=this.recipes.filter( (x: any) => x._id !== recipe._id )
    })
    console.log("deleted click")
    console.log(recipe)
  }
}
