import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  public nameFood = ''

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public addItem(item: string){
    return this.foodListService.foodListAddItem(item).subscribe(
      {
        next: res => {
          this.nameFood = ''
          return this.foodListService.foodListAlert(res)
        },
        error: error => error
      }
    )
  }

}
