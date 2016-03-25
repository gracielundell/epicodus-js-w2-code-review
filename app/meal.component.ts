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
  <label> Food: {{ meal.food }} <br> </label>
  <edit-meal-details *ngIf="isSelected" [meal]="meal">
  </edit-meal-details>
</div>
  `
})
export class MealComponent {
  public meal: Meal;
  public isSelected: boolean;
  // sets state of bool to show which is toggled
  toggleDone(setState: boolean){
    this.meal.done = setState;
  }
}
