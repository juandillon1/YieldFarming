import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { SegurasComponent } from './seguras/seguras.component';
import { FalopasComponent } from './falopas/falopas.component';
import { CasifalopasComponent } from './casifalopas/casifalopas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CrearProyectosComponent } from './crear-proyectos/crear-proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsinfoComponent } from './cardsinfo/cardsinfo.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    SegurasComponent,
    FalopasComponent,
    CasifalopasComponent,
    AyudaComponent,
    CrearProyectosComponent,
    CardsinfoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InicioComponent
  ]
})
export class PagesModule { }
