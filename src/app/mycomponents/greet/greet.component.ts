import { Component, OnInit } from '@angular/core';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor(private logger: LogService) { } //private logger: LogService

  ngOnInit(): void {
  }
name : string = "Kittima "
  title: string = "Welcome to my E-store"
  isDisabled = true
  item: string = "boba"
  searchItem: string=""
  numItems = 0

  searchItems():void{

    this.numItems = 12
    this.searchItem = this.item

  }

  greet(): void{
    this.logger.log("Testing greet method")
  }






}
