import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss']
})
export class AttributesDirectivesComponent implements OnInit {

  public value = true

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.value){
        this.value = !this.value
      }
    }, 2000)
  }

}
