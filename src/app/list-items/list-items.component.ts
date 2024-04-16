import { Component , Input,OnInit} from '@angular/core';
import { TodoService } from '../todo-service.service';

interface To{
  id:number,
  title:string,
  complete:boolean
}

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrl:'./list-items.component.scss'  
})
export class ListItemsComponent implements OnInit {
  @Input() done:boolean | undefined;
  @Input() not:boolean | undefined;
  @Input() addbar:boolean|undefined;
  todos: any;
  newTask: string="";
  updatedTitle:string="";
  constructor(private todoService: TodoService) {
  }

 ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
 
  addTodo() {
    if(this.newTask.trim() =='') return;
    this.todoService.addTodo(this.newTask);
    this.todos = this.todoService.getTodos();
    this.newTask = "";
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
    this.todos = this.todoService.getTodos();
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos();
  }
  updateTodo(id: number) {
    if (this.updatedTitle.trim() === '') return;
    this.todoService.updateTodo(id,this.updatedTitle);
    this.todos = this.todoService.getTodos();
    console.log(this.updatedTitle)
    this.updatedTitle = "";
  }
  toggleEditMode(todo: any) {
    todo.editMode = !todo.editMode;
    if (!todo.editMode) {
      todo.updatedTitle = todo.title; 
      this.updateTodo(todo.id);
    }
    console.log(this.updatedTitle);
    this.todos = this.todoService.getTodos();
    
  }
}
