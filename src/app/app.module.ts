import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListHomeComponent } from './list-home/list-home.component';

import { iceCreamReducer } from './reducers/ice-cream-reducer';
import { muscleCarReducer } from './reducers/muscle-car-reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      iceCream: iceCreamReducer,
      muscleCar: muscleCarReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
