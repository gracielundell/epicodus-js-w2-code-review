import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="edit-meal-form">
    <h3>Edit Description:</h3>
    <input [(ngModel)]="meal.food" class="meal-edit input-lg"/>
    <input [(ngModel)]="meal.notes" class="meal-edit input-lg"/>
    <input [(ngModel)]="meal.calories" class="meal-edit input-lg"/>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
