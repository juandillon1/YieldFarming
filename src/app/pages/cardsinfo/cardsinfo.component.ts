import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cardsinfo',
  templateUrl: './cardsinfo.component.html',
  styleUrls: ['./cardsinfo.component.css']
})
export class CardsinfoComponent implements OnInit {
  @Input() tokensinfo;
  @Input() proyectoInfo;
  @Output() proyectoexit = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  volver(){
    this.proyectoexit.emit(false);
  }

}
