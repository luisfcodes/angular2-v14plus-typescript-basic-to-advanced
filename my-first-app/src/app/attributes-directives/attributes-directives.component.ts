import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss']
})
export class AttributesDirectivesComponent implements OnInit {

  public value = true
  public height = "20px"

  public name = ''
  public list: Array<{name: string}> = []

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.value){
        this.value = !this.value
      }

      if(this.height === '20px'){
        this.height = '21px'
      } else {
        this.height = '20px'
      }
    }, 2000)
  }

  public add(){
    this.list.push({name: this.name})
    this.name = ''
  }

}
