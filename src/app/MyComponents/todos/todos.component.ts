import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem:any;
  todos:any;
   constructor() {  }
   ngOnInit(): void {
    this.localItem=localStorage.getItem("todos");
    console.log(this.localItem);
    if(this.localItem==null)
    {
    this.todos=[];
    }
    else
    {
      this.todos=JSON.parse(this.localItem);
    } 
   }
   deleteTodo(todo:Todo)
   {
      console.log(todo);
      const i=this.todos.indexOf(todo)
      this.todos.splice(i,1);
      localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    addTodo(todo:Todo)
    {
       console.log(todo);
       this.todos.push(todo);
       localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    toggleTodo(todo:Todo)
    {
       console.log(todo);
       const i=this.todos.indexOf(todo)
       this.todos[i].active=! this.todos[i].active;
    }
 }
