import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetest',
  templateUrl: './directivetest.component.html',
  styleUrls: ['./directivetest.component.css']
})
export class DirectivetestComponent implements OnInit {

  students = [
    {name: 'Michey',email: 'michey@uva.edu', major: 'cs', year: 'second'},
    {name: 'Minney',email: 'minney@uva.edu', major: 'cs', year: 'third'},
    {name: 'dug',email: 'duh@uva.edu', major: 'swe', year: 'third'},
    {name: 'huh',email: 'huh@uva.edu', major: 'swe', year: 'second'}
  ]

  // friendname: string
  // friend: Friend


  constructor() {
    // this.friend = 'Jenny'
    // this.friend = new Friend('BOB', 'bob@mail.com',20)
  }

  ngOnInit(): void {
  }

}
