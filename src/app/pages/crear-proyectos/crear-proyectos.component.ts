import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {
  body: FormGroup;
  proyectos: [];
  constructor(private fb: FormBuilder, private _pservice: ProyectosService) { }

  ngOnInit(): void {
    // console.log(this._pservice.listaMonedas)
    this.crearFormulario();
    this._pservice.obtenerProyectos().subscribe((proyectos: any) => this.proyectos  = proyectos.proyectos);
    this.token.removeAt( 1 );
  }
  get nombreValido() {
    return this.body.get('nombre').invalid && this.body.get('nombre').touched;
  }
  get imgValido() {
    return this.body.get('img').invalid && this.body.get('img').touched;
  }
  get descripcionValido() {
    return this.body.get('descripcion').invalid && this.body.get('descripcion').touched;
  }
  get tipoValido() {
    return this.body.get('tipo').invalid && this.body.get('tipo').touched;
  }
  get urlValido() {
    return this.body.get('url').invalid && this.body.get('url').touched;
  }
  get contratoValido() {
    return this.body.get('contrato').invalid && this.body.get('contrato').touched;
  }
  get porcentajeValido() {
    return this.body.get('porcentaje').invalid && this.body.get('porcentaje').touched;
  }
  get token() {
    return this.body.get('token') as FormArray;
  }
  get contrato() {
    return this.body.get('contrato') as FormArray;
  }
  crearFormulario() {
    this.body = this.fb.group({
      img: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      token: this.fb.array(['', Validators.required]),
      descripcion: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      url: ['', [Validators.required]],
      // contrato: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    });

  }
  guardar() {
    if ( this.body.invalid ) {
      // console.log(this.forma);
      Object.values( this.body.controls).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
      console.log('invalido')
      return;
    } else{
      this._pservice.crearProyecto(this.body.value).subscribe(() => {
        Swal.fire({
          title: 'Proyecto cargado con éxito!',
          text: `Proyecto: ${this.body.value.nombre}`,
          icon: 'success'
        });
        this.actualizarListaBorrar();
      });
    }
    setTimeout(() => {
      this.body.reset();
    }, 4500);
  }
  borrarProyecto(proyecto: NgForm){
    this._pservice.borrarProyecto(proyecto.value.proyectoid).subscribe(
      (proyecto: any) => {
        Swal.fire({
          title: 'Proyecto borrado con éxito!',
          text: `Proyecto: ${proyecto.proyecto.nombre}`,
          icon: 'success'
        });
        this.actualizarListaBorrar();
      }
    );
  }
  actualizarListaBorrar(){
    this._pservice.obtenerProyectos().subscribe((proyectos: any) => this.proyectos  = proyectos.proyectos);
  }
  AgregarToken() {
    this.token.push( this.fb.control('') );
  }
  borrarToken( i: number ) {
    this.token.removeAt( i );
  }

}
