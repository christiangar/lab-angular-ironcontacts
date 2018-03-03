import { Component, OnInit } from '@angular/core';
import { contacts } from './contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  userContacts: Object[] = [];
  ngOnInit() {
    this.userContacts = contacts;
  }
}
