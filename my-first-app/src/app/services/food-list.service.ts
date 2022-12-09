import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Feijão",
    "Arroz",
    "Batata"
  ]

  constructor() { }

  getFoodList(){
    return this.list
  }

}
