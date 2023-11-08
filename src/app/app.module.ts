import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSignalSetterGetterComponent } from './components/simple-signal-setter-getter/simple-signal-setter-getter.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { PersonViewerComponent } from './components/person-viewer/person-viewer.component';
import { RandomNumberGeneratorComponent } from './components/random-number-generator/random-number-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSignalSetterGetterComponent,
    EshopComponent,
    PersonViewerComponent,
    RandomNumberGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
