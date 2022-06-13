import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Cod with cream',
      'this is a cod fish recipe with cream on top',
      '/assets/cod.jpg'
    ),
    new Recipe(
      'Cod to Braz',
      'this is a cod fish recipe with fried potato',
      '/assets/codtobraz.jpg'
    )
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }
 
}
