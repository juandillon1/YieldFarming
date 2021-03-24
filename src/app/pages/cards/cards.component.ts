import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  token: string;
  infoToken: any[] = [];
  proyectoInfo;
  irainfo = false;
  proyectosMostrar = false;
  @Input() segurasInput;
  constructor( private _ps: ProyectosService, private router: Router ) { }

  ngOnInit(): void {
  }
  infoCards(proyectoinfo) {
    this.proyectoInfo = proyectoinfo;
    let monedas = localStorage.getItem('monedas');
    let tokenAux = '';
    if (localStorage.getItem('tokens') == null) {
      localStorage.setItem('tokens', "''")
    }
    for (let token of proyectoinfo.token) {
      let tokenStorage = localStorage.getItem('tokens').split(',');
      if ( tokenStorage.find( element => monedas.includes(element) ) && !monedas.includes(null) ){
        continue;
      } else{
        this._ps.obtenerPrecioMoneda(token).subscribe( (infomoneda: any) => {
          this.infoToken.push(infomoneda);
        });
        localStorage.setItem('tokens', localStorage.getItem('tokens') + ',' + token);
      }
    }
    localStorage.setItem('tokens', null);
  }

  volverEvent(volver: boolean){
    if (volver){
      this.proyectosMostrar = true;
    } else{
      this.infoToken = [];
      this.proyectosMostrar = false;
    }
  }


}
