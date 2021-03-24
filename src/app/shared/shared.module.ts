import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages.routes';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
