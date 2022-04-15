import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../_models/todo";

export const SERVER_URL: string = "/api";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  apiURL = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiURL).pipe();
  }

  saveNewTodo(data: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL, data);
  }

  updateTodo(todo: any) {
    todo.title = "I am going to update this";
    return this.http.put(this.apiURL + "/" + todo.id, todo);
  }

  deleteTodo(id: number): Observable<{}> {
    return this.http.delete<{}>(this.apiURL + "/" + id);
  }
}
