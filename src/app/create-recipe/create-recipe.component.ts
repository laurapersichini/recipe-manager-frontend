import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable } from  '@angular/core';
import {RecipesService} from '../recipes.service'


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
@Injectable({
  providedIn:  'root'
  })
export class CreateRecipeComponent implements OnInit {
  loginForm!: FormGroup;
  steps!: string[];
  private url = "http://localhost:3000/recipes"

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private recipe: RecipesService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [null, Validators.required],
      time_required: [null, Validators.required],
      difficulty: [null, Validators.required],
      image: [null, Validators.required],
      ingredients_list: [null, Validators.required], 
      steps_list: [null]
    });

    this.steps = [];
  }

  addStep() {
    console.log(this.loginForm.value);
    this.steps.push(this.loginForm.value.steps_list);
    this.loginForm.controls['steps_list'].reset()
  }

  submit() {
    if (!this.loginForm.valid) {
      console.log("invalid");
      return;
    }

    const formData = {...this.loginForm.value, steps_list: this.steps}

    this.recipe.postRecipe(formData).subscribe(data=>{
      console.log(data)
    })
    console.log(formData);
    this.router.navigate([''])
  }
}
