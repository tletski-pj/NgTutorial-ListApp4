import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { MuscleCar } from '../../models/muscle-car';
import * as MuscleCarActions from '../../actions/muscle-car-actions';

@Component({
  selector: 'app-muscle-car-display',
  templateUrl: './muscle-car-display.component.html',
  styleUrls: ['./muscle-car-display.component.scss']
})
export class MuscleCarDisplayComponent implements OnInit {
  private muscleCars: Observable<MuscleCar[]>;

  constructor(private store: Store<AppState>) {
      this.muscleCars = this.store.pipe(select('muscleCar'));
   }

  ngOnInit() { }

  onNewFlavor(newMuscleCar: MuscleCar) {
    this.store.dispatch(MuscleCarActions.AddMuscleCar({muscleCar: newMuscleCar}));
  }

  onDeleteMuscleCar(index: number) {
    this.store.dispatch(MuscleCarActions.RemoveMuscleCar({muscleCarId: index}));
  }
}
