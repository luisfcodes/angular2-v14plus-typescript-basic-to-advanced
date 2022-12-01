import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding>
    <app-structural-directives></app-structural-directives> -->
    <!-- <app-attributes-directives>
      <h1>Aulas de Diretivas Atributo</h1>
      <hr>
    </app-attributes-directives>
    <router-outlet></router-outlet> -->

    <app-new-component></app-new-component>
    <app-attributes-directives></app-attributes-directives>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

}