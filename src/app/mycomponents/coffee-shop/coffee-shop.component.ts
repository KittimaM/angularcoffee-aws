import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Order } from './order';


@Component({
  selector: 'app-coffee-shop',
  templateUrl: './coffee-shop.component.html',
  styleUrls: ['./coffee-shop.component.css']
})
export class CoffeeShopComponent implements OnInit {
  order: Order
  coffeeForm: FormGroup




  constructor(private fb: FormBuilder) {
    this.order = new Order("","",0,"","",false,new Date(),"")
    this.coffeeForm= this.fb.group({
      NameForm: ['',Validators.required],
      EmailForm: ['',[Validators.required,Validators.email]],
      PhoneForm: ['',Validators.required],
      TemForm: ['',Validators.required],
      TextForm: [false],
      DrinkForm: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }



  submitorder() {

    this.order.name = this.coffeeForm.value.NameForm
    this.order.email = this.coffeeForm.value.EmailForm
    this.order.phone = this.coffeeForm.value.PhoneForm
    this.order.tempPreference = this.coffeeForm.value.TemForm
    this.order.sendText = this.coffeeForm.value.TextForm
    this.order.drink = this.coffeeForm.value.DrinkForm
    this.order.date = new Date()
    this.order.message = "Confirmed your order !"








  }



}
