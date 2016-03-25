System.register(['angular2/core', './edit-meal-details.component'], function(exports_1, context_1) {
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
    var core_1, edit_meal_details_component_1;
    var MealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            }],
        execute: function() {
            // grandchild of parent; child of child
            MealComponent = (function () {
                function MealComponent() {
                }
                // sets state of bool to show which is toggled
                MealComponent.prototype.toggleDone = function (setState) {
                    this.meal.done = setState;
                };
                MealComponent.prototype.pintsLeft = function () {
                    this.meal.pintsLeft = this.meal.pintsLeft - 1;
                };
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        inputs: ['meal', 'isSelected'],
                        directives: [edit_meal_details_component_1.EditMealDetailsComponent],
                        // toggles which list is shown, done or not done but both technically present
                        template: "\n  <div class=\"animateSelected\">\n  <edit-meal-details *ngIf=\"isSelected\" [meal]=\"meal\">\n  </edit-meal-details>\n  <label>{{ meal.name }} <br> {{ meal.brand }} <br><span [class.lowprice]=\"meal.price < 5\" [class.highprice]=\"meal.price > 5\"> $ {{ meal.price }} </span><br> {{ meal.alcoholContent }} % <br><br> pints left: {{ meal.pintsLeft }}</label>\n  <button (click)=\"pintsLeft()\">Pour a Pint</button>\n  <button class=\"editmeal\">hi</button>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealComponent);
                return MealComponent;
            }());
            exports_1("MealComponent", MealComponent);
        }
    }
});
//# sourceMappingURL=meal.component.js.map