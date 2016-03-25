import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="edit-meal-form">
    <h3>Edit Description:</h3>
    <input [(ngModel)]="meal.name" class="meal-edit input-lg"/>
    <input [(ngModel)]="meal.brand" class="meal-edit input-lg"/>
    <input [(ngModel)]="meal.price" class="meal-edit input-lg"/>
    <input [(ngModel)]="meal.alcoholContent" class="meal-edit input-lg"/>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
