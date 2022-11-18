import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public name = 'Luis Fernando'
  public isDisabled = true

  public position = { x: 0, y: 0 }

  constructor() { }

  ngOnInit(): void {
  }

  alertInfo(event: MouseEvent) {
    console.log(event)
  }

  mouseMoveTest(event: MouseEvent) {
    this.position.x = event.offsetX
    this.position.y = event.offsetY
  }

}
