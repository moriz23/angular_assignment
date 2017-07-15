import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDisplay = false;
  log = [];

  timeStamp() {
    this.showDisplay = !this.showDisplay;
    this.log.push(this.log.length + 1);
    console.log(this.log);
  }
}
