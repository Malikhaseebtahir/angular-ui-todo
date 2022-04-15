import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { Todo } from "./../_models/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  newTodo: string = "";
  add: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todo) => (this.todoList = todo));
  }

  onAdd() {
    this.add = !this.add;
    if (this.newTodo === "") {
      return;
    }

    const newObj: Todo = {
      id: 0,
      title: this.newTodo,
      userId: 1,
      completed: false,
    };

    this.todoService.saveNewTodo(newObj).subscribe((response) => {
      this.todoList.unshift(response);
      this.newTodo = "";
    });
  }

  updateTodo(todo: any) {
    this.todoService.updateTodo(todo).subscribe((response) => {
      console.log(response);
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe((response) => {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    });
  }
  myswiperight() {}

  myswipeleft() {}
}
