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

  public getFoodList(){
    return this.list
  }

  public foodListAddItem(item: string){
    return this.list.push(item)
  }

}
