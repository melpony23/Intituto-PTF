import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  myForm: FormGroup;
  
  nombre: string = '';
  correo: string = '';
  apellido: string = '';
  contrasena: string ='';

  usuario: Usuario [] = [];

  @Input()usuarioo:Usuario

  constructor(private usuarioService: UsuariosService, public fb: FormBuilder) {

    this.createForm();
      
    }
    createForm(){

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(4)],[Validators.pattern('[A-Za-z][0-9][A-Za-z0-9]')]],
    });
  }
     

  ngOnInit(): void {
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }
 
    agregar(nombre: string, apellido: string, correo: string, contrasena: string){
    this.usuarioService.agregarUsuario({nombre,apellido,correo,contrasena} as Usuario).subscribe(usuario => {
      this.usuario.push(usuario)
  });
}
  editar(nombre: string, apellido: string, correo: string, contrasena: string){
    this.usuarioService.actualizarUsuario({nombre, apellido,correo, contrasena} as Usuario).subscribe(usuario => { 
      this.usuario.toString()
    alert("Este usuario ha sido actualizado")
  });

}
}


