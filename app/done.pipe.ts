import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "done",
  pure: false
})
// DonePipe must be able to communicate and get info from PipeTransform interface (from angular)
export class DonePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredDoneState = args[0];
    // boolean if/else loop that filters meals
    if(desiredDoneState === "done") {
      return input.filter((meal) => {
        return meal.done;
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((meal) => {
        return !meal.done;
      });
    } else {
      return input;
    }
  }
}
