import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SimpleSignalSetterGetterComponent
} from "./components/simple-signal-setter-getter/simple-signal-setter-getter.component";
import {EshopComponent} from "./components/eshop/eshop.component";

const routes: Routes = [
  {path: "", redirectTo: "simple-signal-setter-getter", pathMatch: "full"},
  {path: "simple-signal-setter-getter", component: SimpleSignalSetterGetterComponent},
  {path: "eshop", component: EshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
