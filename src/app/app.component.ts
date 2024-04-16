import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
  done:boolean = false;
  not:boolean = true;
  color: ThemePalette = 'accent';
  addbar:boolean=false;
  addBar(){
    this.addbar = !this.addbar;
  }
}

