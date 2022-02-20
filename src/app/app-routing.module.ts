import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { GreetComponent } from './mycomponents/greet/greet.component';

import { MyFormComponent } from './mycomponents/my-form/my-form.component';
import { DirectivetestComponent } from './mycomponents/directivetest/directivetest.component';
import { FriendComponent } from './mycomponents/friend/friend.component';
import { CoffeeShopComponent } from './mycomponents/coffee-shop/coffee-shop.component';

const routes: Routes = [
  {path: 'Data-Binding-Page', component: GreetComponent},
  {path:'Form-Validators-Page',component: MyFormComponent},
  {path:'DirectiveTest-Page',component: DirectivetestComponent},
  {path: 'Data-model',component:FriendComponent},
  {path: 'Coffee-Shop' ,component: CoffeeShopComponent}
]


@NgModule({
  imports: [CommonModule , RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
