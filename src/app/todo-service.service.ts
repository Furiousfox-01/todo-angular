import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = [
    { id: 1, title: 'Task 1', completed: false , editMode:false},
    { id: 2, title: 'Task 2', completed: true ,  editMode:false},
    { id: 3, title: 'Task 3', completed: false , editMode:false}
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo = { id: this.todos.length + 1, title, completed: false ,editMode:false};
    this.todos.push(newTodo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    console.log(this.todos);
  }


    toggleEditMode(todo: any) {
      todo.editMode = !todo.editMode;
      if (!todo.editMode) {
        todo.updatedTitle = todo.title; // Reset the updated title if edit mode is turned off
      }
    }
    
    updateTodo(id: number, updatedTitle: string) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.title = updatedTitle;
        todo.editMode = false;
      }
    }
    
  }
