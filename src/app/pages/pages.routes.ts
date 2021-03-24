import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SegurasComponent } from './seguras/seguras.component';
import { CasifalopasComponent } from './casifalopas/casifalopas.component';
import { FalopasComponent } from './falopas/falopas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CrearProyectosComponent } from './crear-proyectos/crear-proyectos.component';
import { CardsinfoComponent } from './cardsinfo/cardsinfo.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'cargar',
    component: CrearProyectosComponent
  },
  {
    path: 'seguras',
    component: SegurasComponent
  },
  {
    path: 'casifalopas',
    component: CasifalopasComponent
  },
  {
    path: 'falopas',
    component: FalopasComponent
  },
  {
    path: 'ayuda',
    component: AyudaComponent
  },
  {
    path: 'cardinfo/:token',
    component: CardsinfoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
