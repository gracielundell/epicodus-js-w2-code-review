import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import {DonePipe} from './done.pipe';

// child component
@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [DonePipe],
  directives: [MealComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="done">Show Empty(Done)</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>

  <meal-display *ngFor="#currentMeal of mealList | done:filterDone"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal" [isSelected]="currentMeal === selectedMeal">
  </meal-display>

  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
  // done:filterDone:selectedMeal refers to the done.pipe, calls its functionality
  // templateUrl: 'app/meal-list.component.html'
  // add .selected class to meal coming from parent that is simultaneously the selected and current meal
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string = "notDone";
  constructor() {
    // instantiate the Event Emitter object in the child component constructor. holds the EventEmitter object for output
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    // wraps all this info up to be sent into the html selector now that it has been selected
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    // new meal of the Meal type
    // push new meal into meal-list array, keep track of its index number(assign it to this meal)
    this.mealList.push(newMeal);
    // push new instance of Meal this instance of a meal)
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
