import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Focus';

  constructor() {
    console.log(Intl.DateTimeFormat().resolvedOptions().locale)
  }
}
