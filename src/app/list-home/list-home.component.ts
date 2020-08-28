import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from '../models/user';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {
  private user: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.user = this.store.pipe(select('user'));
  }

  ngOnInit() { }
}
