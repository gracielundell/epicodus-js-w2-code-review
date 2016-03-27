import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="new-meal-form">
    <h3>Add a Meal:</h3>
    <input placeholder="Meal Description" class="col-sm-8 input-lg" #newFood>
    <input placeholder="Meal Notes" class="col-sm-8 input-lg" #newNotes>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories > <br>
    <button (click)="addMeal(newFood, newNotes, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
    constructor(){
      // create and emit new eventEmitter to be sent out into the world(other files)
      this.onSubmitNewMeal = new EventEmitter();
    }
    // takes in user input, which is seen as an html element
    addMeal(newFood: HTMLInputElement, newNotes: HTMLInputElement, newCalories: HTMLInputElement) {
      var newMeal = new Meal(newFood.value, newNotes.value, parseInt(newCalories.value));
      this.onSubmitNewMeal.emit(newMeal);
      newFood.value = "";
      newNotes.value = "";
      newCalories.value = "";
    }
}
