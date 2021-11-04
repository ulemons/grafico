import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
