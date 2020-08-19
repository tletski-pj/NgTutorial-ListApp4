import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHomeComponent } from './list-home/list-home.component';
import { IceCreamDisplayComponent } from './ice-cream/ice-cream-display/ice-cream-display.component';
import { MuscleCarDisplayComponent } from './muscle-cars/muscle-car-display/muscle-car-display.component';

const routes: Routes = [
  {path: '', component: ListHomeComponent},
  {path: 'home', component: ListHomeComponent},
  {path: 'icecream', component: IceCreamDisplayComponent},
  {path: 'musclecar', component: MuscleCarDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
