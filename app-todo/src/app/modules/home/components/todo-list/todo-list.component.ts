import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: TaskList[] = JSON.parse(localStorage.getItem("List") || '[]')

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public setEmmitTaskList(item: string){
    this.taskList.push(
      {
        task: item,
        checked: false
      }
    )
  }

  public deleteItemTaskList(id: number){
    this.taskList.splice(id, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo?")
    if(confirm){
      this.taskList = []
      localStorage.setItem("List", JSON.stringify(this.taskList))
    }
  }

  public validationInput(event: string, index: number) {
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?")

      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList.length){
      this.taskList.sort((a,b) => Number(a.checked) - Number(b.checked))
      localStorage.setItem("List", JSON.stringify(this.taskList))
    }
  }

}
