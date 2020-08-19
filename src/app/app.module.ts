import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListHomeComponent } from './list-home/list-home.component';

import { IceCreamCreateComponent } from './ice-cream/ice-cream-create/ice-cream-create.component';
import { IceCreamReadComponent } from './ice-cream/ice-cream-read/ice-cream-read.component';
import { IceCreamDisplayComponent } from './ice-cream/ice-cream-display/ice-cream-display.component';
import { iceCreamReducer } from './reducers/ice-cream-reducer';

import { MuscleCarDisplayComponent } from './muscle-cars/muscle-car-display/muscle-car-display.component';
import { MuscleCarCreateComponent } from './muscle-cars/muscle-car-create/muscle-car-create.component';
import { MuscleCarReadComponent } from './muscle-cars/muscle-car-read/muscle-car-read.component';
import { muscleCarReducer } from './reducers/muscle-car-reducer';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamCreateComponent,
    IceCreamReadComponent,
    IceCreamDisplayComponent,
    ListHomeComponent,
    MuscleCarDisplayComponent,
    MuscleCarCreateComponent,
    MuscleCarReadComponent
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
