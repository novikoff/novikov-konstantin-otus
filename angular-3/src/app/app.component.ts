import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Learn';
  links = [
    { title: 'RecentlyAdded', to: 'recentlyadded' },
    { title: 'Go', to: 'go' },
    { title: 'Settings', to: 'settings' }
  ];
  active;

}
