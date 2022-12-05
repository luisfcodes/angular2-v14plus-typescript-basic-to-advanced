import {Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding>
    <app-structural-directives></app-structural-directives>
    <app-attributes-directives>
      <h1>Aulas de Diretivas Atributo</h1>
      <hr>
    </app-attributes-directives>
    <router-outlet></router-outlet>
    <app-attributes-directives></app-attributes-directives> 
    <app-new-component></app-new-component> -->

    <!-- <app-input [count]="addValue"></app-input>
    <button (click)="countAdd()">+1</button> -->

    <app-output (sendData)="setData($event)"></app-output>

    <ng-template [ngIf]="getData">
      <h1>{{ getData.name }}</h1>
      <h2>{{ getData.age }}</h2>
    </ng-template>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue = 10
  public getData: {name: string, age: number} | undefined

  constructor() {}

  ngOnInit(): void {
    
  }

  public countAdd(){
    this.addValue += 1
  }

  public setData(event: {name: string, age: number}){
    this.getData = event
  }

}