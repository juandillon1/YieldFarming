import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-seguras',
  templateUrl: './seguras.component.html',
  styleUrls: ['./seguras.component.css']
})
export class SegurasComponent implements OnInit {
  seguras = [];

  constructor( private _sp: ProyectosService ) { }

  ngOnInit(): void {
    this._sp.getProyectos('Seguras').subscribe( (proyectos: any) =>{
      this.seguras = proyectos.proyectos;
    });
  }

}
