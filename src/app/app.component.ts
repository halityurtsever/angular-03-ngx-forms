import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-forms';
  disabled = false;
  startDate = new Date('8 Jul, 1984');
  endDate = new Date('8 Jul, 1984');

  constructor() {}
}
