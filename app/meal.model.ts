// model's class definition, put it in its own file so we can link it to all files so they all know what "Meal" means
export class Meal {
  public done: boolean = false;
  constructor(public food: string, public notes: string, public calories: number) {

  }
}
