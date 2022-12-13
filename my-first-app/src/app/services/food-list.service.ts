import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter()

  private urlBase = "http://localhost:3000/"

  private list: Array<string> = [
    "Feijão",
    "Arroz",
    "Batata"
  ]

  constructor(private http: HttpClient) { }

  // public getFoodList(){
  //   return this.list
  // }

  //http://localhost:3000/list-food

  public getFoodList(): Observable<FoodList[]>{
    return this.http.get<FoodList[]>(`${this.urlBase}list-food`).pipe(
      res => res, 
      error => error
    )
  }

  // public foodListAddItem(item: string){
  //   this.foodListAlert(item)
  //   return this.list.push(item)
  // }

  public foodListAddItem(item: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.urlBase}list-food`, { name: item }).pipe(
      res => res,
      error => error
    )
  }

  public foodListEditItem(item: string, id: number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.urlBase}list-food/${id}`, { name: item }).pipe(
      res => res,
      error => error
    )
  }

  public foodListDeleteItem(id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.urlBase}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAlert(value: string){
  //   return this.emitEvent.emit(value)
  // }

  public foodListAlert(value: FoodList){
    return this.getFoodList().subscribe(res => this.emitEvent.emit(res))
    // return this.emitEvent.emit(value)
  }

}
