import { Component } from '@angular/core';
import { fadeInOutAnimation } from './services/animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOutAnimation]
})
export class AppComponent {
  title = 'anderson-davanse';
  showFiller = true; 


  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }    
}
