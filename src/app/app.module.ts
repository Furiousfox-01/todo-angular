import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListItemsComponent } from './list-items/list-items.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ListItemsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatCheckboxModule,MatIconModule,MatButtonModule,MatInputModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
