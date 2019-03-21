import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingsComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DepartmentOverviewComponent } from "./department-overview/department-overview.component";

@NgModule({
  declarations: [AppComponent, RoutingsComponents, DepartmentOverviewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
