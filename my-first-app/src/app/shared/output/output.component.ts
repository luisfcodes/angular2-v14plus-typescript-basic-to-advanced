import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public sendData = new EventEmitter()

  public list: Array<{name: string, age: number}> = [
    { name: 'Luis Fernando', age: 25 },
    { name: 'Amanda Soares', age: 24 },
    { name: 'Leonice Fernande', age: 62 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getData(index: number){
    this.sendData.emit(this.list[index])
  }
}
