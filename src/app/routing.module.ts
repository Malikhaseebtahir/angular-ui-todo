import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [{ path: "", component: TodoListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
