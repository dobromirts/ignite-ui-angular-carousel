import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slides = [
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/svg/carousel/SignUp.svg'
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/svg/carousel/Route.svg'
    }
];
}
