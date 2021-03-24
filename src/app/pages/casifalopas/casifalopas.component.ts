import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-casifalopas',
  templateUrl: './casifalopas.component.html',
  styleUrls: ['./casifalopas.component.css']
})
export class CasifalopasComponent implements OnInit {
  casifalopas = [];
  constructor(private _sp: ProyectosService) { }

  ngOnInit(): void {
    this._sp.getProyectos('CasiFalopas').subscribe( (proyectos: any) =>{
      this.casifalopas = proyectos.proyectos;
    });
  }

}
