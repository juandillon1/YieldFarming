import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  proyectosCarousel;
  constructor(private _sp: ProyectosService) { }

  ngOnInit(): void {
    this._sp.getListaMonedas();
    this._sp.obtenerProyectos().subscribe( (proyectos: any) => this.proyectosCarousel = proyectos.proyectos);
  }

}
