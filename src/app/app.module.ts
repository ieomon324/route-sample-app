import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { CoreRoutingModule } from './core/core-routing.module';
//import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    AppComponent
  /* , CoreComponent */
    /*CrisisListComponent */
  ],
  imports: [
    BrowserModule
  /* , CoreRoutingModule *//* ,
  , CoreComponent/* ,
    AppRoutingModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
