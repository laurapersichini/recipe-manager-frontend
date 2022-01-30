import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [null, Validators.required],
      time_required: [null, Validators.required],
      difficulty: [null, Validators.required],
      ingredients_list: [null, Validators.required], 
      steps_list: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      console.log("invalid");
      return;
    }
    console.log(this.loginForm!.value);
    this.router.navigate([''])
  }
}
