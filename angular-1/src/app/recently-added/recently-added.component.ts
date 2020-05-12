import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  words = [
    {en: 'apply', ru: 'Добавить'},
    {en: 'Dog', ru: 'Собака'},
    {en: 'Cat', ru: 'Кошка'}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
