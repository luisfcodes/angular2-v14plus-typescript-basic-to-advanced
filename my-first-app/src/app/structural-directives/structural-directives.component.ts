import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  public condition = true
  public conditionClick = true

  public list = [
    { name: 'Luis Fernando' },
    { name: 'Amanda Soares' },
    { name: 'Felipe Morim' },
  ]

  public name = 'Luis'

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    },2000)
  }

  public onClick(){
    this.conditionClick = !this.conditionClick
  }

  public onClickAddList(){
    this.list.push({
      name: 'Isabela Souza'
    })
  }

  public onClickEventList(index: number){
    this.list.splice(index, 1)
  }
}
