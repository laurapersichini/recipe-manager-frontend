import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../data/recipedata'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [
    {
      'name': "Pasta",
      'difficulty': "easy",
      'time_required': 45,
      'steps_list': ["go to kitchen", "eat foods"],
      'description': "easy weeknight recipe",
      'ingredients_list': ["cheese", "pasta sauce", "onions"],
      'image': "src/assets/Screen Shot 2022-01-30 at 10.36.09 AM.png"
    },
    {
      'name': "Chicken Stew",
      'difficulty': "hard",
      'time_required': 45,
      'steps_list': ["go to kitchen", "eat foods"],
      'description': "easy weeknight recipe",
      'ingredients_list': ["cheese", "pasta sauce", "onions"],
      'image': "src/assets/Screen Shot 2022-01-30 at 10.36.09 AM.png"
    }
  ]

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  goToCreateRecipe() {
    this.router.navigate(['/create-recipe'])
  }

  goToEditRecipe() {
    this.router.navigate(['edit-recipe'])
  }

  onDelete() {
    console.
    log("deleted click")
    console.log(this.recipes)
  }
}
