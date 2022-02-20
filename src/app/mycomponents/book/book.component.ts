import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private id:string
  private name:string

  constructor() {
  this.id = '62-040626-30-157',
  this.name = "student1"
}

  ngOnInit(): void {

  }
  getID():string {
    return this.id
  }

  getName():string {
    return this.name
  }

}
