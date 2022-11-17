import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Olá Mundo" *ngIf="destroy"></app-title>
    <div>
      <button (click)="destroyComponent()">Destruir evento</button>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  public destroy = true

  constructor() {}

  public destroyComponent(){
    this.destroy = false
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

}