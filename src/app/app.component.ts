import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day';
  counter: number=0;
  myMethod(){
    this.counter++;
    return this.counter;
  }
}
