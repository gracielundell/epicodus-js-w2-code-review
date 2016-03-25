System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Meal;
    return {
        setters:[],
        execute: function() {
            // model's class definition, put it in its own file so we can link it to all files so they all know what "Meal" means
            Meal = (function () {
                function Meal(food, notes, calories) {
                    this.food = food;
                    this.notes = notes;
                    this.calories = calories;
                    this.done = false;
                }
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=meal.model.js.map