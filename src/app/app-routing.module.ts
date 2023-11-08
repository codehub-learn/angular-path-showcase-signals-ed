import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SimpleSignalSetterGetterComponent
} from "./components/simple-signal-setter-getter/simple-signal-setter-getter.component";
import {EshopComponent} from "./components/eshop/eshop.component";
import {PersonViewerComponent} from "./components/person-viewer/person-viewer.component";
import {RandomNumberGeneratorComponent} from "./components/random-number-generator/random-number-generator.component";

const routes: Routes = [
  {path: "", redirectTo: "simple-signal-setter-getter", pathMatch: "full"},
  {path: "simple-signal-setter-getter", component: SimpleSignalSetterGetterComponent},
  {path: "eshop", component: EshopComponent},
  {path: "person-viewer", component: PersonViewerComponent},
  {path: "random-number-generator", component: RandomNumberGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
