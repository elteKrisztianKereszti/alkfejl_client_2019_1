import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchWord: string = "alma";
  title = 'issue-tracker-client';
  theNumber: number = 0;
  increment() {
    this.theNumber++;
  }
}
