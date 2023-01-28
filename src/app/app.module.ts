import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View3Component } from './view3/view3.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { IgxNavbarModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    View3Component,
    View2Component,
    View1Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
