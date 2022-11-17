import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() public title = "Hello World"

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('Houve mudança.')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
