import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter()

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
    this.foodListAlert(item)
    return this.list.push(item)
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value)
  }

}
