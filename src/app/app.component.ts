import { Component } from '@angular/core';
import { slideAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideAnimation]
})
export class AppComponent {
  title = 'Simon Wilde';

  prepareOutlet(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
