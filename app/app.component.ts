import { Component, EventEmitter } from 'angular2/core';
// add EventEmitter bc it acts like a bridge btwn components to allow them to communicate with each other. They're objects which allow components to interact with each other and the user.
import { MealListComponent } from './meal-list.component';
// allows for communication btwn this file and the child component (which now resides in meal-list.component)
import { Meal } from './meal.model';
// allows for communication into the definition of Task

// parent component (root component)
@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  // this loops through and prints tasks to page inside html selector ^
  template: `
  <div>
    <div class="header">
      <h1>You Are What You Eat</h1>
      <h4>A Personsal Meal Tracker</h4>
    </div>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];  // Meal[] (or Array<Meal>) identifies meals as an array of Meal objects
  constructor(){
    this.meals = [
      new Meal("smoothie", "yum, lots of fruit", 200),
      new Meal("fries", "no regrets", 400),
      new Meal("Quinoa and Peas", "yes, peas", 300)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
