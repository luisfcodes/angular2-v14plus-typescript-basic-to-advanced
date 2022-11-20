import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  public condition = true
  public conditionClick = true

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    },2000)
  }

  public onClick(){
    this.conditionClick = !this.conditionClick
  }
}
