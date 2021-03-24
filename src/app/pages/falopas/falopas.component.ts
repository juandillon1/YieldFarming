import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-falopas',
  templateUrl: './falopas.component.html',
  styleUrls: ['./falopas.component.css']
})
export class FalopasComponent implements OnInit {
  falopas = [];
  constructor(private _sp: ProyectosService) { }

  ngOnInit(): void {
    this._sp.getProyectos('Falopas').subscribe( (proyectos: any) =>{
      this.falopas = proyectos.proyectos;
    });
  }

}
