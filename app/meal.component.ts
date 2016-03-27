import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

// grandchild of parent; child of child
@Component({
  selector: 'meal-display',
  inputs: ['meal', 'isSelected'],
  directives: [EditMealDetailsComponent],
  // toggles which list is shown, done or not done but both technically present
  template: `
  <div class="animateSelected">
  <label> Meal: {{ meal.food }} </label>
  <meal-details
    *ngIf="isSelected"> <br>
    Notes: {{ meal.notes }} <br>
    Calories: {{ meal.calories }} <br><br>
    <button (click)="editMeal(meal)" type="button">Edit Meal</button>
  </meal-details>

  <edit-meal-details
    *ngIf="mealToEdit" (onSubmitMealEdit)="submitEdit($event)" [meal]="meal">
  </edit-meal-details>
</div>
  `
})

export class MealComponent {
  public meal: Meal;
  public mealToEdit: Meal;
  public mealDetails: Meal[];
  public isSelected: boolean;
  editMeal(meal: Meal) {
    this.mealToEdit = meal;
  }
  submitEdit(boolean) {
    this.mealToEdit = this.meal;
  }
  // sets state of bool to show which is toggled
  toggleDone(setState: boolean){
    this.meal.done = setState;
  }
}
