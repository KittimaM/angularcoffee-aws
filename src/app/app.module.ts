import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './mycomponents/book/book.component';
import { GreetComponent } from './mycomponents/greet/greet.component';
import { MyFormComponent } from './mycomponents/my-form/my-form.component';
import { DirectivetestComponent } from './mycomponents/directivetest/directivetest.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './mycomponents/about/about.component';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { FriendComponent } from './mycomponents/friend/friend.component';
import { CoffeeShopComponent } from './mycomponents/coffee-shop/coffee-shop.component';
import { TestComponent } from './mycomponents/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    GreetComponent,
    MyFormComponent,
    DirectivetestComponent,
    AboutComponent,
    DashboardComponent,
    FriendComponent,
    CoffeeShopComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
