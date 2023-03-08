import { Component, Injectable } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Injectable()
export class CarouselHammerConfig extends HammerGestureConfig {
  public hammer = new Hammer(
    document.getElementById('gesture-element') as HTMLElement | SVGElement,
    { inputClass: Hammer.TouchMouseInput }
  );

  public override overrides = {
    swipe: { enable: true, direction: Hammer.DIRECTION_HORIZONTAL },
    pan: { enable: true, direction: Hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@Component({
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CarouselHammerConfig
    }
  ],
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
