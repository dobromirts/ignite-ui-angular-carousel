import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule, HammerModule  } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
	IgxCarouselModule
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    HammerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
