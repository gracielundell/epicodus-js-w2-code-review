System.register(['angular2/core', './meal.model'], function(exports_1, context_1) {
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
    var core_1, meal_model_1;
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    // create and emit new eventEmitter to be sent out into the world
                    this.onSubmitNewMeal = new core_1.EventEmitter();
                }
                // takes in user input, which is seen as an html element
                NewMealComponent.prototype.addMeal = function (newMeal, newNotes, newCalories) {
                    var newMeal = new meal_model_1.Meal(newMeal.value, newNotes.value, parseInt(newCalories.value));
                    this.onSubmitNewMeal.emit(newMeal);
                    newMeal.value = "";
                    newNotes.value = "";
                    newCalories.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        outputs: ['onSubmitNewMeal'],
                        template: "\n  <div class=\"new-meal-form\">\n    <h3>Create Meal:</h3>\n    <input placeholder=\"Meal Description\" class=\"col-sm-8 input-lg\" #newMeal>\n    <input placeholder=\"Meal Notes\" class=\"col-sm-8 input-lg\" #newNotes>\n    <input placeholder=\"Calories\" class=\"col-sm-8 input-lg\" #newCalories >\n    <button (click)=\"addMeal(newName, newBrand, newPrice, newAlcoholContent)\" class=\"btn-success btn-lg add-button\">Add</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map