import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = []
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe(
      { 
        next: res => this.foodList = res,
        error: error => error
      }
    )

    this.foodListService.emitEvent.subscribe(res => this.foodList = res)
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDeleteItem(id).subscribe(
      {
        next: () => {
          this.foodList = this.foodList.filter(item => item.id !== id)
        },
        error: error => error
      }
    )
  }

  public foodListEdit(item: string, id: number){
    return this.foodListService.foodListEditItem(item, id).subscribe({
      next: () => {
        
      },
      error: error => error
    })
  }

}
