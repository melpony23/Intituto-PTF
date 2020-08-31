import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  nombre: string = '';
  correo: string = '';
  apellido: string = '';
  contrasena: string ='';
  
  usuario: Usuario [] = [];
  @Input()usuarioo: Usuario

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  editar(nombre: string, apellido: string, correo: string, contrasena: string){
    this.usuarioService.actualizarUsuario({nombre, apellido,correo, contrasena} as Usuario).subscribe(usuario => { 
      this.usuario.toString()
    alert("Este usuario ha sido actualizado")
  });

}

}
