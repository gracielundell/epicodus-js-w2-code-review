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
  <edit-meal-details *ngIf="isSelected" [meal]="meal">
  </edit-meal-details>
  <label>{{ meal.name }} <br> {{ meal.brand }} <br><span [class.lowprice]="meal.price < 5" [class.highprice]="meal.price > 5"> $ {{ meal.price }} </span><br> {{ meal.alcoholContent }} % <br><br> pints left: {{ meal.pintsLeft }}</label>
  <button (click)="pintsLeft()">Pour a Pint</button>
  <button class="editmeal">hi</button>
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
