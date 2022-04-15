import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import "hammerjs";
import "hammer-timejs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./routing.module";

@NgModule({
  declarations: [AppComponent, TodoListComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
