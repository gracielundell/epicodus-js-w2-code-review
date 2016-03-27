System.register(['angular2/core', './meal.component', './new-meal.component', './calories.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_component_1, new_meal_component_1, calories_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (calories_pipe_1_1) {
                calories_pipe_1 = calories_pipe_1_1;
            }],
        execute: function() {
            // child component
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterDone = "notDone";
                    // instantiate the Event Emitter object in the child component constructor. holds the EventEmitter object for output
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealListComponent.prototype.mealClicked = function (clickedMeal) {
                    // wraps all this info up to be sent into the html selector now that it has been selected
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                MealListComponent.prototype.createMeal = function (newMeal) {
                    // new meal of the Meal type
                    // push new meal into meal-list array, keep track of its index number(assign it to this meal)
                    this.mealList.push(newMeal);
                    // push new instance of Meal this instance of a meal)
                };
                MealListComponent.prototype.onChange = function (filterOption) {
                    this.filterDone = filterOption;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        outputs: ['onMealSelect'],
                        pipes: [calories_pipe_1.CaloriesPipe],
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent],
                        template: "\n  <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n    <option value=\"all\" selected=\"selected\">Show All</option>\n    <option value=\"lessThan300\">Show Healthy Meals</option>\n    <option value=\"moreThan300\">Show Unhealthy Meals</option>\n  </select>\n  <div class=\"meal-list\">\n    <meal-display *ngFor=\"#currentMeal of mealList | calories:filterDone\"\n      (click)=\"mealClicked(currentMeal)\"\n      [class.selected]=\"currentMeal === selectedMeal\"\n      [meal]=\"currentMeal\" [isSelected]=\"currentMeal === selectedMeal\">\n    </meal-display>\n  </div>\n\n  <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map