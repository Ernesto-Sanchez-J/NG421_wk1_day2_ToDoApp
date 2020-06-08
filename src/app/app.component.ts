import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;

  ngOnInit(): void {
    this.todoTitle = '';
    this .todoList = [
      {title:  'Install Angular CLI', isDone: false, created: new Date()}
    ];
  }

  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false,
      created: new Date()
    });
    
    this.todoTitle = '';
  }

    complete(todo: any): void {
      todo.isDone = !todo.isDone;
    }
}
