import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppState } from './app.reducer';
import { AppStore } from './app.store';
import { ChatExampleData } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-messages';

  constructor(
      @Inject(AppStore) private store: Store<AppState>
    ){
      ChatExampleData(store);
    }
}
