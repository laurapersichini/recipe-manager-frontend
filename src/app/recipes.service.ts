import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    let url ="http://localhost:3000/recipes"
    return this.http.get(url);
  }

  postRecipe(data: any) {
    let url ="http://localhost:3000/recipe"
    return this.http.post(url, data);
  }
  deleteRecipe(id: string) {
    let url ="http://localhost:3000/recipe/"
    return this.http.delete(url + id);
  }
}
