import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-tests';

  public sum(value1: number, value2: number){
    return value1 + value2
  }
}
