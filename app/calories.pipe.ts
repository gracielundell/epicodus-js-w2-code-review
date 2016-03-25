import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
// DonePipe must be able to communicate and get info from PipeTransform interface (from angular)
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calories = args[0];
    // boolean if/else loop that filters meals
    if(calories === "lessThan300") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (calories === "moreThan300") {
      return input.filter((meal) => {
        return meal.calories > 301;
      });
    } else {
      return input;
    }
  }
}
