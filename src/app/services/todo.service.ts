import { Injectable } from '@angular/core';



export const SERVER_URL: string = "/api";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
