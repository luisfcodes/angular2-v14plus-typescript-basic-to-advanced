import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list: Array<{name: string, age: number}> = [
    { name: 'Luis Fernando', age: 25 },
    { name: 'Amanda Soares', age: 24 },
    { name: 'Leonice Fernande', age: 62 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getData(index: number){
    this.list[index]
  }
}
