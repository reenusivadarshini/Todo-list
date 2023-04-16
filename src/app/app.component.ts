import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_list';
  constructor()
  {
    setTimeout(()=>{
      this.title="New Title";
    },3000);
  }
}
