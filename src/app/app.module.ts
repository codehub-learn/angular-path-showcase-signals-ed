import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSignalSetterGetterComponent } from './components/simple-signal-setter-getter/simple-signal-setter-getter.component';
import { EshopComponent } from './components/eshop/eshop.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSignalSetterGetterComponent,
    EshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
